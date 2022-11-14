<script>
// import {
//   SearchIcon,
//   InfoIcon,
//   MoreVerticalIcon,
// } from "@zhuowenli/vue-feather-icons";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {
  AuthGetters,
  PatientGetters,
} from "@/components/back-related/state/helpers";

import dayjs from "dayjs";
import {
  chatData,
  chatMessagesData,
} from "@/components/view-related/main-chat/data";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      // Chat Data
      conversationsArray: [],
      messagesArray: [],
      messageID: 0,
      chatData: chatData,
      chatMessagesData: chatMessagesData,
      submitted: false,
      discussionUUID: "",

      form: {
        message: "",
      },
      username: "",
      userLastName: this.getlastname(),
      userFirstName: this.getfirstname(),
      profile: require("@/assets/images/users/avatar-1.png"),
    };
  },
  components: {
    // SearchIcon,
    // InfoIcon,
    // MoreVerticalIcon,
  },
  validations: {
    form: {
      message: {
        required: helpers.withMessage("Message is required", required),
      },
    },
  },
  methods: {
    ...AuthGetters,
    ...PatientGetters,
    compareDates(date1, date2) {
      return dayjs(date1).isAfter(dayjs(date2));
    },
    // Method to retrieve the conversations
    async getConversations() {
      let url = "discussion/";

      await axios({
        method: "get",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then(async (response) => {
          this.conversationsArray = response.data.discussions[0];

          // Looping through all conversations
          for (let i = 0; i < response.data.discussions.length; i++) {
            const element = response.data.discussions[i];

            if (
              this.compareDates(
                element.updatedAt,
                this.conversationsArray.updatedAt
              )
            ) {
              this.conversationsArray = [];
              this.conversationsArray.push(element);
            }
          }
          await this.getMessages(this.conversationsArray.uuid);
        })
        .catch((error) => {
          // Sweet Alert Error about retrieving the conversations
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${this.$t("t-something-went-wrong")}.\nError: ${
              error.response.status
            }`,
          });
        });
    },
    // Method to retrieve the messages
    async getMessages(discussionUuid) {
      let url = `discussion/${discussionUuid}/messages/?page=1`;

      await axios({
        method: "get",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            for (let i = 0; i < response.data.messages.length; i++) {
              const element = response.data.messages[i];
              // Pushing the element as an array into the message array and adding the messageID in the object
              this.messagesArray.push({
                messageID: element.disc_uuid,
                messageInfo: element,
              });
            }
          }
          this.messageID++;
        })
        .catch((error) => {
          // Sweet Alert Error about retrieving the messages
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${this.$t("t-something-went-wrong")}.\nError: ${
              error.response.status
            }`,
          });
        });
    },
    // Parsing date and time
    parseDate(date) {
      return dayjs(date).format("DD/MM/YY");
    },
    // Method to scroll to the bottom of the chat
    scrollToBottom(id) {
      setTimeout(function () {
        var simpleBar = document
          .getElementById(id)
          .querySelector("#chat-conversation .simplebar-content-wrapper")
          ? document
              .getElementById(id)
              .querySelector("#chat-conversation .simplebar-content-wrapper")
          : "";

        var offsetHeight = document.getElementsByClassName(
          "chat-conversation-list"
        )[0]
          ? document
              .getElementById(id)
              .getElementsByClassName("chat-conversation-list")[0]
              .scrollHeight -
            window.innerHeight +
            600
          : 0;

        if (offsetHeight)
          simpleBar.scrollTo({
            top: offsetHeight,
            behavior: "smooth",
          });
      }, 300);
    },
    // Method to parse the hour
    parseHour(hour) {
      return dayjs(hour).format("HH:mm");
    },

    // Method to setup pre-selected chat
    setupPreSelectedChat() {
      // Setting the username to be equal to the first conversation
      this.username = this.conversationsArray.title;
      this.discussionUUID = this.conversationsArray.uuid;

      // Clearing the chatMessagesData array
      this.chatMessagesData = [];
      // Loop to push the messages into the chatMessagesData array
      for (let i = 0; i < this.messagesArray.length; i++) {
        const element = this.messagesArray[i];
        if (element.messageID === this.conversationsArray.uuid) {
          if (element.messageInfo.user.uuid == this.getuuid()) {
            this.chatMessagesData.push({
              message: element.messageInfo.cnt,
              name: `${this.getlastname().toUpperCase()} ${this.getfirstname()}`,
              time: this.parseHour(element.messageInfo.createdAt),
              align: "right",
            });
          } else {
            this.chatMessagesData.push({
              message: element.messageInfo.cnt,
              name: `${element.messageInfo.user.lastname.toUpperCase()} ${
                element.messageInfo.user.firstname
              }`,
              time: this.parseHour(element.messageInfo.createdAt),
              align: "left",
            });
          }
        }
      }

      // reversing the array
      this.chatMessagesData.reverse();
    },

    // Method to send a message
    async sendMessage() {
      let url = "messages/";

      // regex to check if the text is not empty
      let re = /\S/;
      if (!re.test(this.form.message)) {
        return;
      }

      const payload = {
        discussionUuid: this.discussionUUID,
        data: this.form.message,
      };

      await axios({
        method: "post",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
        data: payload,
      })
        .then((response) => {
          if (response.status === 201) {
            this.message = "";
            this.scrollToBottom("users-chat");
          }
        })
        .catch((error) => {
          // Sweet alert showing code error
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${this.$t("t-something-went-wrong")}.\nError: ${
              error.response.status
            }`,
          });
        });
    },

    /**
     * Char form Submit
     */
    formSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        var currentChatId = "users-chat";
        this.scrollToBottom(currentChatId);
      }
      this.submitted = false;
      this.form = {};
    },
  },
  mounted() {
    this.getConversations();
    // Executing the setupPreSelectedChat method with a 1 second delay to make sure the conversationsArray is filled
    setTimeout(() => {
      this.setupPreSelectedChat();
    }, 1500);
    var currentChatId = "users-chat";
    setTimeout(() => {
      this.scrollToBottom(currentChatId);
    }, 1600);
    document.getElementById("copyClipBoard").style.display = "none";
    var userChatElement = document.querySelectorAll(".user-chat");
    document.querySelectorAll(".chat-user-list li a").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.add("user-chat-show");
        });

        // chat user list link active
        var chatUserList = document.querySelector(".chat-user-list li.active");
        if (chatUserList) chatUserList.classList.remove("active");
        this.parentNode.classList.add("active");
      });
    });

    // user-chat-remove
    document.querySelectorAll(".user-chat-remove").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.remove("user-chat-show");
        });
      });
    });
  },
};
</script>
<template>
  <div class="card">
    <div class="card-header align-items-center d-flex">
      <h4 class="card-title mb-0 flex-grow-1">
        {{ $t("t-lstchat") }}: {{ username }}
      </h4>
      <div class="flex-shrink-0">
        <div class="dropdown card-header-dropdown">
          <a
            class="text-reset dropdown-btn"
            href="#"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="text-muted"
              ><em class="ri-settings-4-line align-middle me-1"></em>Setting
              <em class="mdi mdi-chevron-down ms-1"></em
            ></span>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="#"
              ><em class="ri-user-2-fill align-bottom text-muted me-2"></em>
              View Profile</a
            >
            <a class="dropdown-item" href="#"
              ><em
                class="ri-inbox-archive-line align-bottom text-muted me-2"
              ></em>
              Archive</a
            >
            <a class="dropdown-item" href="#"
              ><em class="ri-mic-off-line align-bottom text-muted me-2"></em>
              Muted</a
            >
            <a class="dropdown-item" href="#"
              ><em
                class="ri-delete-bin-5-line align-bottom text-muted me-2"
              ></em>
              Delete</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- end card header -->

    <div class="card-body p-0">
      <div class="position-relative" id="users-chat">
        <div
          class="chat-conversation p-3 p-lg-4"
          id="chat-conversation"
          data-simplebar
          ref="current"
          style="height: 563px"
        >
          <ul class="list-unstyled chat-conversation-list">
            <li
              v-for="data of chatMessagesData"
              :key="data.message"
              :class="{
                right: `${data.align}` === 'right',
                left: `${data.align}` !== 'right',
              }"
              class="chat-list"
            >
              <div class="conversation-list">
                <div class="chat-avatar" v-if="data.align !== 'right'">
                  <img
                    :src="
                      profile
                        ? profile
                        : require('@/assets/images/users/avatar-1.png')
                    "
                    alt=""
                  />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 ctext-content">
                        {{ data.message }}
                      </p>
                    </div>
                    <div class="dropdown align-self-start message-box-drop">
                      <a
                        class="dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <em class="ri-more-2-fill"></em>
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item reply-message" href="#"
                          ><em
                            class="ri-reply-line me-2 text-muted align-bottom"
                          ></em
                          >Reply</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-share-line me-2 text-muted align-bottom"
                          ></em
                          >Forward</a
                        >
                        <a class="dropdown-item copy-message" href="#"
                          ><em
                            class="ri-file-copy-line me-2 text-muted align-bottom"
                          ></em
                          >Copy</a
                        >
                        <a class="dropdown-item" href="#"
                          ><em
                            class="ri-bookmark-line me-2 text-muted align-bottom"
                          ></em
                          >Bookmark</a
                        >
                        <a class="dropdown-item delete-item" href="#"
                          ><em
                            class="ri-delete-bin-5-line me-2 text-muted align-bottom"
                          ></em
                          >Delete</a
                        >
                      </div>
                    </div>
                    <div class="conversation-name">
                      <small class="text-muted time">{{ data.time }}</small>
                      <span class="text-success check-message-icon"
                        ><em class="ri-check-double-line align-bottom"></em
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <!-- end chat-conversation-list -->
        </div>
        <div
          class="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show"
          id="copyClipBoard"
          role="alert"
        >
          Message copied
        </div>
      </div>

      <div class="border-top border-top-dashed">
        <div class="mt-3 text-center" style="margin-bottom: 16px">
          <router-link to="/confiance/chat">
            <a
              class="text-muted text-decoration-underline"
              data-key="t-viewmsg"
              >{{ $t("t-viewmsg") }}</a
            >
          </router-link>
        </div>
      </div>
    </div>
    <!-- end cardbody -->
  </div>
  <!-- end card -->
</template>

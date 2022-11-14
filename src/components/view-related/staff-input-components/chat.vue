<script>
import {
  SearchIcon,
  InfoIcon,
  MoreVerticalIcon,
} from "@zhuowenli/vue-feather-icons";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {
  AuthGetters,
  PatientGetters,
} from "@/components/back-related/state/helpers";

import dayjs from "dayjs";
import { chatData, chatMessagesData } from "./data";
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
    SearchIcon,
    InfoIcon,
    MoreVerticalIcon,
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
          for (let i = 0; i < response.data.discussions.length; i++) {
            const element = response.data.discussions[i];

            if (element.patient_uuid == this.getPatientUUID()) {
              this.conversationsArray.push(element);
              await this.getMessages(element.uuid);
            }
          }
        })
        .catch((error) => {
          // Sweet Alert Error about retrieving the conversations
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${this.$t("t-something-went-wrong")}./nError: ${
              error.response.status
            }`,
          });
        });
    },
    // Method to retrieve the messages
    // TODO: Check if it works
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
            text: `${this.$t("t-something-went-wrong")}./nError: ${
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
      this.username = this.conversationsArray[0].title;
      this.discussionUUID = this.conversationsArray[0].uuid;

      // Clearing the chatMessagesData array
      this.chatMessagesData = [];
      // Loop to push the messages into the chatMessagesData array
      for (let i = 0; i < this.messagesArray.length; i++) {
        const element = this.messagesArray[i];
        if (element.messageID === this.conversationsArray[0].uuid) {
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
            text: `${this.$t("t-something-went-wrong")}./nError: ${
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
        const message = this.form.message;
        const currentDate = new Date();
        this.chatMessagesData.push({
          align: "right",
          name: "Henry Wells",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
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
  <div class="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
    <!-- Start User chat -->
    <div class="user-chat w-100 overflow-hidden">
      <div class="chat-content d-lg-flex">
        <!-- start chat conversation section -->
        <div class="w-100 overflow-hidden position-relative">
          <!-- conversation user -->
          <div class="position-relative">
            <div class="p-3 user-chat-topbar">
              <div class="row align-items-center">
                <div class="col-sm-4 col-8">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 d-block d-lg-none me-3">
                      <a
                        href="javascript: void(0);"
                        class="user-chat-remove fs-18 p-1"
                        ><em class="ri-arrow-left-s-line align-bottom"></em
                      ></a>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <div class="d-flex align-items-center">
                        <div
                          class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0"
                        >
                          <img
                            :src="
                              profile
                                ? profile
                                : require('@/assets/images/users/avatar-1.png')
                            "
                            class="rounded-circle avatar-xs"
                            alt=""
                          />
                          <span class="user-status"></span>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="text-truncate mb-0 fs-16">
                            <a
                              class="text-reset username"
                              data-bs-toggle="offcanvas"
                              href="#userProfileCanvasExample"
                              aria-controls="userProfileCanvasExample"
                              >{{ username }}</a
                            >
                          </h5>
                          <p
                            class="text-truncate text-muted fs-14 mb-0 userStatus"
                          >
                            <small>Online</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8 col-4">
                  <ul class="list-inline user-chat-nav text-end mb-0">
                    <li class="list-inline-item m-0">
                      <div class="dropdown">
                        <button
                          class="btn btn-ghost-secondary btn-icon shadow-none"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <search-icon class="icon-sm"></search-icon>
                        </button>
                        <div
                          class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg"
                        >
                          <div class="p-2">
                            <div class="search-box">
                              <input
                                type="text"
                                class="form-control bg-light border-light"
                                placeholder="Search here..."
                                onkeyup="searchMessages()"
                                id="searchMessage"
                              />
                              <em class="ri-search-2-line search-icon"></em>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="list-inline-item d-none d-lg-inline-block m-0">
                      <button
                        type="button"
                        class="btn btn-ghost-secondary btn-icon shadow-none"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#userProfileCanvasExample"
                        aria-controls="userProfileCanvasExample"
                      >
                        <info-icon class="icon-sm"></info-icon>
                      </button>
                    </li>

                    <li class="list-inline-item m-0">
                      <div class="dropdown">
                        <button
                          class="btn btn-ghost-secondary btn-icon shadow-none"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <more-vertical-icon
                            class="icon-sm"
                          ></more-vertical-icon>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a
                            class="dropdown-item d-block d-lg-none user-profile-show"
                            href="#"
                            ><em
                              class="ri-user-2-fill align-bottom text-muted me-2"
                            ></em>
                            View Profile</a
                          >
                          <a class="dropdown-item" href="#"
                            ><em
                              class="ri-inbox-archive-line align-bottom text-muted me-2"
                            ></em>
                            Archive</a
                          >
                          <a class="dropdown-item" href="#"
                            ><em
                              class="ri-mic-off-line align-bottom text-muted me-2"
                            ></em>
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end chat user head -->

            <div class="position-relative" id="users-chat">
              <div
                class="chat-conversation p-3 p-lg-4"
                id="chat-conversation"
                data-simplebar
                ref="current"
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
                          <div
                            class="dropdown align-self-start message-box-drop"
                          >
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
                            <small class="text-muted time">{{
                              data.time
                            }}</small>
                            <span class="text-success check-message-icon"
                              ><em
                                class="ri-check-double-line align-bottom"
                              ></em
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

            <!-- end chat-conversation -->

            <div class="chat-input-section p-3 p-lg-4">
              <form @submit.prevent="formSubmit">
                <div class="row g-0 align-items-center">
                  <div class="col-auto">
                    <div class="chat-input-links me-2">
                      <div class="links-list-item">
                        <button
                          type="button"
                          class="btn btn-link text-decoration-none emoji-btn"
                          id="emoji-btn"
                        >
                          <em class="bx bx-smile align-middle"></em>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="chat-input-feedback">
                      Please Enter a Message
                    </div>

                    <input
                      type="text"
                      v-model="form.message"
                      class="form-control chat-input bg-light border-light"
                      placeholder="Enter Message..."
                      :class="{
                        'is-invalid': submitted && v$.form.message.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.message.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.message.required.$message">{{
                        v$.form.message.required.$message
                      }}</span>
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="chat-input-links ms-2">
                      <div class="links-list-item">
                        <button
                          type="submit"
                          class="btn btn-primary chat-send waves-effect waves-light shadow"
                          @click="sendMessage"
                        >
                          <em class="ri-send-plane-2-fill align-bottom"></em>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="replyCard">
              <div class="card mb-0">
                <div class="card-body py-3">
                  <div class="replymessage-block mb-0 d-flex align-items-start">
                    <div class="flex-grow-1">
                      <h5 class="conversation-name"></h5>
                      <p class="mb-0"></p>
                    </div>
                    <div class="flex-shrink-0">
                      <button
                        type="button"
                        id="close_toggle"
                        class="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                      >
                        <em class="bx bx-x align-middle"></em>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end chat-wrapper -->
</template>

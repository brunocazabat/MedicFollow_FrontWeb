<script>
import { SimpleBar } from "simplebar-vue3";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";

// State imports
import { AuthGetters } from "@/components/back-related/state/helpers";

export default {
  name: "notification",
  components: { SimpleBar },
  data() {
    return {
      notifications: [
        {
          id: 1,
          title: "New message",
          content: "You have 10 unread messages",
          icon: "message-square",
          color: "primary",
          time: "2 min ago",
          checked: false,
        },
        {
          id: 2,
          title: "New order received",
          content: "One new order has been received",
          icon: "shopping-bag",
          color: "success",
          time: "30 min ago",
          checked: false,
        },
        {
          id: 3,
          title: "Server limit reached!",
          content: "Database server has reached its daily capicity",
          icon: "alert-triangle",
          color: "danger",
          time: "1 hrs ago",
          checked: false,
        },
        {
          id: 4,
          title: "New user registered",
          content: "You have 10 unread messages",
          icon: "user-plus",
          color: "warning",
          time: "2 hrs ago",
          checked: false,
        },
        {
          id: 5,
          title: "New files",
          content: "You have 10 unread messages",
          icon: "file",
          color: "info",
          time: "3 hrs ago",
          checked: false,
        },
      ],

      notificationNbr: 5,
    };
  },
  methods: {
    ...AuthGetters,
    // Method to get the notifications
    async getNotifications() {
      let page = 1;
      let url = `notification/?page=${page}`;

      await axios({
        method: "get",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            this.notifications = [];
            let length = response.data.notifications;
            let today = dayjs();
            for (let i = 0; i < length.length; i++) {
              let time = today.diff(
                dayjs(response.data.notifications[i].createdAt),
                "minute"
              );
              // transforming time from a minute number to a readable string
              if (time < 60) {
                time = `${time} min ago`;
              } else if (time >= 60 && time < 1440) {
                time = `${Math.floor(time / 60)} hrs ago`;
              } else if (time >= 1440 && time < 10080) {
                time = `${Math.floor(time / 1440)} days ago`;
              } else if (time >= 10080 && time < 43800) {
                time = `${Math.floor(time / 10080)} weeks ago`;
              } else if (time >= 43800 && time < 525600) {
                time = `${Math.floor(time / 43800)} months ago`;
              } else if (time >= 525600) {
                time = `${Math.floor(time / 525600)} years ago`;
              }
              // Pushing in the notifications array
              this.notifications.push({
                uuid: response.data.notifications[i].uuid,
                title: response.data.notifications[i].NotificationType.name,
                content: response.data.notifications[i].data,
                time: time,
                checked: false,
              });
            }
            this.notificationNbr = this.notifications.length;
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${this.$t("t-something-went-wrong")}.\r\nError: ${error}`,
          });
        });
    },

    // Method to delete a notification
    async deleteNotification(notifUUID) {
      let url = `notification/${notifUUID}`;
      let res = null;

      await axios({
        method: "delete",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            res = true;
          }
        })
        .catch((error) => {
          res = error;
        });
      return res;
    },

    // Method to remove the motifications marked as read from the array
    async handleNotifications() {
      let isReadAll = true;
      for (let i = 0; i < this.notifications.length; i++) {
        if (this.notifications[i].checked) {
          isReadAll = false;
          if (await this.deleteNotification(this.notifications[i].uuid)) {
            this.notifications.splice(i, 1);
            this.notificationNbr = this.notifications.length;
          } else {
            // Sweet Alert error and aborting the loop
            await Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${this.$t("t-something-went-wrong")}`,
            });
            break;
          }
        }
      }
      if (isReadAll) {
        this.markAllAsRead();
      }
    },
    // Method to mark all the notifications as read
    markAllAsRead() {
      for (let i = 0; i < this.notifications.length; i++) {
        this.notifications[i].checked = true;
      }
      this.handleNotifications();
    },

    // Method to parse a date
    parseDate(date) {
      return dayjs(date).format("DD/MM/YY");
    },

    // Method to parse a time
    parseTime(time) {
      return dayjs(time).format("HH:mm");
    },
  },
  async mounted() {
    // To comment if you want to see with dummy data
    await this.getNotifications();
  },
};
</script>

<template>
  <div class="dropdown topbar-head-dropdown ms-1 header-item">
    <button
      type="button"
      class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
      id="page-header-notifications-dropdown"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <em class="bx bx-bell fs-22"></em>
      <span
        class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger"
        v-if="notificationNbr > 0"
      >
        {{ notificationNbr }}</span
      >
    </button>
    <div
      class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
      aria-labelledby="page-header-notifications-dropdown"
    >
      <div class="dropdown-head bg-primary bg-pattern rounded-top">
        <div class="p-3">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="m-0 fs-16 fw-semibold text-white">
                {{ $t("t-notifications") }}
              </h6>
            </div>
            <div class="col-auto dropdown-tabs">
              <span
                class="badge badge-soft-light fs-13"
                v-if="notificationNbr > 1"
              >
                {{ notificationNbr }} {{ $t("t-new-fornotif") }}</span
              >
              <span class="badge badge-soft-light fs-13" v-else>
                {{ notificationNbr }} {{ $t("t-new") }}</span
              >
            </div>
          </div>
        </div>

        <div class="px-2 pt-2">
          <ul
            class="nav nav-tabs dropdown-tabs nav-tabs-custom"
            data-dropdown-tabs="true"
            id="notificationItemsTab"
            role="tablist"
            auto-close="outside"
            @click.capture.stop
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                href="#all-noti-tab"
                role="tab"
                aria-selected="true"
              >
                {{ $t("t-all") }} ({{ this.notificationNbr }})
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content" id="notificationItemsTabContent">
        <div
          class="tab-pane fade show active py-2 ps-2"
          id="all-noti-tab"
          role="tabpanel"
        >
          <SimpleBar data-simplebar style="max-height: 300px" class="pe-2">
            <div v-if="notifications.length > 0">
              <div
                class="text-reset notification-item d-block dropdown-item position-relative"
                v-for="notification in notifications"
                :key="notification.id"
              >
                <div class="d-flex">
                  <div class="flex-1">
                    <a href="#!" class="stretched-link">
                      <h6 class="mt-0 mb-2 lh-base">
                        <strong>{{ notification.title }}</strong>
                      </h6>
                    </a>
                    <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                      <span
                        ><em class="mdi mdi-clock-outline"></em>
                        {{ notification.time }}
                      </span>
                    </p>
                  </div>
                  <div class="px-2 fs-15">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :checked="notification.checked"
                      v-on:change="notification.checked = !notification.checked"
                    />
                  </div>
                </div>
              </div>

              <div class="my-3 text-center">
                <button
                  type="button"
                  class="btn btn-soft-success"
                  v-on:click="handleNotifications"
                >
                  {{ $t("t-mark-as-read") }}
                  <em class="ri-arrow-right-line align-middle"></em>
                </button>
              </div>
            </div>

            <div v-else>
              <div class="w-25 w-sm-50 pt-3 mx-auto">
                <img
                  src="@/assets/images/svg/bell.svg"
                  class="img-fluid"
                  alt="user-pic"
                />
              </div>
              <div class="text-center pb-5 mt-2">
                <h6 class="fs-18 fw-semibold lh-base">
                  {{ $t("t-no-new-notif") }}!
                </h6>
                <p class="text-center text-muted">
                  {{ $t("t-live-notifs-here") }}.
                </p>
              </div>
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  </div>
</template>

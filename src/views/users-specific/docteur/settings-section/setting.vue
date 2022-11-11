<script>
import "@vueform/multiselect/themes/default.css";
import "flatpickr/dist/flatpickr.css";
import {
  AuthGetters,
  AuthActions,
} from "@/components/back-related/state/helpers";

import Layout from "@/components/view-related/layout/main.vue";

import particlesmodule from "@/components/view-related/login-components/particles-module.vue";

import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      value: ["javascript"],
      user: [
        {
          fullname: null,
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          role: null,
        },
      ],

      // Password state
      newPassword: "",
      oldPassword: "",
      confirmPassword: "",
    };
  },
  mounted() {
    if (this.getfullname()) {
      this.user.fullname = this.getfullname();
    }
    if (this.getfirstname()) {
      this.user.firstname = this.getfirstname();
    }
    if (this.getlastname()) {
      this.user.lastname = this.getlastname();
    }
    if (this.getemail()) {
      this.user.email = this.getemail();
    }
    if (this.getuserType()) {
      this.user.role = this.getuserType();
    }
    if (this.getphone()) {
      this.user.phone = this.getphone();
    }
  },
  components: {
    Layout,
    particlesmodule,
  },
  methods: {
    ...AuthGetters,
    ...AuthActions,
    // Method to check if the password is valid: 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    checkPassword() {
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

      if (this.newPassword === this.oldPassword) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${this.$t("t-password-not-different-old")}!`,
        });
        return false;
      } else if (this.newPassword !== this.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${this.$t("t-password-not-match")}!`,
        });
        return false;
      } else if (!re.test(this.newPassword)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${this.$t("t-password-not-valid")}.`,
        });
        return false;
      } else {
        return true;
      }
    },
    // Method to update the password if the new password is valid
    async updatePassword() {
      if (this.checkPassword() === true) {
        let url = "users/password";

        await axios({
          method: "put",
          url: url,
          data: {
            newPassword: this.newPassword,
            oldPassword: this.oldPassword,
          },
          headers: {
            token: this.gettoken().Token,
          },
        })
          .then((response) => {
            if (response.status == 200) {
              // Displaying a success message
              Swal.fire({
                title: `${this.$t("t-success")}`,
                text: `${this.$t("t-passupdatesucess")}`,
                icon: "success",
                confirmButtonText: "OK",
              });
            }
          })
          .catch((error) => {
            if (error.response.status === 462) {
              // Old password is different from the one in the database
              Swal.fire({
                title: `${this.$t("t-error")}`,
                text: `${this.$t("t-old-pass-not-match")}`,
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          });
      }
    },
    // Method to check if the email is valid
    checkEmail() {
      var re = /\S+@\S+\.\S+/;

      if (!re.test(this.user.email)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${this.$t("t-email-not-valid")}!`,
        });
        return false;
      } else {
        return true;
      }
    },
    // Method to check if the phone number is valid and does not contain letters
    checkPhone() {
      var re = /^[0-9]+$/;

      if (!re.test(this.user.phone)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${this.$t("t-phone-not-valid")}!`,
        });
        return false;
      } else {
        return true;
      }
    },
    // Method to update the user's information
    async updateUser() {
      if (this.checkEmail() === true && this.checkPhone() === true) {
        let url = "users/data";

        // Checking if the email and phone numbers are valid
        if (!this.checkEmail() || !this.checkPhone()) {
          return;
        }

        await axios({
          method: "put",
          url: url,
          data: {
            email: this.user.email,
            phone: this.user.phone,
          },
          headers: {
            token: this.gettoken().Token,
          },
        })
          .then((response) => {
            if (response.status == 200) {
              this.setEmail(this.user.email);
              this.setPhone(this.user.phone);
              // Displaying a success message
              Swal.fire({
                title: `${this.$t("t-success")}`,
                text: `${this.$t("t-updatesucess")}.`,
                icon: "success",
                confirmButtonText: "OK",
              });
            }
          })
          .catch((error) => {
            if (error.response.status === 462) {
              // Email already exists in the database
              Swal.fire({
                title: `${this.$t("t-error")}`,
                text: `${this.$t("t-error-occured")}.\nERROR CODE: ${
                  error.response.status
                }`,
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          });
      }
    },
  },
};
</script>

<template>
  <Layout>
    <div class="auth-page-wrapper pt-5 mb-5">
      <particlesmodule />
      <div class="container p-3">
        <!-- Profile picture settings -->
        <div class="row">
          <div class="col-xxl-3">
            <div class="card mt-n5 forms-background-pattern">
              <div class="card-body p-4">
                <div class="text-center">
                  <div
                    class="profile-user position-relative d-inline-block mx-auto mb-4"
                  >
                    <img
                      src="@/assets/images/users/avatar-8.jpg"
                      class="rounded-circle avatar-xl img-thumbnail user-profile-image shadow"
                      alt="user-profile-image"
                    />
                    <div
                      class="avatar-xs p-0 rounded-circle profile-photo-edit"
                    >
                      <input
                        id="profile-img-file-input"
                        type="file"
                        class="profile-img-file-input"
                      />
                      <label
                        for="profile-img-file-input"
                        class="profile-photo-edit avatar-xs"
                      >
                        <span
                          class="avatar-title rounded-circle bg-light text-body shadow"
                        >
                          <em class="ri-camera-fill"></em>
                        </span>
                      </label>
                    </div>
                  </div>
                  <h5 class="fs-16 mb-1">{{ this.user.fullname }}</h5>
                </div>
              </div>
            </div>
            <!--end card-->
          </div>

          <!-- FORM NAVIGATION -->
          <!--end col-->
          <div class="col-xxl-9">
            <div class="card mt-xxl-n5">
              <div class="card-header">
                <ul
                  class="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#personalDetails"
                      role="tab"
                    >
                      <em class="fas fa-home"></em>
                      {{ $t("t-personal-details") }}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="tab"
                      href="#changePassword"
                      role="tab"
                    >
                      <em class="far fa-user"></em>
                      {{ $t("t-change-password") }}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-bs-toggle="tab"
                      href="#privacy"
                      role="tab"
                    >
                      <em class="far fa-envelope"></em>
                      {{ $t("t-privacy-policy") }}
                    </a>
                  </li>
                </ul>
              </div>

              <!-- PERSONNAL DETAILS -->
              <div class="card-body p-4 forms-background-pattern">
                <div class="tab-content">
                  <div
                    class="tab-pane active"
                    id="personalDetails"
                    role="tabpanel"
                  >
                    <form action="javascript:void(0);">
                      <div class="row">
                        <!-- READONLY NAMES -->
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="firstnameInput" class="form-label">{{
                              $t("t-firstname")
                            }}</label>
                            <input
                              type="text"
                              class="form-control"
                              id="firstnameInput"
                              placeholder=""
                              :value="this.user.firstname"
                              disabled
                            />
                          </div>
                        </div>

                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="lastnameInput" class="form-label">{{
                              $t("t-lastname")
                            }}</label>
                            <input
                              type="text"
                              class="form-control"
                              id="lastnameInput"
                              placeholder="Enter your lastname"
                              :value="this.user.lastname"
                              disabled
                            />
                          </div>
                        </div>

                        <!-- NON READONLY INPUTS -->
                        <!--end col-->
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="phonenumberInput" class="form-label">{{
                              $t("t-phone-number")
                            }}</label>
                            <input
                              type="text"
                              class="form-control"
                              id="phonenumberInput"
                              placeholder="Enter your phone number"
                              v-model="this.user.phone"
                            />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label for="emailInput" class="form-label">{{
                              $t("t-email-address")
                            }}</label>
                            <input
                              type="email"
                              class="form-control"
                              id="emailInput"
                              placeholder="Enter your email"
                              v-model="this.user.email"
                            />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-lg-4">
                          <div class="mb-3">
                            <label for="cityInput" class="form-label">{{
                              $t("t-city")
                            }}</label>
                            <input
                              type="text"
                              class="form-control"
                              id="cityInput"
                              placeholder="City"
                              value="TBD"
                              disabled
                            />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-lg-4">
                          <div class="mb-3">
                            <label for="countryInput" class="form-label">{{
                              $t("t-country")
                            }}</label>
                            <input
                              type="text"
                              class="form-control"
                              id="countryInput"
                              placeholder="Country"
                              value="France"
                              disabled
                            />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-lg-4">
                          <div class="mb-3">
                            <label for="zipcodeInput" class="form-label">{{
                              $t("t-zip-code")
                            }}</label>
                            <input
                              type="text"
                              class="form-control"
                              minlength="5"
                              maxlength="6"
                              id="zipcodeInput"
                              placeholder="Enter zipcode"
                              value="TBD"
                              disabled
                            />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-lg-12">
                          <div class="hstack gap-2 justify-content-end">
                            <button
                              type="submit"
                              class="btn btn-primary"
                              @click="updateUser"
                            >
                              {{ $t("t-update") }}
                            </button>
                            <button type="button" class="btn btn-soft-success">
                              {{ $t("t-cancel") }}
                            </button>
                          </div>
                        </div>
                        <!--end col-->
                      </div>
                      <!--end row-->
                    </form>
                  </div>

                  <!-- CHANGE PASSWORD AND LOGIN HISTORY -->
                  <!--end tab-pane-->
                  <div class="tab-pane" id="changePassword" role="tabpanel">
                    <form action="javascript:void(0);">
                      <div class="mb-3">
                        <div class="col-lg-6 mb-3">
                          <div>
                            <label for="oldpasswordInput" class="form-label">{{
                              $t("t-old-password")
                            }}</label>
                            <input
                              type="password"
                              class="form-control"
                              id="oldpasswordInput"
                              placeholder="Enter current password"
                              v-model="oldPassword"
                              required
                            />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-lg-6 mb-3">
                          <div>
                            <label for="newpasswordInput" class="form-label">{{
                              $t("t-new-password")
                            }}</label>
                            <input
                              type="password"
                              class="form-control"
                              id="newpasswordInput"
                              placeholder="Enter new password"
                              v-model="newPassword"
                              required
                            />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-lg-6 mb-3">
                          <div>
                            <label
                              for="confirmpasswordInput"
                              class="form-label"
                              >{{ $t("t-confirm-password") }}</label
                            >
                            <input
                              type="password"
                              class="form-control"
                              id="confirmpasswordInput"
                              placeholder="Confirm password"
                              v-model="confirmPassword"
                              required
                            />
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-lg-12 mb-3">
                          <div class="mb-3">
                            <a
                              href="javascript:void(0);"
                              class="link-primary text-decoration-underline"
                              >{{ $t("t-forgot-password") }}</a
                            >
                          </div>
                        </div>
                        <!--end col-->
                        <div class="col-lg-12">
                          <div class="mb-3">
                            <button
                              type="submit"
                              class="btn btn-success"
                              @click="updatePassword"
                            >
                              {{ $t("t-change-password") }}
                            </button>
                          </div>
                        </div>
                        <!--end col-->
                      </div>
                      <!--end row-->
                    </form>
                  </div>

                  <!-- PRIVACY SETTINGS -->
                  <!--end tab-pane-->
                  <div class="tab-pane" id="privacy" role="tabpanel">
                    <div class="mb-3">
                      <h5 class="card-title text-decoration-underline mb-3">
                        {{ $t("t-application-notifications") }}
                      </h5>
                      <ul class="list-unstyled mb-0">
                        <li class="d-flex mt-0">
                          <div class="flex-grow-1">
                            <label
                              class="form-check-label fs-14"
                              for="desktopNotification"
                            >
                              {{ $t("t-show-desktop-notifications") }}
                            </label>
                            <p class="text-muted">
                              {{ $t("t-get-desktop-notifs") }}
                            </p>
                          </div>
                          <div class="flex-shrink-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="desktopNotification"
                                checked
                              />
                            </div>
                          </div>
                        </li>
                        <li class="d-flex mt-2">
                          <div class="flex-grow-1">
                            <label
                              class="form-check-label fs-14"
                              for="emailNotification"
                            >
                              {{ $t("t-show-mobile-notifications") }}
                            </label>
                            <p class="text-muted">
                              {{ $t("t-get-mobile-notifs") }}
                            </p>
                          </div>
                          <div class="flex-shrink-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="emailNotification"
                              />
                            </div>
                          </div>
                        </li>
                        <li class="d-flex mt-2">
                          <div class="flex-grow-1">
                            <label
                              class="form-check-label fs-14"
                              for="emailNotification"
                            >
                              {{ $t("t-show-email-notifications") }}
                            </label>
                            <p class="text-muted">
                              {{ $t("t-get-email-notifs") }}
                            </p>
                          </div>
                          <div class="flex-shrink-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="emailNotification"
                              />
                            </div>
                          </div>
                        </li>
                        <li class="d-flex mt-2">
                          <div class="flex-grow-1">
                            <label
                              class="form-check-label fs-14"
                              for="chatNotification"
                            >
                              {{ $t("t-show-chat-notifications") }}
                            </label>
                            <p class="text-muted">
                              {{ $t("t-get-chat-notifs") }}
                            </p>
                          </div>
                          <div class="flex-shrink-0">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="chatNotification"
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div class="col-lg-12">
                        <div class="hstack gap-2 justify-content-end">
                          <button type="submit" class="btn btn-primary">
                            {{ $t("t-update") }}
                          </button>
                          <button type="button" class="btn btn-soft-success">
                            {{ $t("t-cancel") }}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 class="card-title text-decoration-underline mb-3">
                        {{ $t("t-delete-this-account") }}
                      </h5>
                      <p class="text-muted">
                        {{ $t("t-delete-instructions") }}
                      </p>
                      <div>
                        <input
                          type="password"
                          class="form-control"
                          id="passwordInput"
                          placeholder="Enter your password"
                          value="make@321654987"
                          style="max-width: 265px"
                        />
                      </div>
                      <div class="hstack gap-2 mt-3">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-soft-danger"
                          >{{ $t("t-close-and-delete-this-account") }}</a
                        >
                        <a href="javascript:void(0);" class="btn btn-light">{{
                          $t("t-cancel")
                        }}</a>
                      </div>
                    </div>
                  </div>
                  <!--end tab-pane-->
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
    </div>
  </Layout>
</template>

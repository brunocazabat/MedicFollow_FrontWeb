<script>
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {
  translatemodule,
  logoheadermodule,
  particlesmodule,
  footermodule,
} from "@/components/view-related/login-components";
import recaptcha from "@/components/view-related/widgets/recaptchav2.vue";

import {
  notificationMethods,
  AuthActions,
  AuthGetters,
  SecurityActions,
  SecurityGetters,
} from "@/components/back-related/state/helpers";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    translatemodule,
    logoheadermodule,
    particlesmodule,
    footermodule,
    recaptcha,
  },
  data() {
    return {
      loginInput: {
        email: "",
        password: "",
      },
      name: "",
      submitted: false,
      authError: null,
      isAuthError: false,
      showPassword: false,
    };
  },
  validations: {
    loginInput: {
      password: {
        required: helpers.withMessage("A Password is required", required),
      },
    },
  },
  mounted() {
    this.setLock("locked");
    if (this.getfullname()) {
      this.name = this.getfullname();
    }
    if (this.getemail()) {
      this.loginInput.email = this.getemail();
    }
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...notificationMethods,
    ...AuthActions,
    ...AuthGetters,
    ...SecurityActions,
    ...SecurityGetters,
    Unlock() {
      this.submitted = true;
      this.v$.$touch();
      if (!this.v$.$invalid && this.getisRecaptchaEnabled()) {
        this.authError = null;
        this.setLogIn(this.loginInput).then((res) => {
          switch (res) {
            case 200:
              this.isAuthError = false;
              this.authError = null;
              this.submitted = false;
              this.setCaptchaValid(false);
              this.setLock("unlocked");
              this.$router.push(
                this.$route.query.redirectFrom || {
                  path: "/" + this.getuserType() + "/dashboard",
                }
              );
              break;
            case 462:
              this.isAuthError = true;
              this.authError = "Invalid username or password";
              break;
            case 463:
              this.isAuthError = true;
              this.authError = "User disabled";
              break;
            case 0:
              this.isAuthError = true;
              this.authError = "No internet connection";
              break;
            default:
              this.isAuthError = true;
              this.authError = "An unknown error occurred";
          }
        });
      } else {
        this.isAuthError = true;
        this.submitted = false;
        this.authError = "Please complete the captcha and all fields.";
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<template>
  <div class="auth-page-wrapper">
    <particlesmodule />
    <div class="auth-page-content">
      <div class="container">
        <logoheadermodule />
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-6">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h4 class="text-primary" data-key="t-lockscreen">
                    {{ $t("t-lockscreen") }}
                  </h4>
                  <p class="text-muted" data-key="t-unlockscreen">
                    {{ $t("t-unlockscreen") }}
                  </p>
                </div>
                <div class="user-thumb text-center">
                  <img
                    src="@/assets/images/users/avatar-1.png"
                    class="rounded-circle img-thumbnail avatar-lg shadow"
                    alt="thumbnail"
                  />
                  <h5 class="font-size-15 mt-3" data-key="t-name">
                    {{ this.name }}
                  </h5>
                </div>
                <div class="p-2 mt-4">
                  <b-alert
                    v-model="isAuthError"
                    variant="danger"
                    class="mt-3"
                    dismissible
                    >{{ authError }}</b-alert
                  >
                  <div
                    v-if="notification.message"
                    :class="'alert ' + notification.type"
                  >
                    {{ notification.message }}
                  </div>
                  <form class="needs-validation" @submit.prevent="Unlock">
                    <div class="mb-3">
                      <label
                        class="form-label"
                        for="password-input"
                        data-key="t-password"
                        >{{ $t("t-password") }}
                        <span class="text-danger">*</span></label
                      >
                      <div class="position-relative auth-pass-inputgroup mb-3">
                        <input
                          v-if="showPassword"
                          type="text"
                          v-model="loginInput.password"
                          onpaste="return false"
                          class="form-control pe-5"
                          :class="{
                            'is-invalid':
                              submitted && v$.loginInput.password.$error,
                          }"
                          data-key="t-enterpassw"
                          v-bind:placeholder="$t('t-enterpassw')"
                          id="password-input"
                        />
                        <input
                          v-else
                          type="password"
                          v-model="loginInput.password"
                          onpaste="return false"
                          class="form-control pe-5"
                          :class="{
                            'is-invalid':
                              submitted && v$.loginInput.password.$error,
                          }"
                          data-key="t-enterpassw"
                          v-bind:placeholder="$t('t-enterpassw')"
                          id="password-input"
                        />
                        <button
                          @click="toggleShow"
                          class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                          type="button"
                          style="box-shadow: none !important"
                          id="password-addon"
                        >
                          <em class="ri-eye-fill align-middle"></em>
                        </button>
                        <div
                          v-if="submitted && v$.loginInput.password.$error"
                          class="invalid-feedback"
                        >
                          <span
                            v-if="v$.loginInput.password.required.$message"
                            >{{
                              v$.loginInput.password.required.$message
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <recaptcha />
                    <div class="mb-2 mt-4">
                      <button
                        @click="Unlock"
                        class="btn btn-success w-100"
                        type="submit"
                        data-key="t-unlock"
                      >
                        {{ $t("t-unlock") }}
                      </button>
                    </div>
                    <div class="mt-4 text-center">
                      <p
                        class="mb-0 text-muted"
                        style="color: black"
                        data-key="t-notyou"
                      >
                        {{ $t("t-notyou") }}
                        <router-link
                          to="/logout"
                          class="fw-semibold text-primary text-decoration-underline"
                          data-key="t-loginpage"
                          >{{ $t("t-loginpage") }}
                        </router-link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <translatemodule />
        </div>
      </div>
    </div>
    <footermodule />
  </div>
</template>

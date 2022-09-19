<script>
import { mapActions, mapGetters } from "vuex";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import appConfig from "@/../app.config";
import { notificationMethods } from "@/components/state/helpers";
import translatemodule from "@/components/login-components/translate-module.vue";
import logoheadermodule from "@/components/login-components/logo-header-module.vue";
import particlesmodule from "@/components/login-components/particles-module.vue";
import footermodule from "@/components/login-components/footer-module.vue";
import recaptcha from "@/components/widgets/recaptchav2.vue";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  page: {
    title: "Lock Screen",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { translatemodule, logoheadermodule, particlesmodule, footermodule, recaptcha },
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
    if (this.fullnameget()) {
      this.name = this.fullnameget();
    }
    if (this.emailget()) {
      this.loginInput.email = this.emailget();
    }
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...mapActions({
      LogIn: "auth/LogIn",
      setCaptchaValid: "security/setCaptchaValid",
      setLock: "auth/setLock",
    }),
    ...mapGetters({
      isRecaptchaEnabled: "security/isRecaptchaEnabled",
      emailget: "auth/emailget",
      fullnameget: "auth/fullnameget",
    }),
    ...notificationMethods,
    Unlock() {
      this.submitted = true;
      this.v$.$touch();
      if (!this.v$.$invalid && this.isRecaptchaEnabled()) {
        this.authError = null;
        this.LogIn(this.loginInput).then(res => {
          switch (res) {
            case 200:
              this.isAuthError = false;
              this.authError = null;
              this.submitted = false;
              this.setCaptchaValid(false);
              this.$router.push(
                this.$route.query.redirectFrom || {
                  path: "/dashboard",
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
    <!-- auth page bg -->
    <particlesmodule />

    <!-- auth page content -->
    <div class="auth-page-content">
      <div class="container">
        <logoheadermodule />
        <!-- end row -->

        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-6">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h4 class="text-primary" data-key="t-lockscreen">{{ $t("t-lockscreen") }}</h4>
                  <p class="text-muted" data-key="t-unlockscreen">{{ $t("t-unlockscreen") }}
                  </p>
                </div>
                <div class="user-thumb text-center">
                  <img src="@/assets/images/users/avatar-1.png" class="rounded-circle img-thumbnail avatar-lg shadow"
                    alt="thumbnail" />
                  <h5 class="font-size-15 mt-3" data-key="t-name">{{ this.name }}</h5>
                </div>
                <div class="p-2 mt-4">
                  <b-alert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{ authError }}</b-alert>

                  <div v-if="notification.message" :class="'alert ' + notification.type">
                    {{ notification.message }}
                  </div>

                  <form class="needs-validation" @submit.prevent="Unlock">
                    <div class="mb-3">
                      <label class="form-label" for="password-input" data-key="t-password">{{ $t("t-password") }} <span
                          class="text-danger">*</span></label>
                      <div class="position-relative auth-pass-inputgroup mb-3">
                        <input v-if="showPassword" type="text" v-model="loginInput.password" onpaste="return false"
                          class="form-control pe-5" :class="{
                            'is-invalid':
                              submitted && v$.loginInput.password.$error,
                          }" data-key="t-enterpassw" v-bind:placeholder="$t('t-enterpassw')" id="password-input" />
                        <input v-else type="password" v-model="loginInput.password" onpaste="return false"
                          class="form-control pe-5" :class="{
                            'is-invalid':
                              submitted && v$.loginInput.password.$error,
                          }" data-key="t-enterpassw" v-bind:placeholder="$t('t-enterpassw')" id="password-input" />
                        <button @click="toggleShow"
                          class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                          type="button" style="box-shadow: none !important" id="password-addon">
                          <em class="ri-eye-fill align-middle"></em>
                        </button>
                        <div v-if="submitted && v$.loginInput.password.$error" class="invalid-feedback">
                          <span v-if="v$.loginInput.password.required.$message">{{
                          v$.loginInput.password.required.$message
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <recaptcha />
                    <div class="mb-2 mt-4">
                      <button @click="Unlock" class="btn btn-success w-100" type="submit" data-key="t-unlock">{{
                      $t("t-unlock")
                      }}
                      </button>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0 text-muted" style="color: black" data-key="t-notyou">{{ $t("t-notyou") }}

                        <router-link to="/logout" class="fw-semibold text-primary text-decoration-underline"
                          data-key="t-loginpage">{{ $t("t-loginpage") }}
                        </router-link>
                      </p>
                    </div>
                  </form>
                  <!-- end form -->
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
          <translatemodule />
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end auth page content -->

    <!-- footer -->
    <footermodule />
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->
</template>

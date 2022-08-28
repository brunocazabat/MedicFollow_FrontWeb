<script>
import { mapState, mapActions } from "vuex";
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import appConfig from "../../../app.config";
import { authMethods, notificationMethods } from "@/components/state/helpers";
import translatemodule from "../../components/login-components/translate-module.vue";
import logoheadermodule from "../../components/login-components/logo-header-module.vue";
import particlesmodule from "../../components/login-components/particles-module.vue";
import footermodule from "../../components/login-components/footer-module.vue";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  page: {
    title: "Login",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { translatemodule, logoheadermodule, particlesmodule, footermodule },
  data() {
    return {
      loginInput: {
        email: "",
        password: "",
      },
      submitted: false,
      authError: null,
      isAuthError: false,
      showPassword: false,
      val: null,
    };
  },
  validations: {
    loginInput: {
      email: {
        required: helpers.withMessage("An Email is required", required),
        email: helpers.withMessage("Please enter a valid email", email),
      },
      password: {
        required: helpers.withMessage("A Password is required", required),
      },
    },
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  mounted: function () {
    if (process.env.VUE_APP_DEFAULT_AUTH === "DEV") {
      this.loginInput.password = "Password13!";
      this.loginInput.email = "patient_test@test.com";
    } else {
      this.loginInput.password = "";
      this.loginInput.email = "";
    }
  },
  methods: {
    ...mapActions({
      LogIn: "auth/LogIn",
    }),
    ...authMethods,
    ...notificationMethods,
    Log() {
      this.submitted = true;
      this.v$.$touch();
      if (!this.v$.$invalid) {
        this.authError = null;
        this.LogIn(this.loginInput).then(res => {
          switch (res) {
            case 200:
              this.isAuthError = false;
              this.authError = null;
              this.submitted = false;
              this.$router.push(
                this.$route.query.redirectFrom || {
                  name: "default",
                }
              );
              break;
            case 462:
              this.authError = "Invalid username or password";
              break;
            case 463:
              this.authError = "User disabled";
              break;
            default:
              this.authError = "An unknown error occurred";
          }
        });
      }
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<template>
  <div class="auth-page-wrapper pt-5">
    <!-- auth page bg -->
    <particlesmodule />

    <!-- auth page content -->
    <div class="auth-page-content">
      <div class="container">
        <logoheadermodule />
        <!-- end row -->

        <div class="row justify-content-center g-0">
          <div class="card col-md-8 col-lg-6 col-xl-3 mt-4" style="border-radius: 0.50rem">
            <div class="sign-one-bg h-100">
              <div class="position-relative h-100 d-flex flex-column">
                <div class="mt-auto">
                  <div class="carousel slide">
                    <div class="carousel-inner text-center text-white pb-6">
                      <div class="carousel-item active">
                        <p class="fs-15 fw-bold" data-key="t-mobadd">{{ $t("t-mobadd") }}
                          <a href="https://medicfollow.fr/fr/solutions.html" target="_blank"
                            class="text-primary text-decoration-underline fst-normal fw-medium text-white"
                            rel="noreferrer noopener">Android & IOS
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- end carousel -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-6 col-xl-6">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center">
                  <p class="text-muted" data-key="t-signcont">{{ $t("t-signcont") }}</p>
                </div>
                <div class="p-2 mt-4">
                  <b-alert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{ authError }}</b-alert>

                  <div v-if="notification.message" :class="'alert ' + notification.type">
                    {{ notification.message }}
                  </div>

                  <form class="needs-validation" @submit.prevent="Log">
                    <div class="mb-3">
                      <label for="email" class="form-label" data-key="t-email">{{ $t("t-email") }} <span
                          class="text-danger">*</span></label>
                      <input type="email" class="form-control" id="email" data-key="t-entermail"
                        v-bind:placeholder="$t('t-entermail')" v-model="loginInput.email" onpaste="return false" :class="{
                          'is-invalid': submitted && v$.loginInput.email.$error,
                        }" />
                      <div v-for="(item, index) in v$.loginInput.email.$errors" :key="index" class="invalid-feedback">
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <router-link to="/forgot-password" class="text-muted" data-key="t-forgpass">{{ $t("t-forgpass")
                        }}
                        </router-link>
                      </div>
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

                    <div class="mt-4">
                      <!------------------- MODIFY METHOD TO CALL IF NO BACKEND (ForceLogIn) OR IF BACKEND (tryToLogIn) ------------------->
                      <button @click="Log" class="btn btn-success w-100" type="submit" data-key="t-signin">{{
                          $t("t-signin")
                      }}
                      </button>
                    </div>

                    <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="fs-13 mb-4 title" data-key="t-signinw">{{ $t("t-signinw") }}</h5>
                      </div>
                      <div>
                        <button type="button" class="btn btn-danger btn-icon waves-effect waves-light ms-1">
                          <em class="ri-qr-code-fill fs-16"></em>
                        </button>
                      </div>
                      <div class="mt-4 text-center">
                        <p class="mb-0 text-muted" style="color: black" data-key="t-prosign">{{ $t("t-prosign") }}

                          <router-link to="/register-mail" class="fw-semibold text-primary text-decoration-underline"
                            data-key="t-signup">{{ $t("t-signup") }}
                          </router-link>
                        </p>
                      </div>
                    </div>
                  </form>
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

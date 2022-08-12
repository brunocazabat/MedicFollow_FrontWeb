<script>
import { mapState } from "vuex";
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import appConfig from "../../../app.config";
import axios from "axios";

import { authMethods, notificationMethods } from "@/components/state/helpers";

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
  data() {
    return {
      loginInput: {
        email: "",
        password: "",
      },
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      showPassword: false,
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
    ...authMethods,
    ...notificationMethods,
    LogIn() {
      this.submitted = true;
      this.v$.$touch();
      if (!this.v$.$invalid) {
        this.authError = null;
        return axios
          .put("http://www.medicfollow.fr:8081/v1/users/", this.loginInput)
          .then((response) => {
            this.loginInput.password = "";
            this.loginInput.email = "";

            if (response.status === 200) {
              this.isAuthError = false;
              this.submitted = false;
              this.tryingToLogIn = false;
              localStorage.setItem("uuid", response.data.userUuid);
              localStorage.setItem("token", response.data.token);
              this.$router.push(
                this.$route.query.redirectFrom || {
                  name: "default",
                }
              );
            }
          })
          .catch((error) => {
            this.loginInput.password = "";
            this.loginInput.email = "";
            this.isAuthError = true;
            if (error.response.status === 462) {
              this.authError = "Invalid username or password";
            } else if (error.response.status === 463) {
              this.authError = "User disabled";
            } else {
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
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div class="bg-overlay"></div>

      <div class="shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120"
        >
          <path
            d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"
          ></path>
        </svg>
      </div>
      <Particles
        id="tsparticles"
        :options="{
          particles: {
            number: {
              value: 90,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.2,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          config_demo: {
            hide_card: false,
            background_color: '#b61924',
            background_image: '',
            background_position: '50% 50%',
            background_repeat: 'no-repeat',
            background_size: 'cover',
          },
        }"
      />
    </div>

    <!-- auth page content -->
    <div class="auth-page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mt-sm-5 mb-4 text-white-50">
              <div>
                <router-link to="/" class="d-inline-block auth-logo">
                  <img
                    src="@/assets/images/logo/logo-long.png"
                    alt=""
                    height="120"
                  />
                </router-link>
              </div>
              <p class="mt-3 fs-15 fw-medium" style="color: white">
                Votre outil de communication avec vos proches
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row justify-content-center">
          <div class="col-md-8 col-lg- col-xl-7">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center">
                  <p class="text-muted">Sign in to continue to MedicFollow.</p>
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

                  <form @submit.prevent="DevLogMethod">
                    <div class="mb-3">
                      <label for="email" class="form-label"
                        >Email <span class="text-danger">*</span></label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter email"
                        v-model="loginInput.email"
                        onpaste="return false"
                        :class="{
                          'is-invalid': submitted && v$.loginInput.email.$error,
                        }"
                      />
                      <div
                        v-for="(item, index) in v$.loginInput.email.$errors"
                        :key="index"
                        class="invalid-feedback"
                      >
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <router-link to="/forgot-password" class="text-muted"
                          >Forgot password ?
                        </router-link>
                      </div>
                      <label class="form-label" for="password-input"
                        >Password <span class="text-danger">*</span></label
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
                          placeholder="Enter password"
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
                          placeholder="Enter password"
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

                    <div class="mt-4">
                      <!------------------- MODIFY METHOD TO CALL IF NO BACKEND (ForceLogIn) OR IF BACKEND (tryToLogIn) ------------------->
                      <button
                        @click="LogIn"
                        class="btn btn-success w-100"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>

                    <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="fs-13 mb-4 title">Sign In with</h5>
                      </div>
                      <div>
                        <button
                          type="button"
                          class="btn btn-danger btn-icon waves-effect waves-light ms-1"
                        >
                          <em class="ri-qr-code-fill fs-16"></em>
                        </button>
                      </div>
                      <div class="mt-4 text-center">
                        <p class="mb-0 text-muted" style="color: black">
                          Don't have an account ?
                          <router-link
                            to="/register-mail"
                            class="fw-semibold text-primary text-decoration-underline"
                          >
                            Signup
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
          <div class="col-md-8 col-lg-6 col-xl-1">
            <div class="card mt-4">
              <div class="card-body p-4"></div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end auth page content -->

    <!-- footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <p class="mb-0 text-muted">
                &copy; {{ new Date().getFullYear() }} MedicFollow. Crafted with
                <em class="mdi mdi-heart text-danger"></em> by MedicFollow
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->
</template>

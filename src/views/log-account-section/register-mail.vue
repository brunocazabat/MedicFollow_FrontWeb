<script>
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { mapState } from "vuex";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/assets/anim/animation2.json";

import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/components/state/helpers";

import appConfig from "../../../app.config";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  page: {
    title: "Register",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: { lottie: Lottie },
  data() {
    return {
      user: {
        email: "",
      },
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
      defaultOptions: { animationData: animationData },
    };
  },
  validations: {
    user: {
      email: {
        required: helpers.withMessage("An Email is required", required),
        email: helpers.withMessage("Please enter a valid email", email),
      },
    },
  },
  computed: {
    ...mapState("authfack", ["status"]),
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    tryToRegisterIn() {
      this.submitted = true;
      this.v$.$touch();
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
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center">
                  <p class="text-muted">
                    Enter your email to get started with the Medicfollow
                    registration.
                  </p>
                  <lottie
                    class="avatar-xl"
                    colors="primary:#45CB85,secondary:#4b38b3"
                    :options="defaultOptions"
                    :height="120"
                    :width="120"
                  />
                </div>
                <div class="p-2 mt-4">
                  <form
                    class="needs-validation"
                    @submit.prevent="tryToRegisterIn"
                  >
                    <b-alert
                      v-model="registerSuccess"
                      class="mt-3"
                      variant="success"
                      dismissible
                      >Email successfully sent.</b-alert
                    >

                    <b-alert
                      v-model="isRegisterError"
                      class="mt-3"
                      variant="danger"
                      dismissible
                      >{{ regError }}
                    </b-alert>

                    <div
                      v-if="notification.message"
                      :class="'alert ' + notification.type"
                    >
                      {{ notification.message }}
                    </div>

                    <!-- Email Input row -->
                    <div class="mb-3">
                      <label for="email" class="form-label"
                        >Email <span class="text-danger">*</span></label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter email"
                        v-model="user.email"
                        onpaste="return false"
                        :class="{
                          'is-invalid': submitted && v$.user.email.$error,
                        }"
                      />
                      <div
                        v-for="(item, index) in v$.user.email.$errors"
                        :key="index"
                        class="invalid-feedback"
                      >
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="auth-remember-check"
                        required
                      />
                      <label class="form-check-label" for="auth-remember-check"
                        ><p class="mb-0 fs-12 text-muted fst-italic">
                          By registering you agree to the MedicFollow
                          <a
                            href="https://medicfollow.fr/fr/usage.html"
                            target="_blank"
                            class="text-primary text-decoration-underline fst-normal fw-medium"
                            rel="noreferrer noopener"
                            >Terms of use
                          </a>
                        </p></label
                      >
                    </div>

                    <div class="mt-4">
                      <button class="btn btn-success w-100" type="submit">
                        Start registration process
                      </button>
                      <div class="mt-4 text-center">
                        <p class="mb-0 text-muted" style="color: black">
                          Already have an account ?
                          <router-link
                            to="/login"
                            class="fw-semibold text-primary text-decoration-underline"
                          >
                            Signin
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

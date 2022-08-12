<script>
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { mapState } from "vuex";
import Popper from "vue3-popper";

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
  components: {
    Popper,
  },
  data() {
    return {
      user: {
        famillyname: "",
        name: "",
        password: "",
      },
      submitted: false,
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false,
      showPassword: false,
      hover: false,
    };
  },
  validations: {
    user: {
      familly_name: {
        required: helpers.withMessage("The familly name is required", required),
      },
      name: {
        required: helpers.withMessage("The name is required", required),
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
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    tryToRegisterIn() {
      this.submitted = true;
      this.v$.$touch();
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    mouseover: function () {
      this.hover = true;
    },
    mouseleave: function () {
      this.hover = false;
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
                    Complete your profile to get started with Medicfollow.
                  </p>
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
                      >Registration successfull.</b-alert
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

                    <!-- Familly Name Input row -->
                    <div class="mb-3">
                      <label for="famillyname" class="form-label"
                        >Familly name <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="user.famillyname"
                        onpaste="return false"
                        :class="{
                          'is-invalid': submitted && v$.user.famillyname.$error,
                        }"
                        id="famillyname"
                        placeholder="Enter familly name"
                        required
                      />
                      <div
                        v-if="submitted && v$.user.famillyname.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="v$.user.famillyname.required.$message">{{
                          v$.user.famillyname.required.$message
                        }}</span>
                      </div>
                    </div>

                    <!-- Name Input row -->
                    <div class="mb-3">
                      <label for="name" class="form-label"
                        >Name <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="user.name"
                        onpaste="return false"
                        :class="{
                          'is-invalid': submitted && v$.user.name.$error,
                        }"
                        id="name"
                        placeholder="Enter name"
                        required
                      />
                      <div
                        v-if="submitted && v$.user.name.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="v$.user.name.required.$message">{{
                          v$.user.name.required.$message
                        }}</span>
                      </div>
                    </div>

                    <!-- Password Input row -->
                    <div class="mb-3">
                      <div
                        class="float-end"
                        v-on:mouseover="mouseover"
                        v-on:mouseleave="mouseleave"
                      >
                        <Popper placement="top" :show="hover">
                          <p class="text-muted">Password information</p>
                          <template #content>
                            <div>
                              <p class="invalid fs-12 mb-2">
                                - Minimum <strong>12 characters</strong>
                              </p>
                              <p class="invalid fs-12 mb-2">
                                - At least 8 <strong>lowercase</strong> letter
                                (a-z).
                              </p>
                              <p class="invalid fs-12 mb-2">
                                - At least 2 <strong>uppercase</strong> letter
                                (A-Z).
                              </p>
                              <p class="invalid fs-12 mb-2">
                                - A least 2 <strong>number</strong> (0-9).
                              </p>
                            </div>
                          </template>
                        </Popper>
                      </div>
                      <label class="form-label" for="password-input"
                        >Password <span class="text-danger">*</span></label
                      >
                      <div class="position-relative auth-pass-inputgroup mb-3">
                        <input
                          v-if="showPassword"
                          type="text"
                          v-model="user.password"
                          onpaste="return false"
                          class="form-control pe-5"
                          :class="{
                            'is-invalid': submitted && v$.user.password.$error,
                          }"
                          placeholder="Enter password"
                          id="password-input"
                        />
                        <input
                          v-else
                          type="password"
                          v-model="user.password"
                          onpaste="return false"
                          class="form-control pe-5"
                          :class="{
                            'is-invalid': submitted && v$.user.password.$error,
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
                          v-if="submitted && v$.user.password.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="v$.user.password.required.$message">{{
                            v$.user.password.required.$message
                          }}</span>
                        </div>
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
                        Sign Up
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

<style>
:root {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 16px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>

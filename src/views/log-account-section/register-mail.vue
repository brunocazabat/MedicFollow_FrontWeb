<script>
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { mapState } from "vuex";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/assets/anim/animation2.json";
import { authMethods, authFackMethods, notificationMethods } from "@/components/state/helpers";
import appConfig from "../../../app.config";
import translatemodule from "./components/translate-module.vue";
import logoheadermodule from "./components/logo-header-module.vue";
import particlesmodule from "./components/particles-module.vue";
import footerlogmodule from "./components/footer-log-module.vue";

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
  components: { lottie: Lottie, translatemodule, logoheadermodule, particlesmodule, footerlogmodule },
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
    RegisterInEmail() {
      this.submitted = true;
      this.v$.$touch();
      this.$router.push("/register-mail-success");
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

        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-6">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center">
                  <p class="text-muted" data-key="t-regmailintro">{{ $t("t-regmailintro") }}
                  </p>
                  <lottie class="avatar-xl" colors="primary:#45CB85,secondary:#4b38b3" :options="defaultOptions"
                    :height="120" :width="120" />
                </div>
                <div class="p-2 mt-4">
                  <form class="needs-validation" @submit.prevent="RegisterInEmail">
                    <b-alert v-model="registerSuccess" class="mt-3" variant="success" dismissible
                      data-key="t-emailsuccess">{{
                          $t("t-emailsuccess")
                      }}</b-alert>

                    <b-alert v-model="isRegisterError" class="mt-3" variant="danger" dismissible>{{ regError }}
                    </b-alert>

                    <div v-if="notification.message" :class="'alert ' + notification.type">
                      {{ notification.message }}
                    </div>

                    <!-- Email Input row -->
                    <div class="mb-3">
                      <label for="email" class="form-label" data-key="t-email">{{ $t("t-email") }} <span
                          class="text-danger">*</span></label>
                      <input type="email" class="form-control" id="email" data-key="t-entermail"
                        v-bind:placeholder="$t('t-entermail')" v-model="user.email" onpaste="return false" :class="{
                          'is-invalid': submitted && v$.user.email.$error,
                        }" />
                      <div v-for="(item, index) in v$.user.email.$errors" :key="index" class="invalid-feedback">
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="auth-terms-check" required />
                      <label class="form-check-label" for="auth-terms-check">
                        <p class="mb-0 fs-12 text-muted fst-italic" data-key="t-agreeterm">{{ $t("t-agreeterm") }}
                          <a href="https://medicfollow.fr/fr/usage.html" target="_blank"
                            class="text-primary text-decoration-underline fst-normal fw-medium"
                            rel="noreferrer noopener" data-key="t-terms">{{ $t("t-terms") }}</a>.
                        </p>
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="auth-certify-check" required />
                      <label class="form-check-label" for="auth-certify-check">
                        <p class="mb-0 fs-12 text-muted fst-italic" data-key="t-procert">{{ $t("t-procert") }}
                        </p>
                      </label>
                    </div>

                    <div class="mt-4">
                      <button @click="RegisterInEmail" class="btn btn-success w-100" type="submit"
                        data-key="t-startreg">{{ $t("t-startreg") }}
                      </button>
                      <div class="mt-4 text-center">
                        <p class="mb-0 text-muted" style="color: black" data-key="t-alrdyaccount">{{
                            $t("t-alrdyaccount")
                        }}
                          <router-link to="/login" class="fw-semibold text-primary text-decoration-underline"
                            data-key="t-signin">{{ $t("t-signin") }}
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
    <footerlogmodule />
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->
</template>

<script>
import { SecurityActions, SecurityGetters } from "@/components/state/helpers";
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/assets/anim/animation2.json";
import translatemodule from "@/components/login-components/translate-module.vue";
import logoheadermodule from "@/components/login-components/logo-header-module.vue";
import particlesmodule from "@/components/login-components/particles-module.vue";
import footermodule from "@/components/login-components/footer-module.vue";
import recaptcha from "@/components/widgets/recaptchav2.vue";

export default {
  components: { lottie: Lottie, translatemodule, logoheadermodule, particlesmodule, footermodule, recaptcha },
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    email: {
      required: helpers.withMessage("An Email is required", required),
      email: helpers.withMessage("Please enter a valid email", email),
    },
  },
  data() {
    return {
      email: "",
      submitted: false,
      ResetError: null,
      isResetError: false,
      defaultOptions: { animationData: animationData },
    };
  },
  methods: {
    ...SecurityActions,
    ...SecurityGetters,
    tryToReset() {
      this.submitted = true;
      this.v$.$touch();
      if (!this.v$.$invalid && this.isRecaptchaEnabled()) {
        this.isResetError = false;
        this.ResetError = null;
        this.submitted = false;
        this.setCaptchaValid(false);
        this.$router.push(
          this.$route.query.redirectFrom || {
            path: "/forgot-password-success",
          }
        );
      } else {
        this.submitted = false;
        this.isResetError = true;
        this.ResetError = "Please complete the captcha and all fields.";
      }
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
                  <p class="text-muted" data-key="t-willreset">{{ $t("t-willreset") }}
                  </p>
                  <lottie class="avatar-xl" colors="primary:#45CB85,secondary:#4b38b3" :options="defaultOptions"
                    :height="120" :width="120" />
                </div>

                <div class="p-2">
                  <b-alert v-model="isResetError" class="mb-4" variant="danger" dismissible>{{ ResetError }}</b-alert>
                  <form @submit.prevent="tryToReset">
                    <div class="mb-4">
                      <label for="email" class="form-label" data-key="t-email">{{ $t("t-email") }} <span
                          class="text-danger">*</span></label>
                      <input type="email" v-model="email" class="form-control" id="email"
                        :class="{ 'is-invalid': submitted && v$.email.$errors }" data-key="t-entermail"
                        v-bind:placeholder="$t('t-entermail')" />
                      <div v-for="(item, index) in v$.email.$errors" :key="index" class="invalid-feedback">
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>

                    <recaptcha />
                    <div class="text-center mt-4">
                      <button @click="tryToReset" class="btn btn-success w-100" type="submit" data-key="t-resetlink">{{
                      $t("t-resetlink") }}
                      </button>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0 text-muted" style="color: black" data-key="t-remempass">{{ $t("t-remempass") }}
                        <router-link to="/login" class="fw-semibold text-primary text-decoration-underline"
                          data-key="t-signin">{{ $t("t-signin") }}
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

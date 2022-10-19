<script>
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/assets/anim/animation2.json";
import { SecurityActions, SecurityGetters, notificationMethods } from "@/components/state/helpers";
import { translatemodule, logoheadermodule, particlesmodule, footermodule } from "@/components/login-components";
import recaptcha from "@/components/widgets/recaptchav2.vue";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: { lottie: Lottie, translatemodule, logoheadermodule, particlesmodule, footermodule, recaptcha },
  data() {
    return {
      user: {
        email: "",
      },
      submitted: false,
      regError: null,
      isRegisterError: false,
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
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  methods: {
    ...SecurityActions,
    ...SecurityGetters,
    ...notificationMethods,
    RegisterInEmail() {
      this.submitted = true;
      this.v$.$touch();
      if (!this.v$.$invalid && this.isRecaptchaEnabled()) {
        this.isRegisterError = false;
        this.regError = null;
        this.submitted = false;
        this.setCaptchaValid(false);
        this.$router.push(
          this.$route.query.redirectFrom || {
            path: "/register-mail-success",
          }
        );
      } else {
        this.submitted = false;
        this.isRegisterError = true;
        this.regError = "Please complete the captcha and all fields.";
      }
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
                <div class="text-center">
                  <p class="text-muted" data-key="t-regmailintro">{{ $t("t-regmailintro") }}
                  </p>
                  <lottie class="avatar-xl" colors="primary:#45CB85,secondary:#4b38b3" :options="defaultOptions"
                    :height="120" :width="120" />
                </div>
                <div class="p-2 mt-4">
                  <form class="needs-validation" @submit.prevent="RegisterInEmail">
                    <b-alert v-model="isRegisterError" class="mt-3" variant="danger" dismissible>{{ regError }}
                    </b-alert>
                    <div v-if="notification.message" :class="'alert ' + notification.type">
                      {{ notification.message }}
                    </div>
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
                        <p class="mb-0 fs-12 text-muted fst-italic" data-key="t-agreeterm">{{
                        $t("t-agreeterm") }}
                          <a href="https://medicfollow.fr/fr/usage.html" target="_blank"
                            class="text-primary text-decoration-underline fst-normal fw-medium"
                            rel="noreferrer noopener" data-key="t-terms">{{ $t("t-terms") }}</a>.
                        </p>
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="auth-certify-check" required />
                      <label class="form-check-label" for="auth-certify-check">
                        <p class="mb-0 fs-12 text-muted fst-italic" data-key="t-procert">{{ $t("t-procert")
                        }}
                        </p>
                      </label>
                    </div>
                    <recaptcha />
                    <div class="mt-4">
                      <button @click="RegisterInEmail" class="btn btn-success w-100" type="submit"
                        data-key="t-startreg">{{ $t("t-startreg") }}
                      </button>
                      <div class="mt-4 text-center">
                        <p class="mb-0 text-muted" style="color: black" data-key="t-alrdyaccount">
                          {{ $t("t-alrdyaccount") }}
                          <router-link to="/login" class="fw-semibold text-primary text-decoration-underline"
                            data-key="t-signin">{{ $t("t-signin") }}
                          </router-link>
                        </p>
                      </div>
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

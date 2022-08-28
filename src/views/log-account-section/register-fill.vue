<script>
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { mapState } from "vuex";
import Popper from "vue3-popper";
import { authMethods, notificationMethods } from "@/components/state/helpers";
import appConfig from "../../../app.config";
import translatemodule from "../../components/login-components/translate-module.vue";
import logoheadermodule from "../../components/login-components/logo-header-module.vue";
import particlesmodule from "../../components/login-components/particles-module.vue";
import footermodule from "../../components/login-components/footer-module.vue";

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
  components: { Popper, translatemodule, logoheadermodule, particlesmodule, footermodule },
  data() {
    return {
      user: {
        famillyname: "",
        name: "",
        password: "",
      },
      submitted: false,
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
    ...notificationMethods,
    RegisterInInfos() {
      this.submitted = true;
      this.v$.$touch();
      this.$router.push("/register-fill-success");
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
                  <p class="text-muted" data-key="t-completeprof">{{ $t("t-completeprof") }}
                  </p>
                </div>
                <div class="p-2 mt-4">
                  <form class="needs-validation" @submit.prevent="RegisterInInfos">
                    <div v-if="notification.message" :class="'alert ' + notification.type">
                      {{ notification.message }}
                    </div>

                    <!-- Familly Name Input row -->
                    <div class="mb-3">
                      <label for="famillyname" class="form-label" data-key="t-famname">{{ $t("t-famname") }} <span
                          class="text-danger">*</span></label>
                      <input type="text" class="form-control" v-model="user.famillyname" onpaste="return false" :class="{
                        'is-invalid': submitted && v$.user.famillyname.$error,
                      }" id="famillyname" v-bind:placeholder="$t('t-enterfamname')" data-key="t-enterfamname"
                        required />
                      <div v-if="submitted && v$.user.famillyname.$error" class="invalid-feedback">
                        <span v-if="v$.user.famillyname.required.$message">{{
                            v$.user.famillyname.required.$message
                        }}</span>
                      </div>
                    </div>

                    <!-- Name Input row -->
                    <div class="mb-3">
                      <label for="name" class="form-label" data-key="t-name">{{ $t("t-name") }} <span
                          class="text-danger">*</span></label>
                      <input type="text" class="form-control" v-model="user.name" onpaste="return false" :class="{
                        'is-invalid': submitted && v$.user.name.$error,
                      }" id="name" v-bind:placeholder="$t('t-entername')" data-key="t-entername" required />
                      <div v-if="submitted && v$.user.name.$error" class="invalid-feedback">
                        <span v-if="v$.user.name.required.$message">{{
                            v$.user.name.required.$message
                        }}</span>
                      </div>
                    </div>

                    <!-- Password Input row -->
                    <div class="mb-3">
                      <div class="float-end" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
                        <Popper placement="right" :show="hover">
                          <p class="text-danger" data-key="t-passreq">{{ $t("t-passreq") }}</p>
                          <template #content>
                            <div>
                              <p class="invalid fs-12 mb-2" data-key="t-12char">{{ $t("t-12char") }}

                              </p>
                              <p class="invalid fs-12 mb-2" data-key="t-8lowchar">{{ $t("t-8lowchar") }}

                              </p>
                              <p class="invalid fs-12 mb-2" data-key="t-2upchar">{{ $t("t-2upchar") }}

                              </p>
                              <p class="invalid fs-12 mb-2" data-key="t-2number">{{ $t("t-2number") }}

                              </p>
                            </div>
                          </template>
                        </Popper>
                      </div>
                      <label class="form-label" for="password-input" data-key="t-password">{{ $t("t-password")
                      }} <span class="text-danger">*</span></label>
                      <div class="position-relative auth-pass-inputgroup mb-3">
                        <input v-if="showPassword" type="text" v-model="user.password" onpaste="return false"
                          class="form-control pe-5" :class="{
                            'is-invalid': submitted && v$.user.password.$error,
                          }" v-bind:placeholder="$t('t-enterpassw')" data-key="t-enterpassw" id="password-input" />
                        <input v-else type="password" v-model="user.password" onpaste="return false"
                          class="form-control pe-5" :class="{
                            'is-invalid': submitted && v$.user.password.$error,
                          }" v-bind:placeholder="$t('t-enterpassw')" data-key="t-enterpassw" id="password-input" />
                        <button @click="toggleShow"
                          class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                          type="button" style="box-shadow: none !important" id="password-addon">
                          <em class="ri-eye-fill align-middle"></em>
                        </button>
                        <div v-if="submitted && v$.user.password.$error" class="invalid-feedback">
                          <span v-if="v$.user.password.required.$message">{{
                              v$.user.password.required.$message
                          }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="auth-remember-check" required />
                      <label class="form-check-label" for="auth-remember-check">
                        <p class="mb-0 fs-12 text-muted fst-italic" data-key="t-agreeterm">{{ $t("t-agreeterm") }}
                          <a href="https://medicfollow.fr/fr/usage.html" target="_blank"
                            class="text-primary text-decoration-underline fst-normal fw-medium"
                            rel="noreferrer noopener" data-key="t-terms">{{ $t("t-terms") }}
                          </a>
                        </p>
                      </label>
                    </div>

                    <div class="mt-4">
                      <button @click="RegisterInInfos" class="btn btn-success w-100" type="submit"
                        data-key="t-signup">{{
                            $t("t-signup")
                        }}
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
    <footermodule />
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

<script>
import { AuthActions, AuthGetters } from "@/components/back-related/state/helpers";
import Lottie from "@/components/view-related/widgets/lottie.vue";
import animationData from "@/assets/anim/animation3.json";
import { translatemodule, logoheadermodule, particlesmodule, footermodule } from "@/components/view-related/login-components";

export default {
  components: { lottie: Lottie, translatemodule, logoheadermodule, particlesmodule, footermodule },
  data() {
    return {
      defaultOptions: { animationData: animationData },
    };
  },
  mounted() {
    this.Loading();
  },
  methods: {
    ...AuthActions,
    ...AuthGetters,
    Loading() {
      this.setGetMe().then(res => {
        switch (res) {
          case 200:
            setTimeout(3000);
            break;
          case 462:
            this.isAuthError = true;
            this.authError = "Invalid Token, please login again";
            this.setLogOut();
            this.$router.back();
            break;
          case 463:
            this.isAuthError = true;
            this.authError = "User disabled";
            this.setLogOut();
            this.$router.back();
            break;
          case 0:
            this.isAuthError = true;
            this.authError = "No internet connection";
            break;
          default:
            this.isAuthError = true;
            this.authError = "An unknown error occurred";
            this.setLogOut();
            this.$router.back();
        }
      }).then(() => {
        setTimeout(() => {
          this.$router.push(
            this.$route.query.redirectFrom || {
              path: "/" + this.getuserType() + "/dashboard",
            }
          );
        }, 1000);
      });
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
          <div class="col-md-3 col-lg-3 col-xl-3">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <lottie class="avatar-xl" colors="primary:#45CB85,secondary:#4b38b3" :options="defaultOptions"
                    :height="200" :width="200" />
                  <p class="text-muted" data-key="t-loading">{{ $t("t-loading") }}
                  </p>
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

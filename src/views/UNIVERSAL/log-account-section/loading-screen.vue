<script>
import { mapActions } from "vuex";
import appConfig from "@/../app.config";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/assets/anim/animation3.json";
import translatemodule from "@/components/login-components/translate-module.vue";
import logoheadermodule from "@/components/login-components/logo-header-module.vue";
import particlesmodule from "@/components/login-components/particles-module.vue";
import footermodule from "@/components/login-components/footer-module.vue";
import rtedashboard from "@/components/router/rte-dashboard.js";

export default {
  components: { lottie: Lottie, translatemodule, logoheadermodule, particlesmodule, footermodule },
  page: {
    title: "Loading Screen",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },
    };
  },
  mounted() {
    this.Loading();
  },
  methods: {
    ...mapActions({
      GetMe: "auth/GetMe",
    }),
    loadroutes() {
      rtedashboard.forEach((route) => {
        this.$router.addRoute(route);
      });
    },
    Loading() {
      console.log("hello");
      this.GetMe().then(res => {
        switch (res) {
          case 200:
            this.loadroutes();
            setTimeout(() => {
              this.$router.push(
                this.$route.query.redirectFrom || {
                  path: "/dashboard",
                }
              );
            }, 1000);
            break;
          case 462:
            this.isAuthError = true;
            this.authError = "Invalid Token, please login again";
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

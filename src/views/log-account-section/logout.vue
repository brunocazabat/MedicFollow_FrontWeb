<script>
import animationData from "@/assets/anim/animation1.json";
import Lottie from "@/components/widgets/lottie.vue";
import translatemodule from "./components/translate-module.vue";
import logoheadermodule from "./components/logo-header-module.vue";
import particlesmodule from "./components/particles-module.vue";
import footerlogmodule from "./components/footer-log-module.vue";

export default {
  data() {
    return {
      defaultOptions: {
        animationData: animationData,
      },
    };
  },
  components: { lottie: Lottie, translatemodule, logoheadermodule, particlesmodule, footerlogmodule },
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
              <div class="card-body p-4 text-center">
                <lottie colors="primary:#4b38b3,secondary:#08a88a" :options="defaultOptions" :height="180"
                  :width="180" />
                <div class="mt-4 pt-2">
                  <h5 data-key="t-logoutsuccess">{{ $t("t-logoutsuccess") }}</h5>
                  <p class="text-muted" data-key="t-thanksp1">{{ $t("t-thanksp1") }}
                    <span class="fw-semibold">MedicFollow</span>
                  </p>
                  <div class="mt-4">
                    <router-link to="/login" class="btn btn-success w-100" data-key="t-signin">{{ $t("t-signin") }}
                    </router-link>
                  </div>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
          <translatemodule />
          <!-- end col -->
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

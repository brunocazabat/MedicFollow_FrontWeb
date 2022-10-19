<script>
import { AuthActions, SecurityActions } from "@/components/back-related/state/helpers";
import animationData from "@/assets/anim/animation1.json";
import Lottie from "@/components/view-related/widgets/lottie.vue";
import { translatemodule, logoheadermodule, particlesmodule, footermodule } from "@/components/view-related/login-components";

export default {
  data() {
    return {
      defaultOptions: {
        animationData: animationData,
      },
    };
  },
  components: { lottie: Lottie, translatemodule, logoheadermodule, particlesmodule, footermodule },
  methods: {
    ...AuthActions,
    ...SecurityActions,
  },
  mounted: function () {
    this.setLogOut();
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
            </div>
          </div>
          <translatemodule />
        </div>
      </div>
    </div>
    <footermodule />
  </div>
</template>

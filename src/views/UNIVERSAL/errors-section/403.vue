<script>
import logoheadermodule from "@/components/login-components/logo-header-module.vue";
import particlesmodule from "@/components/login-components/particles-module.vue";
import footermodule from "@/components/login-components/footer-module.vue";
import translatemodule from "@/components/login-components/translate-module.vue";

export default {
  name: "Page403",
  components: { logoheadermodule, particlesmodule, footermodule, translatemodule },
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
          <div class="col-xl-8 col-lg-8">
            <div class="text-center">
              <img src="@/assets/images/errors/offline.gif" alt="error img" class="img-fluid">
              <div class="mt-3">
                <h3 class="text-uppercase text-white" data-key="t-forbidden">403 - {{ $t("t-forbidden") }} 😭</h3>
                <p class="mb-4 text-white" data-key="t-forbiddenpage">{{ $t("t-forbiddenpage") }}</p>
                <router-link to="/" class="btn btn-success" data-key="t-returnhome"><em class="mdi mdi-home me-1"></em>
                  {{$t("t-returnhome") }}</router-link>
              </div>
            </div>
          </div><!-- end col -->
          <translatemodule />
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end auth-page content -->
    <!-- footer -->
    <footermodule />
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->
</template>

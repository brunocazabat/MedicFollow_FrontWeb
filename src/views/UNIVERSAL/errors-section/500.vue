<script>
import logoheadermodule from "@/components/login-components/logo-header-module.vue";
import particlesmodule from "@/components/login-components/particles-module.vue";
import footermodule from "@/components/login-components/footer-module.vue";
import translatemodule from "@/components/login-components/translate-module.vue";

export default {
  name: "Page500",
  components: { logoheadermodule, particlesmodule, footermodule, translatemodule },
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
          <div class="col-xl-9 col-lg-8 text-center">
            <div class="error-500 position-relative">
              <img src="@/assets/images/errors/error500.png" alt="" class="img-fluid error-500-img error-img" />
              <h1 class="title text-white">500</h1>
            </div>
            <div>
              <h4>Internal Server Error!</h4>
              <p class="text-white w-75 mx-auto">Server Error 500. We're not exactly sure what happened, but our servers
                say something is wrong.</p>
              <router-link to="/" class="btn btn-success"><em class="mdi mdi-home me-1"></em>Back to home</router-link>
            </div>
          </div><!-- end col-->
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

<script>
  import logoheadermodule from "@/components/login-components/logo-header-module.vue";
  import particlesmodule from "@/components/login-components/particles-module.vue";
  import footermodule from "@/components/login-components/footer-module.vue";
  import translatemodule from "@/components/login-components/translate-module.vue";

export default {
  name: "Page404",
  components: { logoheadermodule, particlesmodule, footermodule, translatemodule },
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
          <div class="col-xl-8 col-lg-8">
            <div class="text-center">
              <img src="@/assets/images/errors/error400-cover.png" alt="error img" class="img-fluid">
              <div class="mt-3">
                <h3 class="text-uppercase text-white">Sorry, Page not Found 😭</h3>
                <p class="mb-4 text-white">The page you are looking for is not
                  available!
                </p>
                <router-link to="/" class="btn btn-success"><em class="mdi mdi-home me-1"></em>Back to home
                </router-link>
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

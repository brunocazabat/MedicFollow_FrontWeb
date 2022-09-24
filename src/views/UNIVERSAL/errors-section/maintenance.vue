<script>
import logoheadermodule from "@/components/login-components/logo-header-module.vue";
import particlesmodule from "@/components/login-components/particles-module.vue";
import footermodule from "@/components/login-components/footer-module.vue";
import translatemodule from "@/components/login-components/translate-module.vue";

export default {
  name: "Maintenance",
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
        <div class="row">
          <div class="col-xl-9 col-lg-8">
            <div class="text-center mt-sm-5 pt-4">
              <div class="row justify-content-center mb-5">
                <div class="col-xl-4 col-lg-8">
                  <div>
                    <img src="@/assets/images/errors/maintenance.png" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="mb-5 text-white-50">
                <h1 class="display-5 coming-soon-text" data-key="t-maintainance">
                  {{$t("t-maintainance") }}
                </h1>
                <div class="mt-4 pt-2">
                  <router-link to="/" class="btn btn-success" data-key="t-returnhome">
                    <em class="mdi mdi-home me-1"></em>
                    {{$t("t-returnhome") }}
                  </router-link>
                </div>
              </div>

            </div>
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

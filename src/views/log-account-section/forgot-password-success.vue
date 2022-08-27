<script>
import translatemodule from "../../components/login-components/translate-module.vue";
import logoheadermodule from "../../components/login-components/logo-header-module.vue";
import particlesmodule from "../../components/login-components/particles-module.vue";
import footermodule from "../../components/login-components/footer-module.vue";

export default {
  components: { translatemodule, logoheadermodule, particlesmodule, footermodule },
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
                <div class="avatar-lg mx-auto mt-2">
                  <div class="
                      avatar-title
                      bg-light
                      text-success
                      display-3
                      rounded-circle
                    ">
                    <em class="ri-checkbox-circle-fill"></em>
                  </div>
                </div>
                <div class="mt-4 pt-2">
                  <h4 data-key="t-resetintro">{{ $t("t-resetintro") }}</h4>
                  <p class="text-muted mx-4" data-key="t-readinfo">{{ $t("t-readinfo") }}
                  </p>
                  <div class="mt-4">
                    <router-link to="/login" class="btn btn-success w-100" data-key="t-returnlogin">{{
                        $t("t-returnlogin")
                    }}
                    </router-link>
                  </div>
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

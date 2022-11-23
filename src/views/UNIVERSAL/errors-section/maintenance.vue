<script>
import {
  translatemodule,
  logoheadermodule,
  particlesmodule,
  footermodule,
} from "@/components/view-related/login-components";

export default {
  name: "Maintenance",
  components: {
    translatemodule,
    logoheadermodule,
    particlesmodule,
    footermodule,
  },
};
</script>

<template>
  <div class="auth-page-wrapper">
    <particlesmodule />
    <div class="auth-page-content">
      <div class="container">
        <logoheadermodule />
        <div class="row">
          <div class="col-xl-9 col-lg-8">
            <div class="text-center mt-sm-5 pt-4">
              <div class="row justify-content-center mb-5">
                <div class="col-xl-4 col-lg-8">
                  <div>
                    <img
                      src="@/assets/images/errors/maintenance.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-5 text-white-50">
                <h1
                  class="display-5 coming-soon-text"
                  data-key="t-maintainance"
                >
                  {{ $t("t-maintainance") }}
                </h1>
                <div class="mt-4 pt-2">
                  <router-link
                    to="/"
                    class="btn btn-success"
                    data-key="t-returnhome"
                  >
                    <em class="mdi mdi-home me-1"></em>
                    {{ $t("t-returnhome") }}
                  </router-link>
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

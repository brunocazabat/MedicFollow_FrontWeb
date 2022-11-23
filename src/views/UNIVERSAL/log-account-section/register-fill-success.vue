<script>
import {
  translatemodule,
  logoheadermodule,
  particlesmodule,
  footermodule,
} from "@/components/view-related/login-components";

export default {
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
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-6">
            <div class="card mt-4">
              <div class="card-body p-4 text-center">
                <div class="avatar-lg mx-auto mt-2">
                  <div
                    class="avatar-title bg-light text-success display-3 rounded-circle"
                  >
                    <em class="ri-checkbox-circle-fill"></em>
                  </div>
                </div>
                <div class="mt-4 pt-2">
                  <h4 data-key="t-registerprocsuccess">
                    {{ $t("t-registerprocsuccess") }}
                  </h4>
                  <p class="text-muted mx-4" data-key="t-securityreg">
                    {{ $t("t-securityreg") }}
                  </p>
                  <div class="mt-4">
                    <router-link
                      to="/login"
                      class="btn btn-success w-100"
                      data-key="t-returnlogin"
                      >{{ $t("t-returnlogin") }}
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

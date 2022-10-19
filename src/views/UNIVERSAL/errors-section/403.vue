<script>
import { translatemodule, logoheadermodule, particlesmodule, footermodule } from "@/components/view-related/login-components";

export default {
  name: "Page403",
  components: { translatemodule, logoheadermodule, particlesmodule, footermodule },
};
</script>

<template>
  <div class="auth-page-wrapper">
    <particlesmodule />
    <div class="auth-page-content">
      <div class="container">
        <logoheadermodule />
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
          </div>
          <translatemodule />
        </div>
      </div>
    </div>
    <footermodule />
  </div>
</template>

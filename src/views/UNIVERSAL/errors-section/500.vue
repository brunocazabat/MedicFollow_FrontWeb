<script>
import { translatemodule, logoheadermodule, particlesmodule, footermodule } from "@/components/login-components";

export default {
  name: "Page500",
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
          <div class="col-xl-9 col-lg-8 text-center">
            <div class="error-500 position-relative">
              <img src="@/assets/images/errors/error500.png" alt="" class="img-fluid error-500-img error-img" />
              <h1 class="title text-white">500</h1>
            </div>
            <div>
              <h4 class="text-white" data-key="t-serverr">500 - {{ $t("t-serverr") }} 😭</h4>
              <p class="text-white w-75 mx-auto" data-key="t-wrong">{{ $t("t-wrong") }}</p>
              <router-link to="/" class="btn btn-success" data-key="t-returnhome"><em class="mdi mdi-home me-1"></em> {{
              $t("t-returnhome") }}</router-link>
            </div>
          </div>
          <translatemodule />
        </div>
      </div>
    </div>
    <footermodule />
  </div>
</template>

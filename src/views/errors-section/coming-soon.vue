<script>
  import logoheadermodule from "@/components/login-components/logo-header-module.vue";
  import particlesmodule from "@/components/login-components/particles-module.vue";
  import footermodule from "@/components/login-components/footer-module.vue";
  import translatemodule from "@/components/login-components/translate-module.vue";

export default {
  name: "ComingSoon",
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
        <div class="row">
          <div class="col-xl-9 col-lg-8">
            <div class="text-center mt-sm-5 pt-4 mb-4">
              <div class="mb-sm-5 pb-sm-4 pb-3">
                <img src="@/assets/images/covers/comingsoon.png" alt="" height="120" class="move-animation">
              </div>
              <div class="mb-5">
                <h1 class="display-2 coming-soon-text">Coming Soon</h1>
              </div>
              <div>
                <div class="row justify-content-center mt-3">
                  <div class="col-lg-8">
                    <div id="countdown" class="countdownlist"></div>
                  </div>
                </div>

                <div class="mt-3">
                  <h4 class="text-white">Get notified when we launch</h4>
                </div>

                <div class="input-group countdown-input-group mx-auto my-4">
                  <input type="email" class="form-control border-light shadow" placeholder="Enter your email address"
                    aria-label="search result" aria-describedby="button-email">
                  <button class="btn btn-success" type="button" id="button-email">Send<em
                      class="ri-send-plane-2-fill align-bottom ms-2"></em></button>
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

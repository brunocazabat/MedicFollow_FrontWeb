<script>
  import logoheadermodule from "@/components/login-components/logo-header-module.vue";
  import particlesmodule from "@/components/login-components/particles-module.vue";
  import footermodule from "@/components/login-components/footer-module.vue";
  import translatemodule from "@/components/login-components/translate-module.vue";

export default {
  name: "Offline",
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
          <div class="col-xl-5">
            <div class="card overflow-hidden">
              <div class="card-body p-4">
                <div class="text-center">
                  <img src="@/assets/images/errors/offline.gif" alt="" height="210" />
                  <h3 class="mt-4 fw-semibold">We're currently offline</h3>
                  <p class="text-muted mb-4 fs-14">
                    We can't show you this images because you aren't connected
                    to the internet. When you’re back online refresh the page or
                    hit the button below
                  </p>
                  <button class="btn btn-success btn-border" onClick="window.location.href=window.location.href">
                    <em class="ri-refresh-line align-bottom"></em> Refresh
                  </button>
                </div>
              </div>
            </div>
            <!-- end card -->
          </div>
          <!-- end col -->
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

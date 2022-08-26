<script>
import translatemodule from "./components/translate-module.vue";
import logoheadermodule from "./components/logo-header-module.vue";
import particlesmodule from "./components/particles-module.vue";
import footerlogmodule from "./components/footer-log-module.vue";

export default {
  components: { translatemodule, logoheadermodule, particlesmodule, footerlogmodule },
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
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h4 class="text-primary">LOCK SCREEN</h4>
                  <p class="text-muted">
                    Enter your password to unlock your MedicFollow session.
                  </p>
                </div>
                <div class="user-thumb text-center">
                  <img src="@/assets/images/users/avatar-1.png" class="rounded-circle img-thumbnail avatar-lg shadow"
                    alt="thumbnail" />
                  <h5 class="font-size-15 mt-3">Load Instance Name</h5>
                </div>
                <div class="p-2 mt-4">
                  <form>
                    <div class="mb-3">
                      <label class="form-label" for="userpassword">Password</label>
                      <input type="password" class="form-control" id="userpassword" placeholder="Enter password"
                        required />
                    </div>
                    <div class="mb-2 mt-4">
                      <button class="btn btn-success w-100" type="submit">
                        Unlock
                      </button>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0 text-muted" style="color: black">
                        Not you ? Unlog me and get me back to the
                        <router-link to="/login" class="fw-semibold text-primary text-decoration-underline">
                          Login Page
                        </router-link>
                      </p>
                    </div>
                  </form>
                  <!-- end form -->
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
    <footerlogmodule />
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->
</template>

<script>
import translatemodule from "@/components/login-components/translate-module.vue";
import logoheadermodule from "@/components/login-components/logo-header-module.vue";
import particlesmodule from "@/components/login-components/particles-module.vue";
import footermodule from "@/components/login-components/footer-module.vue";

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
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h4 class="text-primary" data-key="t-lockscreen">{{  $t("t-lockscreen")  }}</h4>
                  <p class="text-muted" data-key="t-unlockscreen">{{  $t("t-unlockscreen")  }}
                  </p>
                </div>
                <div class="user-thumb text-center">
                  <img src="@/assets/images/users/avatar-1.png" class="rounded-circle img-thumbnail avatar-lg shadow"
                    alt="thumbnail" />
                  <h5 class="font-size-15 mt-3" data-key="t-name">{{  $t("t-name")  }}</h5>
                </div>
                <div class="p-2 mt-4">
                  <form>
                    <div class="mb-3">
                      <label class="form-label" for="userpassword" data-key="t-password">{{  $t("t-password")  }} <span
                          class="text-danger">*</span></label>
                      <input type="password" class="form-control" id="userpassword" data-key="t-enterpassw"
                        v-bind:placeholder="$t('t-enterpassw')" required />
                    </div>
                    <div class="mb-2 mt-4">
                      <button class="btn btn-success w-100" type="submit" data-key="t-unlock">{{  $t("t-unlock")  }}
                      </button>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0 text-muted" style="color: black" data-key="t-notyou">{{  $t("t-notyou")  }}

                        <router-link to="/login" class="fw-semibold text-primary text-decoration-underline"
                          data-key="t-loginpage">{{  $t("t-loginpage")  }}
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
    <footermodule />
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->
</template>

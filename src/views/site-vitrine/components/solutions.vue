<script>
export default {
  name: 'solutions',
}
</script>

<template>
  <div class="container">
    <div class="row align-items-center gy-4">
      <h1 class="mb-3 ff-secondary fw-semibold lh-base text-uppercase text-success text-center"
        data-key="t-oursolution">{{ $t("t-oursolution") }}</h1>
      <div class="col-lg-6 order-2 order-lg-1">
        <div class="text-muted">
          <h3 class="fs-28 text-uppercase text-success mb-4" data-key="t-mobileclient">{{ $t("t-mobileclient") }}</h3>
          <h4 class="mb-5" data-key="t-partavailable">{{ $t("t-partavailable") }}</h4>
          <div class="row">
            <div class="col-sm-6">
              <div class="vstack gap-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div class="avatar-title bg-transparent text-success rounded-circle h2">
                        <em class="ri-check-fill"></em>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="fs-14 mb-3" data-key="t-iosandroid">{{ $t("t-iosandroid") }}</h5>
                    <p class="ff-secondary" data-key="t-findiosandroid">{{ $t("t-findiosandroid") }}
                    </p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div class="avatar-title bg-transparent text-success rounded-circle h2">
                        <em class="ri-check-fill"></em>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="fs-14 mb-3" data-key="t-crypted">{{ $t("t-crypted") }}</h5>
                    <p class="ff-secondary" data-key="t-safedata">{{ $t("t-safedata") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="vstack gap-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div class="avatar-title bg-transparent text-success rounded-circle h2">
                        <em class="ri-check-fill"></em>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="fs-14 mb-3" data-key="t-intellinotif">{{ $t("t-intellinotif") }}</h5>
                    <p class="ff-secondary" data-key="t-stayupnotif">{{ $t("t-stayupnotif") }}
                    </p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div class="avatar-title bg-transparent text-success rounded-circle h2">
                        <em class="ri-check-fill"></em>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="fs-14 mb-3" data-key="t-exportagenda">{{ $t("t-exportagenda") }}</h5>
                    <p class="ff-secondary" data-key="t-googleoutlook">{{ $t("t-googleoutlook") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger&gl=FR" class="btn btn-primary"
              data-key="t-downloadmoblink">{{ $t("t-downloadmoblink") }}
              <em class="ri-arrow-right-line align-middle ms-1"></em></a>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-sm-7 col-10 ms-auto order-1 order-lg-2">
        <div>
          <img src="@/assets/images-sitevitrine/banner/Banner_solution_1.jpg" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row align-items-center mt-5 pt-lg-5 gy-4">
      <div class="col-lg-6 col-sm-7 col-10 mx-auto">
        <div>
          <img src="@/assets/images-sitevitrine/banner/Banner_solution_2.jpg" alt="" class="img-fluid" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="text-muted ps-lg-5">
          <h3 class="fs-28 text-uppercase text-success mb-4" data-key="t-webclient">{{ $t("t-webclient") }}</h3>
          <h4 class="mb-5" data-key="t-availpropart">{{ $t("t-availpropart") }}</h4>
          <div class="row">
            <div class="col-sm-6">
              <div class="vstack gap-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div class="avatar-title bg-transparent text-success rounded-circle h2">
                        <em class="ri-check-fill"></em>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="fs-14 mb-3" data-key="t-allcompat">{{ $t("t-allcompat") }}
                    </h5>
                    <p class="ff-secondary" data-key="t-allcompatbrows">{{ $t("t-allcompatbrows") }}
                    </p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div class="avatar-title bg-transparent text-success rounded-circle h2">
                        <em class="ri-check-fill"></em>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="fs-14 mb-3" data-key="t-interfaceinfo">{{ $t("t-interfaceinfo") }}</h5>
                    <p class="ff-secondary" data-key="t-interfaceinfoutil">{{ $t("t-interfaceinfoutil") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="vstack gap-2">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div class="avatar-title bg-transparent text-success rounded-circle h2">
                        <em class="ri-check-fill"></em>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="fs-14 mb-3" data-key="t-noupdate">{{ $t("t-noupdate") }}</h5>
                    <p class="ff-secondary" data-key="t-justreload">{{ $t("t-justreload") }}
                    </p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <div class="avatar-xs icon-effect">
                      <div class="avatar-title bg-transparent text-success rounded-circle h2">
                        <em class="ri-check-fill"></em>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="fs-14 mb-3" data-key="t-allplatform">{{ $t("t-allplatform") }}</h5>
                    <p class="ff-secondary" data-key="t-justinternet">{{ $t("t-justinternet") }}

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <router-link to="/login" class="btn btn-primary" data-key="t-linkwebclient">{{ $t("t-linkwebclient") }}
              <em class="ri-arrow-right-line align-middle ms-1"></em>
            </router-link>
          </div>
        </div>
      </div>

    </div>
    <!-- end row -->
  </div>
</template>

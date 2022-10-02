<script>
export default {
  name: 'project',
}
</script>

<template>
  <div class="container" style="margin-top: 75px">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5">
          <h1 class="mb-3 ff-secondary fw-semibold lh-base text-uppercase text-success text-center"
            data-key="t-ourproject">{{ $t("t-ourproject") }}</h1>
          <h3 class="mb-3 text-muted" data-key="t-goalMF">" {{ $t("t-goalMF") }} "</h3>
          <h5 class="mb-5 text-muted" data-key="t-helpedwith">{{ $t("t-helpedwith") }}
          </h5>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row g-3">
      <!-- end col -->
      <div class="col-lg-4">
        <div class="d-flex p-3">
          <div class="flex-shrink-0">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-arrow-right-s-line align-bottom fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-securityfiabl">{{ $t("t-securityfiabl") }}</h5>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-4">
        <div class="d-flex p-3">
          <div class="flex-shrink-0">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-arrow-right-s-line align-bottom fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-morevisibility">{{ $t("t-morevisibility") }}</h5>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-4">
        <div class="d-flex p-3">
          <div class="flex-shrink-0">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-arrow-right-s-line align-bottom fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-morecomm">{{ $t("t-morecomm") }}</h5>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-4">
        <div class="d-flex p-3">
          <div class="flex-shrink-0">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-arrow-right-s-line align-bottom fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-moretime">{{ $t("t-moretime") }}</h5>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-4">
        <div class="d-flex p-3">
          <div class="flex-shrink-0">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-arrow-right-s-line align-bottom fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-tranquil">{{ $t("t-tranquil") }}</h5>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-4">
        <div class="d-flex p-3">
          <div class="flex-shrink-0">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-arrow-right-s-line align-bottom fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-muchmore">{{ $t("t-muchmore") }}</h5>
          </div>
        </div>
      </div>
      <!-- end col -->


      <div class="col-lg-3">
        <div class="d-flex p-3">
          <div class="flex-shrink-0 me-3">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-briefcase-5-line fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-rappmedic">{{ $t("t-rappmedic") }}</h5>
            <p class="text-muted my-3 ff-secondary" data-key="t-finddoc">{{ $t("t-finddoc") }}
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-3">
        <div class="d-flex p-3">
          <div class="flex-shrink-0 me-3">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-slideshow-line fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-nextechean">{{ $t("t-nextechean") }}</h5>
            <p class="text-muted my-3 ff-secondary" data-key="t-stayuptodate">{{ $t("t-stayuptodate") }}
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-3">
        <div class="d-flex p-3">
          <div class="flex-shrink-0 me-3">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-settings-2-line fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-updatefreq">{{ $t("t-updatefreq") }}</h5>
            <p class="text-muted my-3 ff-secondary" data-key="t-anychange">{{ $t("t-anychange") }}
            </p>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-lg-3">
        <div class="d-flex p-3">
          <div class="flex-shrink-0 me-3">
            <div class="avatar-sm icon-effect">
              <div class="avatar-title bg-transparent text-success rounded-circle">
                <em class="ri-customer-service-line fs-36"></em>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="fs-18" data-key="t-havequestion">{{ $t("t-havequestion") }}</h5>
            <p class="text-muted my-3 ff-secondary" data-key="t-takecontact">{{ $t("t-takecontact") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </div>
</template>

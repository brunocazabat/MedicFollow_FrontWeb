<script>
export default {
  name: 'intro',
}
</script>

<template>
  <div class="bg-overlay bg-overlay-pattern"></div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-sm-10">
        <div class="text-center mt-lg-5 pt-5">
          <h1 class="display-6 fw-semibold mb-3 lh-base">
            <span class="text-success">MEDICFOLLOW</span>
            <p>La première plateforme qui facilite la communication autour du patient</p>
          </h1>
          <p class="forceserif lead text-muted lh-base">
            Restez en contact aisément avec vos proches hospitalisés, 7J/7, 24H/24.
          </p>

          <div class="d-flex gap-2 justify-content-center mt-4">
          </div>
        </div>

        <div class="mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel">
          <div class="demo-img-patten-top d-none d-sm-block">
            <img src="@/assets/images/covers/img-pattern.png" class="d-block img-fluid" alt="..." />
          </div>
          <div class="demo-img-patten-bottom d-none d-sm-block">
            <img src="@/assets/images/covers/img-pattern.png" class="d-block img-fluid" alt="..." />
          </div>
          <div class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner shadow-lg p-2 bg-white rounded">
              <div class="carousel-item active" data-bs-interval="2000">
                <img src="../images/banner/Home_banner.png" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </div>
  <!-- end container -->
  <div class="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1440 120">
      <g mask='url("#SvgjsMask1003")' fill="none">
        <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z"></path>
      </g>
    </svg>
  </div>
  <!-- end shape -->
</template>

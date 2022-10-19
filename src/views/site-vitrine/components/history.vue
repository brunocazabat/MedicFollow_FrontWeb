<script>
import timeline from "./timeline.vue"
export default {
  name: 'history',
  components: {
    timeline
  }
}
</script>
  
<template>
  <div class="container">
    <div class="row align-items-center gy-4">
      <div class="col-lg-5 col-sm-7 mx-auto">
        <div>
          <img src="@/assets/images/logo/logo-short.png" alt="" class="img-fluid mx-auto" />
        </div>
      </div>
      <div class="col-lg-6">
        <h1 class="mb-5 ff-secondary fw-semibold lh-base text-uppercase text-success text-center"
          data-key="t-ourhistory">{{ $t("t-ourhistory") }}</h1>
        <div class="text-muted">
          <h2 class="mb-3" data-key="t-goodbeginning">{{ $t("t-goodbeginning") }}</h2>
          <p class="mb-4 ff-secondary fs-16" data-key="t-introhistory">{{ $t("t-introhistory") }}

          </p>
        </div>
      </div>

      <div class="row align-items-center text-center" style="margin-top: 80px;">
        <timeline />
      </div>
    </div>

    <!-- end row -->
  </div>
</template>

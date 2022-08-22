<script>
export default {
  name: "logoheadermodule",
};
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="text-center mt-sm-5 mb-4 text-white-50">
        <div>
          <router-link to="/" class="d-inline-block auth-logo">
            <img src="@/assets/images/logo/logo-long.png" alt="" height="120" />
          </router-link>
        </div>
        <p class="mt-3 fs-15 fw-medium" style="color: white" data-key="t-yourtool">{{ $t("t-yourtool") }}
        </p>
      </div>
    </div>
  </div>
</template>

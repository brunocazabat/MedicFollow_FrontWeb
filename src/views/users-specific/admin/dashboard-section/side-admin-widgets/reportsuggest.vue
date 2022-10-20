<script>
export default {
  name: "ReportSuggest",
}
</script>

<template>
  <div class="card dashboardcard">
    <div class="card-body align-content-center align-items-center text-center">
      <div class="row">
        <h1 class="d-none d-xl-block ms-1 mb-3 ff-secondary user-name-text">
          <em class="ri-folder-info-line"></em>
        </h1>
        <h4 class="d-none d-xl-block ms-1 mb-2 ff-secondary fw-semibold user-name-text text-muted"
          data-key="t-reportsshort t-suggest">
          {{ $t('t-reportsshort') }} & {{ $t('t-suggest') }}
        </h4>
      </div>
    </div>
    <div class="card-footer border-0">
      <div class="row">
        <div class="text-center">
          <RouterLink to="/admin/see-reports" class="btn btn-primary text-uppercase padd5around"
            data-key="t-seereports">
            {{ $t('t-seereports') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BugReportComponent from "@/components/view-related/form-components/bug-report/bug-report.vue";

export default {
  components: {
    BugReportComponent,
  },
};
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-4">{{ $t("t-bugform") }}</h4>
          <BugReportComponent />
        </div>
      </div>
    </div>
  </div>
</template>

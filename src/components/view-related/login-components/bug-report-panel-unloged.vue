<script>
import BugReportComponent from "@/components/view-related/form-components/bug-report/bug-report.vue";

export default {
  name: "bugreportpanelunloged",
  components: { BugReportComponent },
  data() {
    return {};
  },
  mounted: function () {},
  methods: {},
};
</script>

<template>
  <div class="dropdown ms-1 topbar-head-dropdown header-item">
    <button
      type="button"
      class="btn btn-icon btn-topbar btn-ghost-secondary shadow-none bg-white"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <div class="row">
        <img
          src="@/assets/images/svg/icons/bug.svg"
          alt=""
          height="22"
          class="rounded"
        />
      </div>
    </button>
    <div class="dropdown-menu">
      <div class="p-3 py-2">
        <BugReportComponent />
      </div>
    </div>
  </div>
</template>

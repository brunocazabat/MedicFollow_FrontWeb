<script>
export default {
  name: "bugreportpanelunloged",
  components: {},
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
      <div class="dropdown-item py-2">OUI</div>
    </div>
  </div>
</template>

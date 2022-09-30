<script>
export default {
  name: "darkmode",
  methods: {
    toggleDarkMode() {
      if (document.documentElement.getAttribute("data-layout-mode") == "dark") {
        document.documentElement.setAttribute("data-layout-mode", "light");
      } else {
        document.documentElement.setAttribute("data-layout-mode", "dark");
      }
    },
  }
}
</script>

<template>
  <button type="button" class="btn btn-soft-secondary btn-sm btn-rounded" @click="toggleDarkMode" data-key="t-darkmode">
    {{ $t("t-darkmode") }}<em class="bx bx-moon ms-1"></em>
  </button>
</template>

<script>
export default {
  name: "GenericButtonDashboard",
  props: {
    link: {
      type: String,
      default: "",
    },
    translate: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    translatetheword() {
      return this.$t(this.translate);
    },
  },
};
</script>

<template>
  <div
    class="card"
    style="background: inherit !important; box-shadow: none !important"
  >
    <div class="card-body align-content-center align-items-center text-center">
      <RouterLink
        style="width: 100%; height: 100%"
        :to="link"
        class="btn btn-primary fs-16 text-uppercase padd5around"
        :data-key="translate"
      >
        <em :class="'mdi ' + icon"></em><br />{{ translatetheword }}
      </RouterLink>
    </div>
  </div>
</template>

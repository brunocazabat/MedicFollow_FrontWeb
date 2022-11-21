<script>
import store from "@/components/back-related/state/store";
import GenericMenu from "./navlink_generic.vue";
import navlinks from "./navlinks.min.js";

export default {
  name: "menunavlink",
  components: {
    GenericMenu,
  },
  data() {
    return {
      UserType: null,
      MenuItems: navlinks,
    };
  },
  computed: {
    MatchedList: function () {
      return this.MenuItems[this.UserType];
    },
  },
  mounted() {
    this.UserType = store.getters["auth/getuserUI"];
  },
};
</script>

<template>
  <div class="container-fluid">
    <GenericMenu :options="MatchedList" />
  </div>
</template>

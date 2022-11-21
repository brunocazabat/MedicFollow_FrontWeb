<script>
export default {
  name: "NavLinkAdmin",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<template>
  <ul class="navbar-nav h-100" id="navbar-nav">
    <li class="menu-title fs-6">
      <span data-key="t-menu"> {{ $t("t-menu") }}</span>
    </li>
    <li class="nav-item" v-for="items in options">
      <router-link class="nav-link menu-link" :to="items.link">
        <em :class="'mdi mdi-' + items.icon + ' fs-4 p10rx'"></em>
        <span :data-key="'t-' + items.title">
          {{ this.$t("t-" + items.title) }}
        </span>
      </router-link>
    </li>
  </ul>
</template>

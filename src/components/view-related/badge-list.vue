<script>
import BadgeIcon from "./badge-icon.vue";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "0 kB",
    },
  },
  emits: ["onRemove"],
  components: {
    BadgeIcon,
  },
  methods: {
    removeBadge() {
      this.$emit("onRemove");
    },
  },
};
</script>

<template>
  <div class="badges">
    <BadgeIcon type="default" :text="value" @on-remove="removeBadge()" />
    <p class="text-muted mb-0 mt-2">{{ size }}</p>
  </div>
</template>

<style>
.badges {
  display: flex;
  column-gap: 10px;
  margin: 10px 0;
  flex-wrap: wrap;
  row-gap: 5px;
}
</style>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: "default",
    },
    text: {
      type: String,
      required: true,
    },
  },
  emits: ["onRemove"],
  methods: {
    removeBadge() {
      this.$emit("onRemove");
    },
  },
};
</script>

<template>
  <div class="badge force-center" :class="type">
    {{ text }}
    <div
      class="icon cursor-pointer btn btn-sm btn-icon force-center text-danger"
      v-on:click="removeBadge"
    >
      <em class="mdi mdi-close fs-4"></em>
    </div>
  </div>
</template>

<style scoped>
.badge {
  padding: 0px 0 0 10px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #212529;
  background-color: #eee;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  cursor: default;
  user-select: none;
}

.icon {
  margin-left: 10px;
  padding-left: 0;
  display: flex;
  align-items: center;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  box-shadow: none;
}
</style>

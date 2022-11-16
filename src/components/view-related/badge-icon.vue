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
  <div class="badge" :class="type">
    {{ text }}
    <div class="icon cursor-pointer">
      <div class="btn btn-sm btn-icon" v-on:click="removeBadge">
        <p>x</p>
      </div>
    </div>
  </div>
</template>

<style>
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
  margin-left: 4px;
  padding-left: 0;
  display: flex;
  align-items: center;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.cursor-pointer {
  cursor: pointer;
}
</style>

<script>
export default {
  props: ["day", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      localShow: this.modelValue,
    };
  },
  methods: {
    updateCheck() {
      this.localShow = !this.localShow;
      this.$emit("update:modelValue", this.localShow);
    },
  },
};
</script>

<template>
  <!-- Day Grid Check -->
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      :id="day"
      :checked="localShow"
      @change="updateCheck"
    />
    <label class="form-check-label" :for="day">{{ day }}</label>
  </div>
</template>

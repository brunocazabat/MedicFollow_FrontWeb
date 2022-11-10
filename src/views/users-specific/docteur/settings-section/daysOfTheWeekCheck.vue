<script>
export default {
  props: ["day", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      localShow: false,
    };
  },
  methods: {
    updateCheck() {
      this.localShow = !this.localShow;
      this.$emit("update:modelValue", this.localShow);
    },
    updateLocalShow() {
      this.localShow = this.modelValue;
    },
  },
  watch: {
    modelValue: {
      handler: function () {
        this.updateLocalShow();
      },
      immediate: true,
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

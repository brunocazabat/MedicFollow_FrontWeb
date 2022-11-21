<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    title: {
      type: String,
      default: "",
    },
    selected: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    invalidFeedback: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      localValue: this.modelValue,
    };
  },
  methods: {
    updateValue(event) {
      this.localValue = event.target.value;

      const value = {
        value: this.localValue,
        text: this.options.find((option) => option.value === this.localValue)
          .label,
      };
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<template>
  <div :class="className">
    <div class="form-group">
      <div v-if="title.length > 0">
        <label for="label">{{ title }}</label>
      </div>
      <select
        data-testid="select"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        @change="updateValue($event)"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :selected="option.value === selected.value"
        >
          {{ option.text }}
        </option>
      </select>
      <div class="invalid-feedback">{{ invalidFeedback }}.</div>
    </div>
  </div>
</template>

<style scoped>
.form-group {
  width: 100%;
}

label {
  font-size: 15px;
  color: #888ea8;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

select {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #f1f2f3;
  color: #3b3f5c;
  font-size: 15px;
  padding: 8px 10px;
  letter-spacing: 1px;
  background-color: #f1f2f3;
}
</style>

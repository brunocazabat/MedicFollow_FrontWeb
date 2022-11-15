<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Write here...",
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
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
    rows: {
      type: Number,
      default: 1,
    },
    invalidFeedback: {
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
    updateValue() {
      this.$emit("update:modelValue", this.localValue);
    },
  },
};
</script>

<template>
  <label for="label" class="form-label" data-key="t-pageofissue">{{
    label
  }}</label>
  <input
    :type="type"
    class="form-control mb-2"
    :rows="rows"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    v-model="localValue"
    v-on:input="updateValue"
  />
  <div class="invalid-feedback">{{ invalidFeedback }}.</div>
</template>

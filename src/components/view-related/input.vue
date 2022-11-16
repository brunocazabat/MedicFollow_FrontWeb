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
    updateValue() {
      this.$emit("update:modelValue", this.localValue);
    },
  },
};
</script>

<template>
  <div v-if="className === 'form-floating'" :class="className">
    <textarea
      v-if="rows > 1"
      :type="type"
      class="form-control mb-2"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      v-model="localValue"
      v-on:input="updateValue"
    ></textarea>
    <input
      v-else
      :type="type"
      class="form-control mb-2"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      v-model="localValue"
      v-on:input="updateValue"
      id="inputText"
    />
    <label for="inputText" class="form-label">{{ label }}</label>
  </div>

  <div v-else :class="className">
    <label for="inputText" class="form-label">{{ label }}</label>
    <textarea
      v-if="rows > 1"
      :type="type"
      class="form-control mb-2"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      v-model="localValue"
      v-on:input="updateValue"
    ></textarea>
    <input
      v-else
      :type="type"
      class="form-control mb-2"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      v-model="localValue"
      v-on:input="updateValue"
      id="inputText"
    />
  </div>
  <div class="invalid-feedback">{{ invalidFeedback }}.</div>
</template>

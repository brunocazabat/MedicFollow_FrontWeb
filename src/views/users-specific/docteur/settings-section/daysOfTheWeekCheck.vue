<script>
export default {
  props: ['day', 'modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      localShow: this.modelValue,
    };
  },
  methods: {
    updateCheck() {
      this.localShow = !this.localShow;
      this.$emit("update:modelValue", this.localShow)
    }
  }
};
</script>

<template>
  <!-- Day Grid Check -->
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="dayGridCheck" v-model="localShow" @click="updateCheck" />
    <p v-if="day === 'Monday'" class="text-uppercase">{{$t("t-monday")}}</p>
    <p v-else-if="day === 'Tuesday'" class="text-uppercase">{{$t("t-tuesday")}}</p>
    <p v-else-if="day === 'Wednesday'" class="text-uppercase">{{$t("t-wednesday")}}</p>
    <p v-else-if="day === 'Thursday'" class="text-uppercase">{{$t("t-thursday")}}</p>
    <p v-else-if="day === 'Friday'" class="text-uppercase">{{$t("t-friday")}}</p>
    <p v-else-if="day === 'Saturday'" class="text-uppercase">{{$t("t-saturday")}}</p>
    <p v-else-if="day === 'Sunday'" class="text-uppercase">{{$t("t-sunday")}}</p>
    <p v-else class="text-uppercase">Label for the gridcheck"</p>
  </div>
</template>

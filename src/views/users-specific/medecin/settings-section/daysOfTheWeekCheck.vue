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
    }
  }
};
</script>

<template>

  <p>showDay: {{showDay}}</p>
  <!-- Monday -->
  <div v-if="day === 'Monday'" class="form-check" @click="$emit('update:modelValue', updateCheck())">
    <input class="form-check-input" type="checkbox" id="mondayGridCheck" :value="localShow" />
    <label class="form-check-label text-uppercase" for="mondayGridCheck">{{$t("t-monday")}}</label>
  </div>

  <!-- Tuesday -->
  <div v-if="day === 'Tuesday'" class="form-check">
    <input class="form-check-input" type="checkbox" id="tuesdayGridCheck" :value="modelLocal" />
    <label class="form-check-label text-uppercase" for="tuesdayGridCheck">{{$t("t-tuesday")}}</label>
  </div>

  <!-- Wednesday -->
  <div v-if="day === 'Wednesday'" class="form-check">
    <input class="form-check-input" type="checkbox" id="wednesdayGridCheck" v-model="showWednesday" />
    <label class="form-check-label text-uppercase" for="wednesdayGridCheck">{{$t("t-wednesday")}}</label>
  </div>

  <!-- Thursday -->
  <div v-if="day === 'Thursday'" class="form-check">
    <input class="form-check-input" type="checkbox" id="thursdayGridCheck" v-model="showThursday" />
    <label class="form-check-label text-uppercase" for="thursdayGridCheck">{{$t("t-thursday")}}</label>
  </div>

  <!-- Friday -->
  <div v-if="day === 'Friday'" class="form-check">
    <input class="form-check-input" type="checkbox" id="fridayGridCheck" v-model="showFriday" />
    <label class="form-check-label text-uppercase" for="fridayGridCheck">{{$t("t-friday")}}</label>
  </div>

  <!-- Saturday -->
  <div v-if="day === 'Saturday'" class="form-check">
    <input class="form-check-input" type="checkbox" id="saturdayGridCheck" v-model="showSaturday" />
    <label class="form-check-label text-uppercase" for="saturdayGridCheck">{{$t("t-saturday")}}</label>
  </div>

  <!-- Sunday -->
  <div v-if="day === 'Sunday'" class="form-check">
    <input class="form-check-input" type="checkbox" id="sundayGridCheck" v-model="showSunday" />
    <label class="form-check-label text-uppercase" for="sundayGridCheck">{{$t("t-sunday")}}</label>
  </div>
</template>

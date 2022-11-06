<script>
export default {
  props: ["hour1", "hour2"],
  data() {
    return {
      localHour1: this.hour1,
      localHour2: this.hour2,
      hoursArray: [
        {
          value: 0,
          text: "00:00",
        },
        {
          value: 1,
          text: "01:00",
        },
        {
          value: 2,
          text: "02:00",
        },
        {
          value: 3,
          text: "03:00",
        },
        {
          value: 4,
          text: "04:00",
        },
        {
          value: 5,
          text: "05:00",
        },
        {
          value: 6,
          text: "06:00",
        },
        {
          value: 7,
          text: "07:00",
        },
        {
          value: 8,
          text: "08:00",
        },
        {
          value: 9,
          text: "09:00",
        },
        {
          value: 10,
          text: "10:00",
        },
        {
          value: 11,
          text: "11:00",
        },
        {
          value: 12,
          text: "12:00",
        },
        {
          value: 13,
          text: "13:00",
        },
        {
          value: 14,
          text: "14:00",
        },
        {
          value: 15,
          text: "15:00",
        },
        {
          value: 16,
          text: "16:00",
        },
        {
          value: 17,
          text: "17:00",
        },
        {
          value: 18,
          text: "18:00",
        },
        {
          value: 19,
          text: "19:00",
        },
        {
          value: 20,
          text: "20:00",
        },
        {
          value: 21,
          text: "21:00",
        },
        {
          value: 22,
          text: "22:00",
        },
        {
          value: 23,
          text: "23:00",
        },
      ],
    };
  },
  components: {},
  methods: {},
};
</script>

<template>
  <div class="row">
    <div class="col-lg-4 p-3">
      <select id="scheduleValue1" class="form-select">
        <option
          v-for="hour in hoursArray"
          :value="hour.value"
          :key="hour.value"
          :selected="hour.value === Number(localHour1)"
        >
          {{ hour.text }}
        </option>
      </select>
    </div>

    <div class="col-lg-4 p-3">
      <select id="scheduleValue2" class="form-select">
        <option
          v-for="hour in hoursArray"
          :value="hour.value"
          :key="hour.value"
          :selected="hour.value === Number(localHour2)"
        >
          {{ hour.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
// General components imports
import Layout from "@/components/layouts/main.vue";
import footermodule from "@/components/login-components/footer-module.vue";

// Specific Components imports
import ScheduleModule from "./scheduleModule.vue";
import DaysCheckModule from "./daysOfTheWeekCheck.vue";

export default {
  data() {
    return {
      value: ['javascript'],

      // Days value array
      daysArray: {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        showValue: [true, false, false, false, false, false, false],
        dayValue: [1, 1, 1, 1, 1, 1, 1],
      },

      // Radio Box Var
      picked: 'NO',
    };
  },
  components: {
    Layout,
    footermodule,
    ScheduleModule,
    DaysCheckModule,
  },
  methods: {
    // Adds a new schedule to display
    addScheduleNbr(dayOfTheWeek) {
      if (dayOfTheWeek === "monday") {
        this.daysArray.dayValue[0] += 1
      } else if (dayOfTheWeek === "tuesday") {
        this.daysArray.dayValue[1] += 1
      } else if (dayOfTheWeek === "wednesday") {
        this.daysArray.dayValue[2] += 1
      } else if (dayOfTheWeek === "thursday") {
        this.daysArray.dayValue[3] += 1
      } else if (dayOfTheWeek === "friday") {
        this.daysArray.dayValue[4] += 1
      } else if (dayOfTheWeek === "saturday") {
        this.daysArray.dayValue[5] += 1
      } else if (dayOfTheWeek === "sunday") {
        this.daysArray.dayValue[6] += 1
      }
    },
    // Removes a schedule to display, cannot display 0 schedule
    removeScheduleNbr(dayOfTheWeek) {
      if (dayOfTheWeek === "monday" && this.daysArray.dayValue[0] !== 1) {
        this.daysArray.dayValue[0] -= 1
      } else if (dayOfTheWeek === "tuesday" && this.daysArray.dayValue[1] !== 1) {
        this.daysArray.dayValue[1] -= 1
      } else if (dayOfTheWeek === "wednesday" && this.daysArray.dayValue[2] !== 1) {
        this.daysArray.dayValue[2] -= 1
      } else if (dayOfTheWeek === "thursday" && this.daysArray.dayValue[3] !== 1) {
        this.daysArray.dayValue[3] -= 1
      } else if (dayOfTheWeek === "friday" && this.daysArray.dayValue[4] !== 1) {
        this.daysArray.dayValue[4] -= 1
      } else if (dayOfTheWeek === "saturday" && this.daysArray.dayValue[5] !== 1) {
        this.daysArray.dayValue[5] -= 1
      } else if (dayOfTheWeek === "sunday" && this.daysArray.dayValue[6] !== 1) {
        this.daysArray.dayValue[6] -= 1
      }
    },
  },
};

</script>

  
<template>
  <Layout>
    <div class="project-wrapper mf-form-width">

      <h2 class="text-primary text-uppercase">{{$t("t-schedulesettings")}}</h2>
      <p class="text-muted">{{$t("t-scheduleinfotext")}}.</p>

      <div class="card">
        <div class="card-body">

          <!-- TRUE/FALSE NEW MEETING -->
          <div id="yesnoDiv" class="p-3 card-body">
            <p class="font-size-medium">
              {{$t("t-doyouacceptmeetings")}}
            </p>
            <!-- Padding -->
            <div class="col-6 row p-3">

              <!-- Yes -->
              <div class="form-check col-lg-2">
                <input class="form-check-input" type="radio" id="yesGridCheck" value="YES" v-model="picked" />
                <label class="form-check-label text-uppercase" for="yesGridCheck">{{$t("t-yes")}}</label>
              </div>

              <!-- No -->
              <div class="form-check col-lg-2">
                <input class="form-check-input" type="radio" id="noGridCheck" value="NO" v-model="picked" />
                <label class="form-check-label text-uppercase" for="noGridCheck">{{$t("t-no")}}</label>
              </div>
            </div>
          </div>


          <!-- DAYS OF THE WEEK CHECKBOXES -->
          <div id="daysOfWeekDiv" class="p-3 card-body">
            <p class="font-size-medium">
              Which days do you accept meetings?
            </p>
            <!-- Padding -->
            <div class="row p-3 mf-schedule-days">

              <div v-for="(value, key) in daysArray.days" :key="key">
                <DaysCheckModule :day="value" v-model="daysArray.showValue[key]" />
              </div>


            </div>
          </div>


          <!-- SCHEDULE PICKER -->
          <div id="schedulePickerDiv" class="row p-2">

            <!-- MONDAY SCHEUDLE -->
            <div class="p-3" v-if="daysArray.showValue.at(0)">
              <label for="mondayDiv" class="form-label mb-2 font-size-medium"><strong>Monday Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.dayValue.at(0)" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('monday')">Add</button>
                <button class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('monday')">Remove</button>
              </div>
            </div>

            <!-- TUESDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.showValue.at(1)">
              <label for="tuesdayDiv" class="form-label mb-2 font-size-medium"><strong>Tuesday
                  Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.dayValue.at(1)" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('tuesday')">Add</button>
                <button class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('tuesday')">Remove</button>
              </div>
            </div>

            <!-- WEDNESDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.showValue.at(2)">
              <label for="wednesdayDiv" class="form-label mb-2 font-size-medium"><strong>Wednesday
                  Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.dayValue.at(2)" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('wednesday')">Add</button>
                <button class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('wednesday')">Remove</button>
              </div>
            </div>

            <!-- THURSDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.showValue.at(3)">
              <label for="thursdayDiv" class="form-label mb-2 font-size-medium"><strong>Thursday
                  Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.dayValue.at(3)" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('thursday')">Add</button>
                <button class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('thursday')">Remove</button>
              </div>
            </div>

            <!-- FRIDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.showValue.at(4)">
              <label for="fridayDiv" class="form-label mb-2 font-size-medium"><strong>Friday Schedule</strong></label>

              <div v-for="index in daysArray.dayValue.at(4)" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('friday')">Add</button>
                <button class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('friday')">Remove</button>
              </div>
            </div>

            <!-- SATURDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.showValue.at(5)">
              <label for="saturdayDiv" class="form-label mb-2 font-size-medium"><strong>Saturday
                  Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.dayValue.at(5)" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('saturday')">Add</button>
                <button class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('saturday')">Remove</button>
              </div>
            </div>

            <!-- SUNDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.showValue.at(6)">
              <label for="sundayDiv" class="form-label mb-2 font-size-medium"><strong>Sunday Schedule</strong></label>


              <!-- Schedules -->
              <div v-for="index in daysArray.dayValue.at(6)" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('sunday')">Add</button>
                <button class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('sunday')">Remove</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
    <footermodule />
  </Layout>
</template>
  
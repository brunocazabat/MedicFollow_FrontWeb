<script>
// General components imports
import Layout from "@/components/view-related/layout/main.vue";
import footermodule from "@/components/view-related/login-components/footer-module.vue";

// Specific Components imports
import ScheduleModule from "./scheduleModule.vue";
import DaysCheckModule from "./daysOfTheWeekCheck.vue";

export default {
  data() {
    return {
      value: ['javascript'],

      // Days value array
      daysArray: [
        { id: 0, dayName: "Monday", scheduleVal: true, scheduleNbr: 2 },
        { id: 1, dayName: "Tuesday", scheduleVal: false, scheduleNbr: 1 },
        { id: 2, dayName: "Wednesday", scheduleVal: false, scheduleNbr: 1 },
        { id: 3, dayName: "Thursday", scheduleVal: false, scheduleNbr: 1 },
        { id: 4, dayName: "Friday", scheduleVal: false, scheduleNbr: 1 },
        { id: 5, dayName: "Saturday", scheduleVal: false, scheduleNbr: 1 },
        { id: 6, dayName: "Sunday", scheduleVal: false, scheduleNbr: 1 },

      ],

      // Radio Box Var
      picked: 'NO',

      // Send button var
      submitSchedulesDisabled: true,
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
      this.daysArray.forEach(day => {
        if (dayOfTheWeek === day.dayName.toLowerCase()) {
          day.scheduleNbr += 1;
        }
      })
    },
    // Removes a schedule to display, cannot display 0 schedule
    removeScheduleNbr(dayOfTheWeek) {
      this.daysArray.forEach(day => {
        if (dayOfTheWeek === day.dayName.toLowerCase() && day.scheduleNbr > 1) {
          day.scheduleNbr -= 1;
        }
      })
    },
    // This function should check if the doctor can submit the schedule
    // TODO: Make it work (either $reactive or checking in the submit button itself)
    checkSchedules() {
      this.daysArray.forEach(day => {
        if (day.scheduleVal) {
          this.submitSchedulesDisabled = false;
        }
      });
      this.submitSchedulesDisabled = true;
    }
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

              <div v-for="(day, key) in daysArray" :key="key">
                <DaysCheckModule :day="day.dayName" v-model="day.scheduleVal" />
              </div>


            </div>
          </div>


          <!-- SCHEDULE PICKER -->
          <div id="schedulePickerDiv" class="row p-2">

            <!-- MONDAY SCHEUDLE -->
            <div class="p-3" v-if="daysArray.at(0).scheduleVal">
              <label for="mondayDiv" class="form-label mb-2 font-size-medium"><strong>Monday Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.at(0).scheduleNbr" :key="index">
                <ScheduleModule />
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
            <div class="p-3" v-if="daysArray.at(1).scheduleVal">
              <label for="tuesdayDiv" class="form-label mb-2 font-size-medium"><strong>Tuesday
                  Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.at(1).scheduleNbr" :key="index">
                <ScheduleModule />
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
            <div class="p-3" v-if="daysArray.at(2).scheduleVal">
              <label for="wednesdayDiv" class="form-label mb-2 font-size-medium"><strong>Wednesday
                  Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.at(2).scheduleNbr" :key="index">
                <ScheduleModule />
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
            <div class="p-3" v-if="daysArray.at(3).scheduleVal">
              <label for="thursdayDiv" class="form-label mb-2 font-size-medium"><strong>Thursday
                  Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.at(3).scheduleNbr" :key="index">
                <ScheduleModule />
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
            <div class="p-3" v-if="daysArray.at(4).scheduleVal">
              <label for="fridayDiv" class="form-label mb-2 font-size-medium"><strong>Friday Schedule</strong></label>

              <div v-for="index in daysArray.at(4).scheduleNbr" :key="index">
                <ScheduleModule />
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
            <div class="p-3" v-if="daysArray.at(5).scheduleVal">
              <label for="saturdayDiv" class="form-label mb-2 font-size-medium"><strong>Saturday
                  Schedule</strong></label>

              <!-- Schedules -->
              <div v-for="index in daysArray.at(5).scheduleNbr" :key="index">
                <ScheduleModule />
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
            <div class="p-3" v-if="daysArray.at(6).scheduleVal">
              <label for="sundayDiv" class="form-label mb-2 font-size-medium"><strong>Sunday Schedule</strong></label>


              <!-- Schedules -->
              <div v-for="index in daysArray.at(6).scheduleNbr" :key="index">
                <ScheduleModule />
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

      <div class="p-3 mb-3 row align-right">
        <div class="space-in-between">
          <button class="lh-1 btn btn-primary font-size-medium col-sm-4" v-on:click="prevView()"
            :disabled="checkSchedules">{{$t("t-submit")}}</button>
        </div>
      </div>

    </div>
    <footermodule />
  </Layout>
</template>
  
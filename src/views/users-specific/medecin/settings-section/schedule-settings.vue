<script>
import Layout from "@/components/layouts/main.vue";
import footermodule from "@/components/login-components/footer-module.vue";

import ScheduleModule from "./scheduleModule.vue";
import { createElement } from "preact";

export default {
  data() {
    return {
      value: ['javascript'],

      showWeek: false,
      showSchedule: false,
      showMonday: false,
      showTuesday: false,
      showWednesday: false,
      showThursday: false,
      showFriday: false,
      showSaturday: false,
      showSunday: false,
      picked: 'NO',
      message: "oskour",
      mondayNbr: 1,
      tuesdayNbr: 1,
      wednsedayNbr: 1,
      thursdayNbr: 1,
      fridayNbr: 1,
      saturdayNbr: 1,
      sundayNbr: 1,
    };
  },
  components: {
    Layout,
    footermodule,
    ScheduleModule,
  },
  methods: {
    addScheduleNbr(dayOfTheWeek) {
      if (dayOfTheWeek === "monday" && this.mondayNbr !== 5) {
        this.mondayNbr += 1
      } else if (dayOfTheWeek === "tuesday" && this.tuesdayNbr !== 5) {
        this.tuesdayNbr += 1
      } else if (dayOfTheWeek === "wednesday" && this.wednsedayNbr !== 5) {
        this.wednesdayNbr += 1
      } else if (dayOfTheWeek === "thursday" && this.thursdayNbr !== 5) {
        this.thursdayNbr += 1
      } else if (dayOfTheWeek === "friday" && this.fridayNbr !== 5) {
        this.fridayNbr += 1
      } else if (dayOfTheWeek === "saturday" && this.saturdayNbr !== 5) {
        this.saturdayNbr += 1
      } else if (dayOfTheWeek === "sunday" && this.sundayNbr !== 5) {
        this.sundayNbr += 1
      }
    },
    removeScheduleNbr(dayOfTheWeek) {
      if (dayOfTheWeek === "monday" && this.mondayNbr !== 1) {
        this.mondayNbr -= 1
      } else if (dayOfTheWeek === "tuesday" && this.tuesdayNbr !== 1) {
        this.tuesdayNbr -= 1
      } else if (dayOfTheWeek === "wednesday" && this.wednsedayNbr !== 1) {
        this.wednesdayNbr -= 1
      } else if (dayOfTheWeek === "thursday" && this.thursdayNbr !== 1) {
        this.thursdayNbr -= 1
      } else if (dayOfTheWeek === "friday" && this.fridayNbr !== 1) {
        this.fridayNbr -= 1
      } else if (dayOfTheWeek === "saturday" && this.saturdayNbr !== 1) {
        this.saturdayNbr -= 1
      } else if (dayOfTheWeek === "sunday" && this.sundayNbr !== 1) {
        this.sundayNbr -= 1
      }
    },
    addNewSchedule() {
      createElement(
        // {String | Object | Function}
        // An HTML tag name, component options, or function
        // returning one of these. Required.
        'div',

        // {Object}
        // A data object corresponding to the attributes
        // you would use in a template. Optional.
        {
          // (see details in the next section below)
        },

        // {String | Array}
        // Children VNodes, built using `createElement()`,
        // or using strings to get 'text VNodes'. Optional.
        [
          'Some text comes first.',
          createElement('h1', 'A headline'),

        ]
      )
    }
  },
  render: function (createElement) {
    return createElement('h1', "A headline")
  }
};

</script>

  
<template>
  <Layout>
    <div class="project-wrapper mf-form-width">

      <h2 class="text-primary text-uppercase">{{$t("t-schedulesettings")}}</h2>
      <p class="text-muted">{{$t("t-scheduleinfotext")}}.</p>

      <div class="card">
        <div class="card-body">



          <!-- <h1>
      <a name="hello-world" href="#hello-world">
        Hello world!
      </a>
    </h1>

    <anchored-heading :level="1">Hello world!</anchored-heading>

    <p>{{message}}</p>
    <button v-on:click="addNewSchedule()" class="btn btn-primary">Add a new schedule</button> -->


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

              <!-- Monday -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="mondayGridCheck" v-model="showMonday" />
                <label class="form-check-label" for="mondayGridCheck">MONDAY</label>
              </div>

              <!-- Tuesday -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="tuesdayGridCheck" v-model="showTuesday" />
                <label class="form-check-label" for="tuesdayGridCheck">TUESDAY</label>
              </div>

              <!-- Wednesday -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="wednesdayGridCheck" v-model="showWednesday" />
                <label class="form-check-label" for="wednesdayGridCheck">WEDNESDAY</label>
              </div>

              <!-- Thursday -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="thursdayGridCheck" v-model="showThursday" />
                <label class="form-check-label" for="thursdayGridCheck">THURSDAY</label>
              </div>

              <!-- Friday -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="fridayGridCheck" v-model="showFriday" />
                <label class="form-check-label" for="fridayGridCheck">FRIDAY</label>
              </div>

              <!-- Saturday -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="saturdayGridCheck" v-model="showSaturday" />
                <label class="form-check-label" for="saturdayGridCheck">SATURDAY</label>
              </div>

              <!-- Sunday -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="sundayGridCheck" v-model="showSunday" />
                <label class="form-check-label" for="sundayGridCheck">SUNDAY</label>
              </div>
            </div>
          </div>


          <!-- SCHEDULE PICKER -->
          <div id="schedulePickerDiv" class="row p-2">

            <!-- MONDAY SCHEUDLE -->
            <div class="p-3" v-if="showMonday">
              <label for="mondayDiv" class="form-label mb-2 font-size-medium"><strong>Monday Schedule</strong></label>
              <div class="btn-padding mb-4">
                <button class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('monday')">Add</button>
                <button class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('monday')">Remove</button>
              </div>


              <div v-for="index in mondayNbr" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>
            </div>

            <!-- TUESDAY SCHEDULE -->
            <div class="p-3" v-if="showTuesday">
              <label for="tuesdayDiv" class="form-label mb-4 font-size-medium"><strong>Tuesday Schedule</strong></label>
              <button class="btn btn-secondary" v-on:click="addScheduleNbr('tuesday')">Add</button>
              <button class="btn btn-secondary" v-on:click="removeScheduleNbr('tuesday')">Remove</button>

              <div v-for="index in tuesdayNbr" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>
            </div>

            <!-- WEDNESDAY SCHEDULE -->
            <div class="p-3" v-if="showWednesday">
              <label for="wednesdayDiv" class="form-label mb-4 font-size-medium"><strong>Wednesday
                  Schedule</strong></label>
              <button class="btn btn-secondary" v-on:click="addScheduleNbr('wednesday')">Add</button>
              <button class="btn btn-secondary" v-on:click="removeScheduleNbr('wednesday')">Remove</button>

              <div v-for="index in wednesdayNbr" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>
            </div>

            <!-- THURSDAY SCHEDULE -->
            <div class="p-3" v-if="showThursday">
              <label for="thursdayDiv" class="form-label mb-4 font-size-medium"><strong>Thursday
                  Schedule</strong></label>
              <button class="btn btn-secondary" v-on:click="addScheduleNbr('thursday')">Add</button>
              <button class="btn btn-secondary" v-on:click="removeScheduleNbr('thursday')">Remove</button>

              <div v-for="index in thursdayNbr" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>
            </div>

            <!-- FRIDAY SCHEDULE -->
            <div class="p-3" v-if="showFriday">
              <label for="fridayDiv" class="form-label mb-4 font-size-medium"><strong>Friday Schedule</strong></label>
              <button class="btn btn-secondary" v-on:click="addScheduleNbr('friday')">Add</button>
              <button class="btn btn-secondary" v-on:click="removeScheduleNbr('friday')">Remove</button>

              <div v-for="index in fridayNbr" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>
            </div>

            <!-- SATURDAY SCHEDULE -->
            <div class="p-3" v-if="showSaturday">
              <label for="saturdayDiv" class="form-label mb-4 font-size-medium"><strong>Saturday
                  Schedule</strong></label>
              <button class="btn btn-secondary" v-on:click="addScheduleNbr('saturday')">Add</button>
              <button class="btn btn-secondary" v-on:click="removeScheduleNbr('saturday')">Remove</button>

              <div v-for="index in saturdayNbr" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>
            </div>

            <!-- SUNDAY SCHEDULE -->
            <div class="p-3" v-if="showSunday">
              <label for="sundayDiv" class="form-label mb-4 font-size-medium"><strong>Sunday Schedule</strong></label>
              <button class="btn btn-secondary" v-on:click="addScheduleNbr('sunday')">Add</button>
              <button class="btn btn-secondary" v-on:click="removeScheduleNbr('sunday')">Remove</button>

              <div v-for="index in sundayNbr" :key="index">
                <ScheduleModule title="Test Schedule" />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
    <footermodule />
  </Layout>
</template>
  
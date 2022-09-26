<script>
import Layout from "@/components/layouts/main.vue";
import appConfig from "@/../app.config";
import footermodule from "@/components/login-components/footer-module.vue";

import ScheduleModule from "./scheduleModule.vue";
import { createElement } from "preact";

export default {
  page: {
    title: "Schedule",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Schedule",
      items: [
        {
          text: "Settings",
          href: "/",
        },
        {
          text: "Schedule",
          active: true,
        },
      ],
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
    <h1 class="p-1 text-primary"><strong>SCHEDULE SETTINGS</strong></h1>

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
        Do you accept meetings?
      </p>
      <!-- Padding -->
      <div class="col-6 row p-3">

        <!-- Yes -->
        <div class="form-check col-lg-2">
          <input class="form-check-input" type="radio" id="yesGridCheck" value="YES" v-model="picked" />
          <label class="form-check-label" for="yesGridCheck">YES</label>
        </div>

        <!-- No -->
        <div class="form-check col-lg-2">
          <input class="form-check-input" type="radio" id="noGridCheck" value="NO" v-model="picked" />
          <label class="form-check-label" for="noGridCheck">NO</label>
        </div>
      </div>
    </div>


    <!-- DAYS OF THE WEEK CHECKBOXES -->
    <div id="daysOfWeekDiv" class="p-3 card-body" v-if="picked === 'YES'">
      <p class="font-size-medium">
        Which days do you accept meetings?
      </p>
      <!-- Padding -->
      <div class="col-12 row p-3">

        <!-- Monday -->
        <div class="form-check col-lg-1">
          <input class="form-check-input" type="checkbox" id="mondayGridCheck" v-model="showMonday" />
          <label class="form-check-label" for="mondayGridCheck">MONDAY</label>
        </div>

        <!-- Tuesday -->
        <div class="form-check col-lg-1">
          <input class="form-check-input" type="checkbox" id="tuesdayGridCheck" v-model="showTuesday" />
          <label class="form-check-label" for="tuesdayGridCheck">TUESDAY</label>
        </div>

        <!-- Wednesday -->
        <div class="form-check col-lg-1">
          <input class="form-check-input" type="checkbox" id="wednesdayGridCheck" v-model="showWednesday" />
          <label class="form-check-label" for="wednesdayGridCheck">WEDNESDAY</label>
        </div>

        <!-- Thursday -->
        <div class="form-check col-lg-1">
          <input class="form-check-input" type="checkbox" id="thursdayGridCheck" v-model="showThursday" />
          <label class="form-check-label" for="thursdayGridCheck">THURSDAY</label>
        </div>

        <!-- Friday -->
        <div class="form-check col-lg-1">
          <input class="form-check-input" type="checkbox" id="fridayGridCheck" v-model="showFriday" />
          <label class="form-check-label" for="fridayGridCheck">FRIDAY</label>
        </div>

        <!-- Saturday -->
        <div class="form-check col-lg-1">
          <input class="form-check-input" type="checkbox" id="saturdayGridCheck" v-model="showSaturday" />
          <label class="form-check-label" for="saturdayGridCheck">SATURDAY</label>
        </div>

        <!-- Sunday -->
        <div class="form-check col-lg-1">
          <input class="form-check-input" type="checkbox" id="sundayGridCheck" v-model="showSunday" />
          <label class="form-check-label" for="sundayGridCheck">SUNDAY</label>
        </div>
      </div>
    </div>


    <!-- SCHEDULE PICKER -->
    <div id="schedulePickerDiv" class="row p-2" v-if="picked === 'YES'">
      <div class="p-2" v-if="showMonday">

        <label for="mondayDiv" class="form-label mb-4"><strong>Monday Schedule</strong></label>

        <button class="btn btn-secondary" v-on:click="addScheduleNbr('monday')">Add</button>
        <button class="btn btn-secondary" v-on:click="removeScheduleNbr('monday')">Remove</button>

        <ScheduleModule title="Choose the first schedule" />

        <ScheduleModule v-if="this.mondayNbr > 1" title="Choose the second schedule" />

        <ScheduleModule v-if="this.mondayNbr > 2" title="Choose the third schedule" />

        <ScheduleModule v-if="this.mondayNbr > 3" title="Choose the fourth schedule" />

        <ScheduleModule v-if="this.mondayNbr > 4" title="Choose the fifth schedule" />

      </div>

      <div class="p-2" v-if="showTuesday">
        <label for="tuesdayDiv" class="form-label">Tuesday Schedule</label>
        <div id="tuesdayDiv" class="col-lg-1">
          <select id="tuesdaySchedule" class="form-select">
            <option value="06">6:00</option>
            <option value="07">7:00</option>
            <option value="08">8:00</option>
          </select>
        </div>
      </div>

      <div class="p-2" v-if="showWednesday">
        <label for="wednesdaySchedule" class="form-label">Wednesday Schedule</label>
        <div id="wednesdayDiv" class="col-lg-1">
          <select id="wednesdaySchedule" class="form-select">
            <option value="06">6:00</option>
            <option value="07">7:00</option>
            <option value="08">8:00</option>
          </select>
        </div>
      </div>

      <div class="p-2" v-if="showThursday">
        <label for="thursdayDiv" class="form-label">Thursday Schedule</label>
        <div id="thursdayDiv" class="col-lg-1">
          <select id="thursdaySchedule" class="form-select">
            <option value="06">6:00</option>
            <option value="07">7:00</option>
            <option value="08">8:00</option>
          </select>
        </div>
      </div>

      <div class="p-2" v-if="showFriday">
        <label for="fridayDiv" class="form-label">Friday Schedule</label>
        <div id="fridayDiv" class="col-lg-1">
          <select id="fridaySchedule" class="form-select">
            <option value="06">6:00</option>
            <option value="07">7:00</option>
            <option value="08">8:00</option>
          </select>
        </div>
      </div>

      <div class="p-2" v-if="showSaturday">
        <label for="saturdayDiv" class="form-label">Saturday Schedule</label>
        <div id="saturdayDiv" class="col-lg-1">
          <select id="saturdaySchedule" class="form-select">
            <option value="06">6:00</option>
            <option value="07">7:00</option>
            <option value="08">8:00</option>
          </select>
        </div>
      </div>

      <div class="p-2" v-if="showSunday">
        <label for="sundayDiv" class="form-label">Sunday Schedule</label>
        <div id="sundayDiv" class="col-lg-1">
          <select id="sundaySchedule" class="form-select">
            <option value="06">6:00</option>
            <option value="07">7:00</option>
            <option value="08">8:00</option>
          </select>
        </div>
      </div>
    </div>

    <footermodule />
  </Layout>
</template>
  
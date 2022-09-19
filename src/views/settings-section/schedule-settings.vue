<script>
import Layout from "@/components/layouts/main.vue";
import appConfig from "@/../app.config";
import footermodule from "@/components/login-components/footer-module.vue";

export default {
  page: {
    title: "Contact",
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
    };
  },
  components: {
    Layout,
    footermodule,
  },
  methods: {},
};

</script>
  
<template>
  <Layout>
    <h1 class="p-1 text-primary"><strong>SCHEDULE SETTINGS</strong></h1>

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
          <!-- <p>debug: {{showMonday}}</p> -->
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
        <div id="mondayDiv" class="row">
          <p class="mb-0">Choose the first schedule</p>
          <div class="col-lg-1 p-3">
            <select id="mondaySchedule1" class="form-select">
              <option value="00">00:00</option>
              <option value="01">01:00</option>
              <option value="02">02:00</option>
              <option value="03">03:00</option>
              <option value="04">04:00</option>
              <option value="05">05:00</option>
              <option value="06" selected>06:00</option>
              <option value="07">07:00</option>
              <option value="08">08:00</option>
              <option value="09">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
            </select>
          </div>

          <div class="col-lg-1 p-3">
            <select id="mondaySchedule2" class="form-select">
              <option value="00">00:00</option>
              <option value="01">01:00</option>
              <option value="02">02:00</option>
              <option value="03">03:00</option>
              <option value="04">04:00</option>
              <option value="05">05:00</option>
              <option value="06">06:00</option>
              <option value="07">07:00</option>
              <option value="08" selected>08:00</option>
              <option value="09">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
            </select>
          </div>
        </div>

        <div class="row">
          <p class="mb-0">Choose the second schedule</p>
          <div class="col-lg-1 p-3">
            <select id="mondaySchedule3" class="form-select">
              <option value="00">00:00</option>
              <option value="01">01:00</option>
              <option value="02">02:00</option>
              <option value="03">03:00</option>
              <option value="04">04:00</option>
              <option value="05">05:00</option>
              <option value="06">06:00</option>
              <option value="07">07:00</option>
              <option value="08">08:00</option>
              <option value="09">09:00</option>
              <option value="10" selected>10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
            </select>
          </div>

          <div class="col-lg-1 p-3">
            <select id="mondaySchedule4" class="form-select">
              <option value="00">00:00</option>
              <option value="01">01:00</option>
              <option value="02">02:00</option>
              <option value="03">03:00</option>
              <option value="04">04:00</option>
              <option value="05">05:00</option>
              <option value="06">06:00</option>
              <option value="07">07:00</option>
              <option value="08">08:00</option>
              <option value="09">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12" selected>12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
            </select>
          </div>
        </div>

        <div class="row">
          <p class="mb-0">Choose the third schedule</p>
          <div class="col-lg-1 p-3">
            <select id="mondaySchedule4" class="form-select">
              <option value="00">00:00</option>
              <option value="01">01:00</option>
              <option value="02">02:00</option>
              <option value="03">03:00</option>
              <option value="04">04:00</option>
              <option value="05">05:00</option>
              <option value="06">06:00</option>
              <option value="07">07:00</option>
              <option value="08">08:00</option>
              <option value="09">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14" selected>14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
            </select>
          </div>

          <div class="col-lg-1 p-3">
            <select id="mondaySchedule5" class="form-select">
              <option value="00">00:00</option>
              <option value="01">01:00</option>
              <option value="02">02:00</option>
              <option value="03">03:00</option>
              <option value="04">04:00</option>
              <option value="05">05:00</option>
              <option value="06">06:00</option>
              <option value="07">07:00</option>
              <option value="08">08:00</option>
              <option value="09">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16" selected>16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
            </select>
          </div>
        </div>

        <div class="row">
          <p class="mb-0">Choose the fourth schedule</p>
          <div class="col-lg-1 p-3">
            <select id="mondaySchedule6" class="form-select">
              <option value="00">00:00</option>
              <option value="01">01:00</option>
              <option value="02">02:00</option>
              <option value="03">03:00</option>
              <option value="04">04:00</option>
              <option value="05">05:00</option>
              <option value="06">06:00</option>
              <option value="07">07:00</option>
              <option value="08">08:00</option>
              <option value="09">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18" selected>18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
            </select>
          </div>

          <div class="col-lg-1 p-3">
            <select id="mondaySchedule7" class="form-select">
              <option value="00">00:00</option>
              <option value="01">01:00</option>
              <option value="02">02:00</option>
              <option value="03">03:00</option>
              <option value="04">04:00</option>
              <option value="05">05:00</option>
              <option value="06">06:00</option>
              <option value="07">07:00</option>
              <option value="08">08:00</option>
              <option value="09">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20" selected>20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
            </select>
          </div>
        </div>
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
  
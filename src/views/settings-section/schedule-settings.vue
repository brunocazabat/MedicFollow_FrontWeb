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
    <h1 class="p-2">SCHEDULE SETTINGS</h1>

    <div class="p-2">
      <label for="mondaySchedule" class="form-label">Monday Schedule</label>
      <select id="mondaySchedule" class="form-select">
        <option value="06">6:00</option>
        <option value="07">7:00</option>
        <option value="08">8:00</option>
      </select>
    </div>

    <div class="p-2">
      <label for="tuesdaySchedule" class="form-label">Tuesday Schedule</label>
      <select id="tuesdaySchedule" class="form-select">
        <option value="06">6:00</option>
        <option value="07">7:00</option>
        <option value="08">8:00</option>
      </select>
    </div>

    <div class="p-2">
      <label for="wednesdaySchedule" class="form-label">Wednesday Schedule</label>
      <select id="wednesdaySchedule" class="form-select">
        <option value="06">6:00</option>
        <option value="07">7:00</option>
        <option value="08">8:00</option>
      </select>
    </div>

    <div class="p-2">
      <label for="thursdaySchedule" class="form-label">Thursday Schedule</label>
      <select id="thursdaySchedule" class="form-select">
        <option value="06">6:00</option>
        <option value="07">7:00</option>
        <option value="08">8:00</option>
      </select>
    </div>

    <div class="p-2">
      <label for="fridaySchedule" class="form-label">Friday Schedule</label>
      <select id="fridaySchedule" class="form-select">
        <option value="06">6:00</option>
        <option value="07">7:00</option>
        <option value="08">8:00</option>
      </select>
    </div>

    <div class="p-2">
      <label for="saturdaySchedule" class="form-label">Saturday Schedule</label>
      <select id="saturdaySchedule" class="form-select">
        <option value="06">6:00</option>
        <option value="07">7:00</option>
        <option value="08">8:00</option>
      </select>
    </div>

    <div class="p-2">
      <label for="sundaySchedule" class="form-label">Sunday Schedule</label>
      <select id="sundaySchedule" class="form-select">
        <option value="06">6:00</option>
        <option value="07">7:00</option>
        <option value="08">8:00</option>
      </select>
    </div>

    <footermodule />
  </Layout>
</template>
  
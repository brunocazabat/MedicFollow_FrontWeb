<script>
import flatPickr from "vue-flatpickr-component";
import axios from "axios";
import Swal from "sweetalert2";

// State Imports
import {
  AuthGetters,
  PatientGetters,
} from "@/components/back-related/state/helpers";

// Methods Imports
import calendar from "./calendar";
import schedules from "@/components/back-related/meeting";
import dayjs from "dayjs";

export default {
  props: {
    // The current patient
    patientUUID: {
      type: String,
      required: true,
    },
  },
  components: {
    flatPickr,
  },
  data() {
    return {
      date: null,
      config: {
        inline: true,
      },

      // Patient State
      patientInfo: {
        firstName: null,
        lastName: null,
        socialNumber: null,
        UUID: null,
        patientUUID: null,
      },

      calendar: null,
      activitiesArray: [] || null,
    };
  },
  methods: {
    ...calendar,
    ...schedules,
    ...AuthGetters,
    ...PatientGetters,

    // Method to retrieve the patients list and setting the patient state to the first patient
    async getPatients() {
      await axios({
        method: "get",
        url: "patient/",
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            this.setPatient(response.data.patients[0]);
          }
        })
        .catch((error) => {
          // Sweet Alert
          Swal.fire({
            title: "Erreur",
            icon: "error",
            text: `${this.$t("t-error-occured")}. Error: ${error}`,
          });
        });
    },

    // Method to set the patient state
    setPatient(patient) {
      this.patientInfo.firstName = patient.user.firstname;
      this.patientInfo.lastName = patient.user.lastname;
      this.patientInfo.lastName = this.patientInfo.lastName.toUpperCase();
      // TODO: Change to social number when implemented in the backend
      this.patientInfo.socialNumber = patient.user.uuid;
      this.patientInfo.UUID = patient.user.uuid;
      this.patientInfo.patientUUID = patient.uuid;
    },

    // Method to return the last 2 letters of a string
    getLastTwoLetters(string) {
      return string.slice(-2);
    },

    // Method to parse the date
    parseDate(date) {
      return dayjs(date).format("YYYY-MM-DD");
    },

    // Method to parse the time
    parseTime(time) {
      return dayjs(time).format("HH:mm");
    },
  },
  async mounted() {
    // Today date as YYYY-MM-DD
    let dateToday = dayjs().format("YYYY-MM-DD");
    // End day = Today + 29 days
    let dateEnd = dayjs().add(29, "day").format("YYYY-MM-DD");

    await this.getPatients();
    this.calendar = await calendar.getCalendar(
      this.patientInfo.patientUUID,
      this.gettoken().Token
    );
    this.activitiesArray = await calendar.getMultipleActivities(
      dateToday,
      dateEnd,
      this.calendar.uuid,
      this.gettoken().Token
    );
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header border-0">
      <h4 class="card-title mb-0" data-key="t-upcomingsch">
        {{ $t("t-upcomingsch") }}
      </h4>
    </div>
    <!-- end cardheader -->
    <div class="card-body pt-0">
      <div class="upcoming-scheduled">
        <flat-pickr v-model="date" :config="config"></flat-pickr>
      </div>

      <h6
        class="text-uppercase fw-semibold mt-4 mb-3 text-muted"
        data-key="t-event"
      >
        {{ $t("t-event") }}:
      </h6>
      <div
        class="mini-stats-wid d-flex align-items-center mt-3"
        v-for="(activity, index) in activitiesArray"
        :key="index"
      >
        <div class="flex-shrink-0 avatar-sm">
          <span
            class="mini-stat-icon avatar-title rounded-circle text-success bg-soft-success fs-4"
          >
            {{ getLastTwoLetters(parseDate(activity.date)) }}
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mb-1">{{ activity.title }}</h6>
          <p class="text-muted mb-0" data-key="t-appointtype">
            {{ activity.desc }}
          </p>
        </div>
        <div class="flex-shrink-0">
          <p class="text-muted mb-0">
            {{ parseTime(activity.date) }}
          </p>
        </div>
      </div>

      <div class="mt-3 text-center">
        <router-link to="calendar/">
          <a class="text-muted text-decoration-underline">{{
            $t("t-viewcal")
          }}</a>
        </router-link>
      </div>
    </div>
    <!-- end cardbody -->
  </div>
  <!-- end card -->
</template>

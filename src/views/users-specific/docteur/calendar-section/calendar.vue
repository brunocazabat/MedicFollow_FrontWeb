<script>
// General Imports
import Layout from "@/components/view-related/layout/main.vue";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";

// State Imports
import {
  PatientGetters,
  AuthGetters,
  PatientSetters,
} from "@/components/back-related/state/helpers";

// Components Imports
import TableSelectPatient from "../medical-information/patientTable.vue";
import CalendarModule from "./calendarModule.vue";

export default {
  components: {
    Layout,
    TableSelectPatient,
    CalendarModule,
  },
  data() {
    return {
      // Patient Array
      patientArray: [],

      // Calendar State
      calendar: {
        uuid: null,
        desc: null,
        name: null,
      },

      // Activities Array (can be null)
      activitiesArray: [] || null,

      // Page View State
      pageID: 0,
      maxPageID: 1,
      pageEnd: false,

      // Date State for calendar query (dateToday defaults to today and dateNextMonth default to 30 days from today)
      dateToday: dayjs().format("YYYY-MM-DD"),
      dateNextMonth: dayjs().add(30, "day").format("YYYY-MM-DD"),
    };
  },
  methods: {
    ...AuthGetters,
    ...PatientGetters,
    ...PatientSetters,
    // Method to go to the next page (increment pageID, does not increment if equal or above to maxPageID and set pageEnd to true)
    async nextPage() {
      if (this.pageID < this.maxPageID) {
        if (this.pageID === 0) {
          await this.getCalendar();
        }
        this.pageID++;
        if (this.pageID == this.maxPageID) {
          this.pageEnd = true;
        }
      } else {
        this.pageEnd = true;
      }
    },
    // Method to go to the previous page (decrement pageID, does not decrement if equal or below to 0)
    previousPage() {
      if (this.pageID > 0) {
        this.pageID--;
        this.pageEnd = false;
        this.setPatientClearAll();
        this.activitiesArray = [];
      }
    },
    // Method to retrieve the patients list and setting the patient state to the first patient
    async getPatients() {
      await axios({
        method: "get",
        url: "patient/medical",
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            this.patientArray = response.data.patients;
          }
        })
        .catch((error) => {
          // Sweet Alert
          Swal.fire({
            title: `${this.$t("t-error")}`,
            text: `${this.$t("t-error-occured")}. Error: ${
              error.response.status
            }`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    },
    // Checking if the patient in the state is set
    isPatientSet() {
      if (this.getPatientUUID() != null) {
        return true;
      } else {
        // Resetting pageID and pageEnd
        this.pageID = 0;
        this.pageEnd = false;
        return false;
      }
    },
    // Method to get the patient's calendar information
    async getCalendar() {
      let url = `calendar/?patient_uuid=${this.getPatientUUID()}`;

      await axios({
        method: "get",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then(async (response) => {
          if (response.status === 200) {
            this.calendar.uuid = response.data[0].uuid;
            this.calendar.desc = response.data[0].desc;
            this.calendar.name = response.data[0].name;
            await this.getActivities();
          }
        })
        .catch((error) => {
          // Sweet Alert
          Swal.fire({
            title: `${this.$t("t-error")}`,
            text: `${this.$t("t-error-occured")}. Error: ${
              error.response.status
            }`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    },

    // Method to retrieve the patient's calendar's events
    async getActivities(
      startDate = this.dateToday,
      endDate = this.dateNextMonth
    ) {
      let url = `calendar/Activity?calendar_uuid=${this.calendar.uuid}&start_date=${startDate}&end_date=${endDate}`;

      await axios({
        method: "get",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            if (response.data.length > 0) {
              this.activitiesArray = response.data;
            } else {
              this.activitiesArray = null;
            }
            // Ordering the activities by date (ascending)
            this.activitiesArray.sort((a, b) => {
              return a.date > b.date ? 1 : -1;
            });
          }
        })
        .catch((error) => {
          // Sweet Alert
          Swal.fire({
            title: `${this.$t("t-error")}`,
            text: `${this.$t("t-error-occured")}. Error: ${
              error.response.status
            }`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    },
  },
  mounted() {
    this.getPatients();
  },
};
</script>

<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div v-if="!pageEnd" class="card">
            <div class="card-header">
              <h3 class="card-title">{{ $t("t-selectpatient") }}</h3>
            </div>
            <div class="card-body">
              <TableSelectPatient
                :patientArray="patientArray"
                @button-pressed="nextPage"
              />
            </div>
          </div>
          <div v-else-if="pageEnd && isPatientSet()">
            <CalendarModule
              :activitiesArray="activitiesArray"
              :calendarUUID="calendar.uuid"
            />
            <button v-on:click="previousPage" class="btn btn-primary">
              {{ $t("t-previous") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

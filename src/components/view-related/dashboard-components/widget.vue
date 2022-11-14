<script>
// General imports
import {
  CalendarIcon,
  UserIcon,
  AlertTriangleIcon,
} from "@zhuowenli/vue-feather-icons";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";

// State imports
import {
  AuthGetters,
  PatientSetters,
} from "@/components/back-related/state/helpers";

export default {
  components: {
    CalendarIcon,
    UserIcon,
    AlertTriangleIcon,
  },
  data() {
    return {
      // Patient State
      patientInfo: {
        firstName: null,
        lastName: null,
        socialNumber: null,
        UUID: null,
        patientUUID: null,
      },

      // Organisation State
      organisationInfo: {
        name: null,
        UUID: null,
        extension: null,
      },

      // Summary State
      summary: null,
      latestNews: {
        date: {
          day: null,
          hour: null,
        },
        title: null,
        content: null,
      },
    };
  },
  methods: {
    ...AuthGetters,
    ...PatientSetters,
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
            this.getSummary();
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
    // Method to retrieve the summary of the patient
    async getSummary() {
      let url = `summary/activities?patient_uuid=${this.patientInfo.patientUUID}`;

      await axios({
        method: "get",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            this.summary = response.data.summary;
          }
        })
        .catch((error) => {
          // Sweet Alert error occured getting the summary
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${this.$t("t-error-getting-summary")}. Error: ${error}`,
          });
        });
    },

    // Method to retrieve the organisations list
    async getOrganisationNews() {
      await axios({
        method: "get",
        url: "organisation/all",
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then(async (response) => {
          if (response.status === 200) {
            this.organisationInfo.UUID = response.data.organisations[0].uuid;
            this.organisationInfo.name = response.data.organisations[0].name;
            this.organisationInfo.extension =
              response.data.organisations[0].extension;

            // Getting the latest news
            await this.getLatestNews(this.organisationInfo.UUID);
          }
        })
        .catch((error) => {
          // Sweet Alert error occured getting the organisations
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${this.$t(
              "t-error-getting-organisations"
            )}. Error: ${error}`,
          });
        });
    },
    // Method to get the lastest news of the organisation
    async getLatestNews(organisationUUID) {
      let page = "1";
      let url = `organisation/${organisationUUID}/news/?page=${page}`;

      await axios({
        method: "get",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            this.latestNews.date.day = this.parseDate(
              response.data.news[0].createdAt
            );
            this.latestNews.date.hour = this.parseHour(
              response.data.news[0].createdAt
            );
            this.latestNews.title = null;
            this.latestNews.content = response.data.news[0].orgnews_message;
          }
        })
        .catch((error) => {
          // Sweet Alert error occured getting the organisations
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${this.$t(
              "t-error-getting-organisations"
            )}. Error: ${error}`,
          });
        });
    },
    // Method to parse a date
    parseDate(date) {
      return dayjs(date).format("DD/MM/YY");
    },
    // Method to parse an hour
    parseHour(date) {
      return dayjs(date).format("HH:mm");
    },
    // Method to set the patient store in the local storage
    setPatientFromLocalStorage() {
      this.setPatientUUID(this.patientInfo.patientUUID);
      this.setPatientFirstname(this.patientInfo.firstName);
      this.setPatientLastname(this.patientInfo.lastName);
      this.setPatientSocialNumber(this.patientInfo.socialNumber);

      // Route to the patient observation page
      this.$router.push("medical-information/");
    },
  },
  mounted() {
    this.setPatientClearAll();
    this.getPatients();
    this.getOrganisationNews();
  },
};
</script>

<template>
  <div class="row">
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="avatar-sm flex-shrink-0">
              <span class="avatar-title rounded-2 fs-2 bg-soft-info text-info">
                <CalendarIcon size="24"></CalendarIcon>
              </span>
            </div>
            <div class="flex-grow-1 overflow-hidden ms-3">
              <p class="text-uppercase fw-medium text-muted text-truncate mb-3">
                {{ $t("t-nextappoint") }}:
              </p>
              <div class="d-flex align-items-center mb-3">
                <h4 class="fs-4 flex-grow-1 mb-0">
                  <span class="counter-value">Test Event 1</span>
                </h4>
              </div>
              <p class="text-muted text-truncate mb-0">09-07-2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="avatar-sm flex-shrink-0">
              <span class="avatar-title rounded-2 bg-soft-info text-info">
                <UserIcon size="24"></UserIcon>
              </span>
            </div>
            <div class="flex-grow-1 overflow-hidden ms-3">
              <p class="text-uppercase fw-medium text-muted mb-3">
                {{ $t("t-lastinfo") }}:
              </p>
              <div class="d-flex align-items-center mb-3">
                <h4 class="fs-4 flex-grow-1 mb-0">
                  <span class="counter-value"
                    >{{ patientInfo.lastName }}
                    {{ patientInfo.firstName }}</span
                  >
                </h4>
              </div>
              <div class="row">
                <p class="text-muted text-truncate mb-0" style="width: 75%">
                  {{ summary }}
                </p>
                <button
                  class="btn btn-outline-info btn-sm"
                  style="
                    width: 22%;
                    height: 20px !important;
                    padding-bottom: 0px !important;
                    margin-bottom: 0px !important;
                  "
                  v-on:click="setPatientFromLocalStorage"
                >
                  <p style="margin-top: -2.5px">{{ $t("t-read-more") }}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="avatar-sm flex-shrink-0">
              <span
                class="avatar-title rounded-2 fs-2 bg-soft-warning text-warning"
              >
                <AlertTriangleIcon size="24"></AlertTriangleIcon>
              </span>
            </div>
            <div class="flex-grow-1 overflow-hidden ms-3">
              <p class="text-uppercase fw-medium text-muted text-truncate mb-3">
                {{ $t("t-latest-announcement") }}:
              </p>
              <div class="d-flex align-items-center mb-3">
                <h4 class="fs-4 flex-grow-1 mb-0">
                  <span class="counter-value">{{ organisationInfo.name }}</span>
                </h4>
              </div>
              <p class="text-muted text-truncate mb-0">
                {{ latestNews.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

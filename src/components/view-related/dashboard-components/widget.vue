<script>
// General imports
import {
  CalendarIcon,
  UserIcon,
  AlertTriangleIcon,
} from "@zhuowenli/vue-feather-icons";
import axios from "axios";
import Swal from "sweetalert2";

// State imports
import { AuthGetters } from "@/components/back-related/state/helpers";

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

      // Summary State
      summary: null,
    };
  },
  methods: {
    ...AuthGetters,
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
          console.log(error);
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
  },
  mounted() {
    this.getPatients();
    setTimeout(() => {
      this.getSummary();
    }, 400);
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
              <p
                class="text-uppercase fw-medium text-muted text-truncate mb-3"
                data-key="t-nextappoint"
              >
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
              <span class="avatar-title rounded-2 fs-2 bg-soft-info text-info">
                <UserIcon size="24"></UserIcon>
              </span>
            </div>
            <div class="flex-grow-1 overflow-hidden ms-3">
              <p
                class="text-uppercase fw-medium text-muted text-truncate mb-3"
                data-key="t-lastinfo"
              >
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
              <p class="text-muted text-truncate mb-0" data-key="t-situation">
                {{ summary }}
              </p>
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
              <p
                class="text-uppercase fw-medium text-muted text-truncate mb-3"
                data-key="t-covidwarn"
              >
                {{ $t("t-covidwarn") }}:
              </p>
              <div class="d-flex align-items-center mb-3">
                <h4 class="fs-4 flex-grow-1 mb-0">
                  <span class="counter-value">Test</span>
                </h4>
              </div>
              <p class="text-muted text-truncate mb-0" data-key="t-care">
                {{ $t("t-care") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

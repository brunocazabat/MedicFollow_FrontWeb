<script>
// General imports
import Layout from "@/components/view-related/layout/main.vue";
import axios from "axios";
import Swal from "sweetalert2";

// Specific Components imports
import CheckupText from "./checkup-text.vue";
import PatientTableModule from "./patientTable.vue";

// State imports
import {
  ApiActions,
  AuthGetters,
  PatientSetters,
  PatientGetters,
} from "@/components/back-related/state/helpers";

export default {
  data() {
    return {
      // View vars
      viewID: 0,
      viewEnd: false,

      // Selected Patient vars
      patientInfo: {
        firstName: null,
        lastName: null,
        socialNumber: null,
        UUID: null,
      },

      // Patient Table
      patientArray: [],
    };
  },
  components: {
    Layout,
    CheckupText,
    PatientTableModule,
  },
  methods: {
    ...AuthGetters,
    ...ApiActions,
    ...PatientSetters,
    ...PatientGetters,
    // Method to retrieve the patients list
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
            this.patientArray = response.data.patients;
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${this.$t("t-something-went-wrong")}.\r\nError: ${
              error.response.status
            }`,
          });
        });
    },
    // Method to handle the patient info when selected from the table
    handlePatientInfo() {
      this.patientInfo.firstName = this.getPatientFirstname();
      this.patientInfo.lastName = this.getPatientLastname();
      // TODO: Change the response to return the social number (when it's implemented)
      this.patientInfo.socialNumber = this.getPatientUUID();
      this.patientInfo.UUID = this.getPatientUUID();

      // Displaying the next view
      this.viewID = 1;
      this.viewEnd = true;
    },
    // Method to check if the patient state in the store is set
    checkPatientState() {
      if (this.getPatientUUID()) {
        this.handlePatientInfo();
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.checkPatientState();
    this.getPatients();
  },
};
</script>

<!-- TEMPLATE -->

<template>
  <Layout>
    <div class="project-wrapper mf-form-width">
      <!-- Showcasing the Patient List to the User -->
      <div v-if="viewID === 0">
        <h2 class="text-primary text-uppercase">{{ $t("t-selectpatient") }}</h2>
        <p class="text-muted">{{ $t("t-medicselectinfo") }}.</p>

        <PatientTableModule
          @button-pressed="handlePatientInfo"
          :patientArray="patientArray"
        />
      </div>

      <!-- Showcasing the Checkup Text to the User -->
      <div v-if="viewID === 1">
        <h2 class="text-primary text-uppercase">
          {{ $t("t-patientmedicinfo") }}
          <strong
            >{{ patientInfo.firstName }} {{ patientInfo.lastName }}</strong
          >
        </h2>
        <p class="text-muted">{{ $t("t-medicinfodesc") }}</p>

        <CheckupText />

        <!-- TODO: Maybe add Calendar as well -->
      </div>

      <!-- Previous button -->
      <div v-if="viewEnd === true">
        <button
          class="btn btn-primary btn-lg btn-block"
          @click="
            viewID = 0;
            viewEnd = false;
          "
        >
          {{ $t("t-previous") }}
        </button>
      </div>
    </div>
  </Layout>
</template>

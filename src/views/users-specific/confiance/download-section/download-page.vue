<script>
// General Imports
import Layout from "@/components/view-related/layout/main.vue";
import axios from "axios";
import Swal from "sweetalert2";

// State Imports
import {
  PatientGetters,
  AuthGetters,
} from "@/components/back-related/state/helpers";

// Components Imports
import ParticlesModule from "@/components/view-related/login-components/particles-module.vue";
import FileTableModule from "./fileTable.vue";

// Store Imports

export default {
  components: {
    Layout,
    ParticlesModule,
    FileTableModule,
  },
  data() {
    return {
      fileList: [
        {
          uuid: "7dbb3e87-bc91-4110-9e3e-bf9a11bfe696",
          name: "entrée_hôpital.pdf",
          size: "300 kB",
          uploadDate: "15 Sep, 2022",
          observationID: "71746",
        },
        {
          uuid: "eda2a83e-0835-47e0-aa00-54d308412d44",
          name: "medicaments.pdf",
          size: "3.1 MB",
          uploadDate: "22 Sep, 2022",
          observationID: "89093",
        },
        {
          uuid: "dd8a60a2-5be1-4ef2-a068-4c48066831ef",
          name: "ordonnance_sortie.pdf",
          size: "1.5 MB",
          uploadDate: "29 Sep, 2022",
          observationID: "16506",
        },
      ],

      observationsArray: [],

      // Patient State
      patientInfo: {
        firstName: null,
        lastName: null,
        socialNumber: null,
        UUID: null,
        patientUUID: null,
      },
    };
  },
  methods: {
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
            console.log(response.data.patients[0]);
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
      this.patientInfo.socialNumber = patient.unique_id;
      this.patientInfo.UUID = patient.user.uuid;
      this.patientInfo.patientUUID = patient.uuid;
    },
    handleFileInformation(file) {
      // console log
      console.log("File UUID: ", file.uuid);
    },
    async getObservations() {
      // Constructing the request URL with patient uuid
      let url = "patient/" + this.patientInfo.patientUUID + "/observation/";
      // Axios call to get the observations
      try {
        await axios
          .get(url, {
            headers: {
              token: this.gettoken().Token,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              this.observationsArray = response.data.observations;
            } else {
              Swal.fire({
                title: response.status + " - Erreur",
                text: "Une erreur est survenue lors de la récupération des observations",
                icon: "error",
                confirmButtonText: "Ok",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.$router.push("/confiance/dashboard");
                }
              });
            }
          });
      } catch (error) {
        // Error handling
        Swal.fire({
          title: "500 - Erreur Serveur",
          text: "Une erreur est survenue lors de la récupération des observations",
          icon: "error",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/confiance/dashboard");
          }
        });
      }
      // Sweet Alert if there is no observations
      if (this.observationsArray.length === 0) {
        Swal.fire({
          title: "Aucune observation",
          text: "Aucune observation n'a été trouvée pour ce patient",
          icon: "info",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/confiance/dashboard");
          }
        });
      }
    },
    // Setting the file array
    setFileArray() {
      // Looping through the observations array
      for (let i = 0; i < this.observationsArray.length; i++) {
        /*
         * TODO:
         * 1. If statement to check if a file exists
         * 2. If it exists, add it to the file array
         * 3. Add a div in case the file array is null after the loop
         */
      }
    },
  },
  mounted() {
    this.getPatients();
    setTimeout(() => {
      this.getObservations();
    }, 500);
    // this.setFileArray();
    console.log("Observations Array: ", this.observationsArray);
  },
};
</script>

<template>
  <ParticlesModule />
  <Layout>
    <div class="auth-page-content pt-5 mb-5">
      <div class="container p-3">
        <div class="row">
          <div class="col-lg-12">
            <div class="col-xxl-9">
              <div class="card mt-xxl-n5">
                <div class="card-header">
                  <h4 class="card-title mb-4">{{ $t("t-downloads") }}</h4>
                </div>
                <div class="card-body">
                  <FileTableModule
                    @file-info="handleFileInformation($event)"
                    :fileArray="fileList"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

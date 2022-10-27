<script>
import Layout from "@/components/view-related/layout/main.vue";
import { reactive } from "vue";
import useSubmitButtonState from "@/components/view-related/staff-input-components/useSubmitButtonState"
import useVuelidate from '@vuelidate/core'
import FieldModule from './fieldModule.vue'
import Chat from "@/components/view-related/staff-input-components/chat.vue";
import Calendar from "@/components/view-related/staff-input-components/calendar.vue"
import { AuthGetters, PatientGetters } from "@/components/back-related/state/helpers";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  props: {
    patientID: {
      type: Number,
      required: false
    },
    patientFName: {
      type: String,
      required: true
    },
    patientLName: {
      type: String,
      required: true
    }
  },
  setup() {
    const patientMandatory = reactive({
      dateOfBirth: "",
      socialSecurityNumber: "",
    });

    const { isSubmitButtonDisabled } = useSubmitButtonState(patientMandatory);
    return { v$: useVuelidate(), patientMandatory, isSubmitButtonDisabled };
  },
  data() {
    return {
      value: ['javascript'],

      // Views Var
      viewID: 0,
      viewEnd: false,

      // Patient Vars
      patientFirstName: "",
      patientLastName: "",

      // Observation vars
      generalObservation: "test d'observation",

      // Fields Var
      inputFields: [
        { id: 0, title: "Rythme cardiaque", value: "" },
        { id: 1, title: "Poul", value: "" },
        { id: 2, title: "Saturation en oxygène", value: "" },
        { id: 3, title: "Température", value: "" },
        { id: 4, title: "Tension Artérielle", value: "" },
        { id: 5, title: "EVN", value: "" },
        { id: 6, title: "Traitements", value: "" },
      ]

    };
  },
  components: {
    Layout,
    FieldModule,
    Chat,
    Calendar,
  },
  onMounted() {
    if (this.patientFName.length > 0) {
      this.patientFirstName = this.patientFName;
      this.patientLastName = this.patientLName;
      this.viewID = 1;
      this.viewEnd = true;
    }
  },
  methods: {
    ...AuthGetters,
    ...PatientGetters,
    checkPatientInfo() {
      if (this.patientFName && this.patientLName) {
        this.patientFirstName = this.patientFName;
        this.patientLastName = this.patientLName;
        this.viewID = 1;
        this.viewEnd = true;
        window.scrollTo(0, 0);
      }
    },
    nextView() {
      this.viewID += 1;
      if (this.viewID === 1) {
        this.viewEnd = true;
      }
    },
    prevView() {
      this.viewID -= 1;
      if (this.viewID !== 1) {
        this.viewEnd = false;
      }
    },
    async sendObservationRequest() {
      // Is the observation empty?
      if (this.generalObservation.length > 0) {
        // No
        Swal.fire({
          title: "Voulez-vous vraiment envoyer ce rapport?",
          text: "Vous ne pourrez pas revenir en arrière!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui, envoyer!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            // Creating the request body
            const data = {
              content: this.generalObservation,
            }

            // Creating the request URL
            const url = "patient/" + this.getPatientUUID() + "/observation";

            // Sending the request
            try {
              await axios({
                method: "post",
                url: url,
                headers: {
                  "Content-Type": "application/json",
                  token: this.gettoken().Token,
                },
                data: data,
              }).then((response) => {
                if (response.status === 201) {
                  Swal.fire({
                    title: "Rapport envoyé!",
                    text: "Le rapport a été envoyé avec succès!",
                    icon: "success",
                    confirmButtonText: "Ok",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      this.$router.push("/docteur/dashboard");
                    }
                  });
                }
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Une erreur est survenue...",
                text: error.reponse,
              });
            }
          }
        });
      } else {
        // Yes
        Swal.fire({
          icon: "warning",
          title: "Vous n'avez pas rempli le rapport",
          text: "Voulez-vous tout de même retourner à la page d'accueil?",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/docteur/dashboard")
          }
        });
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.checkPatientInfo();
  }
};

</script>
  
<template>
  <Layout>

    <div class="project-wrapper">
      <!-- First Input Page -->
      <div v-if="viewID === 0">
        <!-- Title + paragraph -->
        <h2 class="text-primary text-uppercase">{{ $t("t-selectpatient") }}</h2>
        <p class="text-muted">{{ $t("t-selectpatientinfotext") }}.</p>
        <div class="card">
          <div class="card-body">

            <!-- Input fields -->
            <div class="row mb-3">
              <!-- First name -->
              <div class="col-sm-6">
                <label for="patientFirstName" class="form-label">{{
                    $t("t-firstname")
                }}</label>
                <input type="text" class="form-control" id="patientFirstName" placeholder="Enter first name..."
                  v-model="patientFirstName" />
              </div>

              <!-- Last name -->
              <div class="col-sm-6">
                <label for="patientLastName" class="form-label">{{ $t("t-lastname")
                }}</label>
                <input type="text" class="form-control" id="patientLastName" placeholder="Enter last name..."
                  v-model="patientLastName" />
              </div>
            </div>

            <!-- Social security number + Date of Birth -->
            <div class="row">

              <!-- Social Security Number -->
              <div class="col-sm-6">
                <label for="patientSocialSecurityNumber" class="form-label">{{ $t("t-socialsecuritynbr") }}</label>
                <input type="text" class="form-control" id="patientSocialSecurityNumber"
                  placeholder="Enter the social security number..." v-model="patientMandatory.socialSecurityNumber" />
              </div>

              <!-- Date of Birth / CHANGE FOR ACTUAL DATE PICKER -->
              <div class="col-sm-6">
                <label for="patientDoB" class="form-label">{{ $t("t-dateofbirth") }}</label>
                <input type="date" class="form-control" id="patientDoB" placeholder="Enter the date of birth..."
                  v-model="patientMandatory.dateOfBirth" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- INPUT MEDICAL INFORMATION -->
      <div class="row" v-if="viewID === 1">
        <!-- Title + paragraph -->
        <h2 class="text-primary text-uppercase">{{ $t("t-medicinfofor") }} <strong>{{ patientLastName }}
            {{ patientFirstName }}</strong></h2>
        <p class="text-muted">{{ $t("t-writedownlastinfo") }}.</p>
        <div class="p-2">
          <div class="card">
            <div class="card-body row">
              <!-- INFOMATION DIV -->
              <div class="col-lg-6 mf-scrollable">
                <!-- INPUT LATEST INFO -->
                <div>
                  <label for="patientObserveCardInput" class="form-label font-size-large">
                    {{ $t("t-observationsheets") }}
                  </label>
                  <textarea class="form-control" id="patientObserveCardInput" rows="3"
                    placeholder="Veuillez saisir le résumé..." v-model="generalObservation"></textarea>
                  <div class="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>

                <hr>

                <!-- NON MANDATORY FIELDS LOOP -->
                <div class="basic-card-border mb-2">
                  <a class="nav-link menu-link col-sm-12 font-size-medium two-percent-height center-items"
                    href="#patientNonMandatoryField" data-bs-toggle="collapse" role="button" aria-expanded="false"
                    aria-controls="patientNonMandatoryField">
                    <span>{{ $t("t-notmandatoryfields") }} <strong><em
                          class="ri-arrow-down-line lh-1 center-items"></em></strong></span>
                  </a>

                  <hr class="mf-divider">

                  <div class="collapse col-sm-12 basic-padding left-margin" id="patientNonMandatoryField">
                    <FieldModule v-for="field in inputFields" :key="field.id" :fieldName="field.title" />
                  </div>
                </div>

                <hr>

                <!-- FILE UPLOAD -->
                <div class="mb-3">
                  <div class="col-md-12">
                    <label class="font-size-large mb-0 mt-0">
                      {{ $t("t-questionuploaddoc") }}
                    </label>
                    <p class="text-muted mb-3">{{ $t("t-uploadexample") }}</p>
                    <input class="form-control" type="file" id="feedbackFileUpload" accept=".pdf, ,jpg, .jpeg, .png">
                  </div>
                </div>


              </div>

              <!-- CHAT DIV -->
              <div class="col-lg-6">
                <Chat />
              </div>

              <Calendar />
            </div>
          </div>
        </div>


      </div>


      <!-- Next and Prev Button -->
      <div class="p-3 mb-3 row">
        <div class="space-in-between" v-if="viewEnd === false">
          <button class="lh-1 btn btn-primary font-size-medium col-sm-4" v-on:click="prevView()"
            :disabled="viewID === 0"><strong><em class="ri-arrow-left-line center-items"></em></strong>
            {{ $t("t-previousstep") }}</button>
          <button class="lh-1 btn btn-primary font-size-medium col-sm-4" v-on:click="nextView()"
            :disabled="isSubmitButtonDisabled">{{ $t("t-nextstep") }}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></button>
        </div>

        <div class="space-in-between" v-else>
          <button class="lh-1 btn btn-primary font-size-medium col-sm-4" v-on:click="prevView()"><strong><em
                class="ri-arrow-left-line center-items"></em></strong>
            {{ $t("t-previousstep") }}</button>
          <button class="lh-1 btn btn-primary font-size-medium col-sm-4" v-on:click="sendObservationRequest">{{
              $t("t-continue")
          }}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></button>
        </div>
      </div>


    </div>
  </Layout>
</template>
  
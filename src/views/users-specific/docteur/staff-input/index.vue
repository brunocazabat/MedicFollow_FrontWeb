<script>
import Layout from "@/components/view-related/layout/main.vue";
import { reactive } from "vue";
import useSubmitButtonState from "@/components/view-related/staff-input-components/useSubmitButtonState";
import useVuelidate from "@vuelidate/core";
import FieldModule from "./fieldModule.vue";
import Chat from "@/components/view-related/staff-input-components/chat.vue";
// import Calendar from "@/components/view-related/staff-input-components/calendar.vue"
import PatientTableModule from "../medical-information/patientTable.vue";
import InputModule from "@/components/view-related//input.vue";
import DragDropComponent from "@/components/view-related/drag-drop/drag-drop.vue";

import {
  AuthGetters,
  PatientGetters,
  PatientSetters,
} from "@/components/back-related/state/helpers";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  props: {
    patientID: {
      type: Number,
      required: false,
    },
    patientFName: {
      type: String,
      required: false,
    },
    patientLName: {
      type: String,
      required: false,
    },
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
      value: ["javascript"],

      // Views Var
      viewID: 0,
      viewEnd: false,

      // Patient Vars
      patientFirstName: "",
      patientLastName: "",

      // Observation vars
      generalObservation: "",

      // Fields Var
      inputFields: [
        { id: 0, title: this.$t("t-heartbeat"), value: "" },
        { id: 1, title: this.$t("t-pulse"), value: "" },
        { id: 2, title: this.$t("t-oxygensaturation"), value: "" },
        { id: 3, title: this.$t("t-temperature"), value: "" },
        { id: 4, title: this.$t("t-blood-pressure"), value: "" },
        { id: 5, title: "EVN", value: "" },
        { id: 6, title: this.$t("t-treatments"), value: "" },
      ],

      // Patient Table
      patientArray: [],

      // File
      file: [],
    };
  },
  components: {
    Layout,
    FieldModule,
    Chat,
    PatientTableModule,
    InputModule,
    DragDropComponent,
    // Calendar,
  },
  methods: {
    ...AuthGetters,
    ...PatientGetters,
    ...PatientSetters,
    async checkPatientInfo() {
      if (this.patientFName && this.patientLName) {
        this.patientFirstName = this.patientFName;
        this.patientLastName = this.patientLName;
        this.viewID = 1;
        this.viewEnd = true;
        window.scrollTo(0, 0);
      }

      // Retrieving the patients list
      try {
        await axios
          .get("patient/medical", {
            headers: {
              token: this.gettoken().Token,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              this.patientArray = response.data.patients;
            }
          });
      } catch (error) {
        // Sweet alert error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${this.$t("t-something-went-wrong")}. Error: ${
            error.response.status
          }`,
        });
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
        this.setPatientClearAll();
        this.viewEnd = false;
      }
    },
    async sendObservationRequest() {
      // Is the observation empty?
      if (this.generalObservation.length > 0) {
        // No
        Swal.fire({
          title: this.$t("t-do-you-want-to-send-this-report"),
          text: this.$t("t-you-cannot-go-back"),
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: this.$t("t-yes-send-it"),
        }).then(async (result) => {
          if (result.isConfirmed) {
            // Creating the request body
            const data = {
              content: this.generalObservation,
            };

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
                    title: this.$t("t-report-sent"),
                    text: this.$t("t-the-report-was-successfully-sent"),
                    icon: "success",
                    confirmButtonText: "Ok",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      this.setPatientClearAll();
                      this.$router.push("/docteur/dashboard");
                    }
                  });
                }
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${this.$t("t-something-went-wrong")}. Error: ${
                  error.response.status
                }`,
              });
              this.setPatientClearAll();
            }
          }
        });
      } else {
        // Yes
        Swal.fire({
          icon: "warning",
          title: this.$t("t-you-did-not-fill-the-report"),
          text: this.$t("t-do-you-still-want-to-return-to-the-homepage"),
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: `${this.$t("t-yes")}`,
        }).then((result) => {
          if (result.isConfirmed) {
            this.setPatientClearAll();
            this.$router.push("/docteur/dashboard");
          }
        });
      }
    },
    handlePatientInfo() {
      // Setting Patients Information
      this.patientFirstName = this.getPatientFirstname();
      this.patientLastName = this.getPatientLastname();
      this.patientUUID = this.getPatientUUID();
      // Displaying the next view
      this.viewID = 1;
      this.viewEnd = true;
    },
  },
  mounted() {
    if (this.patientFName) {
      this.patientFirstName = this.getPatientFirstname();
      this.patientLastName = this.getPatientLastname();
      this.viewID = 1;
      this.viewEnd = true;
    }
    window.scrollTo(0, 0);
    this.checkPatientInfo();
  },
};
</script>

<template>
  <Layout>
    <div class="project-wrapper mf-form-width">
      <!-- First Input Page -->
      <div v-if="viewID === 0">
        <!-- Title and Text muted -->
        <h2 class="text-primary text-uppercase">{{ $t("t-selectpatient") }}</h2>
        <p class="text-muted">{{ $t("t-medicselectinfo") }}.</p>
        <PatientTableModule
          @button-pressed="handlePatientInfo"
          :patientArray="patientArray"
        />
      </div>
    </div>

    <!-- INPUT MEDICAL INFORMATION -->
    <div class="project-wrapper dashboard-form row mb-3" v-if="viewID === 1">
      <!-- Title + paragraph -->
      <div
        class="card col mr2 p-2 mf-scrollable"
        style="max-height: 70vh !important"
      >
        <div class="card-body">
          <h3 class="text-primary text-uppercase">
            {{ $t("t-medicinfofor") }}
            <strong>{{ patientLastName }} {{ patientFirstName }}</strong>
          </h3>
          <p class="text-muted">{{ $t("t-writedownlastinfo") }}.</p>
          <!-- INFOMATION DIV -->
          <!-- INPUT LATEST INFO -->
          <InputModule
            class="p-2"
            :label="$t('t-observationsheets')"
            :placeholder="$t('t-write-here')"
            :rows="4"
            v-model="generalObservation"
            :required="true"
            :invalidFeedback="$t('t-invalid-feedback')"
          />
          <!-- NON MANDATORY FIELDS LOOP -->
          <div class="basic-card-border mt-3 p-2">
            <a
              class="nav-link menu-link col-sm-12 font-size-medium two-percent-height force-center p-2 mb-3"
              href="#patientNonMandatoryField"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="patientNonMandatoryField"
            >
              <span
                >{{ $t("t-notmandatoryfields") }}
                <strong
                  ><em
                    class="ri-arrow-down-line lh-1 center-items"
                  ></em></strong
              ></span>
            </a>
            <div
              class="collapse col-sm-12 basic-padding left-margin"
              id="patientNonMandatoryField"
            >
              <FieldModule
                v-for="field in inputFields"
                :key="field.id"
                :fieldName="field.title"
              />
            </div>
          </div>
          <hr />
          <!-- FILE UPLOAD -->
          <div class="mb-3">
            <div class="col-md-12">
              <label class="font-size-large mb-0 mt-0">
                {{ $t("t-questionuploaddoc") }}
              </label>
              <p class="text-muted mb-3">{{ $t("t-uploadexample") }}</p>
              <DragDropComponent v-model="file" />
            </div>
          </div>
        </div>
        <!-- <Calendar /> -->
      </div>
      <!-- CHAT DIV -->
      <div class="card col ml2 p-2" style="max-height: 70vh !important">
        <div class="card-body">
          <Chat />
        </div>
      </div>
      <!-- Next and Prev Button -->
      <div class="p-3 mb-3 row">
        <div class="space-in-between" v-if="viewEnd === true">
          <button
            class="lh-1 btn btn-primary font-size-medium col-sm-4"
            v-on:click="prevView()"
          >
            <strong><em class="ri-arrow-left-line center-items"></em></strong>
            {{ $t("t-previousstep") }}
          </button>
          <button
            class="lh-1 btn btn-primary font-size-medium col-sm-4"
            v-on:click="sendObservationRequest"
          >
            {{ $t("t-continue") }}
            <strong><em class="ri-arrow-right-line center-items"></em></strong>
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>

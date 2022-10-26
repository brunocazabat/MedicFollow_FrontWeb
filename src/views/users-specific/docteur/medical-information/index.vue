<script>
import Layout from "@/components/view-related/layout/main.vue";
import FooterModule from "@/components/view-related/login-components/footer-module.vue";

import { reactive } from "vue";
import useVuelidate from '@vuelidate/core'

import Widgets from "./widgets.vue";
import CheckupText from "./checkup-text.vue";
import useSubmitButtonState from "@/components/view-related/staff-input-components/useSubmitButtonState"
import PatientTableModule from "./patientTable.vue";

import usedPatient from "@/components/back-related/state/modules/usedpatient.js";
import { ApiActions, AuthGetters } from "@/components/back-related/state/helpers";
import axiosResult from "@/components/back-related/state/axiosResponse";
import axios from "axios";

export default {
  props: {
    patientID: {
      type: Number,
      required: false
    },
    patientFName: {
      type: String,
      required: false
    },
    patientLName: {
      type: String,
      required: false
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

      // view vars
      viewID: 0,
      viewEnd: false,

      // Selected Patient vars
      patientFirstName: "",
      patientLastName: "",

      // Creating URL to report section
      reportURL: "",

      // Patient Table
      patientArray: [],
    }

  },
  components: {
    Layout,
    FooterModule,
    Widgets,
    CheckupText,
    PatientTableModule
  },
  methods: {
    ...ApiActions,
    ...AuthGetters,
    nextView() {
      this.viewID += 1;
      if (this.viewID === 1) {
        this.viewEnd = true;
      }
    },
    prevView() {
      this.viewID -= 1;
      if (this.viewID === 0) {
        this.viewEnd = false;
      }
    },
    constructURL() {
      this.reportURL = "staff-input?fn=" + this.patientFirstName + "&ln=" + this.patientLastName;
      this.$router.push(this.reportURL);
    },
    async handlePatientInfo(patient) {

      // API call to get patient info
      // let test = this.getApiNoParam("patient/medical")
      // console.log("test")
      // console.log(test)

      // console.log("Header: " + this.getheader())


      // Creating payload to send to the class
      const selectedPatient = {
        uuid: 0,
        fName: this.patientFirstName,
        lName: this.patientLastName,
        socialSecurity: this.patientMandatory.socialSecurityNumber,
        dob: this.patientMandatory.dateOfBirth,
      }
      // Setting the patient information
      usedPatient.setPatient(selectedPatient)

      // Setting the patient information
      this.patientFirstName = patient.fName;
      this.patientLastName = patient.lName;
      this.patientMandatory.socialSecurityNumber = patient.socialSecNbr;
      this.patientMandatory.dateOfBirth = patient.dateOfBirth;
      this.viewID = 1;
      this.viewEnd = true;
    },
    async checkPropsInfo() {
      if (this.patientFName !== undefined && this.patientLName !== undefined) {
        this.patientFirstName = this.patientFName;
        this.patientLastName = this.patientLName;
        this.viewID = 1;
        this.viewEnd = true;
      }

      // test call api
      // let header = {
      //   token: this.gettoken().Token
      // }
      // console.log("token in checkProposInfo: " + header.token)

      // let result = await this.getApiNoParam("patient/medical")
      // console.log("result: " + result)

      try {
        await axios
          .get("patient/medical", {
            headers: {
              token: this.gettoken().Token
            },
          })
          .then((response) => {
            if (response.status === 200) {
              this.patientArray = response.data.patients;
              axiosResult.setReturnValues(true, null);
            } else {
              axiosResult.setReturnValues({
                result: false,
                error: response.status,
              });
            }
          });
      } catch (error) {
        axiosResult.setReturnValues({
          result: false,
          error: error.result,
        });
      }
      console.log("axiosResult: " + axiosResult.getReturnValues().result)
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.checkPropsInfo();
  }
}
</script>

<!-- TEMPLATE -->

<template>
  <Layout>
    <div class="project-wrapper mf-form-width">
      <!-- Input Page -->
      <div v-if="viewID === 0">

        <!-- Title and Text muted -->
        <h2 class="text-primary text-uppercase">{{ $t("t-selectpatient") }}</h2>
        <p class="text-muted">{{ $t("t-medicselectinfo") }}.</p>

        <PatientTableModule @patient-info="handlePatientInfo" :patientArray="patientArray" />

        <p class="text-muted">Si vous ne trouvez pas le patient, vous pouvez entrer ses informations ci-dessous.</p>
        <div class="card">
          <div class="card-body">
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

              <!-- Date of Birth -->
              <div class="col-sm-6">
                <label for="patientDoB" class="form-label">{{ $t("t-dateofbirth") }}</label>
                <input type="date" class="form-control" id="patientDoB" placeholder="Enter the date of birth..."
                  v-model="patientMandatory.dateOfBirth" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="viewID === 1">
        <h2 class="text-primary text-uppercase">{{ $t("t-patientmedicinfo") }} <strong>{{ patientLastName }}
            {{ patientFirstName }}</strong></h2>
        <p class="text-muted">{{ $t("t-medicinfodesc") }}</p>

        <Widgets />
        <CheckupText />

        <!-- TODO: Maybe add Calendar -->
      </div>

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
          <a class="lh-1 btn btn-primary font-size-medium col-sm-4" v-on:click="constructURL">{{ $t("t-addareport") }}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></a>
        </div>
      </div>
    </div>

    <FooterModule />
  </Layout>


</template>


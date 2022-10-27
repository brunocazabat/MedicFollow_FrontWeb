<script>
// Universal Imports
import Layout from "@/components/view-related/layout/main.vue";
import { CountTo } from "vue3-count-to";

// Specific Imports
import {
  AccessSettings,
  AccessChat,
  AddPatientModule,
  AddMedicalInformationModule,
  SetupMeetingScheduleModule,
  ManagePatientsModule,
} from "./buttonComponents";
import PatientTableModule from "../medical-information/patientTable.vue";
import axiosResult from "@/components/back-related/state/axiosResponse";
import axios from "axios";
import { ApiActions, AuthGetters } from "@/components/back-related/state/helpers";

export default {
  components: {
    Layout,
    AddPatientModule,
    AddMedicalInformationModule,
    SetupMeetingScheduleModule,
    ManagePatientsModule,
    PatientTableModule,
    CountTo,
    AccessSettings,
    AccessChat
  },
  data() {
    return {
      constructURL: String,
      patientArray: [],
    }
  },
  methods: {
    ...ApiActions,
    ...AuthGetters,
    handleShowMedicalInformation(patient) {
      this.constructURL = "medical-information?fn=" + patient.firstname + "&ln=" + patient.lastname;
      this.$router.push(this.constructURL);
    },
    async retrievePatientList() {
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
    }
  },
  mounted() {
    // this.$store.dispatch("getPatients");
    this.retrievePatientList();
  },
}
</script>

<template>
  <Layout>
    <div class="row project-wrapper dashboard-form">
      <div class="col-xxl-2 mr1">
        <div class="row">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="fw-medium text-muted mb-0" data-key="t-">Patients dans le Service:</p>
                  <h3 class="mt-4 ff-secondary fw-semibold" data-key="t-total">
                    <count-to :duration="1000" :startVal="0" :endVal="95"></count-to> {{ $t('t-total') }}
                  </h3>
                </div>
                <div>
                  <div class="avatar-sm flex-shrink-0">
                    <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                      <em class="mdi mdi-account"></em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <AddPatientModule />
        </div>
        <div class="row">
          <AddMedicalInformationModule />
        </div>
        <div class="row">
          <AccessSettings />
        </div>
      </div>
      <div class="col-xxl-2 ml1 mr2">
        <div class="row">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="fw-medium text-muted mb-0" data-key="t-">Visites restantes:</p>
                  <h3 class="mt-4 ff-secondary fw-semibold" data-key="t-remain">
                    <count-to :duration="1000" :startVal="0" :endVal="8"></count-to> restantes.
                  </h3>
                </div>
                <div>
                  <div class="avatar-sm flex-shrink-0">
                    <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                      <em class="mdi mdi-account-check"></em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <ManagePatientsModule />
        </div>
        <div class="row">
          <SetupMeetingScheduleModule />
        </div>
        <div class="row">
          <AccessChat />
        </div>
      </div>
      <div class="col-xxl-7 ml3">
        <PatientTableModule @patient-info="handleShowMedicalInformation" :patientArray="patientArray" />
      </div>
    </div>
  </Layout>
</template>

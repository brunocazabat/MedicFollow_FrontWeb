<script>
// Universal Imports
import Layout from "@/components/view-related/layout/main.vue";
import FooterModule from "@/components/view-related/login-components/footer-module.vue";

// Specific Imports
import AddPatientModule from "./buttonComponents/addPatient.vue";
import AddMedicalInformationModule from "./buttonComponents/addMedicalInformation.vue"
import SetupMeetingScheduleModule from "./buttonComponents/setupMeeting.vue"
import ManagePatientsModule from "./buttonComponents/managePatients.vue"
import PatientTableModule from "../medical-information/patientTable.vue"

export default {
  components: {
    Layout,
    FooterModule,
    AddPatientModule,
    AddMedicalInformationModule,
    SetupMeetingScheduleModule,
    ManagePatientsModule,
    PatientTableModule,
  },
  data() {
    return {
      constructURL: String,
    }
  },
  methods: {
    handleShowMedicalInformation(patient) {
      this.constructURL = "medical-information?fn=" + patient.fName + "&ln=" + patient.lName;
      this.$router.push(this.constructURL);
    },
  }
}
</script>

<template>
  <Layout>
    <div class="row project-wrapper dashboard-form">
      <div class="col-xxl-3">
        <AddPatientModule />
        <AddMedicalInformationModule />
        <SetupMeetingScheduleModule />
        <ManagePatientsModule />
      </div>

      <div class="col-xxl-9">
        <PatientTableModule @patient-info="handleShowMedicalInformation" />
      </div>

    </div>

    <FooterModule />
  </Layout>
</template>

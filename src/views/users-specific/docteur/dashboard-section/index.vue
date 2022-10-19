<script>
import Layout from "@/components/view-related/layout/main.vue";
import FooterModule from "@/components/view-related/login-components/footer-module.vue";

import AddPatientModule from "./addPatient.vue";
import AddMedicalInformationModule from "./addMedicalInformation.vue"
import SetupMeetingScheduleModule from "./setupMeeting.vue"
import ManagePatientsModule from "./managePatients.vue"

export default {
  components: {
    Layout,
    FooterModule,
    AddPatientModule,
    AddMedicalInformationModule,
    SetupMeetingScheduleModule,
    ManagePatientsModule,
  },
}
</script>

<template>
  <Layout>
    <div class="row project-wrapper dashboard-form">
      <div class="col-xxl-6">
        <AddMedicalInformationModule />
      </div>
      <div class="col-xxl-6">
        <SetupMeetingScheduleModule />
      </div>
      <div class="col-xxl-6">
        <AddPatientModule />
      </div>
      <div class="col-xxl-6">
        <ManagePatientsModule />
      </div>

    </div>
    <FooterModule />
  </Layout>
</template>

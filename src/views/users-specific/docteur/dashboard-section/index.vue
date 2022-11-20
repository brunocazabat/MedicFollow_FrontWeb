<script>
// Universal Imports
import Layout from "@/components/view-related/layout/main.vue";
import { CountTo } from "vue3-count-to";

import { GenericButton } from "@/components/view-related/dashboard-components";
// Specific Imports
import PatientTableModule from "../medical-information/patientTable.vue";
import Swal from "sweetalert2";
import axios from "axios";
import {
  AuthGetters,
  PatientGetters,
} from "@/components/back-related/state/helpers";

export default {
  components: {
    Layout,
    CountTo,
    GenericButton,
    PatientTableModule,
  },
  data() {
    return {
      constructURL: String,
      patientArray: [],
    };
  },
  methods: {
    ...AuthGetters,
    ...PatientGetters,
    handleShowMedicalInformation() {
      this.constructURL =
        "medical-information?fn=" +
        this.getPatientFirstname() +
        "&ln=" +
        this.getPatientLastname();
      this.$router.push(this.constructURL);
    },
    async retrievePatientList() {
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
        // Sweet Alert Error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${this.$t("t-error")}: ${error}`,
        });
      }
    },
  },
  mounted() {
    // this.$store.dispatch("getPatients");
    this.retrievePatientList();
  },
};
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
                  <p class="fw-medium text-muted mb-0" data-key="t-">
                    Patients dans le Service:
                  </p>
                  <h3 class="mt-4 ff-secondary fw-semibold" data-key="t-total">
                    <count-to
                      :duration="2000"
                      :startVal="0"
                      :endVal="patientArray.length"
                    ></count-to>
                    {{ $t("t-total") }}
                  </h3>
                </div>
                <div>
                  <div class="avatar-sm flex-shrink-0">
                    <span
                      class="avatar-title bg-soft-info text-info rounded-circle fs-4"
                    >
                      <em class="mdi mdi-account"></em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <!-- AddPatientModule -->
          <GenericButton
            link="/docteur/manage-patients"
            translate="t-addpatient"
            icon="mdi-account-plus"
          />
        </div>
        <div class="row">
          <!-- AddMedicalInformationModule -->
          <GenericButton
            link="/docteur/staff-input"
            translate="t-addmedicalinfo"
            icon="mdi-pen-plus"
          />
        </div>
        <div class="row">
          <!-- AccessSettings -->
          <GenericButton
            link="/docteur/settings"
            translate="t-accesssettings"
            icon="mdi-cog"
          />
        </div>
      </div>
      <div class="col-xxl-2 ml1 mr2">
        <div class="row">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="fw-medium text-muted mb-0" data-key="t-">
                    Visites restantes:
                  </p>
                  <h3 class="mt-4 ff-secondary fw-semibold" data-key="t-remain">
                    <count-to
                      :duration="1000"
                      :startVal="0"
                      :endVal="8"
                    ></count-to>
                    restantes.
                  </h3>
                </div>
                <div>
                  <div class="avatar-sm flex-shrink-0">
                    <span
                      class="avatar-title bg-soft-info text-info rounded-circle fs-4"
                    >
                      <em class="mdi mdi-account-check"></em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <!-- ManagePatientsModule -->
          <GenericButton
            link="/docteur/manage-patients"
            translate="t-managepatients"
            icon="mdi-account-edit"
          />
        </div>
        <div class="row">
          <!-- SetupMeetingScheduleModule -->
          <GenericButton
            link="/docteur/schedule-seetings"
            translate="t-setupmeetingschedule"
            icon="mdi-table-cog"
          />
        </div>
        <div class="row">
          <!-- AccessChat -->
          <GenericButton
            link="/docteur/chat"
            translate="t-accessdiscuss"
            icon="mdi-forum"
          />
        </div>
      </div>
      <div class="col-xxl-7 ml3">
        <PatientTableModule
          @button-pressed="handleShowMedicalInformation"
          :patientArray="patientArray"
        />
      </div>
    </div>
  </Layout>
</template>

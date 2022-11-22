<script>
// General Imports
import Layout from "@/components/view-related/layout/main.vue";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";

// Component Imports
import TableSelectPatient from "../../docteur/medical-information/patientTable.vue";
import TableComponent from "@/components/view-related/tableComponent.vue";

// State Imports
import {
  PatientGetters,
  AuthGetters,
  PatientSetters,
} from "@/components/back-related/state/helpers";
import schedules from "@/components/back-related/meeting";

export default {
  components: {
    Layout,
    TableSelectPatient,
    TableComponent,
  },
  data() {
    return {
      // Patient Array
      patientArray: [],
      selectedPatient: {
        name: null,
        uuid: null,
      },

      // Page View State
      pageID: 0,
      maxPageNbr: 2,
      pageEnd: false,

      doctorArray: [],
      tableDoctorArray: [] || null,
      selectedDoctor: {
        uuid: null,
        name: null,
      },

      schedulesArray: [] || null,
      tableSchedulesArray: [] || null,
    };
  },
  methods: {
    ...AuthGetters,
    ...PatientGetters,
    ...PatientSetters,
    ...schedules,
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
          this.patientArray = response.data.patients;
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data,
          });
        });
    },

    // Method to cleanup the doctor array
    cleanupDoctorArray(docArray) {
      const element = [] || null;

      for (let i = 0; i < docArray.doctors.length; i++) {
        element.push({
          uuid: docArray.doctors[i].uuid,
          content: [
            docArray.doctors[i].firstname,
            docArray.doctors[i].lastname,
          ],
        });
      }
      this.tableDoctorArray = element;
    },

    cleanupSchedulesArray(schArray) {
      const element = [] || null;

      for (let i = 0; i < schArray.length; i++) {
        element.push({
          id: i,
          content: [
            schArray[i].date,
            schArray[i].hour_end + " - " + schArray[i].hour_end,
          ],
        });
      }
      this.tableSchedulesArray = element;
    },

    // Method to go to the next page (increment pageID, does not increment if equal or above to maxPageID and set pageEnd to true)
    async nextPage(data = null) {
      if (this.pageID < this.maxPageNbr) {
        if (this.pageID === 0) {
          this.doctorArray = await schedules.getDoctorList(
            this.gettoken().Token,
            this.getPatientUUID()
          );

          await this.cleanupDoctorArray(this.doctorArray);
        } else if (this.pageID === 1) {
          let today = dayjs().format("YYYY-MM-DD");

          this.schedulesArray = await schedules.getAppointmentsOfFamily(
            this.getorg_uuid(),
            this.getPatientUUID(),
            data.uuid,
            today,
            "month",
            this.gettoken().Token
          );

          await this.cleanupSchedulesArray(this.schedulesArray);
        }
        this.pageID++;
      } else {
        this.pageEnd = true;
      }
    },
    // Method to go to the previous page (decrement pageID, does not decrement if equal or below to 0 and set pageEnd to false)
    previousPage() {
      if (this.pageID > 0) {
        this.pageID--;
      } else {
        this.pageEnd = false;
      }
    },
  },
  async mounted() {
    await this.getPatients();
  },
};
</script>

<template>
  <Layout>
    <div class="container" v-if="pageID === 0">
      <h2 class="text-primary text-uppercase">
        {{ $t("t-selectpatient") }}
      </h2>
      <TableSelectPatient
        :patientArray="patientArray"
        @button-pressed="nextPage"
      />
    </div>

    <div class="container" v-if="pageID === 1">
      <h2 class="text-primary text-uppercase">
        {{ $t("t-select-doctor") }}
      </h2>
      <TableComponent
        :columnArray="[
          { title: $t('t-firstname'), id: 0 },
          { title: $t('t-lastname'), id: 1 },
        ]"
        :dataArray="tableDoctorArray"
        @button-pressed="nextPage($event)"
      />
    </div>
    <div class="container" v-if="pageID === 2">
      <h2 class="text-primary text-uppercase">
        {{ $t("t-appointments") }}
      </h2>
      <TableComponent
        :columnArray="[
          { title: $t('t-date'), id: 0 },
          { title: $t('t-time'), id: 1 },
        ]"
        :dataArray="tableSchedulesArray"
        :displayActions="false"
      />
    </div>
  </Layout>
</template>

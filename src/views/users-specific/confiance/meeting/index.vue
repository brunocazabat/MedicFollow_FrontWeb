<script>
// General Imports
import Layout from "@/components/view-related/layout/main.vue";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";

// Components Imports
import TableSelectPatient from "../../docteur/medical-information/patientTable.vue";
import IncomingAppointments from "./tableShowAppointments.vue";

// Store Imports
import {
  AuthGetters,
  PatientGetters,
} from "@/components/back-related/state/helpers";
import schedules from "@/components/back-related/meeting";

export default {
  data() {
    return {
      pickedDoctor: null,
      pickedAppointment: null,

      // Patient Array
      patientArray: [],

      // Doctors arrays
      doctorsArray: [],

      // Appointments Variables
      appointmentsArray: [],
      searchType: "month",
      dateToday: dayjs().format("YYYY-MM-DD"),
      tableAppointments: [],

      // Free schedules variables
      freeSchedulesArray: [],
      selectedFreeSchedule: {
        uuid: null,
        date: null,
        time: null,
      },

      pageID: -1,
      viewEnd: false,
      maxPageID: 3,
    };
  },
  components: {
    Layout,
    TableSelectPatient,
    IncomingAppointments,
  },
  methods: {
    ...AuthGetters,
    ...PatientGetters,
    ...schedules,

    // Method to display next page
    async nextPage() {
      if (this.pageID < this.maxPageID) {
        if (this.pageID == -1) {
          this.doctorsArray = await schedules.getDoctorList(
            this.gettoken().Token,
            this.getPatientUUID()
          );
        } else if (this.pageID == 0) {
          await this.getAppointments();
          this.freeSchedulesArray = await schedules.getScheduleList(
            this.gettoken().Token,
            this.getPatientUUID(),
            this.pickedDoctor,
            "week"
          );
          console.log("freeSchedulesArray:", this.freeSchedulesArray);
        } else if (this.pageID === 2) {
          // Sweet alert to confirm the creation of the appointment
          Swal.fire({
            title: `${this.$t("t-are-you-sure")} ${this.pickedAppointment}`,
            icon: "warning",
            confirmButtonText: this.$t("t-confirm"),
            showCancelButton: true,
            cancelButtonText: this.$t("t-cancel"),
          }).then(async (result) => {
            if (result.isConfirmed) {
              if ((await this.sendAppointment()) === true) {
                this.pageID++;
              }
            } else {
              return;
            }
          });
        }
        if (this.pageID !== 2) {
          this.pageID++;
        }
        if (this.pageID == this.maxPageID) {
          this.pageEnd = true;
        }
      } else {
        this.pageEnd = true;
      }
    },

    prevView() {
      this.pageID -= 1;
      if (this.pageID) {
        this.viewEnd = false;
      }
    },

    // Method to parse the date
    parseDate(date, method = "DD-MM-YYYY") {
      return dayjs(date).format(method);
    },
    // Method to parse the hour
    parseHour(date) {
      return dayjs(date).format("HH:mm");
    },

    // Method to POST the appointment
    async sendAppointment() {
      let url = `appointment`;
      let res = null;

      const payload = {
        docteurUuid: this.pickedDoctor, // TODO: PUT CORRECT UUID
        date: this.pickedAppointment + ":00",
        patientUuid: this.getPatientUUID(),
      };

      await axios({
        method: "post",
        url: url,
        data: payload,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then(async (response) => {
          if (response.status === 201) {
            await Swal.fire({
              title: "Appointment confirmed!",
              text: `Your appointment has been confirmed. It is scheduled on the ${this.pickedAppointment}. If you made a mistake you can still cancel it by clicking on the 'Cancel Appointment' button.`,
              showCancelButton: true,
              cancelButtonText: "Cancel Appointment",
              icon: "success",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                res = true;
              } else if (result.isDismissed) {
                // TODO
                // this.cancelAppointment();
              }
            });
          } else if (response.status === 401) {
            // Error doctor is not free
            Swal.fire({
              title: "Error",
              text: `${this.$t("t-doctor-not-free")}`,
              icon: "error",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                // Refresh the page
                window.location.reload();
                res = false;
              }
            });
          }
        })
        .catch((error) => {
          if (error.response.status == 401) {
            // Error doctor is not free
            Swal.fire({
              title: "Error",
              text: `${this.$t("t-doctor-not-free")}`,
              icon: "error",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
                // Refresh the page
                window.location.reload();
                res = false;
              }
            });
          }
          Swal.fire({
            title: "Erreur",
            text: `${this.$t("t-error-occured")}. Error: ${
              error.response.status
            }`,
            icon: "error",
            confirmButtonText: "OK",
          });
          res = false;
        });

      console.log("res:", res);

      return res;
    },

    // Method to retrieve the patients list and setting the patient state to the first patient
    async getPatients() {
      await axios({
        method: "get",
        url: "patient",
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
          // Sweet Alert
          Swal.fire({
            title: `${this.$t("t-error")}`,
            text: `${this.$t("t-error-occured")}. Error: ${
              error.response.status
            }`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    },

    // Method to get the appointments slots
    async getAppointments() {
      let url = `appointment/calendar/?type=${this.searchType}&date=${
        this.dateToday
      }&organisationUuid=${this.getorg_uuid()}&patientUuid=${this.getPatientUUID()}&doctorUuid=${
        this.pickedDoctor
      }`;

      await axios({
        method: "get",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            for (let i = 0; i < response.data.appointments.length; i++) {
              this.appointmentsArray.push({
                uuid: response.data.appointments[i].uuid,
                medic_uuid: response.data.appointments[i].medic_uuid,
                patient_uuid: response.data.appointments[i].patient_uuid,
                org_uuid: response.data.appointments[i].org_uuid,
                date_start: this.parseDate(
                  response.data.appointments[i].start,
                  "YYYY-MM-DD"
                ),
                date_end: this.parseDate(
                  response.data.appointments[i].end,
                  "YYYY-MM-DD"
                ),
                hour_start: this.parseHour(response.data.appointments[i].start),
                hour_end: this.parseHour(response.data.appointments[i].end),
              });

              this.tableAppointments.push({
                with: response.data.appointments[i].medic_uuid,
                date: this.parseDate(
                  response.data.appointments[i].start,
                  "YYYY-MM-DD"
                ),
                hour_start: this.parseHour(response.data.appointments[i].start),
                hour_end: this.parseHour(response.data.appointments[i].end),
              });
            }
          }
        })
        .catch((error) => {
          // Sweet Alert
          Swal.fire({
            title: `${this.$t("t-error")}`,
            text: `${this.$t("t-error-occured")}. Error: ${
              error.response.status
            }`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    },
  },
  async mounted() {
    await this.getPatients();
  },
};
</script>

<template>
  <Layout>
    <div class="project-wrapper mf-form-width">
      <div class="p-2">
        <h2 class="text-primary">
          {{ $t("t-chooseameeting") }}
        </h2>
        <p class="text-muted">
          {{ $t("t-plsfillmeetinginfo") }}
        </p>
      </div>

      <div class="card">
        <div class="card-body">
          <!-- CHOOSE DOCTOR DIV -->
          <div class="container" v-if="pageID === -1">
            <h2 class="text-primary text-uppercase">
              {{ $t("t-selectpatient") }}
            </h2>
            <div>
              <TableSelectPatient
                :patientArray="patientArray"
                @button-pressed="nextPage"
              />
            </div>
          </div>
          <div v-if="pageID === 0">
            <!-- BUTTON TO CLICK TO SHOW DR. -->
            <div class="basic-card-border col-sm-12">
              <div
                class="col-sm-12 font-size-medium two-percent-height center-items"
              >
                <span>
                  {{ $t("t-selectdoctormeeting") }}...
                  <strong>
                    <em class="ri-arrow-down-line lh-1 center-items"></em>
                  </strong>
                </span>
              </div>

              <hr class="mf-divider" />

              <!-- RADIO BOX DR. SELECTION -->
              <div class="col-sm-12 basic-padding left-margin">
                <div
                  class="form-check"
                  v-for="(doctor, index) in doctorsArray.doctors"
                  :key="index"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    id="doctorList"
                    :value="doctor.uuid"
                    v-model="pickedDoctor"
                  />
                  <label
                    class="form-check-label font-size-medium"
                    for="doctorList"
                    >Dr. {{ doctor.lastname.toUpperCase() }}
                    {{ doctor.firstname }}</label
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- CONSULTING DOCTOR QUESTION -->
          <div v-if="pageID === 1">
            <div class="p-3">
              <h2 class="text-primary text-uppercase mt-5">
                {{ $t("t-incoming-appointments") }}
              </h2>
              <p class="text-muted">
                {{ $t("t-incoming-appointments-desc") }}
              </p>
              <IncomingAppointments :appointmentArray="tableAppointments" />
            </div>
          </div>

          <!-- CHOOSE DATE AND TIME -->
          <div v-if="pageID === 2">
            <div class="p-3">
              <p class="form-label font-size-large">
                <strong>{{ $t("t-choosemeetingdate") }}</strong>
              </p>
            </div>

            <div
              class="basic-card-border col-sm-12 mb-2"
              v-for="(appointment, index) in freeSchedulesArray"
              :key="index"
            >
              <div
                class="nav-link menu-link col-sm-12 font-size-medium two-percent-height center-items"
              >
                <span>
                  <strong>
                    {{ appointment.day }}
                  </strong>
                </span>
              </div>

              <hr class="mf-divider" />

              <div
                class="col-sm-12 basic-padding left-margin"
                v-for="(time, index) in freeSchedulesArray"
                :key="index"
              >
                <div class="form-check" v-if="time.day === appointment.day">
                  <div
                    class="form-check"
                    v-for="(hour, index) in time.hour"
                    :key="index"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      id="hourGridCheck"
                      :value="time.day + ' ' + hour[0] + ':00:00'"
                      v-model="pickedAppointment"
                    />
                    <label
                      class="form-check-label font-size-medium"
                      for="hourGridCheck"
                      >{{ hour[0] + " - " + hour[1] }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-3" v-if="pageID === 3">
            <div class="row">
              <div class="col-1">
                <em
                  class="mdi mdi-check-circle-outline text-success"
                  style="font-size: 50px"
                ></em>
              </div>
              <div class="col">
                <p
                  class="form-label font-size-large"
                  data-key="t-choosemeetingdate"
                >
                  <strong
                    >{{
                      $t(
                        "t-your-appointment-has-been-schedule-here-is-a-summary"
                      )
                    }}
                    {{ pickedDoctor }} - {{ pickedAppointment }}
                  </strong>
                </p>
                <p class="text-muted">
                  {{
                    $t(
                      "T-you-can-go-back-to-the-home-page-by-clicking-on-the-ok-button"
                    )
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-3 mb-3 row">
        <div class="space-in-between" v-if="viewEnd === false">
          <button
            class="lh-1 btn btn-primary font-size-medium col-sm-4"
            v-on:click="prevView()"
            :disabled="pageID === 0"
          >
            <strong><em class="ri-arrow-left-line center-items"></em></strong>
            {{ $t("t-previousstep") }}
          </button>
          <button
            class="lh-1 btn btn-primary font-size-medium col-sm-4"
            v-on:click="nextPage()"
            :disabled="
              pageID === 3 ||
              (pickedDoctor === null && pageID === 0) ||
              (pickedAppointment === null && pageID === 2)
            "
          >
            {{ $t("t-nextstep") }}
            <strong><em class="ri-arrow-right-line center-items"></em></strong>
          </button>
        </div>

        <div class="space-in-between" v-else>
          <button
            class="lh-1 btn btn-primary mf-btn-error font-size-medium col-sm-4"
            v-on:click="prevView()"
          >
            <strong><em class="ri-arrow-left-line center-items"></em></strong>
            {{ $t("t-cancel") }}
          </button>
          <a class="lh-1 btn btn-primary font-size-medium col-sm-4" href="/"
            >OK
            <strong><em class="ri-arrow-right-line center-items"></em></strong
          ></a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Swal from "sweetalert2";
import "@fullcalendar/core/vdom";
import { SimpleBar } from "simplebar-vue3";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";

import FullCalendar from "@fullcalendar/vue3";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { categories } from "../../views/users-specific/docteur/calendar-section/utils";

import Popper from "vue3-popper";

import {
  AuthGetters,
  PatientGetters,
} from "@/components/back-related/state/helpers";

import axios from "axios";
import dayjs from "dayjs";

import SelectModule from "@/components/view-related/select.vue";
import InputModule from "@/components/view-related/input.vue";

export default {
  props: {
    activitiesArray: {
      type: Array || null,
      required: true,
    },
    calendarUUID: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    event: {
      title: {
        required: helpers.withMessage("Title is required", required),
      },
      category: {
        required: helpers.withMessage("Category is required", required),
      },
    },
  },
  data() {
    return {
      hover: false,
      calendarOptions: {
        timeZone: "local",
        droppable: true,
        navLinks: true,
        plugins: [dayGridPlugin, timeGridPlugin, bootstrapPlugin, listPlugin],
        themeSystem: "bootstrap",
        datesSet: this.handleDatesSet,
        eventClick: this.editModalOpened,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        },
        windowResize: () => {
          this.getInitialView();
        },
        initialView: this.getInitialView(),

        initialEvents: this.activitiesArray,

        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        // dateClick: this.dateClicked,
        eventsSet: this.handleEvents,
      },
      currentEvents: this.activitiesArray,

      // Activity Types Array
      activityTypesArray: [] || null,
      selectedType: null,

      ///////////// TO DELETE //////////////////////////

      /////////////////////////////////////////////////

      newActivity: {
        title: null,
        category: null,
        start: null,
        end: null,
        allDay: null,
        description: null,
        patientUUID: null,
        doctorUUID: null,
        activityTypeUUID: null,
      },

      // Variable to store date from DATE-PICKER as YYYY-MM-DD
      selectedDate: null,

      // Object array with every hour (from 0am to 11pm) with a value as string (0 to 23)
      hoursArray: [
        { value: "00", text: "00" },
        { value: "01", text: "01" },
        { value: "02", text: "02" },
        { value: "03", text: "03" },
        { value: "04", text: "04" },
        { value: "05", text: "05" },
        { value: "06", text: "06" },
        { value: "07", text: "07" },
        { value: "08", text: "08" },
        { value: "09", text: "09" },
        { value: "10", text: "10" },
        { value: "11", text: "11" },
        { value: "12", text: "12" },
        { value: "13", text: "13" },
        { value: "14", text: "14" },
        { value: "15", text: "15" },
        { value: "16", text: "16" },
        { value: "17", text: "17" },
        { value: "18", text: "18" },
        { value: "19", text: "19" },
        { value: "20", text: "20" },
        { value: "21", text: "21" },
        { value: "22", text: "22" },
        { value: "23", text: "23" },
      ],

      // Object array of every minute (from 0 to 59) with a value as string (0 to 59)
      minutesArray: [
        { value: "00", text: "00" },
        { value: "01", text: "01" },
        { value: "02", text: "02" },
        { value: "03", text: "03" },
        { value: "04", text: "04" },
        { value: "05", text: "05" },
        { value: "06", text: "06" },
        { value: "07", text: "07" },
        { value: "08", text: "08" },
        { value: "09", text: "09" },
        { value: "10", text: "10" },
        { value: "11", text: "11" },
        { value: "12", text: "12" },
        { value: "13", text: "13" },
        { value: "14", text: "14" },
        { value: "15", text: "15" },
        { value: "16", text: "16" },
        { value: "17", text: "17" },
        { value: "18", text: "18" },
        { value: "19", text: "19" },
        { value: "20", text: "20" },
        { value: "21", text: "21" },
        { value: "22", text: "22" },
        { value: "23", text: "23" },
        { value: "24", text: "24" },
        { value: "25", text: "25" },
        { value: "26", text: "26" },
        { value: "27", text: "27" },
        { value: "28", text: "28" },
        { value: "29", text: "29" },
        { value: "30", text: "30" },
        { value: "31", text: "31" },
        { value: "32", text: "32" },
        { value: "33", text: "33" },
        { value: "34", text: "34" },
        { value: "35", text: "35" },
        { value: "36", text: "36" },
        { value: "37", text: "37" },
        { value: "38", text: "38" },
        { value: "39", text: "39" },
        { value: "40", text: "40" },
        { value: "41", text: "41" },
        { value: "42", text: "42" },
        { value: "43", text: "43" },
        { value: "44", text: "44" },
        { value: "45", text: "45" },
        { value: "46", text: "46" },
        { value: "47", text: "47" },
        { value: "48", text: "48" },
        { value: "49", text: "49" },
        { value: "50", text: "50" },
        { value: "51", text: "51" },
        { value: "52", text: "52" },
        { value: "53", text: "53" },
        { value: "54", text: "54" },
        { value: "55", text: "55" },
        { value: "56", text: "56" },
        { value: "57", text: "57" },
        { value: "58", text: "58" },
        { value: "59", text: "59" },
      ],

      // Selected hour and minute from the dropdowns
      selectedHour: { value: "08", text: "08" },
      selectedMinute: { value: "00", text: "00" },

      showModal: false,
      eventModal: false,
      categories: categories,
      submitted: false,
      submit: false,
      newEventData: {},
      edit: {},
      deleteId: {},
      event: {
        title: "",
        category: "",
      },
      editevent: {
        editTitle: "",
        editcategory: "",
      },
    };
  },
  components: {
    FullCalendar,
    SimpleBar,
    SelectModule,
    InputModule,
    Popper,
  },
  async mounted() {
    if (this.isDoctor()) {
      await this.getActivityTypes();
    }
    this.initialEvents = this.activitiesArray;
  },
  methods: {
    ...AuthGetters,
    ...PatientGetters,

    // Opening Modal
    editModalOpened(info) {
      document.getElementById("exampleModalLabel").innerHTML = "Edit";
      document.getElementById("add-btn").style.display = "block";
      document.getElementById("modalTitle").value = info.title;
      document.getElementById("modalDesc").value = info.desc;
      document.getElementById("modalHour").value = dayjs(info.date).format(
        "HH"
      );
      document.getElementById("modalMinute").value = dayjs(info.date).format(
        "mm"
      );
      this.newActivity.uuid = info.uuid;
      this.selectedDate = dayjs(info.date).format("YYYY-MM-DD");
      this.selectedHour = {
        value: dayjs(info.date).format("HH"),
        text: dayjs(info.date).format("HH"),
      };
      this.selectedMinute = {
        value: dayjs(info.date).format("mm"),
        text: dayjs(info.date).format("mm"),
      };
    },

    // Method to edit an activity
    async editActivity() {
      let url = "activity/";
      let date = `${this.selectedDate} ${this.selectedHour.value}:${this.selectedMinute.value}:00`;

      const payload = {
        activity_uuid: this.newActivity.uuid,
        modifs: {
          date: date,
          type: this.selectedType,
        },
      };

      await axios({
        method: "put",
        url: url,
        data: payload,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then(async (response) => {
          if (response.status == 200) {
            // Sweet alert success
            await Swal.fire({
              title: `${this.$t("t-success")}`,
              text: `${this.$t("t-activity-edited")}`,
              icon: "success",
              showConfirmButton: true,
              timer: 3000,
            });
            // Closing the modal which hs been opened with document.getElementById
            document.getElementById("closemodal").click();
          }
        })
        .catch((error) => {
          Swal.fire({
            title: `${this.$t("t-error")}`,
            text: `${this.$t("t-something-went-wrong")}. Error: ${
              error.response.status
            }`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    },

    // Method to check if the user is a 'docteur'
    isDoctor() {
      return this.getuserType() === "docteur";
    },

    // Method to retrieve the Activity types from the database
    async getActivityTypes() {
      let url = `activity/types/?organisation_uuid=${this.getorg_uuid()}`;

      await axios({
        method: "GET",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            // Loop to go through all types
            for (const element of response.data) {
              // Pushing the types to the array
              this.activityTypesArray.push({
                value: element.uuid,
                text: element.activity_type_name,
                desc: element.activity_type_desc,
              });
            }
            this.selectedType = this.activityTypesArray[0];
          }
        })
        .catch((error) => {
          Swal.fire({
            title: `${this.$t("t-error")}`,
            text: `${this.$t("t-something-went-wrong")}. Error: ${
              error.response.status
            }`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    },
    // Method to send a request with a new acitivity to the database
    async sendNewActivity() {
      let url = "activity/";
      let date = `${this.selectedDate} ${this.selectedHour.value}:${this.selectedMinute.value}:00`;
      this.submitted = true;
      this.submit = true;

      const newActivity = {
        date: date,
        act_type_uuid: this.selectedType.value,
        calendar_uuid: this.calendarUUID,
        title: this.newActivity.title,
        desc: this.newActivity.description,
      };

      await axios({
        method: "post",
        url: url,
        data: newActivity,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status === 201) {
            Swal.fire({
              icon: "success",
              title: "Activity added",
              showConfirmButton: true,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          this.submitted = false;
          this.submit = false;
          Swal.fire({
            title: `${this.$t("t-error")}`,
            text: `${this.$t("t-something-went-wrong")}. Error: ${
              error.response.status
            }`,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });

      this.submit = false;
      this.showModal = false;
    },
    mouseover: function () {
      this.hover = true;
    },
    mouseleave: function () {
      this.hover = false;
    },
    formatDate(date) {
      let monthNames = [
        this.$t("t-JAN"),
        this.$t("t-feb"),
        this.$t("t-MARS"),
        this.$t("t-AVRI"),
        this.$t("t-MAI"),
        this.$t("t-june"),
        this.$t("t-JUIL"),
        this.$t("t-august"),
        this.$t("t-SEPT"),
        this.$t("t-october"),
        this.$t("t-november"),
        this.$t("t-december"),
      ];
      let d = new Date(date),
        month = "" + monthNames[d.getMonth()],
        day = "" + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return [day + " " + month, year].join(",");
    },

    // Method to parse the date
    parseDate(date) {
      return dayjs(date).format("DD-MM-YYYY");
    },
    // Method to parse the hour
    parseHour(date) {
      return dayjs(date).format("HH:mm");
    },

    getInitialView() {
      if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        return "timeGridWeek";
      } else if (window.innerWidth <= 768) {
        return "listMonth";
      } else {
        return "dayGridMonth";
      }
    },
    /**
     * Modal form submit
     */
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
        const title = this.event.title;
        const category = this.event.category;
        let calendarApi = this.newEventData.view.calendar;

        this.currentEvents = calendarApi.addEvent({
          id: this.newEventData.length + 1,
          title,
          start: this.newEventData.date,
          end: this.newEventData.date,
          classNames: [category],
        });
        this.successmsg();
        this.showModal = false;
        this.newEventData = {};
      }
      this.submitted = false;
      this.event = {};
    },
    // eslint-disable-next-line no-unused-vars
    hideModal(e) {
      this.submitted = false;
      this.showModal = false;
      this.event = {};
    },
    /**
     * Edit event modal submit
     */
    // eslint-disable-next-line no-unused-vars
    editSubmit(e) {
      this.submit = true;
      const editTitle = this.editevent.editTitle;
      const editcategory = this.editevent.editcategory;

      this.edit.setProp("title", editTitle);
      this.edit.setProp("classNames", editcategory);
      this.successmsg();
      this.eventModal = false;
    },

    /**
     * Delete event
     */
    deleteEvent() {
      this.edit.remove();
      this.eventModal = false;
    },
    /**
     * Modal open for add event
     */
    dateClicked(info) {
      this.newEventData = info;
      this.eventModal = true;
    },
    /**
     * Modal open for edit event
     */
    editEvent(info) {
      this.edit = info.event;
      this.editevent.editTitle = this.edit.title;
      console.log("Edit title:", this.edit.title);
      this.editevent.editcategory = this.edit.classNames[0];
      this.eventModal = true;
    },

    closeModal() {
      this.eventModal = false;
    },

    closeEventModal() {
      this.eventModal = false;
    },

    confirm() {
      Swal.fire({
        title: this.$t("t-are-you-sure"),
        text: this.$t("t-you-wont-be-able-to-delete-this"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: this.$t("t-yes-delete-it"),
      }).then((result) => {
        if (result.value) {
          this.deleteEvent();
          Swal.fire("Deleted!", this.$t("t-event-has-been-deleted"), "success");
        }
      });
    },

    /**
     * Show list of events
     */
    handleEvents(events) {
      this.currentEvents = events;
    },

    /**
     * Show successfull Save Dialog
     */
    successmsg() {
      Swal.fire({
        position: "center",
        icon: "success",
        title: this.$t("t-event-has-been-saved"),
        showConfirmButton: false,
        timer: 1000,
      });
    },

    // Handling month change
    async handleDatesSet(event) {
      // Setting endDate to be equal to even.startStr + 29 days
      let startDay = dayjs(event.startStr).format("YYYY-MM-DD");
      let endDate = dayjs(event.startStr).add(29, "day").format("YYYY-MM-DD");
      // Setting nextMonth var to be equal to even.startStr + 1 month
      let nextMonth = dayjs(event.startStr)
        .add(1, "month")
        .format("YYYY-MM-DD");

      let smallerDate = false;

      if (dayjs(endDate).isBefore(dayjs(nextMonth))) {
        smallerDate = true;
      }

      let url = `calendar/Activity?calendar_uuid=${this.calendarUUID}&start_date=${startDay}&end_date=${endDate}`;

      await axios({
        method: "get",
        url: url,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then(async (response) => {
          if (response.status === 200) {
            if (response.data.length > 0) {
              this.currentEvents = response.data;
              this.initialEvents = response.data;
            } else {
              this.initialEvents = null;
              this.currentEvents = null;
            }

            // If smallerDate is true then call the API again with endDate and nextMonth and push the response.data to this.currentEvents and this.initialEvents
            if (smallerDate) {
              let url = `calendar/Activity?calendar_uuid=${this.calendarUUID}&start_date=${endDate}&end_date=${nextMonth}`;

              await axios({
                method: "get",
                url: url,
                headers: {
                  token: this.gettoken().Token,
                },
              })
                .then((response) => {
                  if (response.status === 200) {
                    if (response.data.length > 0) {
                      this.currentEvents = this.currentEvents.concat(
                        response.data
                      );
                      this.initialEvents = this.initialEvents.concat(
                        response.data
                      );
                    }
                  }
                })
                .catch((error) => {
                  Swal.fire({
                    title: `${this.$t("t-error")}`,
                    text: `${this.$t("t-error-occured")}. Error: ${
                      error.response.status
                    }`,
                    icon: "error",
                    confirmButtonText: "Ok",
                  });
                });
            }
            // Ordering the activities by date (ascending)
            this.initialEvents.sort((a, b) => {
              return a.date > b.date ? 1 : -1;
            });
            this.currentEvents.sort((a, b) => {
              return a.date > b.date ? 1 : -1;
            });
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
};
</script>

<template>
  <div class="row dashboard-form">
    <div class="col-2" v-if="isDoctor()">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-10">
              <button
                class="btn btn-primary"
                id="btn-new-event"
                @click="sendNewActivity()"
              >
                <div class="row">
                  <em class="mdi mdi-plus fs-5"></em>
                </div>
                {{ $t("t-create-new-event") }}
              </button>
            </div>
            <div
              class="col-1 force-center"
              v-on:mouseover="mouseover"
              v-on:mouseleave="mouseleave"
            >
              <Popper placement="right" :show="hover">
                <em
                  class="mdi mdi-information-variant badge-soft-warning fs-4"
                ></em>
                <template #content>
                  <div
                    class="card card-body fs-8"
                    style="width: 250px !important"
                  >
                    {{ $t("t-create-new-event-info") }}
                  </div>
                </template>
              </Popper>
            </div>
          </div>
          <hr />
          <div id="external-events">
            <InputModule
              className="form-floating pt-2"
              v-model="newActivity.title"
              :label="$t('t-title')"
              :placeholder="$t('t-write-here')"
              :required="true"
            />

            <InputModule
              className="form-floating pt-2"
              v-model="newActivity.description"
              :label="$t('t-description')"
              :placeholder="$t('t-write-here')"
              :required="true"
            />

            <!-- Date picker as YYYY-MM-DD -->
            <InputModule
              className="pt-2"
              v-model="selectedDate"
              :label="$t('t-date')"
              :required="true"
              type="date"
            />

            <!-- Hour and minute picker -->
            <div class="row mb-2 pt-2">
              <SelectModule
                class="col-sm-6"
                v-model="selectedHour"
                :title="$t('t-hour')"
                :required="true"
                :options="hoursArray"
                :selectedOption="selectedHour"
              />
              <SelectModule
                class="col-sm-6"
                v-model="selectedMinute"
                :title="$t('t-minute')"
                :required="true"
                :options="minutesArray"
                :selectedOption="selectedMinute"
              />
            </div>

            <SelectModule
              class="pt-2"
              v-model="newActivity.activityTypeUUID"
              :title="$t('t-activity-type')"
              :options="activityTypesArray"
              :required="true"
              :selectedOption="selectedType"
            />
          </div>
        </div>
      </div>
      <!--end card-->
    </div>
    <div class="col-2 offset-1">
      <div class="card">
        <div class="card-body">
          <h5 class="mb-1 text-muted">{{ $t("t-upcoming-events") }}</h5>
          <p class="text-muted">{{ $t("t-dont-miss-scheduled-events") }}</p>
          <hr />
          <SimpleBar
            style="max-height: 65vh"
            class="upcoming-events pe-2 me-n1"
            data-simplebar="init"
          >
            <div
              class="card"
              style="
                box-shadow: 5px 5px 5px #1dac90 !important;
                border: 1px solid #1dac90 !important;
              "
              v-for="event in activitiesArray"
              :key="event.uuid"
            >
              <div class="card-body">
                <div class="d-flex mb-3">
                  <div class="flex-grow-1">
                    <em class="bg-soft-primary"></em
                    ><span class="fw-medium"
                      >{{ this.parseDate(event.date) }}
                      <button
                        class="ml-2 col-sm-3 btn btn-sm btn-info add-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#showModal"
                        @click="editModalOpened(event)"
                      >
                        Edit
                      </button>
                    </span>
                    <p class="text-muted mb-0">
                      {{ this.parseHour(event.date) }}
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <small class="badge badge-soft-primary ms-auto"></small>
                  </div>
                </div>
                <h6 class="card-title fs-16">{{ event.title }}</h6>
                <p class="text-muted text-truncate-two-lines mb-0">
                  {{ event.desc }}
                </p>
              </div>
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
    <div class="col-7">
      <div class="card">
        <div class="card-body">
          <FullCalendar :options="calendarOptions" />
        </div>
      </div>
    </div>
  </div>
  <div style="clear: both"></div>

  <div
    class="modal fade zoomIn"
    id="showModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header p-3 bg-soft-info">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="close-modal"
            v-if="isDoctor()"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-lg-12">
              <div class="row mb-2 pt-2">
                <InputModule
                  :label="$t('t-title')"
                  :readonly="true"
                  :disabled="true"
                  id="modalTitle"
                />
                <InputModule
                  :label="$t('t-description')"
                  :readonly="true"
                  :disabled="true"
                  :rows="2"
                  id="modalDesc"
                />
                <SelectModule
                  class="col-sm-6"
                  v-model="selectedHour"
                  :title="$t('t-hour')"
                  :required="true"
                  :options="hoursArray"
                  :selectedOption="selectedHour"
                  id="modalHour"
                />
                <SelectModule
                  class="col-sm-6"
                  v-model="selectedMinute"
                  :title="$t('t-minute')"
                  :required="true"
                  :options="minutesArray"
                  :selectedOption="selectedMinute"
                  id="modalMinute"
                />
              </div>
              <SelectModule
                class="pt-2"
                v-model="newActivity.activityTypeUUID"
                :title="$t('t-activity-type')"
                :options="activityTypesArray"
                :required="true"
                :selectedOption="selectedType"
                id="modalType"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- Button aligned on the left to delete -->
          <div class="col-6">
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="deleteActivity"
            >
              Delete
            </button>
          </div>

          <div class="hstack gap-2 justify-content-end">
            <button
              type="button"
              class="btn btn-light"
              data-bs-dismiss="modal"
              id="closemodal"
            >
              {{ $t("t-close") }}
            </button>
            <button
              class="btn btn-success"
              id="add-btn"
              v-on:click="editActivity()"
            >
              {{ $t("t-update") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

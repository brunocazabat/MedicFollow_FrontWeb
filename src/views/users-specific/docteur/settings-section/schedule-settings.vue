<script>
// General components imports
import Layout from "@/components/view-related/layout/main.vue";
import { AuthGetters } from "@/components/back-related/state/helpers";

// Specific Components imports
import ScheduleModule from "./scheduleModule.vue";
import DaysCheckModule from "./daysOfTheWeekCheck.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      value: ["javascript"],

      // const
      startID: 0,
      endID: 1,

      // Days value array
      daysArray: [
        { id: 0, dayName: "Monday", scheduleVal: false, scheduleNbr: 1 },
        { id: 1, dayName: "Tuesday", scheduleVal: false, scheduleNbr: 1 },
        { id: 2, dayName: "Wednesday", scheduleVal: false, scheduleNbr: 1 },
        { id: 3, dayName: "Thursday", scheduleVal: false, scheduleNbr: 1 },
        { id: 4, dayName: "Friday", scheduleVal: false, scheduleNbr: 1 },
        { id: 5, dayName: "Saturday", scheduleVal: false, scheduleNbr: 1 },
        { id: 6, dayName: "Sunday", scheduleVal: false, scheduleNbr: 1 },
      ],

      // Schedules value array
      schedulesArray: [
        {
          id: 1,
          schedule: [{ id: 1, start: "08:00", end: "12:00" }],
        },
        {
          id: 2,
          schedule: [{ id: 1, start: "08:00", end: "12:00" }],
        },
        {
          id: 3,
          schedule: [{ id: 1, start: "08:00", end: "12:00" }],
        },
        {
          id: 4,
          schedule: [{ id: 1, start: "08:00", end: "12:00" }],
        },
        {
          id: 5,
          schedule: [{ id: 1, start: "08:00", end: "12:00" }],
        },
        {
          id: 6,
          schedule: [{ id: 1, start: "08:00", end: "12:00" }],
        },
        {
          id: 7,
          schedule: [{ id: 1, start: "08:00", end: "12:00" }],
        },
      ],

      // Radio Box Var
      picked: "NO",

      // Maximum numbers of schedules
      maxSchedules: 5,

      // Appointments time per slot
      timePerSlot: 30,

      // Send button var
      submitSchedulesDisabled: true,
    };
  },
  components: {
    Layout,
    ScheduleModule,
    DaysCheckModule,
  },
  methods: {
    ...AuthGetters,
    // Function to check if the user has checked at least one day
    checkDays() {
      let daysChecked = 0;
      for (let i = 0; i < this.daysArray.length; i++) {
        if (this.daysArray[i].scheduleVal == true) {
          daysChecked++;
        }
      }
      if (daysChecked > 0) {
        return false;
      } else {
        return true;
      }
    },
    // Method to GET if the doctor accepts appointments
    async getAcceptAppointments() {
      let url = "appointment/config/?orgUuid=" + this.getorg_uuid();

      await axios
        .get(url, {
          headers: {
            token: this.gettoken().Token,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            // Setting the radio box value
            if (response.data.enable == 1) {
              this.picked = "YES";
            } else {
              this.picked = "NO";
            }
            // Setting the time per slot and max schedules
            this.maxSchedules = response.data.max;
            this.timePerSlot = response.data.time;
          }
        })
        .catch((error) => {
          // Sweet Alert Error
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Error: " + error,
          });
        });
    },
    // Function to GET the schedules of the doctor
    async getDoctorSchedules() {
      let url = "appointment/config/workday/?orgUuid=" + this.getorg_uuid();

      try {
        await axios
          .get(url, {
            headers: {
              token: this.gettoken().Token,
            },
          })
          .then((response) => {
            if (response.status == 200) {
              let data = response.data;
              for (let i = 0; i < data.length; i++) {
                this.daysArray[data[i].day - 1].scheduleVal = true;
                this.daysArray[data[i].day - 1].scheduleNbr =
                  data[i].hour.length;
                for (let j = 0; j < data[i].hour.length; j++) {
                  this.schedulesArray[data[i].day - 1].schedule[j] = {
                    id: j + 1,
                    start: data[i].hour[j][0],
                    end: data[i].hour[j][1],
                  };
                }
              }
            }
          });
      } catch (error) {
        // Sweet alert error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!... Error: " + error,
        });
      }
    },
    // Adds a new schedule to display
    addScheduleNbr(dayOfTheWeek) {
      this.daysArray.forEach((day) => {
        if (dayOfTheWeek === day.dayName.toLowerCase()) {
          day.scheduleNbr += 1;
        }
      });
    },
    // Removes a schedule to display, cannot display 0 schedule
    removeScheduleNbr(dayOfTheWeek) {
      this.daysArray.forEach((day) => {
        if (dayOfTheWeek === day.dayName.toLowerCase() && day.scheduleNbr > 1) {
          day.scheduleNbr -= 1;
        }
      });
    },
    // Function to send the schedules to the API
    async sendSchedules() {
      let url = "appointment/config/workday/?orgUuid=" + this.getorg_uuid();

      let payload = {
        listWork: [],
      };

      if (this.checkSchedules() === false) {
        return;
      }

      // Loop to create the payload
      for (let i = 0; i < this.daysArray.length; i++) {
        if (this.daysArray[i].scheduleVal) {
          let hour = [];
          for (let j = 0; j < this.daysArray[i].scheduleNbr; j++) {
            hour.push([
              Number(this.schedulesArray[i].schedule[j].start),
              Number(this.schedulesArray[i].schedule[j].end),
            ]);
          }
          payload.listWork.push({
            day: i + 1,
            hour: hour,
          });
        }
      }

      // Sweet alert confirmation
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, submit it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          if (this.sendAcceptAppointments() === false) {
            return;
          }
          // Send the data to the API
          await axios({
            method: "put",
            url: url,
            data: payload,
            headers: {
              token: this.gettoken().Token,
            },
          })
            .then((response) => {
              if (response.status == 200) {
                // Sweet alert success
                Swal.fire(
                  "Submitted!",
                  "Your schedules have been submitted.",
                  "success"
                ) // refresh the page if press OK | TODO: Websocket
                  .then((result) => {
                    if (result.isConfirmed) {
                      location.reload();
                    }
                  });
              }
            })
            .catch((error) => {
              // Sweet alert error
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!... Error: " + error,
              });
            });
        }
      });
    },
    // Function to update the schedule array
    updateSchedule(value, day, index) {
      if (value.id === this.startID) {
        this.schedulesArray[day].schedule[index].start = value.value;
      } else if (value.id === this.endID) {
        this.schedulesArray[day].schedule[index].end = value.value;
      }
    },
    // Function to disable the the send button if no day is selected
    disableSendButton() {
      let disable = true;

      for (let i = 0; i < this.daysArray.length; i++) {
        if (this.daysArray[i].scheduleVal) {
          disable = false;
        }
      }
      return disable;
    },
    // Function to check if the schedules are valid
    checkSchedules() {
      for (let i = 0; i < this.daysArray.length; i++) {
        if (this.daysArray[i].scheduleVal) {
          for (let j = 0; j < this.daysArray[i].scheduleNbr; j++) {
            if (
              j < this.daysArray[i].scheduleNbr - 1 &&
              Number(this.schedulesArray[i].schedule[j].end) >
                Number(this.schedulesArray[i].schedule[j + 1].start)
            ) {
              let dayString = this.daysArray[i].dayName;
              // Sweet alert error
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `The end time of the ${dayString} schedule ${
                  j + 1
                } cannot be greater than the start time of the ${dayString} schedule ${
                  j + 2
                }!`,
              });
              return false;
            }
            // Else if the start time is greater than the end time
            else if (
              Number(this.schedulesArray[i].schedule[j].start) >
              Number(this.schedulesArray[i].schedule[j].end)
            ) {
              let dayString = this.daysArray[i].dayName;
              // Sweet alert error
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `The start time of the ${dayString} schedule ${
                  j + 1
                } cannot be greater than the end time of the ${dayString} schedule ${
                  j + 1
                }!`,
              });
              return false;
            }
          }
        }
      }
      return true;
    },
    // Function to send to API if the user accepts appointments
    async sendAcceptAppointments() {
      let url = "appointment/config/?orgUuid=" + this.getorg_uuid();
      let acceptAppointments;

      if (this.picked === "YES") {
        acceptAppointments = 1;
      } else {
        acceptAppointments = 0;
      }

      // Checking if maxSchedules and timePerSlot are containing only numbers
      // regex to check if only numbers in a string
      let re = /^[0-9]+$/;
      if (!re.test(this.maxSchedules) || !re.test(this.timePerSlot)) {
        // Sweet alert error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "The max schedules and time per slot must be numbers!",
        });
        return false;
      }

      const payload = {
        max: Number(this.maxSchedules),
        time: Number(this.timePerSlot),
        enable: acceptAppointments,
      };

      await axios({
        method: "put",
        url: url,
        data: payload,
        headers: {
          token: this.gettoken().Token,
        },
      })
        .then((response) => {
          if (response.status == 200) {
            return true;
          }
          return false;
        })
        .catch((error) => {
          // Sweet alert error
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!... Error: " + error,
          });
          return false;
        });
    },
  },
  mounted() {
    this.getAcceptAppointments();
    this.getDoctorSchedules();
  },
};
</script>

<template>
  <Layout>
    <div class="project-wrapper mf-form-width">
      <h2 class="text-primary text-uppercase">
        {{ $t("t-schedulesettings") }}
      </h2>
      <p class="text-muted">{{ $t("t-scheduleinfotext") }}.</p>

      <div class="card">
        <div class="card-body">
          <!-- TRUE/FALSE NEW MEETING -->
          <div class="p-3 card-body">
            <p class="font-size-medium">
              {{ $t("t-doyouacceptmeetings") }}
            </p>
            <!-- Padding -->
            <div class="col-6 row p-3">
              <!-- Yes -->
              <div class="form-check col-lg-2">
                <input
                  class="form-check-input"
                  type="radio"
                  id="yesGridCheck"
                  value="YES"
                  v-model="picked"
                />
                <label
                  class="form-check-label text-uppercase"
                  for="yesGridCheck"
                  >{{ $t("t-yes") }}</label
                >
              </div>

              <!-- No -->
              <div class="form-check col-lg-2">
                <input
                  class="form-check-input"
                  type="radio"
                  id="noGridCheck"
                  value="NO"
                  v-model="picked"
                />
                <label
                  class="form-check-label text-uppercase"
                  for="noGridCheck"
                  >{{ $t("t-no") }}</label
                >
              </div>
            </div>
            <!-- Input fields for the maxAppointments and timePerSlot -->
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="maxAppointments">{{
                    $t("t-maxappointments")
                  }}</label>
                  <input
                    type="number"
                    class="form-control"
                    id="maxAppointments"
                    v-model="maxSchedules"
                    placeholder="Max appointments"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="timePerSlot">{{ $t("t-timeperslot") }}</label>
                  <input
                    type="number"
                    class="form-control"
                    id="timePerSlot"
                    v-model="timePerSlot"
                    placeholder="Time per slot"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- DAYS OF THE WEEK CHECKBOXES -->
          <div id="daysOfWeekDiv" class="p-3 card-body">
            <p class="font-size-medium">Which days do you accept meetings?</p>
            <!-- Padding -->
            <div class="row mf-schedule-days">
              <div v-for="(day, key) in daysArray" :key="key">
                <DaysCheckModule :day="day.dayName" v-model="day.scheduleVal" />
              </div>
            </div>
          </div>

          <!-- SCHEDULE PICKER -->
          <div id="schedulePickerDiv" class="row p-2">
            <!-- MONDAY SCHEUDLE -->
            <div class="p-3" v-if="daysArray.at(0).scheduleVal">
              <label for="mondayDiv" class="form-label mb-2 font-size-medium"
                ><strong>Monday Schedule</strong></label
              >

              <!-- Schedules -->
              <div
                v-for="(index, counter) in daysArray[0].scheduleNbr"
                :key="index"
              >
                <ScheduleModule
                  :hour1="schedulesArray[0].schedule[counter].start"
                  :hour2="schedulesArray[0].schedule[counter].end"
                  @hour-update="updateSchedule($event, 0, counter)"
                />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button
                  class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('monday')"
                >
                  Add
                </button>
                <button
                  class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('monday')"
                >
                  Remove
                </button>
              </div>
            </div>

            <!-- TUESDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.at(1).scheduleVal">
              <label for="tuesdayDiv" class="form-label mb-2 font-size-medium"
                ><strong>Tuesday Schedule</strong></label
              >

              <!-- Schedules -->
              <div
                v-for="(index, counter) in daysArray.at(1).scheduleNbr"
                :key="index"
              >
                <ScheduleModule
                  :hour1="schedulesArray[1].schedule[counter].start"
                  :hour2="schedulesArray[1].schedule[counter].end"
                  @hour-update="updateSchedule($event, 1, counter)"
                />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button
                  class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('tuesday')"
                >
                  Add
                </button>
                <button
                  class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('tuesday')"
                >
                  Remove
                </button>
              </div>
            </div>

            <!-- WEDNESDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.at(2).scheduleVal">
              <label for="wednesdayDiv" class="form-label mb-2 font-size-medium"
                ><strong>Wednesday Schedule</strong></label
              >

              <!-- Schedules -->
              <div
                v-for="(index, counter) in daysArray.at(2).scheduleNbr"
                :key="index"
              >
                <ScheduleModule
                  :hour1="schedulesArray[2].schedule[counter].start"
                  :hour2="schedulesArray[2].schedule[counter].end"
                  @hour-update="updateSchedule($event, 2, counter)"
                />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button
                  class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('wednesday')"
                >
                  Add
                </button>
                <button
                  class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('wednesday')"
                >
                  Remove
                </button>
              </div>
            </div>

            <!-- THURSDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.at(3).scheduleVal">
              <label for="thursdayDiv" class="form-label mb-2 font-size-medium"
                ><strong>Thursday Schedule</strong></label
              >

              <!-- Schedules -->
              <div
                v-for="(index, counter) in daysArray.at(3).scheduleNbr"
                :key="index"
              >
                <ScheduleModule
                  :hour1="schedulesArray[3].schedule[counter].start"
                  :hour2="schedulesArray[3].schedule[counter].end"
                  @hour-update="updateSchedule($event, 3, counter)"
                />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button
                  class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('thursday')"
                >
                  Add
                </button>
                <button
                  class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('thursday')"
                >
                  Remove
                </button>
              </div>
            </div>

            <!-- FRIDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.at(4).scheduleVal">
              <label for="fridayDiv" class="form-label mb-2 font-size-medium"
                ><strong>Friday Schedule</strong></label
              >

              <div
                v-for="(index, counter) in daysArray.at(4).scheduleNbr"
                :key="index"
              >
                <ScheduleModule
                  :hour1="schedulesArray[4].schedule[counter].start"
                  :hour2="schedulesArray[4].schedule[counter].end"
                  @hour-update="updateSchedule($event, 4, counter)"
                />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button
                  class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('friday')"
                >
                  Add
                </button>
                <button
                  class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('friday')"
                >
                  Remove
                </button>
              </div>
            </div>

            <!-- SATURDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.at(5).scheduleVal">
              <label for="saturdayDiv" class="form-label mb-2 font-size-medium"
                ><strong>Saturday Schedule</strong></label
              >

              <!-- Schedules -->
              <div
                v-for="(index, counter) in daysArray.at(5).scheduleNbr"
                :key="index"
              >
                <ScheduleModule
                  :hour1="schedulesArray[5].schedule[counter].start"
                  :hour2="schedulesArray[5].schedule[counter].end"
                  @hour-update="updateSchedule($event, 5, counter)"
                />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button
                  class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('saturday')"
                >
                  Add
                </button>
                <button
                  class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('saturday')"
                >
                  Remove
                </button>
              </div>
            </div>

            <!-- SUNDAY SCHEDULE -->
            <div class="p-3" v-if="daysArray.at(6).scheduleVal">
              <label for="sundayDiv" class="form-label mb-2 font-size-medium"
                ><strong>Sunday Schedule</strong></label
              >

              <!-- Schedules -->
              <div
                v-for="(index, counter) in daysArray.at(6).scheduleNbr"
                :key="index"
              >
                <ScheduleModule
                  :hour1="schedulesArray[6].schedule[counter].start"
                  :hour2="schedulesArray[6].schedule[counter].end"
                  @hour-update="updateSchedule($event, 6, counter)"
                />
              </div>

              <!-- Add and Remove button -->
              <div class="btn-padding">
                <button
                  class="lh-1 btn btn-primary font-size-medium col-lg-2"
                  v-on:click="addScheduleNbr('sunday')"
                >
                  Add
                </button>
                <button
                  class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-2"
                  v-on:click="removeScheduleNbr('sunday')"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-3 mb-3 row align-right">
        <div class="space-in-between">
          <button
            class="lh-1 btn btn-primary font-size-medium col-sm-4"
            v-on:click="sendSchedules"
            :disabled="disableSendButton()"
          >
            {{ $t("t-submit") }}
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>

import axios from "axios";
import Swal from "sweetalert2";
import i18n from "../../i18n";
import dayjs from "dayjs";

const schedules = {
  // Get a list of all the doctors with available schedules
  async getDoctorList(userToken, patientUUID) {
    let url = `medical/doctor/${patientUUID}/`;
    let res = null;

    await axios({
      method: "get",
      url: url,
      headers: {
        token: userToken,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          res = response.data;
        }
      })
      .catch((error) => {
        // Sweet Alert
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${i18n.t("t-error-occured")}. Error: ${error}`,
        });
        res = error;
      });

    return res;
  },

  // Retrieves the list of available schedules for a given doctor
  getScheduleList(userToken, patientUUID, doctorUUID) {
    // TODO
    // Not implemented in the backend yet
    console.log("Arugments: ", userToken, patientUUID, doctorUUID);
  },

  // Method to get the appointments slots
  async getAppointmentsOfFamily(
    orgUUID,
    patientUUID,
    doctorUUID,
    date,
    searchType,
    userToken
  ) {
    let url = `appointment/calendar/?type=${searchType}&date=${date}&organisationUuid=${orgUUID}&patientUuid=${patientUUID}&doctorUuid=${doctorUUID}`;
    // 10b3061f-53cb-40e9-92a3-c273441786a6
    let res = [];

    await axios({
      method: "get",
      url: url,
      headers: {
        token: userToken,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          for (let i = 0; i < response.data.appointments.length; i++) {
            res.push({
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
          title: `ERROR`,
          text: `Error: ${error}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
        res = error;
      });

    return res;
  },

  // Method to parse the date
  parseDate(date, method = "DD-MM-YYYY") {
    return dayjs(date).format(method);
  },
  // Method to parse the hour
  parseHour(date) {
    return dayjs(date).format("HH:mm");
  },
};

export default schedules;

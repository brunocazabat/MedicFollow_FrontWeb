import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";

var calendar = {
  async getCalendar(patientUUID, userToken) {
    let url = `calendar/?patient_uuid=${patientUUID}`;
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
          res = response.data[0];
        }
      })
      .catch((error) => {
        // Sweet Alert error occured getting the calendar
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${this.$t("t-error-getting-calendar")}. Error: ${error}`,
        });
        res = error;
      });

    return res;
  },

  async getActivities(startDate, endDate, calendarUUID, userToken) {
    let url = `calendar/Activity?calendar_uuid=${calendarUUID}&start_date=${startDate}&end_date=${endDate}`;
    let activities = [] || null;

    await axios({
      method: "get",
      url: url,
      headers: {
        token: userToken,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          if (response.data.length > 0) {
            activities = response.data;
            // Sorting the activities by date (ascending)
            activities.sort((a, b) => {
              return a.date > b.date ? 1 : -1;
            });
          } else {
            activities = null;
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
        activities = null;
      });

    return activities;
  },

  async getMultipleActivities(startDate, endDate, calendarUUID, userToken) {
    let url = `calendar/Activity?calendar_uuid=${calendarUUID}&start_date=${startDate}&end_date=${endDate}`;
    let responseArray = [] || null;

    let smallerDate = false;

    // Setting nextMonth var to be equal to even.startStr + 1 month
    let nextMonth = dayjs(startDate).add(1, "month").format("YYYY-MM-DD");

    if (dayjs(endDate).isBefore(dayjs(nextMonth))) {
      smallerDate = true;
    }

    await axios({
      method: "get",
      url: url,
      headers: {
        token: userToken,
      },
    })
      .then(async (response) => {
        if (response.status === 200) {
          if (response.data.length > 0) {
            responseArray = response.data;
          } else {
            responseArray = [];
          }

          // If smallerDate is true then call the API again with endDate and nextMonth and push the response.data to this.currentEvents and this.initialEvents
          if (smallerDate) {
            let url = `calendar/Activity?calendar_uuid=${calendarUUID}&start_date=${endDate}&end_date=${nextMonth}`;

            await axios({
              method: "get",
              url: url,
              headers: {
                token: userToken,
              },
            })
              .then((response) => {
                if (response.status === 200) {
                  if (response.data.length > 0) {
                    responseArray = this.currentEvents.concat(response.data);
                    // Sorting the activities by date (ascending)
                    responseArray.sort((a, b) => {
                      return a.date > b.date ? 1 : -1;
                    });
                  } else {
                    if (responseArray.length > 0) {
                      // Sorting the activities by date (ascending)
                      responseArray.sort((a, b) => {
                        return a.date > b.date ? 1 : -1;
                      });
                    }
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
                responseArray = null;
              });
          }
        }
      })
      .catch((error) => {
        // Sweet Alert
        Swal.fire({
          title: "Error",
          text: "An error occured. Error: " + error,
          icon: "error",
          confirmButtonText: "Ok",
        });
        return null;
      });

    return responseArray;
  },
};

export default calendar;

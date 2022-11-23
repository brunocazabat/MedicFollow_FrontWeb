import axios from "axios";

const managePatients = {
  // Family List
  async getFamilyList(userToken) {
    let url = "family/";
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
        res = error;
      });

    return res;
  },

  // Medical Group List
  async getMedicalGroupList(userToken) {
    let url = "medical/";
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
        res = error;
      });

    return res;
  },
  // Creating a patient
  // async createPatient(userToken, patientUUID, patientData) {},
  // Updating a patient
  // async updatePatient(userToken, patientUUID, patientData) {},
  // Deleting a patient
  // async deletePatient(userToken, patientUUID) {},
};

export default managePatients;

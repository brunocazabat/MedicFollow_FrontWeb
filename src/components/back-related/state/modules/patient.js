export const state = {
  patientUUID: sessionStorage.getItem("currentPatient"),
  patientFirstname: sessionStorage.getItem("currentPatientFIRSTNAME"),
  patientLastname: sessionStorage.getItem("currentPatientLASTNAME"),
  patientDOB: sessionStorage.getItem("currentPatientDOB"),
  patientSocialNumber: sessionStorage.getItem("currentPatientSOCIALNUMBER"),
};

export const mutations = {
  SET_PATIENT_UUID(state, patientUUID) {
    state.patientUUID = patientUUID;
    saveState("currentPatient", patientUUID);
  },
  SET_PATIENT_FIRSTNAME(state, firstname) {
    state.firstname = firstname;
    saveState("currentPatientFIRSTNAME", firstname);
  },
  SET_PATIENT_LASTNAME(state, lastname) {
    state.lastname = lastname;
    saveState("currentPatientLASTNAME", lastname);
  },
  SET_PATIENT_DOB(state, dob) {
    state.dob = dob;
    saveState("currentPatientDOB", dob);
  },
  SET_PATIENT_SOCIALNUMBER(state, socialNumber) {
    state.socialNumber = socialNumber;
    saveState("currentPatientSOCIALNUMBER", socialNumber);
  },
};

export const getters = {
  getPatientUUID(state) {
    return state.patientUUID;
  },
  getPatientFirstname(state) {
    return state.firstname;
  },
  getPatientLastname(state) {
    return state.lastname;
  },
  getPatientDOB(state) {
    return state.dob;
  },
  getPatientSocialNumber(state) {
    return state.socialNumber;
  },
};

export const actions = {
  async setClearAll({ commit }) {
    commit("SET_PATIENT_UUID", null);
    commit("SET_PATIENT_FIRSTNAME", null);
    commit("SET_PATIENT_LASTNAME", null);
    commit("SET_PATIENT_DOB", null);
    commit("SET_PATIENT_SOCIALNUMBER", null);
  },
  async setPatientUUID({ commit }, patientUUID) {
    commit("SET_PATIENT_UUID", patientUUID);
  },
  async setPatientFirstname({ commit }, firstname) {
    commit("SET_PATIENT_FIRSTNAME", firstname);
  },
  async setPatientLastname({ commit }, lastname) {
    commit("SET_PATIENT_LASTNAME", lastname);
  },
  setPatientDOB({ commit }, dob) {
    commit("SET_PATIENT_DOB", dob);
  },
  async setPatientSocialNumber({ commit }, socialNumber) {
    commit("SET_PATIENT_SOCIALNUMBER", socialNumber);
  },
};

function saveState(key, value) {
  sessionStorage.setItem(key, value);
}

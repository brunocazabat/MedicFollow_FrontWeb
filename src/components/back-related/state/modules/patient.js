export const state = {
  patientUUID: sessionStorage.getItem("currentPatient"),
  patientFirstname: sessionStorage.getItem("currentPatientFIRSTNAME"),
  patientLastname: sessionStorage.getItem("currentPatientLASTNAME"),
  patientDOB: sessionStorage.getItem("currentPatientDOB"),
  patientSocialNumber: sessionStorage.getItem("currentPatientSOCIALNUMBER"),
  patientGender: sessionStorage.getItem("currentPatientGENDER"),
  patientIsConscious: sessionStorage.getItem("currentPatientISCONSCIOUS"),
  patientEmail: sessionStorage.getItem("currentPatientEMAIL"),
  patientCreatedAt: sessionStorage.getItem("currentPatientCREATEDAT"),
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
  SET_PATIENT_GENDER(state, gender) {
    state.gender = gender;
    saveState("currentPatientGENDER", gender);
  },
  SET_PATIENT_ISCONSCIOUS(state, isConscious) {
    state.isConscious = isConscious;
    saveState("currentPatientISCONSCIOUS", isConscious);
  },
  SET_PATIENT_EMAIL(state, email) {
    state.email = email;
    saveState("currentPatientEMAIL", email);
  },
  SET_PATIENT_CREATEDAT(state, createdAt) {
    state.createdAt = createdAt;
    saveState("currentPatientCREATEDAT", createdAt);
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
  getPatientGender(state) {
    return state.gender;
  },
  getPatientIsConscious(state) {
    return state.isConscious;
  },
  getPatientEmail(state) {
    return state.email;
  },
  getPatientCreatedAt(state) {
    return state.createdAt;
  },
};

export const actions = {
  async setPatientClearAll({ commit }) {
    commit("SET_PATIENT_UUID", null);
    commit("SET_PATIENT_FIRSTNAME", null);
    commit("SET_PATIENT_LASTNAME", null);
    commit("SET_PATIENT_DOB", null);
    commit("SET_PATIENT_SOCIALNUMBER", null);
    commit("SET_PATIENT_GENDER", null);
    commit("SET_PATIENT_ISCONSCIOUS", null);
    commit("SET_PATIENT_EMAIL", null);
    commit("SET_PATIENT_CREATEDAT", null);
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
  async setPatientGender({ commit }, gender) {
    commit("SET_PATIENT_GENDER", gender);
  },
  async setPatientIsConscious({ commit }, isConscious) {
    commit("SET_PATIENT_ISCONSCIOUS", isConscious);
  },
  async setPatientEmail({ commit }, email) {
    commit("SET_PATIENT_EMAIL", email);
  },
  async setPatientCreatedAt({ commit }, createdAt) {
    commit("SET_PATIENT_CREATEDAT", createdAt);
  },
};

function saveState(key, value) {
  sessionStorage.setItem(key, value);
}

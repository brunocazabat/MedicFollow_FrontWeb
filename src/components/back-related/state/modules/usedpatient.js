class usedPatient {
  constructor() {
    this.patient = {
      uuid: "",
      fName: "",
      lName: "",
      socialSecurity: "",
      dob: "",
    };
  }

  setPatient(patient) {
    this.patient = patient;
  }

  getPatient() {
    return this.patient;
  }
}

export default new usedPatient();

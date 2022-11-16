import { mapState, mapActions, mapGetters } from "vuex";

// BALLEC
export const layoutMethods = mapActions("layout", [
  "changeLayoutType",
  "changeLayoutWidth",
  "changeSidebarSize",
  "changeTopbar",
  "changeMode",
  "changePosition",
  "changeSidebarView",
  "changeSidebarColor",
]);

export const notificationMethods = mapActions("notification", [
  "success",
  "error",
  "clear",
]);

export const layoutComputed = {
  ...mapState("layout", {
    layoutType: (state) => state.layoutType,
    sidebarSize: (state) => state.sidebarSize,
    layoutWidth: (state) => state.layoutWidth,
    topbar: (state) => state.topbar,
    mode: (state) => state.mode,
    position: (state) => state.position,
    sidebarView: (state) => state.sidebarView,
    sidebarColor: (state) => state.sidebarColor,
  }),
};

export const AuthActions = mapActions("auth", [
  "setLogIn",
  "setLogOut",
  "setGetMe",
  "setUI",
  "setPatientUUID",
  "setEmail",
  "setPhone",
]);

export const SecurityActions = mapActions("security", [
  "setCaptchaValid",
  "setLock",
]);

export const AuthGetters = mapGetters("auth", [
  "getisloggedIn",
  "getuserType",
  "getuserUI",
  "getemail",
  "getphone",
  "getfirstname",
  "getlastname",
  "getfullname",
  "getheader",
  "getuuid",
  "gettoken",
  "getorg_uuid",
]);

export const SecurityGetters = mapGetters("security", [
  "getisRecaptchaEnabled",
  "getisLocked",
]);

export const ApiActions = mapGetters("fetchApi", ["getApiNoParam"]);

export const PatientSetters = mapActions("patient", [
  "setPatientUUID",
  "setPatientFirstname",
  "setPatientLastname",
  "setPatientDOB",
  "setPatientSocialNumber",
  "setPatientClearAll",
  "setPatientGender",
  "setPatientIsConscious",
  "setPatientEmail",
  "setPatientCreatedAt",
]);

export const PatientGetters = mapGetters("patient", [
  "getPatientUUID",
  "getPatientFirstname",
  "getPatientLastname",
  "getPatientDOB",
  "getPatientSocialNumber",
  "getPatientGender",
  "getPatientIsConscious",
  "getPatientEmail",
  "getPatientCreatedAt",
]);

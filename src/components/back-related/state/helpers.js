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
// BALLEC

export const AuthActions = mapActions("auth", [
  "setLogIn",
  "setLogOut",
  "setGetMe",
  "setUI",
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
]);

export const SecurityGetters = mapGetters("security", [
  "getisRecaptchaEnabled",
  "getisLocked",
]);

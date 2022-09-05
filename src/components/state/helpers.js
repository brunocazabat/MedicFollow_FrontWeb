import { mapState, mapGetters, mapActions } from "vuex";

export const authComputed = {
  ...mapState("auth", {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters("auth", ["isloggedIn"]),
};

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

export const authMethods = mapActions("auth", [
  "LogIn",
  "Unlock",
  "logOut",
  "register",
  "resetPassword",
]);

export const securityMethods = mapActions("security", ["setCaptchaValid"]);

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

import axios from "axios";

export const state = {
  token: sessionStorage.getItem("currentUserTOKEN"),
  headers: sessionStorage.getItem("currentUserHEADERS"),
  email: sessionStorage.getItem("currentUserEMAIL"),
  uuid: sessionStorage.getItem("currentUserUUID"),
  firstname: sessionStorage.getItem("currentUserFIRSTNAME"),
  lastname: sessionStorage.getItem("currentUserLASTNAME"),
  role: sessionStorage.getItem("currentUserROLE"),
  ui: sessionStorage.getItem("currentUserUI"),
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
    saveState("currentUserTOKEN", token);
  },
  SET_UUID(state, uuid) {
    state.uuid = uuid;
    saveState("currentUserUUID", uuid);
  },
  SET_EMAIL(state, email) {
    state.email = email;
    saveState("currentUserEMAIL", email);
  },
  SET_FIRSTNAME(state, firstname) {
    state.firstname = firstname;
    saveState("currentUserFIRSTNAME", firstname);
  },
  SET_LASTNAME(state, lastname) {
    state.lastname = lastname;
    saveState("currentUserLASTNAME", lastname);
  },
  SET_ROLE(state, role) {
    state.role = role;
    saveState("currentUserROLE", role);
  },
  SET_UI(state, ui) {
    state.ui = ui;
    saveState("currentUserUI", ui);
  },
  SET_HEADERS(state, token) {
    state.headers = {
      "Content-Type": "application/json",
      Token: "Bearer " + token,
    };
    saveState("currentUserHEADERS", state.headers);
  },
};

export const getters = {
  getisloggedIn(state) {
    return !!(state.token && state.uuid && state.email);
  },
  getuserType(state) {
    return state.role;
  },
  getuserUI(state) {
    return state.ui;
  },
  getemail(state) {
    return state.email;
  },
  getfirstname(state) {
    return state.firstname;
  },
  getlastname(state) {
    return state.lastname;
  },
  getfullname(state) {
    return state.firstname + " " + state.lastname;
  },
};

export const actions = {
  async setLogIn({ dispatch }, credentials) {
    try {
      let response = await axios.put("users", credentials);

      if (response.status === 200) {
        dispatch("setToken", response.data.token);
        dispatch("setEmail", response.data.user.email);
        dispatch("setUuid", response.data.user.uuid);
        dispatch("setHeaders", response.data.token);
      }
      return response.status;
    } catch (error) {
      return error.response.status;
    }
  },

  async setLogOut({ dispatch }) {
    dispatch("setToken", null);
    dispatch("setUuid", null);
    dispatch("setEmail", null);
    dispatch("setFirstName", null);
    dispatch("setLastName", null);
    dispatch("setRole", null);
    dispatch("setUI", null);
    dispatch("setHeaders", null);
    window.sessionStorage.removeItem("currentUserTOKEN");
    window.sessionStorage.removeItem("currentUserUUID");
    window.sessionStorage.removeItem("currentUserEMAIL");
    window.sessionStorage.removeItem("currentUserFIRSTNAME");
    window.sessionStorage.removeItem("currentUserLASTNAME");
    window.sessionStorage.removeItem("currentUserROLE");
    window.sessionStorage.removeItem("currentUserHEADERS");
    window.sessionStorage.removeItem("currentUserLOCK");
  },

  async setGetMe({ dispatch }) {
    setTimeout(1000);
    try {
      let response = await axios.get("users/me", { headers: state.headers });
      if (response.status === 200) {
        dispatch("setFirstName", response.data.firstname);
        dispatch("setLastName", response.data.lastname);
        dispatch("setRole", /*response.data.UserType.ut_name*/ "admin");
        dispatch("setUI", /*response.data.UserType.ut_name*/ "admin");
      }
      return response.status;
    } catch (error) {
      return error.response.status;
    }
  },

  async setToken({ commit }, token) {
    commit("SET_TOKEN", token);
  },

  async setUuid({ commit }, uuid) {
    commit("SET_UUID", uuid);
  },

  async setEmail({ commit }, email) {
    commit("SET_EMAIL", email);
  },

  async setFirstName({ commit }, firstname) {
    commit("SET_FIRSTNAME", firstname);
  },

  async setLastName({ commit }, lastname) {
    commit("SET_LASTNAME", lastname);
  },

  async setRole({ commit }, role) {
    commit("SET_ROLE", role);
  },

  async setUI({ commit }, ui) {
    commit("SET_UI", ui);
  },

  async setHeaders({ commit }, token) {
    commit("SET_HEADERS", token);
  },
};

// ===
// Private helpers
// ===

function saveState(key, value) {
  window.sessionStorage.setItem(key, value);
}

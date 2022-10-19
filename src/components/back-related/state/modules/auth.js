import axios from "axios";

export const state = {
  token: sessionStorage.getItem("currentUserTOKEN"),
  headers: sessionStorage.getItem("currentUserHEADERS"),
  email: sessionStorage.getItem("currentUserEMAIL"),
  phone: sessionStorage.getItem("currentUserPHONE"),
  uuid: sessionStorage.getItem("currentUserUUID"),
  firstname: sessionStorage.getItem("currentUserFIRSTNAME"),
  lastname: sessionStorage.getItem("currentUserLASTNAME"),
  multirole: sessionStorage.getItem("currentUserMULTIROLE"),
  role1: sessionStorage.getItem("currentUserROLE1"),
  role2: sessionStorage.getItem("currentUserROLE2"),
  role3: sessionStorage.getItem("currentUserROLE3"),
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
  SET_PHONE(state, phone) {
    state.phone = phone;
    saveState("currentUserPHONE", phone);
  },
  SET_FIRSTNAME(state, firstname) {
    state.firstname = firstname;
    saveState("currentUserFIRSTNAME", firstname);
  },
  SET_LASTNAME(state, lastname) {
    state.lastname = lastname;
    saveState("currentUserLASTNAME", lastname);
  },
  SET_MULTIROLE(state, multirole) {
    state.role = multirole;
    saveState("currentUserMULTIROLE", multirole);
  },
  SET_ROLE1(state, role) {
    state.role1 = role;
    saveState("currentUserROLE1", role);
  },
  SET_ROLE2(state, role) {
    state.role2 = role;
    saveState("currentUserROLE2", role);
  },
  SET_ROLE3(state, role) {
    state.role3 = role;
    saveState("currentUserROLE3", role);
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
    return state.role1;
  },
  getuserUI(state) {
    return state.ui;
  },
  getemail(state) {
    return state.email;
  },
  getphone(state) {
    return state.phone;
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
  getheader(state) {
    return state.header;
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
    dispatch("setClearAll");
    window.sessionStorage.clear();
  },

  async setGetMe({ dispatch }) {
    setTimeout(1000);
    try {
      let response = await axios.get("users/me", { headers: state.headers });
      if (response.status === 200) {
        console.log(response.data);
        dispatch("setFirstName", response.data.firstname);
        dispatch("setLastName", response.data.lastname);
        if (response.data.phone) {
          dispatch("setPhone", response.data.phone);
        } else {
          dispatch("setPhone", "TBD");
        }
        if (response.data.UserType.ut_name == "admin") {
          dispatch("setMultiRole", false);
          dispatch("setRole1", response.data.UserType.ut_name);
          dispatch("setUI", response.data.UserType.ut_name);
        } else {
          if (response.data.subType.length == 1) {
            dispatch("setMultiRole", false);
            dispatch("setRole1", response.data.subType[0].type);
            dispatch("setUI", response.data.subType[0].type);
          } else {
            dispatch("setMultiRole", true);
          }
        }
      }
      return response.status;
    } catch (error) {
      return error.response.status;
    }
  },

  async setClearAll({ commit }) {
    commit("SET_TOKEN", null);
    commit("SET_UUID", null);
    commit("SET_EMAIL", null);
    commit("SET_PHONE", null);
    commit("SET_FIRSTNAME", null);
    commit("SET_LASTNAME", null);
    commit("SET_MULTIROLE", null);
    commit("SET_ROLE1", null);
    commit("SET_ROLE2", null);
    commit("SET_ROLE3", null);
    commit("SET_UI", null);
    commit("SET_HEADERS", null);
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

  async setPhone({ commit }, phone) {
    commit("SET_PHONE", phone);
  },

  async setFirstName({ commit }, firstname) {
    commit("SET_FIRSTNAME", firstname);
  },

  async setLastName({ commit }, lastname) {
    commit("SET_LASTNAME", lastname);
  },

  async setMultiRole({ commit }, multirole) {
    commit("SET_MULTIROLE", multirole);
  },

  async setRole1({ commit }, role) {
    commit("SET_ROLE1", role);
  },

  async setRole2({ commit }, role) {
    commit("SET_ROLE2", role);
  },

  async setRole3({ commit }, role) {
    commit("SET_ROLE3", role);
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

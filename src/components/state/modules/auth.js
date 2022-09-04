import axios from "axios";

export const state = {
  token: sessionStorage.getItem("currentUserTOKEN"),
  email: sessionStorage.getItem("currentUserEMAIL"),
  uuid: sessionStorage.getItem("currentUserUUID"),
  firstname: sessionStorage.getItem("currentUserFIRSTNAME"),
  lastname: sessionStorage.getItem("currentUserLASTNAME"),
  role: sessionStorage.getItem("currentUserROLE"),
  lock: sessionStorage.getItem("currentUserLOCK"),
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
  SET_LOCK(state, lock) {
    state.lock = lock;
    saveState("currentUserLOCK", lock);
  },
};

export const getters = {
  isloggedIn(state) {
    return state.token && state.uuid && state.email;
  },
  isLocked(state) {
    return state.lock;
  },
  userget(state) {
    return {
      token: state.token,
      uuid: state.uuid,
      email: state.email,
    };
  },
};

export const actions = {
  async LogIn({ dispatch }, credentials) {
    try {
      let response = await axios.put("users", credentials);
      if (response.status === 200) {
        dispatch("setToken", response.data.token);
        dispatch("setEmail", response.data.user.email);
        dispatch("setUuid", response.data.user.uuid);
        dispatch("setFirstName", response.data.user.firstname);
        dispatch("setLastName", response.data.user.lastname);
        dispatch("setRole", response.data.user.userType.ut_name);
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

  LogOut({ commit }) {
    commit("SET_TOKEN", null);
    commit("SET_UUID", null);
    commit("SET_EMAIL", null);
    commit("SET_FIRSTNAME", null);
    commit("SET_LASTNAME", null);
    commit("SET_ROLE", null);
    commit("SET_LOCK", false);
    window.sessionStorage.removeItem("currentUserTOKEN");
    window.sessionStorage.removeItem("currentUserUUID");
    window.sessionStorage.removeItem("currentUserEMAIL");
    window.sessionStorage.removeItem("currentUserFIRSTNAME");
    window.sessionStorage.removeItem("currentUserLASTNAME");
    window.sessionStorage.removeItem("currentUserROLE");
  },
};

// ===
// Private helpers
// ===

function saveState(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

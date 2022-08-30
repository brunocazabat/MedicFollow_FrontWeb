import axios from "axios";

export const state = {
  token: sessionStorage.getItem("currentUserTOKEN"),
  uuid: sessionStorage.getItem("currentUserUUID"),
  email: sessionStorage.getItem("currentUserEMAIL"),
  name: sessionStorage.getItem("currentUserNAME"),
  role: sessionStorage.getItem("currentUserROLE"),
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
  SET_NAME(state, name) {
    state.name = name;
    saveState("currentUserNAME", name);
  },
  SET_ROLE(state, role) {
    state.role = role;
    saveState("currentUserROLE", role);
  },
};

export const getters = {
  loggedIn(state) {
    return state.token && state.uuid && state.email;
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
        dispatch("setEmail", credentials.email);
        dispatch("setToken", response.data.token);
        dispatch("setUuid", response.data.userUuid);
        /*
        dispatch("setName", response.data.name);
        dispatch("setRole", response.data.role);
        */
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

  /*
  async setName({ commit }, name) {
    commit("SET_NAME", name);
  },

  async setRole({ commit }, role) {
    commit("SET_ROLE", role);
  },
  */

  LogOut({ commit }) {
    commit("SET_TOKEN", null);
    commit("SET_UUID", null);
    commit("SET_EMAIL", null);
    commit("SET_NAME", null);
    commit("SET_ROLE", null);
    window.sessionStorage.removeItem("currentUserTOKEN");
    window.sessionStorage.removeItem("currentUserUUID");
    window.sessionStorage.removeItem("currentUserEMAIL");
    window.sessionStorage.removeItem("currentUserNAME");
    window.sessionStorage.removeItem("currentUserROLE");
  },
};

// ===
// Private helpers
// ===

function saveState(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

import axios from "axios";

export const state = {
  token: sessionStorage.getItem("currentUserTOKEN"),
  uuid: sessionStorage.getItem("currentUserUUID"),
  email: sessionStorage.getItem("currentUserEMAIL"),
  name: null,
  role: null,
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
  },
  SET_ROLE(state, role) {
    state.role = role;
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
      }
      return response.status;
    } catch (error) {
      return error.response.status;
    }
  },

  async setCurrentUser({ commit }, user) {
    commit("SET_CURRENT_USER", user);
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

  LogOut({ commit }) {
    commit("SET_TOKEN", null);
    commit("SET_UUID", null);
    commit("SET_EMAIL", null);
    commit("SET_NAME", null);
    commit("SET_ROLE", null);
    window.sessionStorage.removeItem("currentUserTOKEN");
    window.sessionStorage.removeItem("currentUserUUID");
    window.sessionStorage.removeItem("currentUserEMAIL");
  },
};

// ===
// Private helpers
// ===

function saveState(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

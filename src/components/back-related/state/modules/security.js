export const state = {
  captchagg: false,
  lock: sessionStorage.getItem("currentUserLOCK"),
};

export const mutations = {
  SET_CAPTCHA(state, value) {
    state.captchagg = value;
  },
  SET_LOCK(state, lock) {
    state.lock = lock;
    saveState("currentUserLOCK", lock);
  },
};

export const getters = {
  getisRecaptchaEnabled(state) {
    return state.captchagg;
  },
  getisLocked() {
    if (sessionStorage.getItem("currentUserLOCK") === "locked") {
      return true;
    }
    if (sessionStorage.getItem("currentUserLOCK") === "unlocked") {
      return false;
    }
  },
};

export const actions = {
  async setCaptchaValid({ commit }, value) {
    commit("SET_CAPTCHA", value);
  },
  async setLock({ commit }, lock) {
    commit("SET_LOCK", lock);
  },
};

// ===
// Private helpers
// ===

function saveState(key, value) {
  window.sessionStorage.setItem(key, value);
}

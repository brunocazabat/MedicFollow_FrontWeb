export const state = {
  captchagg: false,
};

export const mutations = {
  SET_CAPTCHA(state, value) {
    state.captchagg = value;
  },
};

export const getters = {
  isRecaptchaEnabled(state) {
    return state.captchagg;
  },
};

export const actions = {
  async setCaptchaValid({ commit }, value) {
    commit("SET_CAPTCHA", value);
  },
};

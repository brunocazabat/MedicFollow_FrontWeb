<script>
import { useStore } from 'vuex';
import { ref } from "vue";
import { VueRecaptcha, useRecaptcha } from "vue3-recaptcha-v2";

export default {
  name: "recaptcha",
  components: { VueRecaptcha },
  setup: () => {
    // Reset Recaptcha
    const { resetRecaptcha } = useRecaptcha();
    const recaptchaWidget = ref(null);
    const store = useStore();

    const callbackVerify = () => {
      store.dispatch("security/setCaptchaValid", true);
    };

    const callbackExpired = () => {
      store.dispatch("security/setCaptchaValid", false);
      resetRecaptcha();
    };

    const callbackFail = () => {
      store.dispatch("security/setCaptchaValid", false);
      resetRecaptcha();
    };

    return {
      recaptchaWidget,
      callbackVerify,
      callbackExpired,
      callbackFail,
    };
  }
};
</script>

<template>
  <vue-recaptcha theme="light" size="normal" :tabindex="0" @widgetId="recaptchaWidget = $event"
    @verify="callbackVerify()" @expired="callbackExpired()" @fail="callbackFail()" />
</template>


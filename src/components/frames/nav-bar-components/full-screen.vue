<script>
export default {
  name: "fullscreen",
  methods: {
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
}
</script>

<template>
  <button type="button" class="btn forceserif btn-soft-secondary btn-sm btn-rounded" data-toggle="fullscreen"
    style="margin-right: 10px;" @click="initFullScreen" data-key="t-fullscreen">
    {{ $t("t-fullscreen") }} <em class="bx bx-fullscreen ms-1"></em>
  </button>
</template>

<script>
import i18n from "@/i18n.js";
import adminmodule from "./admin-panel-log-module.vue";

/**
 * translate-module Component
 */
export default {
  name: "translatemodule",
  components: { adminmodule },
  data() {
    return {
      languages: [
        {
          flag: require("@/assets/images/flags/us.svg"),
          language: "en",
          title: "English",
        },
        {
          flag: require("@/assets/images/flags/french.svg"),
          language: "fr",
          title: "French",
        },
        {
          flag: require("@/assets/images/flags/spain.svg"),
          language: "es",
          title: "Spanish",
        },
        {
          flag: require("@/assets/images/flags/germany.svg"),
          language: "de",
          title: "Deutsche",
        },
        {
          flag: require("@/assets/images/flags/italy.svg"),
          language: "it",
          title: "Italian",
        },
      ],
      lan: null,
      text: null,
      flag: null,
      value: null,
    };
  },
  mounted: function () {
    this.start()
  },
  methods: {
    start() {
      switch (localStorage.getItem("language")) {
        case "en":
          this.lan = "en";
          break;
        case "fr":
          this.lan = "fr";
          break;
        case "es":
          this.lan = "es";
          break;
        case "de":
          this.lan = "de";
          break;
        case "it":
          this.lan = "it";
          break;
      }
      document.getElementById("header-lang-img").setAttribute("src", this.languages.find(x => x.language === this.lan).flag);
    },
    setLanguage(locale, country, flag) {
      this.lan = locale;
      this.text = country;
      this.flag = flag;
      document.getElementById("header-lang-img").setAttribute("src", flag);
      localStorage.setItem("language", locale);
      i18n.global.locale = locale;
    },
  },
};
</script>

<template>
  <div class="col-md-8 col-lg-6 col-xl-1">
    <div class="dropdown ms-1 topbar-head-dropdown header-item">
      <button type="button" class="btn forceserif btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img id="header-lang-img" src="@/assets/images/flags/french.svg" alt="Header Language" height="26"
          class="rounded" />
      </button>
      <div class="dropdown-menu">
        <!-- item-->
        <a href="javascript:void(0);" v-for="(entry, i) in languages" :key="`Lang${i}`" :value="entry"
          @click="setLanguage(entry.language, entry.title, entry.flag)" :class="{ active: lan === entry.language }"
          class="dropdown-item notify-item language py-2" data-lang="fr" title="Francais">
          <img :src="entry.flag" alt="user-image" class="me-2 rounded" height="18" />
          <span class="align-middle">{{ entry.title }}</span>
        </a>
      </div>
    </div>
  </div>
  <adminmodule />
</template>

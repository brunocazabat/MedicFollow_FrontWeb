<script>
import { SimpleBar } from "simplebar-vue3";
import { mapGetters } from "vuex";
import i18n from "@/i18n.js";

/**
 * Nav-bar Component
 */
export default {
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
      user: [{
        fullname: null,
        firstname: null,
        email: null,
      },
      ],
    };
  },
  components: {
    SimpleBar,
  },
  mounted() {
    if (this.fullnameget()) {
      this.user.fullname = this.fullnameget();
    }
    if (this.firstnameget()) {
      this.user.firstname = this.firstnameget();
    }
    if (this.emailget()) {
      this.user.email = this.emailget();
    }

    this.start()
    document.addEventListener("scroll", function () {
      var pageTopbar = document.getElementById("page-topbar");
      if (pageTopbar) {
        document.body.scrollTop >= 50 ||
          document.documentElement.scrollTop >= 50
          ? pageTopbar.classList.add("topbar-shadow")
          : pageTopbar.classList.remove("topbar-shadow");
      }
    });
    if (document.getElementById("topnav-hamburger-icon"))
      document
        .getElementById("topnav-hamburger-icon")
        .addEventListener("click", this.toggleHamburgerMenu);
  },
  methods: {
    ...mapGetters({
      emailget: "auth/emailget",
      fullnameget: "auth/fullnameget",
      firstnameget: "auth/firstnameget",
    }),
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
    toggleHamburgerMenu() {
      let windowSize = document.documentElement.clientWidth;

      if (windowSize > 767)
        document.querySelector(".hamburger-icon").classList.toggle("open");

      //For collapse horizontal menu
      if (
        document.documentElement.getAttribute("data-layout") === "horizontal"
      ) {
        document.body.classList.contains("menu")
          ? document.body.classList.remove("menu")
          : document.body.classList.add("menu");
      }

      //For collapse vertical menu
      if (document.documentElement.getAttribute("data-layout") === "vertical") {
        if (windowSize < 1025 && windowSize > 767) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") == "sm"
            ? document.documentElement.setAttribute("data-sidebar-size", "")
            : document.documentElement.setAttribute("data-sidebar-size", "sm");
        } else if (windowSize > 1025) {
          document.body.classList.remove("vertical-sidebar-enable");
          document.documentElement.getAttribute("data-sidebar-size") == "lg"
            ? document.documentElement.setAttribute("data-sidebar-size", "sm")
            : document.documentElement.setAttribute("data-sidebar-size", "lg");
        } else if (windowSize <= 767) {
          document.body.classList.add("vertical-sidebar-enable");
          document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
      }

      //Two column menu
      if (document.documentElement.getAttribute("data-layout") == "twocolumn") {
        document.body.classList.contains("twocolumn-panel")
          ? document.body.classList.remove("twocolumn-panel")
          : document.body.classList.add("twocolumn-panel");
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
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
    setLanguage(locale, country, flag) {
      this.lan = locale;
      this.text = country;
      this.flag = flag;
      document.getElementById("header-lang-img").setAttribute("src", flag);
      localStorage.setItem("language", locale);
      i18n.global.locale = locale;
    },
    toggleDarkMode() {
      if (document.documentElement.getAttribute("data-layout-mode") == "dark") {
        document.documentElement.setAttribute("data-layout-mode", "light");
      } else {
        document.documentElement.setAttribute("data-layout-mode", "dark");
      }
    },
  },
  computed: {},
};
</script>

<template>
  <header id="page-topbar">
    <div class="layout-width">
      <div class="navbar-header">
        <div class="d-flex"></div>
        <div class="d-flex">
          <span class="logo-lg">
            <img src="@/assets/images/logo/logo-long.png" alt="" height="35" />
          </span>
        </div>

        <div class="d-flex align-items-center">
          <div class="dropdown ms-sm-3 header-item topbar-user">
            <!-- NOTIF -->
            <div class="dropdown topbar-head-dropdown ms-1 header-item">
              <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <em class="bx bx-bell fs-22"></em>
                <span class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                  0<span class="visually-hidden">unread messages</span></span>
              </button>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown">
                <div class="dropdown-head bg-primary bg-pattern rounded-top">
                  <div class="p-3">
                    <div class="row align-items-center">
                      <div class="col">
                        <h6 class="m-0 fs-16 fw-semibold text-white">
                          Notifications
                        </h6>
                      </div>
                      <div class="col-auto dropdown-tabs">
                        <span class="badge badge-soft-light fs-13"> 0 New</span>
                      </div>
                    </div>
                  </div>

                  <div class="px-2 pt-2">
                    <ul class="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true"
                      id="notificationItemsTab" role="tablist" auto-close="outside" @click.capture.stop>
                      <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#all-noti-tab" role="tab"
                          aria-selected="true">
                          All (4)
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#messages-tab" role="tab" aria-selected="false">
                          Messages
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#alerts-tab" role="tab" aria-selected="false">
                          Alerts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="tab-content" id="notificationItemsTabContent">
                  <div class="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
                    <SimpleBar data-simplebar style="max-height: 300px" class="pe-2">
                      <div class="text-reset notification-item d-block dropdown-item position-relative">
                        <div class="d-flex">
                          <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs"
                            alt="user-pic" />
                          <div class="flex-1">
                            <a href="#!" class="stretched-link">
                              <h6 class="mt-0 mb-2 lh-base">
                                oui <strong>oui</strong>
                                <span class="text-secondary"> oui</span>
                              </h6>
                            </a>
                            <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span><em class="mdi mdi-clock-outline"></em> oui
                              </span>
                            </p>
                          </div>
                          <div class="px-2 fs-15">
                            <input class="form-check-input" type="checkbox" />
                          </div>
                        </div>
                      </div>

                      <div class="text-reset notification-item d-block dropdown-item position-relative">
                        <div class="d-flex">
                          <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs"
                            alt="user-pic" />
                          <div class="flex-1">
                            <a href="#!" class="stretched-link">
                              <h6 class="mt-0 mb-2 lh-base">
                                oui <strong>oui</strong>
                                <span class="text-secondary"> oui</span>
                              </h6>
                            </a>
                            <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span><em class="mdi mdi-clock-outline"></em> oui
                              </span>
                            </p>
                          </div>
                          <div class="px-2 fs-15">
                            <input class="form-check-input" type="checkbox" />
                          </div>
                        </div>
                      </div>

                      <div class="text-reset notification-item d-block dropdown-item position-relative">
                        <div class="d-flex">
                          <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs"
                            alt="user-pic" />
                          <div class="flex-1">
                            <a href="#!" class="stretched-link">
                              <h6 class="mt-0 mb-2 lh-base">
                                oui <strong>oui</strong>
                                <span class="text-secondary"> oui</span>
                              </h6>
                            </a>
                            <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span><em class="mdi mdi-clock-outline"></em> oui
                              </span>
                            </p>
                          </div>
                          <div class="px-2 fs-15">
                            <input class="form-check-input" type="checkbox" />
                          </div>
                        </div>
                      </div>

                      <div class="text-reset notification-item d-block dropdown-item position-relative">
                        <div class="d-flex">
                          <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs"
                            alt="user-pic" />
                          <div class="flex-1">
                            <a href="#!" class="stretched-link">
                              <h6 class="mt-0 mb-2 lh-base">
                                oui <strong>oui</strong>
                                <span class="text-secondary"> oui</span>
                              </h6>
                            </a>
                            <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span><em class="mdi mdi-clock-outline"></em> oui
                              </span>
                            </p>
                          </div>
                          <div class="px-2 fs-15">
                            <input class="form-check-input" type="checkbox" />
                          </div>
                        </div>
                      </div>

                      <div class="my-3 text-center">
                        <button type="button" class="btn btn-soft-success">
                          View All Notifications
                          <em class="ri-arrow-right-line align-middle"></em>
                        </button>
                      </div>
                    </SimpleBar>
                  </div>

                  <div class="tab-pane fade py-2 ps-2" id="messages-tab" role="tabpanel" aria-labelledby="messages-tab">
                    <SimpleBar data-simplebar style="max-height: 300px" class="pe-2">
                      <div class="text-reset notification-item d-block dropdown-item">
                        <div class="d-flex">
                          <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs"
                            alt="user-pic" />
                          <div class="flex-1">
                            <a href="#!" class="stretched-link">
                              <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                Bruno Cazabat
                              </h6>
                            </a>
                            <div class="fs-13 text-muted">
                              <p class="mb-1">Oui.</p>
                            </div>
                            <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span><em class="mdi mdi-clock-outline"></em> oui</span>
                            </p>
                          </div>
                          <div class="px-2 fs-15">
                            <input class="form-check-input" type="checkbox" />
                          </div>
                        </div>
                      </div>

                      <div class="text-reset notification-item d-block dropdown-item">
                        <div class="d-flex">
                          <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs"
                            alt="user-pic" />
                          <div class="flex-1">
                            <a href="#!" class="stretched-link">
                              <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                Bruno Cazabat
                              </h6>
                            </a>
                            <div class="fs-13 text-muted">
                              <p class="mb-1">Oui.</p>
                            </div>
                            <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span><em class="mdi mdi-clock-outline"></em> oui</span>
                            </p>
                          </div>
                          <div class="px-2 fs-15">
                            <input class="form-check-input" type="checkbox" />
                          </div>
                        </div>
                      </div>

                      <div class="text-reset notification-item d-block dropdown-item">
                        <div class="d-flex">
                          <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs"
                            alt="user-pic" />
                          <div class="flex-1">
                            <a href="#!" class="stretched-link">
                              <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                Bruno Cazabat
                              </h6>
                            </a>
                            <div class="fs-13 text-muted">
                              <p class="mb-1">Oui.</p>
                            </div>
                            <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span><em class="mdi mdi-clock-outline"></em> oui</span>
                            </p>
                          </div>
                          <div class="px-2 fs-15">
                            <input class="form-check-input" type="checkbox" />
                          </div>
                        </div>
                      </div>

                      <div class="text-reset notification-item d-block dropdown-item">
                        <div class="d-flex">
                          <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs"
                            alt="user-pic" />
                          <div class="flex-1">
                            <a href="#!" class="stretched-link">
                              <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                Bruno Cazabat
                              </h6>
                            </a>
                            <div class="fs-13 text-muted">
                              <p class="mb-1">Oui.</p>
                            </div>
                            <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span><em class="mdi mdi-clock-outline"></em> oui</span>
                            </p>
                          </div>
                          <div class="px-2 fs-15">
                            <input class="form-check-input" type="checkbox" />
                          </div>
                        </div>
                      </div>

                      <div class="my-3 text-center">
                        <button type="button" class="btn btn-soft-success">
                          View All Messages
                          <em class="ri-arrow-right-line align-middle"></em>
                        </button>
                      </div>
                    </SimpleBar>
                  </div>
                  <div class="tab-pane fade p-4" id="alerts-tab" role="tabpanel" aria-labelledby="alerts-tab">
                    <div class="w-25 w-sm-50 pt-3 mx-auto">
                      <img src="@/assets/images/svg/bell.svg" class="img-fluid" alt="user-pic" />
                    </div>
                    <div class="text-center pb-5 mt-2">
                      <h6 class="fs-18 fw-semibold lh-base">
                        Hey! You have no any notifications
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- LANG -->
            <div class="dropdown ms-1 topbar-head-dropdown header-item">
              <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img id="header-lang-img" src="@/assets/images/flags/french.svg" alt="Header Language" height="20"
                  class="rounded" />
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <!-- item-->
                <a href="javascript:void(0);" v-for="(entry, i) in languages" :key="`Lang${i}`" :value="entry"
                  @click="setLanguage(entry.language, entry.title, entry.flag)"
                  :class="{ active: lan === entry.language }" class="dropdown-item notify-item language py-2"
                  data-lang="fr" title="Francais">
                  <img :src="entry.flag" alt="user-image" class="me-2 rounded" height="18" />
                  <span class="align-middle">{{ entry.title }}</span>
                </a>
              </div>
            </div>

            <!-- PROFILE -->
            <button type="button" class="btn shadow-none" id="page-header-user-dropdown" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <span class="d-flex align-items-center">
                <img class="rounded-circle header-profile-user" src="@/assets/images/users/avatar-1.png"
                  alt="Header Avatar" />
                <span class="text-start ms-xl-2">
                  <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{{ this.user.fullname }}</span>
                  <span class="d-none d-xl-block ms-1 fs-12 user-name-sub-text">{{ this.user.email }}</span>
                </span>
              </span>
            </button>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-lg">
              <SimpleBar data-simplebar style="max-height: 400px">
                <!-- item-->
                <div class="dropdown-header">
                  <h6 class="text-overflow text-muted mb-0 text-uppercase" data-key="t-welcome">
                    {{ $t("t-welcome") }} {{ this.user.firstname }} !
                  </h6>
                </div>

                <!-- item-->
                <div class="dropdown-header">
                  <h6 class="text-overflow text-muted mb-1" data-key="t-displ">{{ $t("t-displ") }}</h6>
                </div>
                <div class="dropdown-item bg-transparent text-wrap">
                  <button type="button" class="btn btn-soft-secondary btn-sm btn-rounded" data-toggle="fullscreen"
                    style="margin-right: 10px;" @click="initFullScreen" data-key="t-fullscreen">
                    {{ $t("t-fullscreen") }} <em class="bx bx-fullscreen ms-1"></em>
                  </button>
                  <button type="button" class="btn btn-soft-secondary btn-sm btn-rounded" @click="toggleDarkMode"
                    data-key="t-darkmode">
                    {{ $t("t-darkmode") }}<em class="bx bx-moon ms-1"></em>
                  </button>
                </div>
                <!-- item-->
                <div class="dropdown-header mt-2">
                  <h6 class="text-overflow text-muted mb-1" data-key="t-settingsopt">
                    {{ $t("t-settingsopt") }}
                  </h6>
                </div>

                <!-- item-->
                <a class="dropdown-item">
                  <router-link to="/" class="text-muted" data-key="t-suggest"><em
                      class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></em>
                    {{ $t('t-suggest') }}
                  </router-link>
                </a>

                <!-- item-->
                <a class="dropdown-item">
                  <router-link to="/settings" class="text-muted" data-key="t-settings"><em
                      class="ri-user-settings-line align-middle fs-18 text-muted me-2"></em>
                    {{ $t('t-settings') }}
                  </router-link>
                </a>

                <!-- item-->
                <div class="dropdown-header mt-2">
                  <h6 class="text-overflow text-muted mb-2">
                    Organisation/Proches/Medecin
                  </h6>
                </div>

                <div class="notification-list">
                  <!-- item -->
                  <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                    <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs"
                      alt="user-pic" />
                    <div class="flex-1">
                      <h6 class="m-0">Simon Bernabeu</h6>
                      <span class="fs-11 mb-0 text-muted">Docteur</span>
                    </div>
                  </a>
                </div>
              </SimpleBar>

              <div class="text-center pt-3 pb-1">
                <router-link to="/lockscreen" class="btn btn-primary btn-sm" data-key="t-lockscreen">{{
                $t('t-lockscreen')
                }}
                  <em class="mdi mdi-lock ms-1"></em>
                </router-link>
                <router-link to="/logout" class="btn btn-primary btn-sm" data-key="t-logout" style="margin-left: 15px;">
                  {{ $t('t-logout') }}<em class="mdi mdi-logout ms-1"></em>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { SimpleBar } from "simplebar-vue3";
import { AuthGetters } from "@/components/state/helpers";
import dayjs from 'dayjs'
import { ClockIcon } from '@zhuowenli/vue-feather-icons'

import { notification, lang, fullscreen, darkmode } from "@/components/frames/nav-bar-components"

export default {
  data() {
    return {
      localTime: "",
      localDate: "",
      user: [{
        fullname: null,
        firstname: null,
        email: null,
        role: null,
      },
      ],
    };
  },
  components: {
    SimpleBar,
    ClockIcon,
    notification,
    lang,
    fullscreen,
    darkmode,
  },
  mounted() {
    this.showLocaleTime();
    if (this.getfullname()) {
      this.user.fullname = this.getfullname();
    }
    if (this.getfirstname()) {
      this.user.firstname = this.getfirstname();
    }
    if (this.getemail()) {
      this.user.email = this.getemail();
    }
    if (this.getuserType()) {
      this.user.role = this.getuserType();
    }

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
    ...AuthGetters,
    showLocaleTime: function () {
      var time = this;
      setInterval(function () {
        time.localTime = new dayjs().format('HH:mm:ss');
        time.localDate = new dayjs().format('DD-MM-YYYY');
      }, 100);
    },
    notadmin() {
      return this.user.role !== "admin";
    },
    role() {
      return this.user.role;
    },

    toggleHamburgerMenu() {
      let windowSize = document.documentElement.clientWidth;

      if (windowSize > 767)
        document.querySelector(".hamburger-icon").classList.toggle("open");

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
    },
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="layout-width">
      <div class="navbar-header">
        <div class="d-flex">
          <span class="d-flex align-items-center">
            <span class="rounded-circle header-profile-user user-name-text">
              <ClockIcon size="26"></ClockIcon>
            </span>
            <span class="text-start ms-xl-2">
              <span class="d-none d-xl-block ms-1 fw-medium user-name-text">{{ localTime }}</span>
              <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{{ localDate }}</span>
            </span>
          </span>
        </div>
        <div class="d-flex">
          <span class="logo-lg">
            <img src="@/assets/images/logo/logo-long.png" alt="" height="35" />
          </span>
        </div>

        <div class="d-flex align-items-center">
          <!-- NOTIF -->
          <notification />
          <!-- LANG -->
          <lang />
          <div class="dropdown ms-sm-3 header-item topbar-user">
            <!-- PROFILE -->
            <button type="button" class="btn shadow-none" id="page-header-user-dropdown" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <span class="d-flex align-items-center">
                <img v-if="role() == 'admin'" class="rounded-circle header-profile-user"
                  src="@/assets/images/users/dummy-user.jpg" alt="Header Avatar" />
                <img v-if="role() == 'organisation'" class="rounded-circle header-profile-user"
                  src="@/assets/images/users/multi-user.jpg" alt="Header Avatar" />
                <img v-if="role() == 'docteur' || role() == 'personnel'" class="rounded-circle header-profile-user"
                  src="@/assets/images/users/avatar-8.jpg" alt="Header Avatar" />
                <img v-if="role() == 'patient'" class="rounded-circle header-profile-user"
                  src="@/assets/images/users/avatar-10.jpg" alt="Header Avatar" />
                <img v-if="role() == 'confiance'" class="rounded-circle header-profile-user"
                  src="@/assets/images/users/avatar-7.jpg" alt="Header Avatar" />
                <img v-if="role() == 'proche'" class="rounded-circle header-profile-user"
                  src="@/assets/images/users/avatar-9.jpg" alt="Header Avatar" />
                <span class="text-start ms-xl-2">
                  <span class="d-none d-xl-block ms-1 fw-medium user-name-text">{{ this.user.fullname }}</span>
                  <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{{ this.user.email }}</span>
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
                  <fullscreen />
                  <darkmode />
                </div>
                <!-- item-->
                <div class="dropdown-header mt-2">
                  <h6 class="text-overflow text-muted mb-1" data-key="t-settingsopt">
                    {{ $t("t-settingsopt") }}
                  </h6>
                </div>

                <!-- item-->
                <a v-if="notadmin()" class="dropdown-item">
                  <router-link :to="'/'+ this.user.role + '/bug-report'" class="text-muted"
                    data-key="t-report t-suggest"><em class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></em>
                    {{ $t("t-report") }} & {{ $t("t-suggest") }}
                  </router-link>
                </a>

                <!-- item-->
                <a class="dropdown-item">
                  <router-link :to="'/'+ this.user.role + '/settings'" class="text-muted" data-key="t-settings"><em
                      class="ri-user-settings-line align-middle fs-18 text-muted me-2"></em>
                    {{ $t('t-settings') }}
                  </router-link>
                </a>

                <!-- item-->
                <div class="dropdown-header mt-2">
                  <h6 v-if="role() == 'admin'" class="text-overflow text-muted mb-2" data-key="t-otheradmin">
                    {{ $t('t-otheradmin') }}
                  </h6>
                  <h6 v-if="role() == 'docteur' || role() == 'personnel'" class="text-overflow text-muted mb-2"
                    data-key="t-othermedic">
                    {{ $t('t-othermedic') }}
                  </h6>
                  <h6 v-if="role() == 'patient' || role() == 'confiance' || role() == 'proche'"
                    class="text-overflow text-muted mb-2" data-key="t-otherfamilly">
                    {{ $t('t-otherfamilly') }}
                  </h6>
                </div>

                <div class="notification-list">
                  <!-- item -->
                  <div v-if="role() == 'admin'">
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Simon Bernabeu</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-admin">{{ $t('t-admin') }}</span>
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-8.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Maxime Barbier</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-admin">{{ $t('t-admin') }}</span>
                      </div>
                    </a>
                  </div>
                  <div v-if="role() == 'docteur' || role() == 'personnel'">
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-4.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Noelle Paré</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-doctor">{{ $t('t-doctor') }}</span>
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-6.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Fantina Veronneau</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-nurse">{{ $t('t-nurse') }}</span>
                      </div>
                    </a>
                  </div>
                  <div v-if="role() == 'patient'">
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-7.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Francois Dupont</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-trusted">{{ $t('t-trusted') }}</span>
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-9.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Gauthier Dupont</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-closefam">{{ $t('t-closefam') }}</span>
                      </div>
                    </a>
                  </div>
                  <div v-if="role() == 'confiance'">
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-10.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Marie Dupont</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-patient">{{ $t('t-patient') }}</span>
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-9.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Gauthier Dupont</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-closefam">{{ $t('t-closefam') }}</span>
                      </div>
                    </a>
                  </div>
                  <div v-if="role() == 'proche'">
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-10.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Marie Dupont</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-patient">{{ $t('t-patient') }}</span>
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                      <img src="@/assets/images/users/avatar-7.jpg" class="me-3 rounded-circle avatar-xs"
                        alt="user-pic" />
                      <div class="flex-1">
                        <h6 class="m-0">Francois Dupont</h6>
                        <span class="fs-11 mb-0 text-muted" data-key="t-trusted">{{ $t('t-trusted') }}</span>
                      </div>
                    </a>
                  </div>
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

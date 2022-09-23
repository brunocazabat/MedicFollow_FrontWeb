<script>
import router from "@/components/router";
import { SimpleBar } from "simplebar-vue3";
import { layoutComputed } from "@/components/state/helpers";

import NavBar from "@/components/frames/nav-bar";
import Menu from "@/components/frames/menu.vue";
import RightBar from "@/components/frames/right-bar";
import PageHeader from "@/components/frames/page-header.vue";
import footermodule from "@/components/login-components/footer-module.vue";
localStorage.setItem('hoverd', false);

/**
 * Vertical layout
 */
export default {
  components: { NavBar, RightBar, footermodule, SimpleBar, Menu, PageHeader },
  data() {
    return {
      isMenuCondensed: false,
    };
  },
  computed: {
    ...layoutComputed,
  },
  created: () => {
    document.body.removeAttribute("data-layout", "horizontal");
    document.body.removeAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-layout-size", "boxed");
  },
  methods: {
    initActiveMenu() {
      if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
        localStorage.setItem('hoverd', true)
        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
      } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
        localStorage.setItem('hoverd', false)
        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
      } else {
        document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
      }
    },
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
  },
  mounted() {
    if (localStorage.getItem('hoverd') == 'true') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    }
    document.getElementById('overlay').addEventListener('click', () => {
      document.body.classList.remove('vertical-sidebar-enable')
    })

  },
};
</script>

<template>
  <div>
    <div id="layout-wrapper">
      <NavBar />
      <div>
        <!-- ========== Left Sidebar Start ========== -->
        <!-- ========== App Menu ========== -->
        <div class="app-menu navbar-menu">
          <!-- LOGO -->
          <div class="navbar-brand-box">
            <router-link to="/" class="logo logo-dark">
              <span class="logo-sm">
                <img src="@/assets/images/logo/logo-short.png" alt="" height="25" />
              </span>
              <span class="logo-lg">
                <img src="@/assets/images/logo/logo-long.png" alt="" height="30" />
              </span>
            </router-link>

            <router-link to="/" class="logo logo-light">
              <span class="logo-sm">
                <img src="@/assets/images/logo/logo-short.png" alt="" height="25" />
              </span>
              <span class="logo-lg">
                <img src="@/assets/images/logo/logo-long.png" alt="" height="30" />
              </span>
            </router-link>
          </div>

          <SimpleBar id="scrollbar" class="h-100" ref="scrollbar">
            <Menu></Menu>
            <div class="text-center navbar-nav" style="position: absolute; bottom: 1px;">
              <router-link to="/usage" class="nav-link menu-link">
                <em class="ri-pages-line"></em>
                <span style="padding: 7px" data-key="t-terms">{{ $t("t-terms") }}</span>
              </router-link>
            </div>
          </SimpleBar>
        </div>
        <!-- Left Sidebar End -->
        <!-- Vertical Overlay-->
        <div class="vertical-overlay" id="overlay"></div>
      </div>
      <!-- ============================================================== -->
      <!-- Start Page Content here -->
      <!-- ============================================================== -->

      <div class="main-content">

        <div class="page-content">
          <PageHeader />
          <!-- Start Content-->
          <div class="container-fluid">
            <slot />
          </div>
        </div>
        <footermodule />
      </div>
      <RightBar />
    </div>
  </div>
</template>

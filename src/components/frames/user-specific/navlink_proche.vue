<script>
export default {
  name: 'NavLinkProche',
}
</script>

<template>
  <ul class="navbar-nav h-100" id="navbar-nav">
    <li class="menu-title">
      <span data-key="t-menu"> {{ $t("t-menu") }}</span>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/proche/dashboard">
        <em class="ri-home-8-line"></em>
        <span style="padding: 7px" data-key="t-home">{{ $t("t-home") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/proche/calendar">
        <em class="ri-layout-grid-line"></em>
        <span style="padding: 7px" data-key="t-calendar">{{ $t("t-calendar") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/proche/settings">
        <em class="ri-user-settings-line"></em>
        <span style="padding: 7px" data-key="t-settings">{{ $t("t-settings") }}</span>
      </router-link>
    </li>
    <!-- end Dashboard Menu -->
    <li class="menu-title">
      <span data-key="t-contacts"> {{ $t("t-contacts") }}</span>
    </li>
    <li class="nav-item">
      <router-link to="/proche/suggestions" class="nav-link">
        <em class="ri-star-half-s-line"></em>
        <span style="padding: 7px" data-key="t-suggest">{{ $t("t-suggest") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/proche/bug-report" class="nav-link">
        <em class="ri-bug-fill"></em>
        <span style="padding: 7px" data-key="t-report">{{ $t("t-report") }}</span>
      </router-link>
    </li>
  </ul>
</template>

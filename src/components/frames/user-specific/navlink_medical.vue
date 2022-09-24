<script>
export default {
  name: 'NavLinkMedical',
}
</script>

<template>
  <ul class="navbar-nav h-100" id="navbar-nav">
    <li class="menu-title">
      <span data-key="t-menu"> {{ $t("t-menu") }}</span>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/medical/dashboard">
        <em class="ri-home-8-line"></em>
        <span style="padding: 7px" data-key="t-home">{{ $t("t-home") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/medical/medical-information">
        <em class="ri-information-line"></em>
        <span style="padding: 7px" data-key="t-medicalinformation">{{ $t("t-medicalinformation") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/medical/manage-patients">
        <em class="ri-folder-user-line"></em>
        <span style="padding: 7px" data-key="t-managepatients">{{ $t("t-managepatients") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/medical/calendar">
        <em class="ri-layout-grid-line"></em>
        <span style="padding: 7px" data-key="t-calendar">{{ $t("t-calendar") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/medical/chat">
        <em class="ri-pencil-line"></em>
        <span style="padding: 7px" data-key="t-chat">{{ $t("t-chat") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/medical/settings">
        <em class="ri-user-settings-line"></em>
        <span style="padding: 7px" data-key="t-settings">{{ $t("t-settings") }}</span>
      </router-link>
    </li>
    <!-- end Dashboard Menu -->
    <li class="menu-title">
      <span data-key="t-contacts"> {{ $t("t-contacts") }}</span>
    </li>
    <li class="nav-item">
      <router-link to="/medical/suggestions" class="nav-link">
        <em class="ri-star-half-s-line"></em>
        <span style="padding: 7px" data-key="t-suggest">{{ $t("t-suggest") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/medical/bug-report" class="nav-link">
        <em class="ri-bug-fill"></em>
        <span style="padding: 7px" data-key="t-report">{{ $t("t-report") }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavLinkDocteur',
}
</script>

<template>
  <ul class="navbar-nav h-100" id="navbar-nav">
    <li class="menu-title">
      <span data-key="t-menu"> {{ $t("t-menu") }}</span>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/docteur/dashboard">
        <em class="ri-home-8-line"></em>
        <span style="padding: 7px" data-key="t-home">{{ $t("t-home") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/docteur/schedule-settings">
        <em class="ri-time-line"></em>
        <span style="padding: 7px" data-key="t-schedulesettings">{{ $t("t-schedulesettings") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/docteur/medical-information">
        <em class="ri-information-line"></em>
        <span style="padding: 7px" data-key="t-medicalinformation">{{ $t("t-medicalinformation") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/docteur/staff-input">
        <em class="ri-input-method-line"></em>
        <span style="padding: 7px" data-key="t-staffinput">{{ $t("t-staffinput") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/docteur/manage-patients">
        <em class="ri-folder-user-line"></em>
        <span style="padding: 7px" data-key="t-managepatients">{{ $t("t-managepatients") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/docteur/calendar">
        <em class="ri-layout-grid-line"></em>
        <span style="padding: 7px" data-key="t-calendar">{{ $t("t-calendar") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/docteur/chat">
        <em class="ri-question-answer-line"></em>
        <span style="padding: 7px" data-key="t-chat">{{ $t("t-chat") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/docteur/settings">
        <em class="ri-user-settings-line"></em>
        <span style="padding: 7px" data-key="t-settings">{{ $t("t-settings") }}</span>
      </router-link>
    </li>
    <!-- end Dashboard Menu -->
    <li class="menu-title">
      <span data-key="t-contacts"> {{ $t("t-contacts") }}</span>
    </li>
    <li class="nav-item">
      <router-link to="/docteur/suggestions" class="nav-link">
        <em class="ri-star-half-s-line"></em>
        <span style="padding: 7px" data-key="t-suggest">{{ $t("t-suggest") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/docteur/bug-report" class="nav-link">
        <em class="ri-bug-fill"></em>
        <span style="padding: 7px" data-key="t-report">{{ $t("t-report") }}</span>
      </router-link>
    </li>
  </ul>
</template>

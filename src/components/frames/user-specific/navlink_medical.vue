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
      <router-link class="nav-link menu-link" to="/">
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
    <li class="nav-item">
      <a class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button" aria-expanded="false"
        aria-controls="sidebarApps">
        <em class="ri-lifebuoy-line"></em>
        <span style="padding: 7px" data-key="t-contacts"> {{ $t("t-contacts") }}</span>
      </a>
      <div class="collapse menu-dropdown" id="sidebarApps">
        <ul class="nav nav-sm flex-column">
          <li class="nav-item">
            <router-link to="/medical/suggestions" class="nav-link" data-key="t-suggest">
              {{ $t("t-suggest") }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/medical/bug-report" class="nav-link" data-key="t-report">
              {{ $t("t-report") }}
            </router-link>
          </li>
        </ul>
      </div>
    </li>
    <li class="menu-title">
      <span data-key="t-others">{{ $t("t-others") }}</span>
    </li>
    <li class="nav-item">
      <a href="https://medicfollow.fr/fr/usage.html" target="_blank" class="nav-link menu-link"
        rel="noreferrer noopener">
        <em class="ri-pages-line"></em>
        <span style="padding: 7px" data-key="t-terms">{{ $t("t-terms") }}</span>
      </a>
    </li>
  </ul>
</template>

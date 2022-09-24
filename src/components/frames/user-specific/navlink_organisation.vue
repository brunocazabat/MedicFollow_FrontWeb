<script>
export default {
  name: 'NavLinkOrganisation',
}
</script>

<template>
  <ul class="navbar-nav h-100" id="navbar-nav">
    <li class="menu-title">
      <span data-key="t-menu"> {{ $t("t-menu") }}</span>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/organisation/dashboard">
        <em class="ri-home-8-line"></em>
        <span style="padding: 7px" data-key="t-home">{{ $t("t-home") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/organisation/managedoctors">
        <em class="ri-folder-user-line"></em>
        <span style="padding: 7px" data-key="t-managedoctor">{{ $t("t-managedoctor") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/organisation/settings">
        <em class="ri-user-settings-line"></em>
        <span style="padding: 7px" data-key="t-settings">{{ $t("t-settings") }}</span>
      </router-link>
    </li>
    <!-- end Dashboard Menu -->
    <li class="menu-title">
      <span data-key="t-contacts"> {{ $t("t-contacts") }}</span>
    </li>
    <li class="nav-item">
      <router-link to="/organisation/suggestions" class="nav-link">
        <em class="ri-star-half-s-line"></em>
        <span style="padding: 7px" data-key="t-suggest">{{ $t("t-suggest") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/organisation/bug-report" class="nav-link">
        <em class="ri-bug-fill"></em>
        <span style="padding: 7px" data-key="t-report">{{ $t("t-report") }}</span>
      </router-link>
    </li>
  </ul>
</template>

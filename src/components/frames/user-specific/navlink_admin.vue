<script>
export default {
  name: 'NavLinkAdmin',
}
</script>

<template>
  <ul class="navbar-nav h-100" id="navbar-nav">
    <li class="menu-title">
      <span data-key="t-menu"> {{ $t("t-menu") }}</span>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/admin/dashboard">
        <em class="ri-home-8-line"></em>
        <span style="padding: 7px" data-key="t-home">{{ $t("t-home") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/admin/seereports">
        <em class="ri-user-settings-line"></em>
        <span style="padding: 7px" data-key="t-seereports">{{ $t("t-seereports") }}</span>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link menu-link" to="/admin/settings">
        <em class="ri-user-settings-line"></em>
        <span style="padding: 7px" data-key="t-settings">{{ $t("t-settings") }}</span>
      </router-link>
    </li>
  </ul>
</template>

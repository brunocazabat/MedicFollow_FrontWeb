<script>
import lang from "@/components/view-related/layout/layout-components/nav-bar-components/lang.vue";

export default {
  name: 'navbar',
  components: {
    lang
  }
}
</script>
  
<template>
  <nav class="navbar navbar-expand-lg navbar-landing fixed-top is-sticky" id="navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/images/logo/logo-long.png" class="card-logo card-logo-dark" alt="logo" height="40" />
      </router-link>
      <button class="navbar-toggler py-0 fs-20 text-body" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <em class="mdi mdi-menu"></em>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
          <li class="nav-item">
            <div class="dropdown card-header-dropdown">
              <a class="nav-link dropdown-btn" href="" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">MedicFollow <i class="fas fa-chevron-down"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item nav-link smoothScroll" href="#project" data-key="t-ourproject">{{
                $t("t-ourproject") }}</a>
                <a class="dropdown-item nav-link smoothScroll" href="#history" data-key="t-ourhistory">{{
                $t("t-ourhistory") }}</a>
                <a class="dropdown-item nav-link smoothScroll" href="#team" data-key="t-ourteam">{{ $t("t-ourteam")
                }}</a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#solutions" data-key="t-oursolution">{{ $t("t-oursolution") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" data-key="t-ourcontact">{{ $t("t-ourcontact") }}</a>
          </li>
        </ul>
        <div>
          <router-link to="/login" class="btn btn-primary fw-medium text-decoration-none" style="margin-right:5px"
            data-key="t-signin">{{ $t("t-signin") }}</router-link>
          <router-link to="/register-mail" class="btn btn-primary" style="margin:5px" data-key="t-signup">{{
          $t("t-signup") }}</router-link>
        </div>
        <lang />
      </div>
    </div>
  </nav>
</template>

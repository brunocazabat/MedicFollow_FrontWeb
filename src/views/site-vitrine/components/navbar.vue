<script>
import lang from "@/components/frames/nav-bar-components/lang.vue";

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
        <img src="@/assets/images/logo/logo-long.png" class="card-logo card-logo-dark" alt="logo" height="30" />
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
                <a class="dropdown-item nav-link smoothScroll" href="#project">
                  Notre projet</a>
                <a class="dropdown-item nav-link smoothScroll" href="#activity">
                  Nos
                  activités</a>
                <a class="dropdown-item nav-link smoothScroll" href="#team">
                  Notre équipe</a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#solutions">Nos solutions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contactez-nous / FAQ</a>
          </li>
        </ul>
        <div>
          <router-link to="/login" class="btn btn-primary fw-medium text-decoration-none" style="margin-right:5px">
            Sign in
          </router-link>
          <router-link to="/register-mail" class="btn btn-primary" style="margin:5px">Sign Up
          </router-link>
        </div>
        <lang />
      </div>
    </div>
  </nav>
</template>

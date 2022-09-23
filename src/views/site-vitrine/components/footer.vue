<script>
export default {
  name: 'footervit',
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mt-4">
        <div>
          <div>
            <router-link to="/">
              <img src="@/assets/images/logo/logo-long.png" alt="logo light" height="50" />
            </router-link>
          </div>
          <div class="mt-4 fs-18">
            <p class="ff-secondary">
              Restez en contact aisément avec vos proches hospitalisés, 7J/7, 24H/24.
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-7 ms-lg-auto">
        <div class="row">
          <div class="col-sm-4 mt-4 ms-lg-auto">
            <h5 class="text-white mb-0">Liens Utiles</h5>
            <div class="text-muted mt-3">
              <ul class="list-unstyled ff-secondary footer-list">
                <li>
                  <router-link to="/#project">Notre projet</router-link>
                </li>
                <li>
                  <router-link to="/#activity">Nos activités</router-link>
                </li>
                <li>
                  <router-link to="/#team">Notre équipe</router-link>
                </li>
                <li>
                  <router-link to="/#solution">Nos solutions</router-link>
                </li>
                <li>
                  <router-link to="/#contact">Contactez-nous / FAQ</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4 mt-4 ms-lg-auto">
            <h5 class="text-white mb-0">MedicFollow</h5>
            <div class="text-muted mt-3">
              <ul class="list-unstyled ff-secondary footer-list">
                <li>
                  <router-link to="/register-mail">Sign Up !</router-link>
                </li>
                <li>
                  <router-link to="/usage">Conditions d'Utilisation</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row text-center text-sm-start align-items-center mt-5">
      <div class="col-sm-6">
        <div>
          <p class="copy-rights mb-0 currentyear"></p>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="text-sm-end mt-3 mt-sm-0">
          <ul class="list-inline mb-0 footer-social-link">
            <li class="list-inline-item">
              <a href="javascript: void(0);" class="avatar-xs d-block">
                <div class="avatar-title rounded-circle">
                  <em class="ri-linkedin-fill"></em>
                </div>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="javascript: void(0);" class="avatar-xs d-block">
                <div class="avatar-title rounded-circle">
                  <em class="ri-google-fill"></em>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

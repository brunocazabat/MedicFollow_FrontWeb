<script>
export default {
  name: 'footervit',
}
</script>

<template>
  <div class="container" style="color: white">
    <div class="row">
      <div class="col-lg-4 mt-4">
        <div>
          <div>
            <router-link to="/">
              <img src="@/assets/images/logo/logo-long.png" alt="logo light" height="50" />
            </router-link>
          </div>
          <div class="mt-4 fs-18">
            <p class="ff-secondary" data-key="t-slogan">{{ $t("t-slogan") }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-7 ms-lg-auto">
        <div class="row">
          <div class="col-sm-4 mt-4 ms-lg-auto">
            <h4 class="text-white mb-0" data-key="t-usefulllinks">{{ $t("t-usefulllinks") }}</h4>
            <div class="text-muted mt-3">
              <ul class="list-unstyled ff-secondary footer-list">
                <li>
                  <a class="text-white" href="#project" data-key="t-ourproject">{{ $t("t-ourproject") }}</a>
                </li>
                <li>
                  <a class="text-white" href="#history" data-key="t-ourhistory">{{ $t("t-ourhistory") }}</a>
                </li>
                <li>
                  <a class="text-white" href="#team" data-key="t-ourteam">{{ $t("t-ourteam") }}</a>
                </li>
                <li>
                  <a class="text-white" href="#solutions" data-key="t-oursolution">{{ $t("t-oursolution") }}</a>
                </li>
                <li>
                  <a class="text-white" href="#contact" data-key="t-ourcontact">{{ $t("t-ourcontact") }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4 mt-4 ms-lg-auto">
            <h4 class="text-white mb-0">MedicFollow</h4>
            <div class="text-muted mt-3">
              <ul class="list-unstyled ff-secondary footer-list">
                <li>
                  <router-link to="/register-mail" class="text-white" data-key="t-signup">{{ $t("t-signup") }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/usage" class="text-white" data-key="t-terms">{{ $t("t-terms") }}</router-link>
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
                  <em class="ri-linkedin-fill text-white"></em>
                </div>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="javascript: void(0);" class="avatar-xs d-block">
                <div class="avatar-title rounded-circle">
                  <em class="ri-google-fill text-white"></em>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminmodule",

  methods: {
    setadmin() {
      return process.env.VUE_APP_DEFAULT_AUTH === "DEV";
    },
  }
};
</script>

<template>
  <div class="col-md-8 col-lg-6 col-xl-2" v-if="setadmin()">
    <div class="card mt-4 p-4">
      TEST
      <ul>
        <li>
          <router-link to="/test">
            /test
          </router-link>
        </li>
      </ul>
      LOG IN OUT
      <ul>
        <li>
          <router-link to="/login">
            /login
          </router-link>
        </li>
        <li>
          <router-link to="/logout">
            /logout
          </router-link>
        </li>
      </ul>
      FORGET PASSWORD
      <ul>
        <li>
          <router-link to="/forgot-password">
            /fgt-pwd
          </router-link>
        </li>
        <li>
          <router-link to="/forgot-password-success">
            /fgt-p-success
          </router-link>
        </li>
      </ul>
      REGISTER MAIL
      <ul>
        <li>
          <router-link to="/register-mail">
            /rgst-@
          </router-link>
        </li>
        <li>
          <router-link to="/register-mail-success">
            /rgst-@-success
          </router-link>
        </li>
      </ul>
      REGISTER INFO
      <ul>
        <li>
          <router-link to="/register-fill">
            /rgst-$
          </router-link>
        </li>
        <li>
          <router-link to="/register-fill-success">
            /rgst-$-success
          </router-link>
        </li>
      </ul>
      LOCKSCREEN
      <ul>
        <li>
          <router-link to="/lockscreen">
            /lockscreen
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

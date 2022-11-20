<script>
export default {
  name: "adminmodule",
  data() {
    return {
      items: [
        {
          title: "/login",
          to: "/login",
        },
        {
          title: "/logout",
          to: "/logout",
        },
        {
          title: "/fgt-pwd",
          to: "/forgot-password",
        },
        {
          title: "/fgt-p-success",
          to: "/forgot-password-success",
        },
        {
          title: "/rgst-@",
          to: "/register-mail",
        },
        {
          title: "/rgst-@-success",
          to: "/register-mail-success",
        },
        {
          title: "/rgst-$",
          to: "/register-fill",
        },
        {
          title: "/rgst-$-success",
          to: "/register-fill-success",
        },
        {
          title: "/lockscreen",
          to: "/lockscreen",
        },
        {
          title: "/404",
          to: "/404",
        },
        {
          title: "/500",
          to: "/500",
        },
        {
          title: "/coming-soon",
          to: "/coming-soon",
        },
        {
          title: "/maintenance",
          to: "/maintenance",
        },
      ],
    };
  },
  methods: {
    setadmin() {
      return process.env.VUE_APP_DEFAULT_AUTH === "DEV";
    },
  },
};
</script>

<template>
  <div class="col-md-8 col-lg-6 col-xl-2" v-if="setadmin()">
    <div class="card mt-4 p-4">
      Admin Panel
      <ul>
        <li v-for="item in items" :key="item.title">
          <router-link :to="item.to">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

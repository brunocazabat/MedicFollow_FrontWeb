<script>
import Layout from "@/components/layouts/main.vue";
import footermodule from "@/components/login-components/footer-module.vue";

export default {
  data() {

  },
  components: {
    Layout,
    footermodule,
  },

}

</script>



<template>
  <Layout>

    <div class="project-wrapper">


      <div class="p-2">
        <h2 class="text-primary" data-key="t-chooseameeting">{{$t("t-chooseameeting")}}</h2>
        <p class="text-muted" data-key="t-plsfillmeetinginfo">{{$t("t-plsfillmeetinginfo")}}</p>
      </div>


    </div>

    <footermodule />
  </Layout>
</template>

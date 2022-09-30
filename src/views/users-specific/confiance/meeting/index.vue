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

      <div class="p-2 card">
        <div class="body-card">
          <div class="p-3 mb-3">
            <button class="lh-1 btn" data-key="t-previousstep"><em class="ri-arrow-left-line"></em>
              {{$t("t-previousstep")}}</button>
          </div>
          <div class="p-3">
            <p class="form-label font-size-large" data-key="t-choosemeetingdate">
              <strong>{{$t("t-choosemeetingdate")}}</strong></p>
          </div>
        </div>
      </div>


    </div>

    <footermodule />
  </Layout>
</template>

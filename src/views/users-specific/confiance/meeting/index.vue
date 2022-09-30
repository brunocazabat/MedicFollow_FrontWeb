<script>
import Layout from "@/components/layouts/main.vue";
import footermodule from "@/components/login-components/footer-module.vue";

export default {
  data() {
    return {
      viewID: 0,
    }

  },
  components: {
    Layout,
    footermodule
  },
  methods: {
    nextView() {
      this.viewID += 1;
    },
    prevView() {
      this.viewID -= 1;
    }
  }
}
</script>



<template>
  <Layout>

    <div class="project-wrapper meeting-form">


      <div class="p-2">
        <h2 class="text-primary" data-key="t-chooseameeting">{{$t("t-chooseameeting")}}</h2>
        <p class="text-muted" data-key="t-plsfillmeetinginfo">{{$t("t-plsfillmeetinginfo")}}</p>
      </div>

      <div class="p-3 card">
        <div class="body-card">

          <!-- CHOOSE DOCTOR DIV -->
          <div v-if="viewID === 0">
            <div class="p-3 col-lg-3">
              <select class="form-select" id="chooseDoctor" required>
                <option selected data-key="t-selectdoctormeeting">{{$t("t-selectdoctormeeting")}}...</option>
                <option value="doc1">Dr. CAZABAT Bruno</option>
                <option value="doc2">Dr. BERNABEU Bruno</option>
                <option value="doc3">Dr. BARBIER Bruno</option>
                <option value="doc4">Dr. CORBET Guillaume</option>
              </select>
            </div>
          </div>

          <!-- CONSULTING DOCTOR QUESTION -->
          <div v-if="viewID === 1">

            <div class="p-3">
              <p class="form-label font-size-large" data-key="t-haveyoumetdoctor">
                <strong>{{$t("t-haveyoumetdoctor")}}</strong>
              </p>
            </div>

            <div class="p-3">
              <p class="font-size-medium">Yes / No (take from previous medical input form)</p>
            </div>
          </div>

          <!-- CHOOSE DATE AND TIME -->
          <div v-if="viewID === 2">
            <div class="p-3">
              <p class="form-label font-size-large" data-key="t-choosemeetingdate">
                <strong>{{$t("t-choosemeetingdate")}}</strong>
              </p>
            </div>
            <div class="p-3">
              <a class="btn nav-link menu-link col-sm-12 font-size-medium mb-2 two-percent-height"
                href="#meetingDateCollapse" data-bs-toggle="collapse" role="button" aria-expanded="false"
                aria-controls="meetingDateCollapse">
                <span>Friday, September 30 <em class="ri-arrow-down-line lh-1 center-items"></em></span>
              </a>
              <div class="collapse col-sm-12 btn-padding" id="meetingDateCollapse">

                <button class="btn btn-primary mb-2 col-sm-2">9:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">15:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">15:30</button>
                <button class="btn btn-primary mb-2 col-sm-2">17:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">18:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">19:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">16:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">16:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">16:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">16:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">16:00</button>
                <button class="btn btn-primary mb-2 col-sm-2">16:00</button>

              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="p-3 mb-3 row space-in-between">
        <button class="lh-1 btn btn-primary font-size-medium col-lg-3" v-on:click="prevView()"
          :disabled="viewID === 0"><em class="ri-arrow-left-line center-items"></em>
          {{$t("t-previousstep")}}</button>
        <button class="lh-1 btn btn-primary font-size-medium col-lg-3" v-on:click="nextView()"
          :disabled="viewID === 2">{{$t("t-nextstep")}} <em class="ri-arrow-right-line center-items"></em></button>
      </div>


    </div>

    <footermodule />
  </Layout>
</template>

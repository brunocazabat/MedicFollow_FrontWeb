<script>
import Layout from "@/components/layouts/main.vue";
import footermodule from "@/components/login-components/footer-module.vue";

export default {
  data() {
    return {
      viewID: 0,
      pickedDoctor: '',
      test: 0,
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

            <div class="basic-card-border col-sm-12 dl-card">
              <a class="nav-link menu-link col-sm-12 font-size-medium two-percent-height center-items"
                href="#meetingChooseDoctor" data-bs-toggle="collapse" role="button" aria-expanded="false"
                aria-controls="meetingDateCollapse">
                <span>{{$t("t-selectdoctormeeting")}}... <em class="ri-arrow-down-line lh-1 center-items"></em></span>
              </a>

              <div class="collapse col-sm-12 basic-padding" id="meetingChooseDoctor">
                <hr class="mf-divider">

                <div class="form-check">
                  <input class="form-check-input" type="radio" id="doc1GridCheck" value="Doc1" v-model="pickedDoctor" />
                  <label class="form-check-label font-size-medium" for="doc1GridCheck">Dr. BARBIER Maxime</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" id="doc2GridCheck" value="Doc2" v-model="pickedDoctor" />
                  <label class="form-check-label font-size-medium" for="doc2GridCheck">Dr. BERNABEU Simon</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" id="doc3GridCheck" value="Doc3" v-model="pickedDoctor" />
                  <label class="form-check-label font-size-medium" for="doc3GridCheck">Dr. CAZABAT Bruno</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" id="doc4GridCheck" value="Doc4" v-model="pickedDoctor" />
                  <label class="form-check-label font-size-medium" for="doc4GridCheck">Dr. CORBET Guillaume</label>
                </div>

              </div>

            </div>



            <!-- <div class="p-3 col-lg-6">
              <select class="form-select" id="chooseDoctor" required>
                <option selected data-key="t-selectdoctormeeting">{{$t("t-selectdoctormeeting")}}...</option>
                <option value="doc1">Dr. CAZABAT Bruno</option>
                <option value="doc2">Dr. BERNABEU Bruno</option>
                <option value="doc3">Dr. BARBIER Bruno</option>
                <option value="doc4">Dr. CORBET Guillaume</option>
              </select>
            </div> -->

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
          :disabled="viewID === 2 || pickedDoctor === ''">{{$t("t-nextstep")}} <em
            class="ri-arrow-right-line center-items"></em></button>
      </div>


    </div>

    <footermodule />
  </Layout>
</template>

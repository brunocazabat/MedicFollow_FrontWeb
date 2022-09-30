<script>
import Layout from "@/components/layouts/main.vue";
import footermodule from "@/components/login-components/footer-module.vue";

export default {
  data() {
    return {
      viewID: 0,
      pickedDoctor: '',
      visitedDoctor: '',
      pickedHour: '',
      viewEnd: false,
    }

  },
  components: {
    Layout,
    footermodule
  },
  methods: {
    nextView() {
      this.viewID += 1;
      if (this.viewID === 3) {
        this.viewEnd = true;
      }
    },
    prevView() {
      this.viewID -= 1;
      if (this.viewID) {
        this.viewEnd = false;
      }
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
            <!-- BUTTON TO CLICK TO SHOW DR. -->
            <div class="basic-card-border col-sm-12 dl-card">
              <a class="nav-link menu-link col-sm-12 font-size-medium two-percent-height center-items"
                href="#meetingChooseDoctor" data-bs-toggle="collapse" role="button" aria-expanded="false"
                aria-controls="meetingDateCollapse">
                <span>{{$t("t-selectdoctormeeting")}}... <strong><em
                      class="ri-arrow-down-line lh-1 center-items"></em></strong></span>
              </a>

              <hr class="mf-divider">

              <!-- RADIO BOX DR. SELECTION -->
              <div class="collapse col-sm-12 basic-padding left-margin" id="meetingChooseDoctor">
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
          </div>

          <!-- CONSULTING DOCTOR QUESTION -->
          <div v-if="viewID === 1">

            <div class="p-3">
              <p class="form-label font-size-large" data-key="t-haveyoumetdoctor">
                <strong>{{$t("t-haveyoumetdoctor")}}</strong>
              </p>
            </div>

            <div class="p-3">
              <div class="row g-4">
                <div class="col-lg-6">
                  <div class="form-check card-radio">
                    <input id="doctorConsulted" name="doctorConsulted" type="radio" class="form-check-input" value="YES"
                      v-model="visitedDoctor" />
                    <label class="form-check-label" for="doctorConsulted">
                      <span class="fs-20 text-wrap d-block fw-semibold">{{$t("t-yes")}}</span>
                      <span class="text-muted fw-normal text-wrap d-block">{{$t("t-ihaveconsulteddr")}}</span>
                    </label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-check card-radio">
                    <input id="doctorNeverConsulted" name="doctorNeverConsulted" type="radio" class="form-check-input"
                      value="NO" v-model="visitedDoctor" />
                    <label class="form-check-label" for="doctorNeverConsulted">
                      <span class="fs-20 text-wrap d-block fw-semibold">{{$t("t-no")}}</span>
                      <span class="text-muted fw-normal text-wrap d-block">{{$t("t-firsttimeconsulting")}}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CHOOSE DATE AND TIME -->
          <div v-if="viewID === 2">
            <div class="p-3">
              <p class="form-label font-size-large" data-key="t-choosemeetingdate">
                <strong>{{$t("t-choosemeetingdate")}}</strong>
              </p>
            </div>

            <div class="basic-card-border col-sm-12 dl-card mb-2">
              <a class="nav-link menu-link col-sm-12 font-size-medium two-percent-height center-items"
                href="#meetingDateCollapse" data-bs-toggle="collapse" role="button" aria-expanded="false"
                aria-controls="meetingDateCollapse">
                <span>Vendredi, 30 Octobre 2022 <strong><em
                      class="ri-arrow-down-line lh-1 center-items"></em></strong></span>
              </a>

              <hr class="mf-divider">

              <div class="collapse col-sm-12 basic-padding left-margin" id="meetingDateCollapse">
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="hour1GridCheck" value="Hour1" v-model="pickedHour" />
                  <label class="form-check-label font-size-medium" for="hour1GridCheck">9:00</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" id="hour2GridCheck" value="Hour2" v-model="pickedHour" />
                  <label class="form-check-label font-size-medium" for="hour2GridCheck">10:00</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" id="hour3GridCheck" value="Hour3" v-model="pickedHour" />
                  <label class="form-check-label font-size-medium" for="hour3GridCheck">15:00</label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" id="hour4GridCheck" value="Hour4" v-model="pickedHour" />
                  <label class="form-check-label font-size-medium" for="hour4GridCheck">17:00</label>
                </div>
              </div>

            </div>
          </div>

          <div class="p-3" v-if="viewID === 3">
            <p class="form-label font-size-large" data-key="t-choosemeetingdate">
              <strong>Votre demande de rendez-vous a bien été prise en compte pour le Vendredi 30 Octobre,
                15:00!</strong>
            </p>
            <p class="text-muted">Vous pouvez retourner sur la page d'accueil en appuyant sur "Continuer". Si vous avez
              commis une erreur, veuillez nous contacter au plus vite ou apuuyer sur "Annuler"</p>
          </div>
        </div>

      </div>

      <div class="p-3 mb-3 row">
        <div class="space-in-between" v-if="viewEnd === false">
          <button class="lh-1 btn btn-primary font-size-medium col-lg-3" v-on:click="prevView()"
            :disabled="viewID === 0"><strong><em class="ri-arrow-left-line center-items"></em></strong>
            {{$t("t-previousstep")}}</button>
          <button class="lh-1 btn btn-primary font-size-medium col-lg-3" v-on:click="nextView()"
            :disabled="viewID === 3 || (pickedDoctor === '' && viewID === 0) || (visitedDoctor === '' && viewID === 1) || (pickedHour === '' && viewID === 2)">{{$t("t-nextstep")}}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></button>
        </div>

        <div class="space-in-between" v-else>
          <button class="lh-1 btn btn-primary mf-btn-error font-size-medium col-lg-3"
            v-on:click="prevView()"><strong><em class="ri-arrow-left-line center-items"></em></strong>
            {{$t("t-cancel")}}</button>
          <a class="lh-1 btn btn-primary font-size-medium col-lg-3" href="/">{{$t("t-continue")}}
            <strong><em class="ri-arrow-right-line center-items"></em></strong></a>
        </div>

      </div>


    </div>

    <footermodule />
  </Layout>
</template>

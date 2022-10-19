<script>
import dayjs from 'dayjs'
import { ref } from 'vue'

export default {
  components: {
  },
  data: function () {
    return {
      lastCheckupText: " ",
      checkupDate: " ",
      fillerText: ref([
        { id: 1, text: "Nous avons donné à Marie de la morphine pour réduire les douleurs à son genou gauche.", visitDate: "19 Octobre, 2022", visitHour: "17:00", fileName: "Morphine_Informations.pdf", fileSize: "1.2MB" },
        { id: 2, text: "Marie se plaignait de douleurs au genou gauche, nous allons effectué un scanner.", visitDate: "18 Octobre, 2022", visitHour: "15:32", fileName: "Consentement_Scan_Genou.pdf", fileSize: "0.3MB" },
        { id: 3, text: "Marie est entrée à l'hopital suite à une chute d'une échelle. Ses constantes sont stables à part la température (39.7°C).", visitDate: "15 Octobre, 2022", visitHour: "10:17", fileName: "Rapport_Entrée_Hôpital.pdf", fileSize: "2.0MB" }
      ])
    };
  },
  methods: {
    showLocaleTime: function () {
      let lastCheckup = this;
      lastCheckup.localTime = new dayjs().format('HH:mm');
      lastCheckup.localDate = new dayjs().format('DD-MM-YYYY');
    }
  },
  mounted() {
    this.showLocaleTime()
  }
}
</script>

<template>

  <div>
    <div class="card card-body" v-for='checkupText in fillerText' :key='checkupText.id'>
      <h6 class="mb-3 fw-semibold text-uppercase" data-key="t-summary">{{ $t("t-summary") }}</h6>
      <ul class="ps-4 vstack gap-2">
        <li>{{ checkupText.text }}</li>
      </ul>

      <div class="pt-3 border-top border-top-dashed mt-4">
        <div class="row">
          <div class="col-lg-6 col-sm-6">
            <div>
              <p class="mb-2 text-uppercase fw-medium" data-key="t-visitdate">{{ $t("t-visitdate") }}:</p>
              <h5 class="fs-15 mb-0">{{ checkupText.visitDate }}</h5>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div>
              <p class="mb-2 text-uppercase fw-medium" data-key="t-visittime">{{ $t("t-visittime") }}:</p>
              <h5 class="fs-15 mb-0">{{ checkupText.visitHour }}</h5>
            </div>
          </div>


          <div class="pt-3 border-top border-top-dashed mt-4">
            <h6 class="mb-3 fw-semibold text-uppercase" data-key="t-ressources">{{ $t("t-ressources") }}:</h6>
            <div class="row g-3">
              <div class="col-xxl-6 col-lg-6">
                <div class="border rounded border-dashed p-2">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-light text-secondary rounded fs-24 shadow shadow">
                          <em class="ri-file-line"></em>
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">{{ checkupText.fileName
                      }}</a></h5>
                      <div>{{ checkupText.fileSize }}</div>
                    </div>
                    <div class="flex-shrink-0 ms-2">
                      <div class="d-flex gap-1">
                        <button type="button" class="btn btn-icon text-muted btn-sm fs-18 shadow-none shadow-none"><em
                            class="ri-download-2-line"></em></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-6 col-lg-6">
                <div class="border rounded border-dashed p-2">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar-sm">
                        <div class="avatar-title bg-light text-secondary rounded fs-24 shadow shadow">
                          <em class="ri-file-line"></em>
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <h5 class="fs-13 mb-1"><a href="#"
                          class="text-body text-truncate d-block">MedicFollow_Legal_Uses.pdf</a></h5>
                      <div>2.4MB</div>
                    </div>
                    <div class="flex-shrink-0 ms-2">
                      <div class="d-flex gap-1">
                        <button type="button" class="btn btn-icon text-muted btn-sm fs-18 shadow-none shadow-none"><em
                            class="ri-download-2-line"></em></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <!-- end row -->
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

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
        { id: 1, text: "Gave some painkiller to reduce the pain of the left knee.", visitDate: "7 August, 2022", visitHour: "16:50", boolStatus: 1, status: "Pending Approval", fileName: "Painkiller_Information.pdf", fileSize: "1.2MB" },
        { id: 1, text: "We decided to do a new scanner on the left knee.", visitDate: "7 August, 2022", visitHour: "15:32", boolStatus: 0, status: "Approved", fileName: "Knee_Scan_Approval.pdf", fileSize: "1.2MB" },
        { id: 2, text: "The patient has pain in the left knee. The patient also has some fever. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. In egestas erat imperdiet sed euismod. Tempus quam pellentesque nec nam aliquam sem et. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Sodales neque sodales ut etiam sit amet nisl purus in. Duis at tellus at urna condimentum. Ornare aenean euismod elementum nisi quis. Fermentum et sollicitudin ac orci phasellus. Integer malesuada nunc vel risus. Gravida neque convallis a cras semper auctor neque. Suspendisse potenti nullam ac tortor vitae purus faucibus. Eu consequat ac felis donec et odio pellentesque diam. Urna molestie at elementum eu facilisis. Nunc aliquet bibendum enim facilisis gravida. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Nibh cras pulvinar mattis nunc sed blandit.", visitDate: "7 August, 2022", visitHour: "10:17", boolStatus: 0, status: "Approved", fileName: "Fever_Report.pdf", fileSize: "0.3MB" }
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
          <div class="col-lg-3 col-sm-6">
            <div>
              <p class="mb-2 text-uppercase fw-medium" data-key="t-visitdate">{{ $t("t-visitdate") }}:</p>
              <h5 class="fs-15 mb-0">{{ checkupText.visitDate }}</h5>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div>
              <p class="mb-2 text-uppercase fw-medium" data-key="t-visittime">{{ $t("t-visittime") }}:</p>
              <h5 class="fs-15 mb-0">{{ checkupText.visitHour }}</h5>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div v-if="checkupText.boolStatus === 1">
              <p class="mb-2 text-uppercase fw-medium" data-key="t-status">{{ $t("t-status") }}:</p>
              <div class="badge bg-warning fs-12">{{ checkupText.status }}</div>
            </div>
            <div v-else>
              <p class="mb-2 text-uppercase fw-medium" data-key="t-status">{{ $t("t-status") }}:</p>
              <div class="badge bg-success fs-12">{{ checkupText.status }}</div>
            </div>
          </div>

          <div class="pt-3 border-top border-top-dashed mt-4">
            <h6 class="mb-3 fw-semibold text-uppercase" data-key="t-ressources">{{ $t("t-ressources") }}:</h6>
            <div class="row g-3">
              <div class="col-xxl-4 col-lg-6">
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

              <div class="col-xxl-4 col-lg-6">
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

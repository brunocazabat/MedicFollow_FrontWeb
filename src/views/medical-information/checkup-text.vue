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
        { id: 0, text: "We decided to do a new scanner on the left knee.", visitDate: "15 Sep, 2021", visitHour: "15:32", status: "To be approved" },
        { id: 1, text: "The patient has pain in the left knee. jjjjjjjjjjjjjjjkhb gj ds fsf s q qd q dd qd qd wd sds dqdDaaf ad af  dsa rwgrgthfg fs ds d sv s faajjjjjjjjjjjjjjjjjjj hhj j hjh bnbbb nnnnnnnnnnnnnnnnnnnnnnnnnnnnn ggggggggggggg ty f f hg kljhljhljh lhljh ljkh ljhljhogh8iygu bk ", visitDate: "15 Sep, 2021", visitHour: "10:17", status: "Approved" }
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
      <h6 class="mb-3 fw-semibold text-uppercase">Summary</h6>
      <ul class="ps-4 vstack gap-2">
        <li>{{ checkupText.text }}</li>

      </ul>

      <div class="pt-3 border-top border-top-dashed mt-4">
        <div class="row">

          <div class="col-lg-3 col-sm-6">
            <div>
              <p class="mb-2 text-uppercase fw-medium">Visit Date:</p>
              <h5 class="fs-15 mb-0">{{ checkupText.visitDate }}</h5>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div>
              <p class="mb-2 text-uppercase fw-medium">Time of Visit:</p>
              <h5 class="fs-15 mb-0">{{ checkupText.visitHour }}</h5>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div>
              <p class="mb-2 text-uppercase fw-medium">Status:</p>
              <div class="badge bg-warning fs-12">{{ checkupText.status }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

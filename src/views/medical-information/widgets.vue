<script>
import {
  ClockIcon,
  CalendarIcon
} from '@zhuowenli/vue-feather-icons'
import dayjs from 'dayjs'

export default {
  components: {
    ClockIcon,
    CalendarIcon
  },
  data: function () {
    return {
      localTime: " ",
      localDate: " "
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
  <div class="col-xl-3">
    <div class="card card-animate">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="avatar-sm flex-shrink-0">
            <span class="avatar-title rounded-2 fs-2 bg-soft-primary text-primary">
              <ClockIcon size="24"></ClockIcon>
            </span>
          </div>
          <div class="flex-grow-1 overflow-hidden ms-3">
            <p class="text-uppercase fw-medium text-muted text-truncate mb-3" data-key="t-lastcheckup">{{
                $t("t-lastcheckup")
            }}:</p>
            <div class="d-flex align-items-center mb-3">
              <h4 class="fs-4 flex-grow-1 mb-0">
                <span class="counter-value">{{ localTime }}</span>
              </h4>
            </div>
            <p class="text-muted text-truncate mb-0">{{ localDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-3">
    <div class="card card-animate">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="avatar-sm flex-shrink-0">
            <span class="avatar-title rounded-2 fs-2 bg-soft-info text-info">
              <CalendarIcon size="24"></CalendarIcon>
            </span>
          </div>
          <div class="flex-grow-1 overflow-hidden ms-3">
            <p class="text-uppercase fw-medium text-muted text-truncate mb-3" data-key="t-nextappoint">{{
                $t("t-nextappoint")
            }}:</p>
            <div class="d-flex align-items-center mb-3">
              <h4 class="fs-4 flex-grow-1 mb-0">
                <span class="counter-value">Test Event 1</span>
              </h4>
            </div>
            <p class="text-muted text-truncate mb-0">09-07-2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

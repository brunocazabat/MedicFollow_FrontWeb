<script>
import {
  CalendarIcon,
  UserIcon,
  AlertTriangleIcon
} from '@zhuowenli/vue-feather-icons'

export default {
  components: {
    CalendarIcon,
    UserIcon,
    AlertTriangleIcon
  },
}
</script>

<template>
  <div class="row">
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="avatar-sm flex-shrink-0">
              <span class="avatar-title rounded-2 fs-2 bg-soft-info text-info">
                <CalendarIcon size="24"></CalendarIcon>
              </span>
            </div>
            <div class="flex-grow-1 overflow-hidden ms-3">
              <p class="forceserif text-uppercase fw-medium text-muted text-truncate mb-3" data-key="t-nextappoint">{{
              $t("t-nextappoint")
              }}:</p>
              <div class="d-flex align-items-center mb-3">
                <h4 class="fs-4 flex-grow-1 mb-0">
                  <span class="counter-value">Test Event 1</span>
                </h4>
              </div>
              <p class="forceserif text-muted text-truncate mb-0">09-07-2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="avatar-sm flex-shrink-0">
              <span class="avatar-title rounded-2 fs-2 bg-soft-info text-info">
                <UserIcon size="24"></UserIcon>
              </span>
            </div>
            <div class="flex-grow-1 overflow-hidden ms-3">
              <p class="forceserif text-uppercase fw-medium text-muted text-truncate mb-3" data-key="t-lastinfo">{{
              $t("t-lastinfo")
              }}:
              </p>
              <div class="d-flex align-items-center mb-3">
                <h4 class="fs-4 flex-grow-1 mb-0">
                  <span class="counter-value">Ms. Golem</span>
                </h4>
              </div>
              <p class="forceserif text-muted text-truncate mb-0" data-key="t-situation">{{
              $t("t-situation")
              }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="avatar-sm flex-shrink-0">
              <span class="avatar-title rounded-2 fs-2 bg-soft-warning text-warning">
                <AlertTriangleIcon size="24"></AlertTriangleIcon>
              </span>
            </div>
            <div class="flex-grow-1 overflow-hidden ms-3">
              <p class="forceserif text-uppercase fw-medium text-muted text-truncate mb-3" data-key="t-covidwarn">{{
              $t("t-covidwarn")
              }}:
              </p>
              <div class="d-flex align-items-center mb-3">
                <h4 class="fs-4 flex-grow-1 mb-0">
                  <span class="counter-value">Test</span>
                </h4>
              </div>
              <p class="forceserif text-muted text-truncate mb-0" data-key="t-care">{{
              $t("t-care")
              }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetupMeetingSchedule",
}
</script>

<template>
  <div class="card dashboardcard">
    <div class="card-body align-content-center align-items-center text-center">
      <div class="row">
        <h1 class="d-none d-xl-block ms-1 mb-3 ff-secondary user-name-text"><em class="ri-folder-user-line"></em><em
            class="ri-add-line"></em>
        </h1>
        <h4 class="d-none d-xl-block ms-1 mb-3 ff-secondary fw-semibold user-name-text text-muted" data-key="t-addorga">
          {{ $t('t-setupmeetingschedule') }}
        </h4>
        <div class="card-footer border-0">
          <div class="row">
            <div class="text-center">
              <RouterLink to="/docteur/schedule-seetings" class="btn btn-primary text-uppercase padd25around"
                data-key="t-setup">
                {{ $t('t-add') }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

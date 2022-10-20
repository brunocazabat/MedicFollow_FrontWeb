<script>
export default {
  name: "SetupMeetingSchedule",
}
</script>

<template>
  <div class="card">
    <div class="card-body align-content-center align-items-center text-center">
      <RouterLink to="/docteur/settings" class="btn btn-primary fs-16 text-uppercase padd5around"
        data-key="t-accesssettings">
        <em class="mdi mdi-cog"></em><br />{{ $t('t-accesssettings') }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetupMeetingSchedule",
}
</script>

<template>
  <div class="card">
    <div class="card-body align-content-center align-items-center text-center">
      <RouterLink to="/personnel/chat" class="btn btn-primary fs-16 text-uppercase padd5around"
        data-key="t-accessdiscuss">
        <em class="mdi mdi-forum"></em><br />{{ $t('t-accessdiscuss') }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddMedicalInformation",
}
</script>

<template>
  <div class="card">
    <div class="card-body align-content-center align-items-center text-center">
      <RouterLink to="/personnel/staff-input" class="btn btn-primary fs-16 text-uppercase padd5around"
        data-key="t-addmedicalinfo">
        <em class="mdi mdi-pen-plus"></em><br />{{ $t('t-addmedicalinfo') }}
      </RouterLink>
    </div>
  </div>
</template>

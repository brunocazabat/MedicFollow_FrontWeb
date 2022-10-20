<script>
export default {
  name: "AddPatient",
}
</script>

<template>
  <div class="card">
    <div class="card-body align-content-center align-items-center text-center">
      <RouterLink to="/personnel/manage-patients" class="btn btn-primary fs-16 text-uppercase padd5around"
        data-key="t-addpatient">
        <em class="mdi mdi-account-plus"></em><br />{{ $t('t-addpatient') }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManagePatients",
}
</script>

<template>
  <div class="card">
    <div class="card-body align-content-center align-items-center text-center">
      <RouterLink to="/personnel/manage-patients" class="btn btn-primary fs-16 text-uppercase padd5around"
        data-key="t-managepatients">
        <em class="mdi mdi-account-edit"></em><br />{{ $t('t-managepatients') }}
      </RouterLink>
    </div>
  </div>
</template>

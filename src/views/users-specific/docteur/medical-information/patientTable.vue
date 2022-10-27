<script>
import TablePatientModule from "./tableComponents/tableSelectPatient.vue";

export default {
  props: {
    patientArray: {
      type: Array,
      required: true
    },
  },
  components: {
    TablePatientModule,
  },
  methods: {
    emitButtonPressed() {
      this.$emit("buttonPressed");
    }
  }
};
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card" id="patientList">
        <TablePatientModule @button-pressed="emitButtonPressed" :patientArray="patientArray" />
      </div>
      <!--end card-->
    </div>
    <!--end col-->
  </div>
</template>

<script>
import TablePatientModule from "./tableComponents/tableSelectPatient.vue";

export default {
    components: {
        TablePatientModule,
    },
    methods: {
        emitInfo(patient) {
            this.$emit("patientInfo", patient);
        },
    },
};
</script>

<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card" id="patientList">
                <TablePatientModule @patient-info="emitInfo" />
            </div>
            <!--end card-->
        </div>
        <!--end col-->
    </div>
</template>

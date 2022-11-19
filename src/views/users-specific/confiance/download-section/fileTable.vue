<script>
import TablePatientModule from "./tableComponents/tableSelectFile.vue";

export default {
  props: {
    fileArray: {
      type: Array,
      required: true,
    },
  },
  components: {
    TablePatientModule,
  },
  methods: {
    emitButtonPressed(file) {
      console.log("Emitted file info (fileTable): ", file);
      this.$emit("fileInfo", file);
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <TablePatientModule
          @file-info="emitButtonPressed($event)"
          :fileArray="fileArray"
        />
      </div>
      <!--end card-->
    </div>
    <!--end col-->
  </div>
</template>

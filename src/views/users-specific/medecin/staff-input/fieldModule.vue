<script>
export default {
  props: ['fieldName'],
  data() { },
};
</script>

<template>
  <div>
    <label class="form-label font-size-medium" for="nonMandatoryField">{{fieldName}}</label>
    <input class="form-control" type="text" id="nonMandatoryField" :placeholder="fieldName" />
  </div>
</template>

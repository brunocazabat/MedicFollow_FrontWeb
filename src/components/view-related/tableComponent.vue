<script>
// File to display a tale component
export default {
  props: {
    columnArray: {
      type: Array,
      required: true,
      default: () => [],
    },
    dataArray: {
      type: Array,
      required: true,
      default: () => [],
    },
    displayActions: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      id: null,
    };
  },
  methods: {
    emitButtonPressed(data) {
      this.$emit("buttonPressed", data);
    },
  },
};
</script>

<template>
  <!-- Displaying a table, columns title = columnArray, data = dataArray -->
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive table-card mb-4">
            <table class="table align-middle table-nowrap mb-0">
              <thead>
                <tr>
                  <th v-for="column in columnArray" :key="column.id">
                    {{ column.title }}
                  </th>
                  <th v-if="displayActions">{{ $t("t-actions") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="data in dataArray" :key="data.id">
                  <td v-for="(content, index) in data.content" :key="index">
                    {{ content }}
                  </td>
                  <td v-if="displayActions">
                    <button
                      class="btn btn-primary"
                      @click="emitButtonPressed(data)"
                    >
                      {{ $t("t-next") }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

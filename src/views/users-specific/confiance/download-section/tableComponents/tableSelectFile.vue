<script>
export default {
  props: {
    fileArray: {
      type: Array,
      required: true,
    },
  },
  name: "TableSelectFile",
  data() {
    return {
      title: "Files List",
      searchQuery: null,
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.fileArray);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.name.toLowerCase().includes(search) ||
            data.size.toLowerCase().includes(search) ||
            data.uploadDate.toLowerCase().includes(search) ||
            data.observationID.toLowerCase().includes(search)
          );
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.setPages();
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.fileArray.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(filesList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return filesList.slice(from, to);
    },
    emitFileInfo(file) {
      /* TODO: Emit file info to parent component */
      console.log("Emitted file info (tableSelectFile): ", file);
      this.$emit("fileInfo", file);
    },
  },
};
</script>

<template>
  <div class="card-body">
    <div class="table-responsive table-card mb-4">
      <table class="table align-middle table-nowrap mb-0">
        <caption></caption>
        <thead>
          <tr>
            <th class="sort" data-sort="name">{{ $t("t-file-name") }}:</th>
            <th class="sort" data-sort="size">{{ $t("t-size") }}:</th>
            <th class="sort" data-sort="uploadDate">
              {{ $t("t-uploaded-date") }}:
            </th>
            <th class="sort" data-sort="observationID">
              {{ $t("t-observation-id") }}:
            </th>
            <th class="sort">{{ $t("t-actions") }}:</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr v-for="(data, index) of resultQuery" :key="index">
            <td class="id">
              {{ data.name }}
            </td>
            <td class="tasks_name">
              {{ data.size }}
            </td>
            <td class="user_type">{{ data.uploadDate }}</td>
            <td class="create_date">{{ data.observationID }}</td>
            <td>
              <button class="btn btn-primary" v-on:click="emitFileInfo(data)">
                {{ $t("t-download") }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="noresult"
        style="display: none"
        :class="{ 'd-block': resultQuery.length == 0 }"
      >
        <div class="text-center">
          <h5 class="mt-2">{{ $t("t-no-file-found") }}</h5>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-3">
      <div class="pagination-wrap hstack gap-2">
        <a
          class="page-item pagination-prev disabled"
          href="#"
          v-if="page != 1"
          @click="page--"
        >
          {{ $t("t-previous") }}
        </a>
        <ul class="pagination listjs-pagination mb-0">
          <li
            :class="{
              active: pageNumber == page,
              disabled: pageNumber == '...',
            }"
            v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)"
            :key="index"
            @click="page = pageNumber"
          >
            <a class="page" href="#">{{ pageNumber }}</a>
          </li>
        </ul>
        <a
          class="page-item pagination-next"
          href="#"
          @click="page++"
          v-if="page < pages.length"
        >
          {{ $t("t-next") }}
        </a>
      </div>
    </div>
  </div>
  <!--end card-body-->
</template>

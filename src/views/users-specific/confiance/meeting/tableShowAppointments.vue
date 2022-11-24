<script>
import dayjs from "dayjs";

export default {
  props: {
    appointmentArray: {
      type: Array,
      required: true,
    },
  },
  name: "TableSelectPatient",
  data() {
    return {
      title: "Patients List",
      searchQuery: null,
      page: 1,
      perPage: 10,
      pages: [],
      appointmentList: [
        {
          lName: "RIVERS",
          fName: "Joseph",
          socialSecNbr: "16506303017",
          dateOfBirth: "30/06/1965",
          create: "29 Sep, 2022",
        },
      ],
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.appointmentArray);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.with.toLowerCase().includes(search) ||
            data.date.toLowerCase().includes(search) ||
            data.time.toLowerCase().includes(search)
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
      let numberOfPages = Math.ceil(this.appointmentList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },

    paginate(appointmentList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return appointmentList.slice(from, to);
    },

    // Method to parse the date
    parseDate(date) {
      return dayjs(date).format("DD/MM/YY");
    },

    // Method to parse the time
    parseTime(time) {
      return dayjs(time).format("HH:mm");
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
            <th class="sort" id="" data-sort="with">{{ $t("t-with") }}:</th>
            <th class="sort" id="" data-sort="date">{{ $t("t-date") }}:</th>
            <th class="sort" id="" data-sort="time">{{ $t("t-time") }}:</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr v-for="(data, index) of resultQuery" :key="index">
            <td class="id">
              {{ data.docName }}
            </td>
            <td class="assignedto">{{ data.date }}</td>
            <td class="create_date">
              {{ data.hour_start + " - " + data.hour_end }}
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
          <h5 class="mt-2">{{ $t("t-no-patient-found") }}</h5>
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

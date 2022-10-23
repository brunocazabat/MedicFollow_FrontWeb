<script>
export default {
  name: "TableSelectPatient",
  data() {
    return {
      title: "Patients List",
      searchQuery: null,
      page: 1,
      perPage: 10,
      pages: [],
      patientsList: [
        {
          lName: "RIVERS",
          fName: "Joseph",
          socialSecNbr: "16506303017",
          dateOfBirth: "30/06/1965",
          create: "29 Sep, 2022",
        },
        {
          lName: "DUPONT",
          fName: "Marie",
          socialSecNbr: "19761005845",
          dateOfBirth: "05/10/1976",
          create: "15 Oct, 2022",
        },
        {
          lName: "GARISSON",
          fName: "Thomas",
          socialSecNbr: "19991022012",
          dateOfBirth: "13/02/1985",
          create: "24 Oct, 2022",
        },
        {
          lName: "YU",
          fName: "Sek",
          socialSecNbr: "19902289763",
          dateOfBirth: "28/02/1999",
          create: "3 Aou, 2022",
        },
        {
          lName: "LUCE",
          fName: "Armel",
          socialSecNbr: "19902138532",
          dateOfBirth: "01/11/1996",
          create: "18 Aou, 2022",
        },
        {
          lName: "NOA",
          fName: "Nadège",
          socialSecNbr: "19900572957",
          dateOfBirth: "12/09/1961",
          create: "14 Sept, 2022",
        },
        {
          lName: "EDGAR",
          fName: "Sylvie",
          socialSecNbr: "19906967138",
          dateOfBirth: "02/10/1977",
          create: "11 Oct, 2022",
        },
        {
          lName: "MATHIS",
          fName: "Gabrielle",
          socialSecNbr: "19908619501",
          dateOfBirth: "25/04/1994",
          create: "18 Oct, 2022",
        },
      ],
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.patientsList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.lName.toLowerCase().includes(search) ||
            data.fName.toLowerCase().includes(search) ||
            data.socialSecNbr.toLowerCase().includes(search) ||
            data.dateOfBirth.toLowerCase().includes(search) ||
            data.create.toLowerCase().includes(search)
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
      let numberOfPages = Math.ceil(this.patientsList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(patientsList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return patientsList.slice(from, to);
    },
    emitPatientInfo(patient) {
      this.$emit("patientInfo", patient);
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
            <th class="sort" id="" data-sort="id">Nom:</th>
            <th class="sort" id="" data-sort="tasks_name">Prénom:</th>
            <th class="sort" id="" data-sort="user_type">No. Sécurité Sociale:</th>
            <th class="sort" id="" data-sort="assignedto">Date de naissance:</th>
            <th class="sort" id="" data-sort="create_date">Crée le:</th>
            <th>Action:</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr v-for="(data, index) of resultQuery" :key="index">
            <td class="id">
              {{ data.lName }}
            </td>
            <td class="tasks_name">
              {{ data.fName }}
            </td>
            <td class="user_type">{{ data.socialSecNbr }}</td>
            <td class="assignedto">{{ data.dateOfBirth }}</td>
            <td class="create_date">{{ data.create }}</td>
            <td><button class="btn btn-primary" v-on:click="emitPatientInfo(data)">Consulter</button></td>
          </tr>
        </tbody>
      </table>
      <div class="noresult" style="display: none" :class="{ 'd-block': resultQuery.length == 0 }">
        <div class="text-center">
          <h5 class="mt-2">Sorry! No Result Found</h5>
          <p class="text-muted mb-0">
            We've searched more than 150+ Patiens We did not find any
            Patients for you search.
          </p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-3">
      <div class="pagination-wrap hstack gap-2">
        <a class="page-item pagination-prev disabled" href="#" v-if="page != 1" @click="page--">
          Previous
        </a>
        <ul class="pagination listjs-pagination mb-0">
          <li :class="{
            active: pageNumber == page,
            disabled: pageNumber == '...',
          }" v-for="(pageNumber, index) in pages.slice(
            page - 1,
            page + 5
          )" :key="index" @click="page = pageNumber">
            <a class="page" href="#">{{ pageNumber }}</a>
          </li>
        </ul>
        <a class="page-item pagination-next" href="#" @click="page++" v-if="page < pages.length">
          Next
        </a>
      </div>
    </div>
  </div>
  <!--end card-body-->
</template>

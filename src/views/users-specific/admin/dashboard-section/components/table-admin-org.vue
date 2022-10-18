<script>
export default {
  name: "TableAdminBug",
  data() {
    return {
      title: "Orgs List",
      searchQuery: null,
      page: 1,
      perPage: 7,
      pages: [],
      orgsList: [
        {
          id: "#MDFO- 01",
          title: "O- Hopital Édouard Prudence",
          usertype: "65",
          create: "08 Dec, 2021",
          status: "New",
        },
        {
          id: "#MDFO- 02",
          title: "O- Hopital Philippe Blanche",
          usertype: "85",
          create: "24 Oct, 2021",
          status: "New",
        },
        {
          id: "#MDFO- 03",
          title: "O- Clinique Dan Daphné",
          usertype: "50",
          create: "17 Oct, 2021",
          status: "Working",
        },
        {
          id: "#MDFO- 04",
          title: "O- Clinique Odilon Clarisse",
          usertype: "35",
          create: "03 Oct, 2021",
          status: "Suspended",
        },
        {
          id: "#MDFO- 05",
          title: "O- Hopital Josiane Adeline",
          usertype: "90",
          create: "09 Oct, 2021",
          status: "Waiting",
        },
        {
          id: "#MDFO- 06",
          title: "O- Clinique Théa Toinette",
          usertype: "115",
          create: "27 Oct, 2021",
          status: "Working",
        },
        {
          id: "#MDFO- 07",
          title: "O- Hopital René Prune",
          usertype: "45",
          create: "05 Oct, 2021",
          status: "Waiting",
        },
        {
          id: "#MDFO- 08",
          title: "O- Clinique Cyprien Mélody",
          usertype: "95",
          create: "09 Dec, 2021",
          status: "Working",
        },
        {
          id: "#MDFO- 09",
          title: "O- Hopital Léonce Edmée",
          usertype: "70",
          create: "24 Dec, 2021",
          status: "Working",
        },
        {
          id: "#MDFO- 10",
          title: "O- Clinique Adam Morgane",
          usertype: "60",
          create: "04 Oct, 2021",
          status: "New",
        },
        {
          id: "#MDFO- 11",
          title: "O- Hopital Désirée Léopold",
          usertype: "85",
          create: "21 Dec, 2021",
          status: "Working",
        },
      ],
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.orgsList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.title.toLowerCase().includes(search) ||
            data.usertype.toLowerCase().includes(search) ||
            data.create.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search)
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
      let numberOfPages = Math.ceil(this.orgsList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(orgsList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return orgsList.slice(from, to);
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
            <th class="sort" id="" data-sort="id">ID:</th>
            <th class="sort" id="" data-sort="tasks_name">Nom de l'Organisation:</th>
            <th class="sort" id="" data-sort="user_type">Nombre d'Utilisateurs:</th>
            <th class="sort" id="" data-sort="create_date">Crée le:</th>
            <th class="sort" id="" data-sort="status">Status:</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr v-for="(data, index) of resultQuery" :key="index">
            <td class="id">
              <router-link to="/admin/manage-orgas" class="fw-medium link-primary">{{ data.id }}</router-link>
            </td>
            <td class="tasks_name">
              {{ data.title }}
            </td>
            <td class="user_type">{{ data.usertype }}</td>
            <td class="create_date">{{ data.create }}</td>
            <td class="status">
              <span class="badge text-uppercase" :class="{
                'badge-soft-warning': data.status == 'Waiting',
                'badge-soft-info': data.status == 'New',
                'badge-soft-success': data.status == 'Working',
                'badge-soft-danger': data.status == 'Closed' || data.status == 'Suspended',
              }">{{ data.status }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="noresult" style="display: none" :class="{ 'd-block': resultQuery.length == 0 }">
        <div class="text-center">
          <h5 class="mt-2">Sorry! No Result Found</h5>
          <p class="text-muted mb-0">
            We've searched more than 150+ Tickets We did not find any
            Tickets for you search.
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

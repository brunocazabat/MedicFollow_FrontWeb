<script>
export default {
  name: "TableAdminBug",
  data() {
    return {
      title: "Orgs List",
      searchQuery: null,
      page: 1,
      perPage: 9,
      pages: [],
      orgsList: [
        {
          id: "#MDFDP- 01",
          title: "D- Rodolph Brice",
          usertype: "Docteur",
          servicetype: "Dermato",
          create: "08 Dec, 2021",
          status: "InVacation",
        },
        {
          id: "#MDFDP- 02",
          title: "P- Francis Valériane",
          usertype: "(Personnel) Infirmière",
          servicetype: "Dermato",
          create: "24 Oct, 2021",
          status: "New",
        },
        {
          id: "#MDFDP- 03",
          title: "D- Grégoire Grégory",
          usertype: "Docteur",
          servicetype: "Gastro",
          create: "17 Oct, 2021",
          status: "Working",
        },
        {
          id: "#MDFDP- 04",
          title: "P- Barnabé Ambre",
          usertype: "(Personnel) Infirmière",
          servicetype: "Gastro",
          create: "03 Oct, 2021",
          status: "Suspended",
        },
        {
          id: "#MDFDP- 05",
          title: "P- Séraphine Jade",
          usertype: "(Personnel) Infirmière",
          servicetype: "Dermato",
          create: "09 Oct, 2021",
          status: "Waiting",
        },
        {
          id: "#MDFDP- 06",
          title: "D- Thibaud Serge",
          usertype: "Docteur",
          servicetype: "Gastro",
          create: "27 Oct, 2021",
          status: "InVacation",
        },
        {
          id: "#MDFDP- 07",
          title: "D- Marie-Thérèse Cécilia",
          usertype: "Docteur",
          servicetype: "Allergo",
          create: "05 Oct, 2021",
          status: "Waiting",
        },
        {
          id: "#MDFDP- 08",
          title: "D- Prune Monique",
          usertype: "Docteur",
          servicetype: "Allergo",
          create: "09 Dec, 2021",
          status: "Working",
        },
        {
          id: "#MDFDP- 09",
          title: "P- Rosalie Sixtine",
          usertype: "(Personnel) Infirmière",
          servicetype: "Allergo",
          create: "24 Dec, 2021",
          status: "Working",
        },
        {
          id: "#MDFDP- 10",
          title: "P- Émilienne Marise",
          usertype: "(Personnel) Infirmière",
          servicetype: "Général",
          create: "04 Oct, 2021",
          status: "New",
        },
        {
          id: "#MDFDP- 11",
          title: "D- Valériane Clair",
          usertype: "Docteur",
          servicetype: "Général",
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
    <div class="table-responsive table-card mb-0">
      <table class="table align-middle table-nowrap mb-0">
        <caption></caption>
        <thead>
          <tr>
            <th class="sort" id="" data-sort="id">ID:</th>
            <th class="sort" id="" data-sort="tasks_name">Nom du Docteur/Personnel:</th>
            <th class="sort" id="" data-sort="user_type">Type d'Utilisateurs:</th>
            <th class="sort" id="" data-sort="service_type">Service:</th>
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
            <td class="user_type">{{ data.servicetype }}</td>
            <td class="create_date">{{ data.create }}</td>
            <td class="status">
              <span class="badge text-uppercase" :class="{
                'badge-soft-warning': data.status == 'Waiting' || data.status == 'InVacation',
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

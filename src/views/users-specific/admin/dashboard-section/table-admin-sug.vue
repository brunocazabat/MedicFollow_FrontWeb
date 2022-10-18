<script>
export default {
  name: "TableAdminBug",
  data() {
    return {
      title: "Sugs List",
      searchQuery: null,
      page: 1,
      perPage: 7,
      pages: [],
      sugsList: [
        {
          id: "#MDFS- 01",
          title: "S- Changement de la couleur du bouton !",
          usertype: "Docteur",
          create: "08 Dec, 2021",
          status: "Opened",
        },
        {
          id: "#MDFS- 02",
          title: "S- Changement du format de la page !",
          usertype: "Patient",
          create: "24 Oct, 2021",
          status: "New",
        },
        {
          id: "#MDFS- 03",
          title: "S- Modification de la page de connexion !",
          usertype: "Proche",
          create: "17 Oct, 2021",
          status: "Rejected",
        },
        {
          id: "#MDFS- 04",
          title: "S- Adaptation de la page d'accueil !",
          usertype: "Docteur",
          create: "03 Oct, 2021",
          status: "Open",
        },
        {
          id: "#MDFS- 05",
          title: "S- Changement des traductions !",
          usertype: "Organisation",
          create: "09 Oct, 2021",
          status: "Accepted",
        },
        {
          id: "#MDFS- 06",
          title: "S- Adaptation du thème sombre !",
          usertype: "Confiance",
          create: "27 Oct, 2021",
          status: "Opened",
        },
        {
          id: "#MDFS- 07",
          title: "S- Correction d'une faute d'orthographe !",
          usertype: "Organisation",
          create: "05 Oct, 2021",
          status: "New",
        },
        {
          id: "#MDFS- 08",
          title: "S- Suggestion 8",
          usertype: "Docteur",
          create: "09 Dec, 2021",
          status: "Opened",
        },
        {
          id: "#MDFS- 09",
          title: "S- Suggestion 9",
          usertype: "Patient",
          create: "24 Dec, 2021",
          status: "Opened",
        },
        {
          id: "#MDFS- 10",
          title: "S- Suggestion 10",
          usertype: "Proche",
          create: "04 Oct, 2021",
          status: "New",
        },
        {
          id: "#MDFS- 11",
          title: "S- Suggestion 11",
          usertype: "Proche",
          create: "21 Dec, 2021",
          status: "Opened",
        },
      ],
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.sugsList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.title.toLowerCase().includes(search) ||
            data.usertype.toLowerCase().includes(search) ||
            data.assigned.toLowerCase().includes(search) ||
            data.create.toLowerCase().includes(search) ||
            data.due.toLowerCase().includes(search) ||
            data.status.toLowerCase().includes(search) ||
            data.priority.toLowerCase().includes(search)
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
      let numberOfPages = Math.ceil(this.sugsList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(sugsList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return sugsList.slice(from, to);
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
            <th class="sort" id="" data-sort="tasks_name">Intitulé de la Suggestion:</th>
            <th class="sort" id="" data-sort="user_type">Générer par:</th>
            <th class="sort" id="" data-sort="create_date">Crée le:</th>
            <th class="sort" id="" data-sort="status">Status:</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr v-for="(data, index) of resultQuery" :key="index">
            <td class="id">
              <router-link to="/admin/see-reports" class="fw-medium link-primary">{{ data.id }}</router-link>
            </td>
            <td class="tasks_name">
              {{ data.title }}
            </td>
            <td class="user_type">{{ data.usertype }}</td>
            <td class="create_date">{{ data.create }}</td>
            <td class="status">
              <span class="badge text-uppercase" :class="{
                'badge-soft-warning': data.status == 'Opened',
                'badge-soft-info': data.status == 'New',
                'badge-soft-success': data.status == 'Open',
                'badge-soft-danger': data.status == 'Accepted' || data.status == 'Rejected',
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

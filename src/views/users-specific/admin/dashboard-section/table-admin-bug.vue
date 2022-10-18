<script>
export default {
  name: "TableAdminBug",
  data() {
    return {
      title: "Bugs List",
      searchQuery: null,
      page: 1,
      perPage: 7,
      pages: [],
      bugsList: [
        {
          id: "#MDFBR- 01",
          title: "BR- Résumé patient non complet !",
          usertype: "Docteur",
          assigned: "Admin",
          create: "08 Dec, 2021",
          status: "Open",
          priority: "High",
        },
        {
          id: "#MDFBR- 02",
          title: "BR- Bouton de suppression non fonctionnel !",
          usertype: "Patient",
          assigned: "Admin",
          create: "24 Oct, 2021",
          status: "Inprogress",
          priority: "Low",
        },
        {
          id: "#MDFBR- 03",
          title: "BR- bouton de modification non fonctionnel !",
          usertype: "Proche",
          assigned: "Admin",
          create: "17 Oct, 2021",
          status: "New",
          priority: "Medium",
        },
        {
          id: "#MDFBR- 04",
          title: "BR- Entrée de données invisible !",
          usertype: "Docteur",
          assigned: "Admin",
          create: "03 Oct, 2021",
          status: "Open",
          priority: "High",
        },
        {
          id: "#MDFBR- 05",
          title: "BR- Connexion impossible !",
          usertype: "Organisation",
          assigned: "Admin",
          create: "09 Oct, 2021",
          status: "Closed",
          priority: "Medium",
        },
        {
          id: "#MDFBR- 06",
          title: "BR- Changement de mot de passe impossible !",
          usertype: "Confiance",
          assigned: "Admin",
          create: "27 Oct, 2021",
          status: "Open",
          priority: "High",
        },
        {
          id: "#MDFBR- 07",
          title: "BR- Demande de réinitialisation de mot de passe impossible !",
          usertype: "Organisation",
          assigned: "Admin",
          create: "05 Oct, 2021",
          status: "New",
          priority: "Low",
        },
        {
          id: "#MDFBR- 08",
          title: "BR- Bug Report 8",
          usertype: "Docteur",
          assigned: "Admin",
          create: "09 Dec, 2021",
          status: "Open",
          priority: "Medium",
        },
        {
          id: "#MDFBR- 09",
          title: "BR- Bug Report 9",
          usertype: "Patient",
          assigned: "Admin",
          create: "24 Dec, 2021",
          status: "Open",
          priority: "High",
        },
        {
          id: "#MDFBR- 10",
          title: "BR- Bug Report 10",
          usertype: "Proche",
          assigned: "Admin",
          create: "04 Oct, 2021",
          status: "New",
          priority: "Low",
        },
        {
          id: "#MDFBR- 11",
          title: "BR- Bug Report 11",
          usertype: "Proche",
          assigned: "Admin",
          create: "21 Dec, 2021",
          status: "Open",
          priority: "Medium",
        },
      ],
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.bugsList);
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
      let numberOfPages = Math.ceil(this.bugsList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(bugsList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return bugsList.slice(from, to);
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
            <th class="sort" id="" data-sort="tasks_name">Intitulé du Bug Report:</th>
            <th class="sort" id="" data-sort="user_type">Générer par:</th>
            <th class="sort" id="" data-sort="assignedto">Assigné à:</th>
            <th class="sort" id="" data-sort="create_date">Crée le:</th>
            <th class="sort" id="" data-sort="status">Status:</th>
            <th class="sort" id="" data-sort="priority">Priorité:</th>
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
            <td class="assignedto">{{ data.assigned }}</td>
            <td class="create_date">{{ data.create }}</td>
            <td class="status">
              <span class="badge text-uppercase" :class="{
                'badge-soft-warning': data.status == 'Inprogress',
                'badge-soft-info': data.status == 'New',
                'badge-soft-success': data.status == 'Open',
                'badge-soft-danger': data.status == 'Closed',
              }">{{ data.status }}</span>
            </td>
            <td class="priority">
              <span class="badge text-uppercase" :class="{
                'bg-danger': data.priority == 'High',
                'bg-success': data.priority == 'Low',
                'bg-warning': data.priority == 'Medium',
              }">{{ data.priority }}</span>
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

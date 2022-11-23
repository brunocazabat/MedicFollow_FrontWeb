<script>
import { CountTo } from "vue3-count-to";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "@/components/view-related/layout/main.vue";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      config: {
        enableTime: false,
        dateFormat: "d M, Y",
      },
      date: null,
      date1: null,
      date2: null,
      searchQuery: null,
      page: 1,
      perPage: 8,
      pages: [],
      orgasList: [
        {
          id: "#MDFP- 01",
          fname: "Talbot",
          pname: "Bouchard",
          secu: "1511032583975 10",
          birth: "October 18, 1951",
          email: "TalbotBouchard@outlook.com",
          create: "08 Dec, 2021",
          status: "New",
        },
        {
          id: "#MDFP- 02",
          fname: "Desilets",
          pname: "Telford",
          secu: "1440198155099 18",
          birth: "January 31, 1944",
          email: "TelfordDesilets@outlook.com",
          create: "24 Oct, 2021",
          status: "New",
        },
        {
          id: "#MDFP- 03",
          fname: "Evrard",
          pname: "Beaudouin",
          secu: "1810805187616 30",
          birth: "August 18, 1981",
          email: "EvrardBeaudouin@gmail.com",
          create: "17 Oct, 2021",
          status: "Normal",
        },
        {
          id: "#MDFP- 04",
          fname: "Odo",
          pname: "Jomphe",
          secu: "1760952051134 92",
          birth: "September 12, 1976",
          email: "OdoJomphe@orange.com",
          create: "03 Oct, 2021",
          status: "Closed",
        },
        {
          id: "#MDFP- 05",
          fname: "Grandpré ",
          pname: "Orva",
          secu: "2580714522257 81",
          birth: "July 5, 1958",
          email: "OrvaGrandpre@orange.com",
          create: "09 Oct, 2021",
          status: "Waiting",
        },
        {
          id: "#MDFP- 06",
          fname: "Duclos",
          pname: "Gustave",
          secu: "1710988002089 07",
          birth: "September 4, 1971",
          email: "GustaveDuclos@orange.com",
          create: "27 Oct, 2021",
          status: "Normal",
        },
        {
          id: "#MDFP- 07",
          fname: "Giroux",
          pname: "Melusina",
          secu: "2380170805627 02",
          birth: "January 15, 1938",
          email: "MelusinaGiroux@yahoo.com",
          create: "05 Oct, 2021",
          status: "Waiting",
        },
        {
          id: "#MDFP- 08",
          fname: "Bolduc",
          pname: "Tabor",
          secu: "1840852088002 64",
          birth: "August 16, 1984",
          email: "TaborBolduc@orange.com",
          create: "09 Dec, 2021",
          status: "Normal",
        },
        {
          id: "#MDFP- 09",
          fname: "Tardif",
          pname: "Germaine",
          secu: "2760764737040 55",
          birth: "July 2, 1976",
          email: "GermaineTardif@gmail.com",
          create: "24 Dec, 2021",
          status: "Normal",
        },
        {
          id: "#MDFP- 10",
          fname: "Chesnay",
          pname: "Channing",
          secu: "1920254177490 50",
          birth: "February 12, 1992",
          email: "hanningChesnay@yahoo.com",
          create: "04 Oct, 2021",
          status: "New",
        },
        {
          id: "#MDFP- 11",
          fname: "L'Angelier",
          pname: "Brice",
          secu: "1760798741721 35",
          birth: "July 9, 1976",
          email: "BriceLAngelier@yahoo.com",
          create: "21 Dec, 2021",
          status: "Normal",
        },
      ],
    };
  },
  components: {
    Layout,
    CountTo,
    Multiselect,
    flatPickr,
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.orgasList);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.fname.toLowerCase().includes(search) ||
            data.pname.toLowerCase().includes(search) ||
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
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  methods: {
    editdata(data) {
      document.getElementById("modal-id").style.display = "block";
      document.getElementById("exampleModalLabel").innerHTML = "Edit Ticket";
      document.getElementById("orderId").value = data.id;
      document.getElementById("fnameInput").value = data.fname;
      document.getElementById("pnameInput").value = data.pname;
      document.getElementById("emailInput").value = data.email;
      document.getElementById("bdateInput").value = data.birth;
      document.getElementById("secuInput").value = data.secu;
      document.getElementById("cdate").value = data.create;
      document.getElementById("ticketstatus").value = data.status;

      document.getElementById("edit-btn").style.display = "block";
      document.getElementById("add-btn").style.display = "none";
    },
    updateorder() {
      let result = this.orgasList.findIndex(
        (o) => o.id == document.getElementById("orderId").value
      );
      this.orgasList[result].fname =
        document.getElementById("fnameInput").value;
      this.orgasList[result].pname =
        document.getElementById("pnameInput").value;
      this.orgasList[result].client =
        document.getElementById("secuInput").value;
      this.orgasList[result].email =
        document.getElementById("emailInput").value;
      this.orgasList[result].birth =
        document.getElementById("bdateInput").value;
      this.orgasList[result].create = document.getElementById("cdate").value;
      this.orgasList[result].status =
        document.getElementById("ticketstatus").value;

      document.getElementById("closemodal").click();
    },
    deletedata(event) {
      Swal.fire({
        title: "Êtes-vous sûr?",
        text: "Vous ne pourrez pas revenir en arrière.",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Oui, supprimez-le.",
      }).then((result) => {
        if (result.value) {
          this.orgasList.splice(this.orgasList.indexOf(event), 1);
          Swal.fire("Supprimé !", "Votre patient a été supprimé.", "Succès");
        }
      });
    },
    deleteMultiple() {
      let ids_array = [];
      let items = document.getElementsByName("chk_child");
      items.forEach(function (ele) {
        if (ele.checked) {
          let trNode = ele.parentNode.parentNode.parentNode;
          let id = trNode.querySelector(".id a").innerHTML;
          ids_array.push(id);
        }
      });
      if (typeof ids_array !== "undefined" && ids_array.length > 0) {
        if (confirm("Êtes-vous sûr de vouloir supprimer ceci ?")) {
          let cusList = this.orgasList;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (orders) {
              return orders.id != id;
            });
          });
          this.orgasList = cusList;
          document.getElementById("checkAll").checked = false;
          let itemss = document.getElementsByName("chk_child");
          itemss.forEach(function (ele) {
            if (ele.checked) {
              ele.checked = false;
              ele.closest("tr").classList.remove("table-active");
            }
          });
        } else {
          return false;
        }
      } else {
        Swal.fire({
          title: "Veuillez cocher au moins une case",
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false,
          showCloseButton: true,
        });
      }
    },
    addorder() {
      let id = "#MDFP- " + (this.orgasList.length + 1);
      let fname = document.getElementById("fnameInput").value;
      let pname = document.getElementById("fnameInput").value;
      let secu = document.getElementById("secuInput").value;
      let birth = document.getElementById("bdateInput").value;
      let email = document.getElementById("emailInput").value;
      let create = document.getElementById("cdate").value;
      let status = document.getElementById("ticketstatus").value;

      let data = {
        id: id,
        fname: fname,
        pname: pname,
        secu: secu,
        birth: birth,
        email: email,
        create: create,
        status: status,
      };
      this.orgasList.push(data);

      document.getElementById("closemodal").click();
      document.getElementById("addform").reset();
    },
    addnew() {
      document.getElementById("addform").reset();
      document.getElementById("modal-id").style.display = "none";
      document.getElementById("exampleModalLabel").innerHTML = "Add Ticket";
      document.getElementById("add-btn").style.display = "block";
      document.getElementById("edit-btn").style.display = "none";
    },
    setPages() {
      let numberOfPages = Math.ceil(this.orgasList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(orgasList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return orgasList.slice(from, to);
    },
  },
  mounted() {
    let checkAll = document.getElementById("checkAll");
    if (checkAll) {
      checkAll.onclick = function () {
        let checkboxes = document.querySelectorAll(
          '.form-check-all input[type="checkbox"]'
        );
        if (checkAll.checked) {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
            checkbox.closest("tr").classList.add("table-active");
          });
        } else {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            checkbox.closest("tr").classList.remove("table-active");
          });
        }
      };
    }
  },
};
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-xxl-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">
                  Nombre Total de Patients.
                </p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to
                    :duration="1000"
                    :startVal="0"
                    :endVal="95"
                  ></count-to>
                  au total.
                </h2>
                <p class="mb-0 text-muted">
                  <span class="badge bg-light text-success mb-0">
                    <em class="ri-arrow-up-line align-middle"></em> TBD %
                  </span>
                  vs. previous month
                </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span
                    class="avatar-title bg-soft-info text-info rounded-circle fs-4"
                  >
                    <em class="mdi mdi-account-check-outline"></em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card-->
      </div>
      <!--end col-->
      <div class="col-xxl-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">
                  Patients en attente d'acceptation.
                </p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to
                    :duration="1000"
                    :startVal="0"
                    :endVal="25"
                  ></count-to>
                  en attente.
                </h2>
                <p class="mb-0 text-muted">
                  <span class="badge bg-light text-success mb-0">
                    <em class="ri-arrow-up-line align-middle"></em> TBD %
                  </span>
                  vs. previous month
                </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span
                    class="avatar-title bg-soft-info text-info rounded-circle fs-4"
                  >
                    <em class="mdi mdi-account-plus-outline"></em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- end card body -->
        </div>
      </div>
      <!--end col-->
      <div class="col-xxl-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">
                  Patients en attente de modifications.
                </p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to
                    :duration="1000"
                    :startVal="0"
                    :endVal="10"
                  ></count-to>
                  en attente.
                </h2>
                <p class="mb-0 text-muted">
                  <span class="badge bg-light text-success mb-0">
                    <em class="ri-arrow-up-line align-middle"></em> TBD %
                  </span>
                  vs. previous month
                </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span
                    class="avatar-title bg-soft-info text-info rounded-circle fs-4"
                  >
                    <em class="mdi mdi-account-edit-outline"></em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- end card body -->
        </div>
      </div>
      <!--end col-->
      <div class="col-xxl-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <p class="fw-medium text-muted mb-0">
                  Patients en attente de suppression.
                </p>
                <h2 class="mt-4 ff-secondary fw-semibold">
                  <count-to
                    :duration="1000"
                    :startVal="0"
                    :endVal="15"
                  ></count-to>
                  en attente.
                </h2>
                <p class="mb-0 text-muted">
                  <span class="badge bg-light text-success mb-0">
                    <em class="ri-arrow-up-line align-middle"></em> TBD %
                  </span>
                  vs. previous month
                </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span
                    class="avatar-title bg-soft-info text-info rounded-circle fs-4"
                  >
                    <em class="mdi mdi-account-minus-outline"></em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- end card body -->
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <div class="row">
      <div class="col-lg-12">
        <div class="card" id="orgasList">
          <div class="card-header border-0">
            <div class="d-flex align-items-center">
              <h5 class="card-title mb-0 flex-grow-1">Gérer les Patients</h5>
              <div class="flex-shrink-0">
                <button
                  class="btn btn-soft-danger me-1"
                  @click="deleteMultiple"
                >
                  <em class="ri-delete-bin-2-line"></em>
                </button>
                <button
                  class="btn btn-danger add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#showModal"
                  @click="addnew"
                >
                  <em class="ri-add-line align-bottom me-1"></em> Créer un
                  nouveau patient
                </button>
              </div>
            </div>
          </div>
          <div
            class="card-body border border-dashed border-end-0 border-start-0"
          >
            <form>
              <div class="row g-3">
                <div class="col-xxl-5 col-sm-12">
                  <div class="search-box">
                    <input
                      type="text"
                      class="form-control search bg-light border-light"
                      placeholder="Chercher un patient ..."
                    />
                    <em class="ri-search-line search-icon"></em>
                  </div>
                </div>
                <!--end col-->

                <div class="col-xxl-3 col-sm-4">
                  <flat-pickr
                    v-model="date"
                    :config="config"
                    placeholder="Select date"
                    class="form-control bg-light border-light"
                  ></flat-pickr>
                </div>
                <!--end col-->

                <div class="col-xxl-3 col-sm-4">
                  <div class="input-light">
                    <Multiselect
                      v-model="date1"
                      :close-on-select="true"
                      :searchable="true"
                      :create-option="true"
                      :options="[
                        { value: '', label: 'Status' },
                        { value: 'All', label: 'All' },
                        { value: 'Open', label: 'Open' },
                        { value: 'Waiting', label: 'Waiting' },
                        { value: 'Closed', label: 'Closed' },
                        { value: 'New', label: 'New' },
                      ]"
                    />
                  </div>
                </div>
                <!--end col-->
                <div class="col-xxl-1 col-sm-4">
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    onclick="SearchData();"
                  >
                    <em class="ri-equalizer-fill me-1 align-bottom"></em>
                    Filtres
                  </button>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </form>
          </div>
          <!--end card-body-->
          <div class="card-body">
            <div class="table-responsive table-card mb-0">
              <table
                class="table align-middle table-nowrap mb-0"
                id="ticketTable"
              >
                <caption></caption>
                <thead>
                  <tr>
                    <th scope="col" style="width: 40px">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="checkAll"
                          value="option"
                        />
                      </div>
                    </th>
                    <th class="sort" id="" data-sort="id">ID:</th>
                    <th class="sort" id="" data-sort="tasks_name">
                      Nom de famille:
                    </th>
                    <th class="sort" id="" data-sort="user_type">Prénom:</th>
                    <th class="sort" id="" data-sort="create_date">
                      No. Sécurité Sociale:
                    </th>
                    <th class="sort" id="" data-sort="birthdate">
                      Date de naissance:
                    </th>
                    <th class="sort" id="" data-sort="email">Email:</th>
                    <th class="sort" id="" data-sort="create_date">Crée le:</th>
                    <th class="sort" id="" data-sort="create_date">Status:</th>
                    <th class="sort" id="" data-sort="action">Actions</th>
                  </tr>
                </thead>
                <tbody class="list form-check-all">
                  <tr v-for="(data, index) of resultQuery" :key="index">
                    <th scope="row">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="chk_child"
                          value="option1"
                        />
                      </div>
                    </th>
                    <td class="id">
                      <router-link
                        to="/apps/tickets-details"
                        class="fw-medium link-primary"
                        >{{ data.id }}</router-link
                      >
                    </td>
                    <td class="tasks_name">{{ data.fname }}</td>
                    <td class="user_type">{{ data.pname }}</td>
                    <td class="tasks_name">{{ data.secu }}</td>
                    <td class="tasks_name">{{ data.birth }}</td>
                    <td class="tasks_name">{{ data.email }}</td>
                    <td class="create_date">{{ data.create }}</td>
                    <td class="status">
                      <span
                        class="badge text-uppercase"
                        :class="{
                          'badge-soft-warning': data.status == 'Waiting',
                          'badge-soft-info': data.status == 'New',
                          'badge-soft-success': data.status == 'Normal',
                          'badge-soft-danger':
                            data.status == 'Closed' ||
                            data.status == 'Suspended',
                        }"
                        >{{ data.status }}</span
                      >
                    </td>
                    <td>
                      <div class="dropdown">
                        <button
                          class="btn btn-soft-secondary btn-sm dropdown"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <em class="ri-more-fill align-middle"></em>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li>
                            <a
                              class="dropdown-item edit-item-btn"
                              href="#showModal"
                              data-bs-toggle="modal"
                              @click="editdata(data)"
                            >
                              <em
                                class="ri-pencil-fill align-bottom me-2 text-muted"
                              ></em>
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item remove-item-btn"
                              @click="deletedata(data)"
                            >
                              <em
                                class="ri-delete-bin-fill align-bottom me-2 text-muted"
                              ></em>
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
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
                <a
                  class="page-item pagination-prev disabled"
                  href="#"
                  v-if="page != 1"
                  @click="page--"
                >
                  Previous
                </a>
                <ul class="pagination listjs-pagination mb-0">
                  <li
                    :class="{
                      active: pageNumber == page,
                      disabled: pageNumber == '...',
                    }"
                    v-for="(pageNumber, index) in pages.slice(
                      page - 1,
                      page + 5
                    )"
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
                  Next
                </a>
              </div>
            </div>

            <!-- Modal -->
            <div
              class="modal fade flip"
              id="deleteOrder"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body p-5 text-center">
                    <div class="mt-4 text-center">
                      <h4>You are about to delete a order ?</h4>
                      <p class="text-muted fs-14 mb-4">
                        Deleting your order will remove all of your information
                        from our database.
                      </p>
                      <div class="hstack gap-2 justify-content-center remove">
                        <button
                          class="btn btn-link link-success fw-medium text-decoration-none"
                          data-bs-dismiss="modal"
                        >
                          <em class="ri-close-line me-1 align-middle"></em>
                          Close
                        </button>
                        <button class="btn btn-danger" id="delete-record">
                          Yes, Delete It
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--end modal -->
          </div>
          <!--end card-body-->
        </div>
        <!--end card-->
      </div>
      <!--end col-->
    </div>
    <!--end row-->
    <div
      class="modal fade zoomIn"
      id="showModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0">
          <div class="modal-header p-3 bg-soft-info">
            <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="close-modal"
            ></button>
          </div>
          <form id="addform">
            <div class="modal-body">
              <div class="row g-3">
                <div class="col-lg-12">
                  <div id="modal-id">
                    <label for="orderId" class="form-label">ID</label>
                    <input
                      type="text"
                      id="orderId"
                      class="form-control"
                      placeholder="ID"
                      value="#MDC62"
                      readonly
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div>
                    <label for="fnameInput-field" class="form-label"
                      >Nom de Famille du Patient:</label
                    >
                    <input
                      type="text"
                      id="fnameInput"
                      class="form-control"
                      placeholder="Nom..."
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div>
                    <label for="fnameInput-field" class="form-label"
                      >Prenom du Patient:</label
                    >
                    <input
                      type="text"
                      id="fnameInput"
                      class="form-control"
                      placeholder="Prenom..."
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div>
                    <label for="secuInput-field" class="form-label"
                      >Numéro de Sécurité Sociale:</label
                    >
                    <input
                      type="text"
                      id="secuInput"
                      class="form-control"
                      placeholder="Numéro..."
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div>
                    <label for="bdateInput-field" class="form-label"
                      >Date de Naissance:</label
                    >
                    <flat-pickr
                      v-model="date2"
                      :config="config"
                      class="form-control bg-light border-light"
                      id="bdateInput"
                    >
                    </flat-pickr>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div>
                    <label for="emailInput-field" class="form-label"
                      >Email:</label
                    >
                    <input
                      type="text"
                      id="emailInput"
                      class="form-control"
                      placeholder="Email..."
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <label for="date-field" class="form-label">Crée le:</label>
                  <flat-pickr
                    v-model="date1"
                    :config="config"
                    class="form-control bg-light border-light"
                    id="cdate"
                  >
                  </flat-pickr>
                </div>
                <div class="col-lg-6">
                  <label for="ticket-status" class="form-label">Status:</label>
                  <select
                    class="form-control"
                    data-plugin="choices"
                    name="ticket-status"
                    id="ticketstatus"
                  >
                    <option value="">Status</option>
                    <option value="New">New</option>
                    <option value="Waiting">Waiting</option>
                    <option value="Closed">Closed</option>
                    <option value="Open">Open</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="hstack gap-2 justify-content-end">
                <button
                  type="button"
                  class="btn btn-light"
                  data-bs-dismiss="modal"
                  id="closemodal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-success"
                  id="add-btn"
                  @click="addorder"
                >
                  Add Ticket
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  id="edit-btn"
                  @click="updateorder"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

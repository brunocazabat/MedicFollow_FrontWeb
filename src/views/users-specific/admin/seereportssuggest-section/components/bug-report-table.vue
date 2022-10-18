<script>
import { CountTo } from "vue3-count-to";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Swal from "sweetalert2";

export default {
  data() {
    return {
      title: "Tickets List",
      config: {
        enableTime: false,
        dateFormat: "d M, Y",
      },
      date: null,
      date1: null,
      date2: null,
      searchQuery: null,
      page: 1,
      perPage: 9,
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
  components: {
    CountTo,
    Multiselect,
    flatPickr,
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
      document.getElementById("tasksTitle").value = data.title;
      document.getElementById("clientName").value = data.usertype;
      document.getElementById("assignedtoName").value = data.assigned;
      document.getElementById("cdate").value = data.create;
      document.getElementById("ticketstatus").value = data.status;
      document.getElementById("priority").value = data.priority;

      document.getElementById("edit-btn").style.display = "block";
      document.getElementById("add-btn").style.display = "none";
    },
    updateorder() {
      let result = this.bugsList.findIndex(
        (o) => o.id == document.getElementById("orderId").value
      );
      this.bugsList[result].title =
        document.getElementById("tasksTitle").value;
      this.bugsList[result].client =
        document.getElementById("clientName").value;
      this.bugsList[result].assigned =
        document.getElementById("assignedtoName").value;
      this.bugsList[result].create = document.getElementById("cdate").value;
      this.bugsList[result].status =
        document.getElementById("ticketstatus").value;
      this.bugsList[result].priority =
        document.getElementById("priority").value;

      document.getElementById("closemodal").click();
    },
    deletedata(event) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.bugsList.splice(this.bugsList.indexOf(event), 1);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
        if (confirm("Are you sure you want to delete this?")) {
          let cusList = this.bugsList;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (orders) {
              return orders.id != id;
            });
          });
          this.bugsList = cusList;
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
          title: "Please select at least one checkbox",
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false,
          showCloseButton: true,
        });
      }
    },
    addorder() {
      let id = "#MDC" + this.bugsList.length + 1;
      let title = document.getElementById("tasksTitle").value;
      let client = document.getElementById("clientName").value;
      let assigned = document.getElementById("assignedtoName").value;
      let create = document.getElementById("cdate").value;
      let status = document.getElementById("ticketstatus").value;
      let priority = document.getElementById("priority").value;

      let data = {
        id: id,
        title: title,
        client: client,
        assigned: assigned,
        create: create,
        status: status,
        priority: priority,
      };
      this.bugsList.push(data);

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
  <div class="row">
    <div class="col-xxl-3 col-sm-6">
      <div class="card card-animate">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Total Tickets</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="547"></count-to>k
              </h2>
              <p class="mb-0 text-muted">
                <span class="badge bg-light text-success mb-0">
                  <em class="ri-arrow-up-line align-middle"></em> 17.32 %
                </span>
                vs. previous month
              </p>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="ri-ticket-2-line"></em>
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
      <div class="card card-animate">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Pending Tickets</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="124"></count-to>k
              </h2>
              <p class="mb-0 text-muted">
                <span class="badge bg-light text-danger mb-0">
                  <em class="ri-arrow-down-line align-middle"></em> 0.96 %
                </span>
                vs. previous month
              </p>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="mdi mdi-timer-sand"></em>
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
      <div class="card card-animate">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Closed Tickets</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="107"></count-to>K
              </h2>
              <p class="mb-0 text-muted">
                <span class="badge bg-light text-danger mb-0">
                  <em class="ri-arrow-down-line align-middle"></em> 3.87 %
                </span>
                vs. previous month
              </p>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="ri-shopping-bag-line"></em>
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
      <div class="card card-animate">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <p class="fw-medium text-muted mb-0">Deleted Tickets</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="15"></count-to>%
              </h2>
              <p class="mb-0 text-muted">
                <span class="badge bg-light text-success mb-0">
                  <em class="ri-arrow-up-line align-middle"></em> 1.09 %
                </span>
                vs. previous month
              </p>
            </div>
            <div>
              <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-circle fs-4">
                  <em class="ri-delete-bin-line"></em>
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
      <div class="card" id="bugsList">
        <div class="card-header border-0">
          <div class="d-flex align-items-center">
            <h5 class="card-title mb-0 flex-grow-1">Bug Reports</h5>
            <div class="flex-shrink-0">
              <button class="btn btn-soft-danger me-1" @click="deleteMultiple">
                <em class="ri-delete-bin-2-line"></em>
              </button>
            </div>
          </div>
        </div>
        <div class="card-body border border-dashed border-end-0 border-start-0">
          <form>
            <div class="row g-3">
              <div class="col-xxl-5 col-sm-12">
                <div class="search-box">
                  <input type="text" class="form-control search bg-light border-light"
                    placeholder="Search for bug report details or something..." />
                  <em class="ri-search-line search-icon"></em>
                </div>
              </div>
              <!--end col-->

              <div class="col-xxl-3 col-sm-4">
                <flat-pickr v-model="date" :config="config" placeholder="Select date"
                  class="form-control bg-light border-light"></flat-pickr>
              </div>
              <!--end col-->

              <div class="col-xxl-3 col-sm-4">
                <div class="input-light">
                  <Multiselect v-model="date1" :close-on-select="true" :searchable="true" :create-option="true"
                    :options="[
                      { value: '', label: 'Status' },
                      { value: 'All', label: 'All' },
                      { value: 'Open', label: 'Open' },
                      { value: 'Inprogress', label: 'Inprogress' },
                      { value: 'Closed', label: 'Closed' },
                      { value: 'New', label: 'New' },
                    ]" />
                </div>
              </div>
              <!--end col-->
              <div class="col-xxl-1 col-sm-4">
                <button type="button" class="btn btn-primary w-100" onclick="SearchData();">
                  <em class="ri-equalizer-fill me-1 align-bottom"></em>
                  Filters
                </button>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </form>
        </div>
        <!--end card-body-->
        <div class="card-body">
          <div class="table-responsive table-card mb-4">
            <table class="table align-middle table-nowrap mb-0" id="ticketTable">
              <caption></caption>
              <thead>
                <tr>
                  <th scope="col" style="width: 40px">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="checkAll" value="option" />
                    </div>
                  </th>
                  <th class="sort" id="" data-sort="id">ID</th>
                  <th class="sort" id="" data-sort="tasks_name">Titre</th>
                  <th class="sort" id="" data-sort="user_type">Type d'Utilisateur</th>
                  <th class="sort" id="" data-sort="assignedto">Assigné à</th>
                  <th class="sort" id="" data-sort="create_date">Crée le</th>
                  <th class="sort" id="" data-sort="status">Status</th>
                  <th class="sort" id="" data-sort="priority">Priorité</th>
                  <th class="sort" id="" data-sort="action">Actions</th>
                </tr>
              </thead>
              <tbody class="list form-check-all">
                <tr v-for="(data, index) of resultQuery" :key="index">
                  <th scope="row">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" name="chk_child" value="option1" />
                    </div>
                  </th>
                  <td class="id">
                    <router-link to="/apps/tickets-details" class="fw-medium link-primary">{{ data.id }}</router-link>
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
                  <td>
                    <div class="dropdown">
                      <button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <em class="ri-more-fill align-middle"></em>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item edit-item-btn" href="#showModal" data-bs-toggle="modal"
                            @click="editdata(data)">
                            <em class="ri-pencil-fill align-bottom me-2 text-muted"></em>
                            Edit
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item remove-item-btn" @click="deletedata(data)">
                            <em class="ri-delete-bin-fill align-bottom me-2 text-muted"></em>
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
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

          <!-- Modal -->
          <div class="modal fade flip" id="deleteOrder" tabindex="-1" aria-hidden="true">
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
                      <button class="btn btn-link link-success fw-medium text-decoration-none" data-bs-dismiss="modal">
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
  <div class="modal fade zoomIn" id="showModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header p-3 bg-soft-info">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
        </div>
        <form id="addform">
          <div class="modal-body">
            <div class="row g-3">
              <div class="col-lg-12">
                <div id="modal-id">
                  <label for="orderId" class="form-label">ID</label>
                  <input type="text" id="orderId" class="form-control" placeholder="ID" value="#MDC62" readonly />
                </div>
              </div>
              <div class="col-lg-12">
                <div>
                  <label for="tasksTitle-field" class="form-label">Title</label>
                  <input type="text" id="tasksTitle" class="form-control" placeholder="Title" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div>
                  <label for="clientName-field" class="form-label">Utilisateur</label>
                  <input type="text" id="clientName" class="form-control" placeholder="User Type" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div>
                  <label for="assignedtoName-field" class="form-label">Assigned To</label>
                  <input type="text" id="assignedtoName" class="form-control" placeholder="Assigned to" required />
                </div>
              </div>
              <div class="col-lg-6">
                <label for="date-field" class="form-label">Create Date</label>

                <flat-pickr v-model="date1" :config="config" class="form-control bg-light border-light" id="cdate">
                </flat-pickr>
              </div>
              <div class="col-lg-6">
                <label for="ticket-status" class="form-label">Status</label>
                <select class="form-control" data-plugin="choices" name="ticket-status" id="ticketstatus">
                  <option value="">Status</option>
                  <option value="New">New</option>
                  <option value="Inprogress">Inprogress</option>
                  <option value="Closed">Closed</option>
                  <option value="Open">Open</option>
                </select>
              </div>
              <div class="col-lg-6">
                <label for="priority-field" class="form-label">Priority</label>
                <select class="form-control" data-plugin="choices" name="priority-field" id="priority">
                  <option value="">Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="hstack gap-2 justify-content-end">
              <button type="button" class="btn btn-light" data-bs-dismiss="modal" id="closemodal">
                Close
              </button>
              <button type="button" class="btn btn-success" id="edit-btn" @click="updateorder">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { CountTo } from "vue3-count-to";

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
      ticketsList: [
        {
          id: "#MDC01",
          title: "Error message when placing an orders?",
          usertype: "Docteur",
          assigned: "Admin",
          create: "08 Dec, 2021",
          status: "Open",
          priority: "High",
        },
        {
          id: "#MDC02",
          title: "Issue with finding information about order ?",
          usertype: "Patient",
          assigned: "Admin",
          create: "24 Oct, 2021",
          status: "New",
          priority: "Low",
        },
        {
          id: "#MDC03",
          title: "Apologize for shopping Error!",
          usertype: "Proche",
          assigned: "Admin",
          create: "17 Oct, 2021",
          status: "Open",
          priority: "Medium",
        },
        {
          id: "#MDC04",
          title: "Post launch reminder/ post list",
          usertype: "Docteur",
          assigned: "Admin",
          create: "03 Oct, 2021",
          status: "Open",
          priority: "High",
        },
        {
          id: "#MDC05",
          title: "Make a creating an account profile",
          usertype: "Organisation",
          assigned: "Admin",
          create: "09 Oct, 2021",
          status: "Open",
          priority: "Medium",
        },
        {
          id: "#MDC06",
          title: "Change email option process",
          usertype: "Confiance",
          assigned: "Admin",
          create: "27 Oct, 2021",
          status: "Open",
          priority: "High",
        },
        {
          id: "#MDC07",
          title: "User research",
          usertype: "Organisation",
          assigned: "Admin",
          create: "05 Oct, 2021",
          status: "New",
          priority: "Low",
        },
        {
          id: "#MDC08",
          title: "Banner design for FB & Twitter",
          usertype: "Docteur",
          assigned: "Admin",
          create: "09 Dec, 2021",
          status: "Open",
          priority: "Medium",
        },
        {
          id: "#MDC09",
          title: "Brand logo design",
          usertype: "Patient",
          assigned: "Admin",
          create: "24 Dec, 2021",
          status: "Open",
          priority: "High",
        },
        {
          id: "#MDC10",
          title: "Additional Calendar",
          usertype: "Proche",
          assigned: "Admin",
          create: "04 Oct, 2021",
          status: "New",
          priority: "Low",
        },
        {
          id: "#MDC11",
          title: "Edit customer testimonial",
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
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.ticketsList);
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
      document.getElementById("ddate").value = data.due;
      document.getElementById("ticketstatus").value = data.status;
      document.getElementById("priority").value = data.priority;

      document.getElementById("edit-btn").style.display = "block";
      document.getElementById("add-btn").style.display = "none";
    },
    updateorder() {
      let result = this.ticketsList.findIndex(
        (o) => o.id == document.getElementById("orderId").value
      );
      this.ticketsList[result].title =
        document.getElementById("tasksTitle").value;
      this.ticketsList[result].client =
        document.getElementById("clientName").value;
      this.ticketsList[result].assigned =
        document.getElementById("assignedtoName").value;
      this.ticketsList[result].create = document.getElementById("cdate").value;
      this.ticketsList[result].due = document.getElementById("ddate").value;
      this.ticketsList[result].status =
        document.getElementById("ticketstatus").value;
      this.ticketsList[result].priority =
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
          this.ticketsList.splice(this.ticketsList.indexOf(event), 1);
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
          let cusList = this.ticketsList;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (orders) {
              return orders.id != id;
            });
          });
          this.ticketsList = cusList;
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
      let id = "#MDC" + this.ticketsList.length + 1;
      let title = document.getElementById("tasksTitle").value;
      let client = document.getElementById("clientName").value;
      let assigned = document.getElementById("assignedtoName").value;
      let create = document.getElementById("cdate").value;
      let due = document.getElementById("ddate").value;
      let status = document.getElementById("ticketstatus").value;
      let priority = document.getElementById("priority").value;

      let data = {
        id: id,
        title: title,
        client: client,
        assigned: assigned,
        create: create,
        due: due,
        status: status,
        priority: priority,
      };
      this.ticketsList.push(data);

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
      let numberOfPages = Math.ceil(this.ticketsList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(ticketsList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return ticketsList.slice(from, to);
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
              <p class="fw-medium text-muted mb-0">Bugs Reports Ouverts</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="18"></count-to> à traiter.
              </h2>
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
              <p class="fw-medium text-muted mb-0">Signalements Ouverts</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="40"></count-to> à traiter.
              </h2>
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
              <p class="fw-medium text-muted mb-0">Organisations Enregistrées</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="5"></count-to>
              </h2>
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
              <p class="fw-medium text-muted mb-0">Action à réaliser</p>
              <h2 class="mt-4 ff-secondary fw-semibold">
                <count-to :duration="1000" :startVal="0" :endVal="58"></count-to> restantes.
              </h2>
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
      <div class="card" id="ticketsList">
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
</template>

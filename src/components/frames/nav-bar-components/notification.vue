<script>
import { SimpleBar } from "simplebar-vue3";
export default {
  name: "notification",
  components: { SimpleBar },
}
</script>

<template>
  <div class="dropdown topbar-head-dropdown ms-1 header-item">
    <button type="button" class="btn forceserif btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
      id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <em class="bx bx-bell fs-22"></em>
      <span class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
        0<span class="visually-hidden">unread messages</span></span>
    </button>
    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
      aria-labelledby="page-header-notifications-dropdown">
      <div class="dropdown-head bg-primary bg-pattern rounded-top">
        <div class="p-3">
          <div class="row align-items-center">
            <div class="col">
              <h6 class="m-0 fs-16 fw-semibold text-white">
                Notifications
              </h6>
            </div>
            <div class="col-auto dropdown-tabs">
              <span class="badge badge-soft-light fs-13"> 0 New</span>
            </div>
          </div>
        </div>

        <div class="px-2 pt-2">
          <ul class="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true" id="notificationItemsTab"
            role="tablist" auto-close="outside" @click.capture.stop>
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#all-noti-tab" role="tab" aria-selected="true">
                All (4)
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#messages-tab" role="tab" aria-selected="false">
                Messages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#alerts-tab" role="tab" aria-selected="false">
                Alerts
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content" id="notificationItemsTabContent">
        <div class="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
          <SimpleBar data-simplebar style="max-height: 300px" class="pe-2">
            <div class="text-reset notification-item d-block dropdown-item position-relative">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-1">
                  <a href="#!" class="stretched-link">
                    <h6 class="mt-0 mb-2 lh-base">
                      oui <strong>oui</strong>
                      <span class="text-secondary"> oui</span>
                    </h6>
                  </a>
                  <p class="forceserif mb-0 fs-11 fw-medium text-uppercase text-muted">
                    <span><em class="mdi mdi-clock-outline"></em> oui
                    </span>
                  </p>
                </div>
                <div class="px-2 fs-15">
                  <input class="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            <div class="text-reset notification-item d-block dropdown-item position-relative">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-1">
                  <a href="#!" class="stretched-link">
                    <h6 class="mt-0 mb-2 lh-base">
                      oui <strong>oui</strong>
                      <span class="text-secondary"> oui</span>
                    </h6>
                  </a>
                  <p class="forceserif mb-0 fs-11 fw-medium text-uppercase text-muted">
                    <span><em class="mdi mdi-clock-outline"></em> oui
                    </span>
                  </p>
                </div>
                <div class="px-2 fs-15">
                  <input class="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            <div class="text-reset notification-item d-block dropdown-item position-relative">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-1">
                  <a href="#!" class="stretched-link">
                    <h6 class="mt-0 mb-2 lh-base">
                      oui <strong>oui</strong>
                      <span class="text-secondary"> oui</span>
                    </h6>
                  </a>
                  <p class="forceserif mb-0 fs-11 fw-medium text-uppercase text-muted">
                    <span><em class="mdi mdi-clock-outline"></em> oui
                    </span>
                  </p>
                </div>
                <div class="px-2 fs-15">
                  <input class="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            <div class="text-reset notification-item d-block dropdown-item position-relative">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-1">
                  <a href="#!" class="stretched-link">
                    <h6 class="mt-0 mb-2 lh-base">
                      oui <strong>oui</strong>
                      <span class="text-secondary"> oui</span>
                    </h6>
                  </a>
                  <p class="forceserif mb-0 fs-11 fw-medium text-uppercase text-muted">
                    <span><em class="mdi mdi-clock-outline"></em> oui
                    </span>
                  </p>
                </div>
                <div class="px-2 fs-15">
                  <input class="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            <div class="my-3 text-center">
              <button type="button" class="btn forceserif btn-soft-success">
                View All Notifications
                <em class="ri-arrow-right-line align-middle"></em>
              </button>
            </div>
          </SimpleBar>
        </div>

        <div class="tab-pane fade py-2 ps-2" id="messages-tab" role="tabpanel" aria-labelledby="messages-tab">
          <SimpleBar data-simplebar style="max-height: 300px" class="pe-2">
            <div class="text-reset notification-item d-block dropdown-item">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-1">
                  <a href="#!" class="stretched-link">
                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                      Bruno Cazabat
                    </h6>
                  </a>
                  <div class="fs-13 text-muted">
                    <p class="forceserif mb-1">Oui.</p>
                  </div>
                  <p class="forceserif mb-0 fs-11 fw-medium text-uppercase text-muted">
                    <span><em class="mdi mdi-clock-outline"></em> oui</span>
                  </p>
                </div>
                <div class="px-2 fs-15">
                  <input class="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            <div class="text-reset notification-item d-block dropdown-item">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-1">
                  <a href="#!" class="stretched-link">
                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                      Bruno Cazabat
                    </h6>
                  </a>
                  <div class="fs-13 text-muted">
                    <p class="forceserif mb-1">Oui.</p>
                  </div>
                  <p class="forceserif mb-0 fs-11 fw-medium text-uppercase text-muted">
                    <span><em class="mdi mdi-clock-outline"></em> oui</span>
                  </p>
                </div>
                <div class="px-2 fs-15">
                  <input class="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            <div class="text-reset notification-item d-block dropdown-item">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-1">
                  <a href="#!" class="stretched-link">
                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                      Bruno Cazabat
                    </h6>
                  </a>
                  <div class="fs-13 text-muted">
                    <p class="forceserif mb-1">Oui.</p>
                  </div>
                  <p class="forceserif mb-0 fs-11 fw-medium text-uppercase text-muted">
                    <span><em class="mdi mdi-clock-outline"></em> oui</span>
                  </p>
                </div>
                <div class="px-2 fs-15">
                  <input class="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            <div class="text-reset notification-item d-block dropdown-item">
              <div class="d-flex">
                <img src="@/assets/images/users/avatar-1.png" class="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div class="flex-1">
                  <a href="#!" class="stretched-link">
                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                      Bruno Cazabat
                    </h6>
                  </a>
                  <div class="fs-13 text-muted">
                    <p class="forceserif mb-1">Oui.</p>
                  </div>
                  <p class="forceserif mb-0 fs-11 fw-medium text-uppercase text-muted">
                    <span><em class="mdi mdi-clock-outline"></em> oui</span>
                  </p>
                </div>
                <div class="px-2 fs-15">
                  <input class="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            <div class="my-3 text-center">
              <button type="button" class="btn forceserif btn-soft-success">
                View All Messages
                <em class="ri-arrow-right-line align-middle"></em>
              </button>
            </div>
          </SimpleBar>
        </div>
        <div class="tab-pane fade p-4" id="alerts-tab" role="tabpanel" aria-labelledby="alerts-tab">
          <div class="w-25 w-sm-50 pt-3 mx-auto">
            <img src="@/assets/images/svg/bell.svg" class="img-fluid" alt="user-pic" />
          </div>
          <div class="text-center pb-5 mt-2">
            <h6 class="fs-18 fw-semibold lh-base">
              Hey! You have no any notifications
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

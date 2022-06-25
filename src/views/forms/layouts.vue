<script>
import "flatpickr/dist/flatpickr.css";
import "@vueform/multiselect/themes/default.css";

import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Feedback",
    meta: [{ name: "description", content: appConfig.description }],
  },
  data() {
    return {
      title: "Feedback",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Feedback",
          active: true,
        },
      ],
      value: null,
      value1: null,
      value5: null,
      value2: null,
      value3: null,
      value4: null,
      config: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
      },
      date: null,
      date1: null,
      date3: null,
    };
  },
  components: {
    Layout,
    PageHeader
  },
  mounted() {
    const checkbox = document.getElementsByClassName("code-switcher");
    Array.from(checkbox).forEach((check) => {
      check.addEventListener("change", () => {
        const card = check.closest(".card");
        const preview = card.querySelector(".live-preview");
        const code = card.querySelector(".code-view");
        if (check.checked) {
          // do this
          preview.classList.add("d-none");
          code.classList.remove("d-none");
        } else {
          // do that
          preview.classList.remove("d-none");
          code.classList.add("d-none");
        }
      });
    });
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">


      <div class="col">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Feedback</h4>
            <div class="flex-shrink-0">
            </div>
          </div>
          <!-- end card header -->

          <div class="card-body">

            <div class="live-preview">
              <form action="javascript:void(0);" class="row g-3">

                <!-- Feedback message box -->
                <div class="mb-6">
                  <label for="VertimeassageInput" class="form-label">Message</label>
                  <textarea class="form-control" id="VertimeassageInput" rows="3" placeholder="Enter your feedback here"
                    required="true"></textarea>
                </div>

                <!-- Feedback category multiselect -->

                <!-- <div class="col-xxl-3 col-md-6">
                  <label for="categoryDataList" class="form-label">Category</label>
                  <input class="form-control" list="datalistOptions" id="categoryDataList"
                    placeholder="Select a category...">
                  <datalist id="datalistOptions">
                    <option value="Login Page" />
                    <option value="Home Page" />
                    <option value="Calendar Page" />
                    <option value="Chat Page" />
                    <option value="Settings Page" />
                    <option value="Feedback Page" />
                    <option value="Bug Report Page" />
                    <option value="Locked Login Page" />
                    <option value="Terms of Use" />
                  </datalist>
                </div> -->

                <div class="col-md-4">

                  <div class="col-auto">
                    <label for="chooseCategorSelect" class="form-label">Category</label>
                    <select class="form-select" id="chooseCategorSelect" required>
                      <option selected value="login">Login Page</option>
                      <option value="dashboard">Home Page</option>
                      <option value="calendar">Calendar Page</option>
                      <option value="chat">Chat Page</option>
                      <option value="settings">Settings Page</option>
                      <option value="feedback">Feedback Page</option>
                      <option value="bug">Bug Report Page</option>
                      <option value="locked">Locked Login Page</option>
                      <option value="tou">Terms of Use</option>
                    </select>
                  </div>
                </div>

                <!-- Anonymous text -->
                <p class="text-muted">
                  Leave this part of this form <span class="fw-medium">unfilled</span> if you want to send this report
                  anonymously, you could also fill only the information you wish to.
                </p>

                <!-- Full name box -->
                <div class="col-lg-4">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="fullnamefloatingInput"
                      placeholder="Enter your full name" />
                    <label for="fullnamefloatingInput">Full Name</label>
                  </div>
                </div>
                <!-- Email box -->
                <div class="col-lg-4">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="emailfloatingInput" placeholder="Enter your email" />
                    <label for="emailfloatingInput">Email</label>
                  </div>
                </div>
                <!-- Country box -->
                <div class="col-lg-4">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="countryfloatingInput"
                      placeholder="Enter your country" />
                    <label for="countryfloatingInput">Country</label>
                  </div>
                </div>

                <!-- Agree on ToU text -->
                <p class="text-muted">
                  By sending us a Feedback, you are agreeing on using our <span class="fw-medium">Terms of Use</span>.
                </p>
                <!-- Agree on ToU check box -->
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" required="true" />
                    <label class="form-check-label" for="gridCheck">
                      I have read and accepted the Terms of Use
                    </label>
                  </div>
                </div>

                <!-- Submit button -->
                <div class="col-12">
                  <div class="text-muted">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!--end row-->

  </Layout>
</template>

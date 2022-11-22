<script>
import Widgets from "./widgets.vue";

import dayjs from "dayjs";
import axios from "axios";
import {
  AuthGetters,
  PatientGetters,
} from "@/components/back-related/state/helpers";
import Swal from "sweetalert2";
import html2pdf from "html2pdf.js";

export default {
  components: {
    Widgets,
  },
  data() {
    return {
      lastCheckup: {
        date: null,
        time: null,
      },
      observationsArray: [],
    };
  },
  methods: {
    ...AuthGetters,
    ...PatientGetters,
    async getObservations() {
      // Constructing the request URL with patient uuid
      let url = "patient/" + this.getPatientUUID() + "/observation/";
      // Axios call to get the observations
      try {
        await axios
          .get(url, {
            headers: {
              token: this.gettoken().Token,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              this.observationsArray = response.data.observations;
            } else {
              Swal.fire({
                title: response.status + " - Erreur",
                text: "Une erreur est survenue lors de la récupération des observations",
                icon: "error",
                confirmButtonText: "Ok",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.$router.push("/docteur/dashboard");
                }
              });
            }
          });
      } catch (error) {
        // Error handling
        Swal.fire({
          title: "500 - Erreur Serveur",
          text: "Une erreur est survenue lors de la récupération des observations",
          icon: "error",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/docteur/dashboard");
          }
        });
      }
      // Sweet Alert if there is no observations
      if (this.observationsArray.length === 0) {
        Swal.fire({
          title: "Aucune observation",
          text: "Aucune observation n'a été trouvée pour ce patient",
          icon: "info",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push("/docteur/dashboard");
          }
        });
      }

      // Setting the last checkup date and time
      this.lastCheckup = {
        date: this.parseDate(this.observationsArray[0].date),
        time: this.parseHour(this.observationsArray[0].date),
      };
    },
    parseDate(date) {
      return dayjs(date).format("DD-MM-YYYY");
    },
    parseHour(date) {
      return dayjs(date).format("HH:mm");
    },
    // Method to display the four first letters of a string
    displayFirstFourLetters(string) {
      return string.substring(0, 4);
    },
    // Method to generate a PDF with observations
    // Method to generate a PDF with observations
    generatePDF() {
      html2pdf(document.getElementById("element-to-convert"), {
        margin: 1,
        // Filename is patient name + "observations" + today's date
        filename:
          this.getPatientLastname() +
          "_" +
          this.getPatientFirstname() +
          "_observations_" +
          dayjs().format("DD-MM-YYYY") +
          ".pdf",
      });
    },
  },
  async mounted() {
    window.scrollTo(0, 0);
    await this.getObservations();
  },
};
</script>

<template>
  <!-- TODO: Add the name of the person who sent the observation -->

  <div>
    <Widgets
      :lastVisitHour="lastCheckup.time"
      :lastVisitDate="lastCheckup.date"
    />

    <!-- RECENT MEDICAL VISITS -->
    <div class="col-xl-12">
      <div class="card">
        <div class="card-header align-items-center d-flex">
          <h4 class="card-title mb-0 flex-grow-1">
            {{ $t("t-recentvisits") }}
          </h4>
          <div class="flex-shrink-0">
            <button
              type="button"
              class="btn btn-soft-info btn-sm"
              :onClick="generatePDF"
            >
              <em class="ri-file-list-3-line align-middle"></em>
              {{ $t("t-generatereport") }}
            </button>
          </div>
        </div>
        <!-- end card header -->

        <div class="card-body">
          <div class="table-responsive table-card">
            <table
              class="table table-borderless table-centered align-middle table-nowrap mb-0"
              aria-label="Medical Visits Table"
            >
              <thead class="text-muted table-light">
                <tr>
                  <th scope="col" data-key="t-visitid">
                    {{ $t("t-visitid") }}
                  </th>
                  <th scope="col" data-key="t-staffname">
                    {{ $t("t-staffname") }}
                  </th>
                  <th scope="col" data-key="t-staffpos">
                    {{ $t("t-staffpos") }}
                  </th>
                  <th scope="col" data-key="t-date">{{ $t("t-date") }}</th>
                  <th scope="col" data-key="t-time">{{ $t("t-time") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(observation, index) in observationsArray"
                  :key="index"
                >
                  <td>
                    <a href="#" class="fw-medium link-primary text-uppercase"
                      >#{{ displayFirstFourLetters(observation.uuid) }}</a
                    >
                  </td>
                  <td>
                    <div class="flex-grow-1">
                      {{ observation.author.lastname.toUpperCase() }}
                      {{ observation.author.firstname }}
                    </div>
                  </td>
                  <td>
                    <div>Placeholder {{ observation.doctorPosition }}</div>
                  </td>
                  <td>
                    <div>
                      {{ parseDate(observation.date) }}
                    </div>
                  </td>
                  <td>
                    <div>
                      {{ parseHour(observation.date) }}
                    </div>
                  </td>
                </tr>
                <!-- end tr -->
              </tbody>
              <!-- end tbody -->
            </table>
            <!-- end table -->
          </div>
        </div>
      </div>
      <!-- .card-->
    </div>

    <div
      class="card card-body"
      v-for="(observations, index) in observationsArray"
      :key="index"
    >
      <h6 class="mb-3 fw-semibold text-uppercase">
        {{ $t("t-summary") }}
      </h6>
      <ul class="ps-4 vstack gap-2">
        <li>{{ observations.content }}</li>
      </ul>

      <div class="pt-3 border-top border-top-dashed mt-4">
        <div class="row">
          <div class="col-lg-4 col-sm-4">
            <div>
              <p class="mb-2 text-uppercase fw-medium">
                {{ $t("t-visitdate") }}:
              </p>
              <h5 class="fs-15 mb-0">{{ parseDate(observations.date) }}</h5>
            </div>
          </div>
          <div class="col-lg-4 col-sm-4">
            <div>
              <p class="mb-2 text-uppercase fw-medium">
                {{ $t("t-visittime") }}:
              </p>
              <h5 class="fs-15 mb-0">{{ parseHour(observations.date) }}</h5>
            </div>
          </div>
          <div class="col-lg-4 col-sm-4">
            <div>
              <p class="mb-2 text-uppercase fw-medium">{{ $t("t-author") }}:</p>
              <h5 class="fs-15 mb-0">
                {{ observations.author.lastname.toUpperCase() }}
                {{ observations.author.firstname }}
              </h5>
            </div>
          </div>

          <div class="pt-3 border-top border-top-dashed mt-4">
            <h6 class="mb-3 fw-semibold text-uppercase">
              {{ $t("t-ressources") }}:
            </h6>
            <div class="row g-3">
              <div class="col-xxl-6 col-lg-6">
                <div class="border rounded border-dashed p-2">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar-sm">
                        <div
                          class="avatar-title bg-light text-secondary rounded fs-24 shadow shadow"
                        >
                          <em class="ri-file-line"></em>
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <h5 class="fs-13 mb-1">
                        <a href="#" class="text-body text-truncate d-block"
                          >File placeholder</a
                        >
                      </h5>
                      <div>2.6MB</div>
                    </div>
                    <div class="flex-shrink-0 ms-2">
                      <div class="d-flex gap-1">
                        <button
                          type="button"
                          class="btn btn-icon text-muted btn-sm fs-18 shadow-none shadow-none"
                        >
                          <em class="ri-download-2-line"></em>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-6 col-lg-6">
                <div class="border rounded border-dashed p-2">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar-sm">
                        <div
                          class="avatar-title bg-light text-secondary rounded fs-24 shadow shadow"
                        >
                          <em class="ri-file-line"></em>
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <h5 class="fs-13 mb-1">
                        <a href="#" class="text-body text-truncate d-block"
                          >MedicFollow_Legal_Uses.pdf</a
                        >
                      </h5>
                      <div>2.4MB</div>
                    </div>
                    <div class="flex-shrink-0 ms-2">
                      <div class="d-flex gap-1">
                        <button
                          type="button"
                          class="btn btn-icon text-muted btn-sm fs-18 shadow-none shadow-none"
                        >
                          <em class="ri-download-2-line"></em>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

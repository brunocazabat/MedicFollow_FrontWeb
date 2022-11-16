<script>
import dayjs from "dayjs";

import { PatientSetters } from "@/components/back-related/state/helpers";

export default {
  props: {
    patientArray: {
      type: Array,
      required: true,
    },
  },
  name: "TableSelectPatient",
  data() {
    return {
      title: "Patients List",
      searchQuery: null,
      page: 1,
      perPage: 10,
      pages: [],
      patientsList: [
        {
          lName: "RIVERS",
          fName: "Joseph",
          socialSecNbr: "16506303017",
          dateOfBirth: "30/06/1965",
          create: "29 Sep, 2022",
        },
      ],
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.patientArray);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
            data.lName.toLowerCase().includes(search) ||
            data.fName.toLowerCase().includes(search) ||
            data.socialSecNbr.toLowerCase().includes(search) ||
            data.dateOfBirth.toLowerCase().includes(search) ||
            data.create.toLowerCase().includes(search)
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
    ...PatientSetters,
    setPages() {
      let numberOfPages = Math.ceil(this.patientsList.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(patientsList) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return patientsList.slice(from, to);
    },
    emitPatientInfo(patient) {
      this.setPatientUUID(patient.uuid);
      this.setPatientFirstname(patient.user.firstname);
      this.setPatientLastname(patient.user.lastname);
      this.setPatientDOB(patient.birth_date);
      this.setPatientSocialNumber(patient.unique_id);
      this.setPatientGender(patient.gender);
      this.setPatientEmail(patient.user.email);
      this.setPatientIsConscious(patient.conscious);
      this.$emit("buttonPressed");
    },

    // Method to parse the date
    parseDate(date) {
      return dayjs(date).format("DD/MM/YY");
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
            <th class="sort" id="" data-sort="id">{{ $t("t-lastname") }}:</th>
            <th class="sort" id="" data-sort="tasks_name">
              {{ $t("t-firstname") }}:
            </th>
            <th class="sort" id="" data-sort="user_type">
              {{ $t("t-socialsecuritynbr") }}:
            </th>
            <th class="sort" id="" data-sort="assignedto">
              {{ $t("t-dateofbirth") }}:
            </th>
            <th class="sort" id="" data-sort="create_date">
              {{ $t("t-created-at") }}:
            </th>
            <th>{{ $t("t-actions") }}:</th>
          </tr>
        </thead>
        <tbody class="list form-check-all">
          <tr v-for="(data, index) of resultQuery" :key="index">
            <td class="id">
              {{ data.user.lastname }}
            </td>
            <td class="tasks_name">
              {{ data.user.firstname }}
            </td>
            <td class="user_type">{{ data.unique_id }}</td>
            <td class="assignedto">{{ parseDate(data.birth_date) }}</td>
            <td class="create_date">{{ parseDate(data.createdAt) }}</td>
            <td>
              <button
                class="btn btn-primary"
                v-on:click="emitPatientInfo(data)"
              >
                {{ $t("t-consult-actions") }}
              </button>
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
          <h5 class="mt-2">{{ $t("t-no-patient-found") }}</h5>
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
          {{ $t("t-previous") }}
        </a>
        <ul class="pagination listjs-pagination mb-0">
          <li
            :class="{
              active: pageNumber == page,
              disabled: pageNumber == '...',
            }"
            v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)"
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
          {{ $t("t-next") }}
        </a>
      </div>
    </div>
  </div>
  <!--end card-body-->
</template>

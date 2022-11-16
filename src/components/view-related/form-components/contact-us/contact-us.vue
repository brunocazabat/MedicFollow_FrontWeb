<script>
// Genereal Imports
import Swal from "sweetalert2";

// Components Imports
import Recaptcha from "@/components/view-related/widgets/recaptchav2.vue";
import InputComponent from "@/components/view-related/input.vue";

export default {
  components: {
    Recaptcha,
    InputComponent,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    showSweetAlert() {
      // Contact us Sweet Alert
      Swal.fire({
        title: "Voulez-vous vraiment envoyer ce message?",
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, envoyer!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Envoyé!",
            text: "Votre message a été envoyé.",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/confiance/dashboard");
            }
          });
        }
      });
    },
  },
};
</script>

<template>
  <div class="p-2">
    <!-- EMAIL ADDRESS   -->
    <div class="mb-5">
      <div class="card background-darker">
        <div class="card-header">
          <em class="float-end text-primary me-2 ri-mail-line ri-2x"></em>
          <h3 class="card-title font-size-x-large">{{ $t("t-ouremail") }}:</h3>
          <p
            class="card-subtitle text-muted mb-2"
            data-key="t-emailanswerdelay"
          >
            {{ $t("t-emailanswerdelay") }}.
          </p>
        </div>
        <div class="card-body">
          <p class="font-size-medium">contact@medicfollow.fr</p>
        </div>
      </div>
    </div>

    <!-- PHONE NUMBER -->
    <div class="mb-5 background-darker">
      <div class="card">
        <div class="card-header">
          <em class="float-end text-primary me-2 ri-phone-line ri-2x"></em>
          <h3 class="card-title font-size-x-large">
            {{ $t("t-ourphonenbr") }} <strong>(SMS ONLY)</strong>:
          </h3>
          <p class="card-subtitle text-muted mb-2">
            {{ $t("t-onlyanswersms") }}
          </p>
        </div>
        <div class="card-body">
          <p class="font-size-medium">+33 7 64 85 22 23</p>
        </div>
      </div>
    </div>

    <!-- SEND US A MSESSAGE -->
    <div>
      <div class="card background-darker">
        <div class="card-header">
          <em class="float-end text-primary me-2 ri-chat-3-line ri-2x"></em>
          <h3 class="card-title font-size-x-large">
            {{ $t("t-sendusmessage") }}:
          </h3>
        </div>
        <div class="card-body">
          <InputComponent
            :placeholder="$t('t-write-here')"
            :required="true"
            v-model="message"
            :rows="4"
          />

          <div class="mb-2">
            <Recaptcha />
          </div>
          <button
            v-on:click="showSweetAlert"
            class="btn btn-primary col-sm-2 mb-2"
          >
            {{ $t("t-submit") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Making card background slightly darker than white */
.card {
  background-color: #f8f9fa !important;
}
</style>

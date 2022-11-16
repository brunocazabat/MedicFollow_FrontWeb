<script>
import store from "@/components/back-related/state/store";

export default {
  name: "PageHeader",
  methods: {
    activateheader() {
      return (
        store.getters["auth/getuserType"] == "admin" &&
        this.$route.path.includes("/dashboard")
      );
    },
    modifyUIType(value) {
      store.dispatch("auth/setUI", value);
    },
    showNotification(title, body, link) {
      const notification = new Notification(title, {
        body: body,
        icon: "https://avatars.githubusercontent.com/u/82113745?s=200&v=4",
      });
      notification.onclick = () => {
        window.location.href = link;
      };
    },
  },
};
</script>

<template>
  <!-- start page title -->
  <div class="row" v-if="activateheader()">
    <div class="col-12">
      <div class="page-title-box align-items-center">
        <div class="row">
          <div
            class="col-3"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
            "
          >
            <h4 class="mb-sm-0">DASHBOARD SELECTOR ADMIN</h4>
          </div>
          <div class="col-1">
            <RouterLink
              to="/admin/dashboard"
              class="btn btn-primary text-uppercase"
              @click="modifyUIType('admin')"
            >
              Admin Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink
              to="/organisation/dashboard"
              class="btn btn-primary text-uppercase"
              @click="modifyUIType('organisation')"
            >
              Organisation Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink
              to="/docteur/dashboard"
              class="btn btn-primary text-uppercase"
              @click="modifyUIType('docteur')"
            >
              Docteur Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink
              to="/personnel/dashboard"
              class="btn btn-primary text-uppercase"
              @click="modifyUIType('personnel')"
            >
              Personnel Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink
              to="/patient/dashboard"
              class="btn btn-primary text-uppercase"
              @click="modifyUIType('patient')"
            >
              Patient Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink
              to="/confiance/dashboard"
              class="btn btn-primary text-uppercase"
              @click="modifyUIType('confiance')"
            >
              Confiance Dashboard
            </RouterLink>
          </div>
          <div class="col-1">
            <RouterLink
              to="/proche/dashboard"
              class="btn btn-primary text-uppercase"
              @click="modifyUIType('proche')"
            >
              Proche Dashboard
            </RouterLink>
          </div>
          <div class="col-2">
            Notifs Tests:
            <button
              class="btn btn-dark"
              @click="
                showNotification(
                  'Mise à jour de la situation de votre proche',
                  'Veuillez consulter votre tableau de bord',
                  'https://medicfollow.fr/login'
                )
              "
            >
              1
            </button>
            <button
              class="btn btn-dark"
              @click="
                showNotification(
                  'Mise à jour des visuels du site web',
                  'Cliquer pour voir les nouveautés',
                  'https://medicfollow.fr'
                )
              "
            >
              2
            </button>
            <button
              class="btn btn-dark"
              @click="
                showNotification(
                  'Test de notification 3',
                  'Redirection vers google',
                  'https://google.fr'
                )
              "
            >
              3
            </button>
            <button
              class="btn btn-dark"
              @click="
                showNotification(
                  'Test de notification 4',
                  'Redirection vers Epitech eu',
                  'https://www.epitech.eu/fr/'
                )
              "
            >
              4
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

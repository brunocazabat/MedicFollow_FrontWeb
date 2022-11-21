<script>
import store from "@/components/back-related/state/store";

export default {
  name: "PageHeader",
  data() {
    return {
      AdminLinks: [
        {
          text: "Admin Dashboard",
          link: "/admin/dashboard",
          click: "admin",
        },
        {
          text: "Organisation Dashboard",
          link: "/organisation/dashboard",
          click: "organisation",
        },
        {
          text: "Docteur Dashboard",
          link: "/docteur/dashboard",
          click: "docteur",
        },
        {
          text: "Personnel Dashboard",
          link: "/personnel/dashboard",
          click: "personnel",
        },
        {
          text: "Patient Dashboard",
          link: "/patient/dashboard",
          click: "patient",
        },
        {
          text: "Confiance Dashboard",
          link: "/confiance/dashboard",
          click: "confiance",
        },
        {
          text: "Proche Dashboard",
          link: "/proche/dashboard",
          click: "proche",
        },
      ],
      NotifTests: [
        {
          text: "1",
          notifContent: "Mise à jour de la situation de votre proche",
          actionContent: "Veuillez consulter votre tableau de bord",
          linkContent: "https://medicfollow.fr/login",
        },
        {
          text: "2",
          notifContent: "Mise à jour des visuels du site web",
          actionContent: "Cliquer pour voir les nouveautés",
          linkContent: "https://medicfollow.fr",
        },
        {
          text: "3",
          notifContent: "Test de notification 3",
          actionContent: "Redirection vers google",
          linkContent: "https://google.fr",
        },
        {
          text: "4",
          notifContent: "Test de notification 4",
          actionContent: "Redirection vers Epitech eu",
          linkContent: "https://www.epitech.eu/fr/",
        },
      ],
    };
  },
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
          <div class="col-2 force-center">
            <h4 class="mb-sm-0">DASHBOARD SELECTOR ADMIN</h4>
          </div>
          <div class="col-1" v-for="items in AdminLinks" :key="items">
            <RouterLink
              :to="items.link"
              class="btn btn-primary"
              @click="modifyUIType(items.click)"
            >
              {{ items.text }}
            </RouterLink>
          </div>
          <div class="col-2 offset-1 force-center">
            Notifs Tests:
            <button
              class="btn btn-dark"
              v-for="items in NotifTests"
              :key="items"
              @click="
                showNotification(
                  items.notifContent,
                  items.actionContent,
                  items.linkContent
                )
              "
            >
              {{ items.text }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

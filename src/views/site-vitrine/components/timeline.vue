<script>
export default {
  name: "timeline",
};
</script>
  
<template>
  <div class="row">
    <div>
      <div class="timeline">
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-SEPT">{{ $t("t-SEPT") }} 2020</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Fondation de MedicFollow</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              Le projet MedicFollow a été fondé lors de la Piscine MoonShot 2020 à Epitech Marseille.
            </p>
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-OCT">{{ $t("t-OCT") }} 2020</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}MedicFollow à "L’Accélérateur M"</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              MedicFollow, ayant été élu le meilleur projet EIP à Epitech Marseille, a été désigné
              pour être présenté à
              "L’Accélérateur M", une association spécialisée dans l’aide et le soutien aux jeunes entreprises du
              territoire.</p>
            <!--end row-->
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-DEC">{{ $t("t-DEC") }} 2020</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Détermination des objectifs pour la bêta fermée</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              Le premier sprint "BRAINSTORMING" à permis à MedicFollow de développer de nouvelles ambitions et de
              nouveaux objectifs pour le futur du développement.
            </p>
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-JAN">{{ $t("t-JAN") }} 2021</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Sondage de MedicFollow en milieu médical</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              Recueil d'avis de la part de professionnels du milieu médical concernant la nécessité d'un outil pour
              faciliter la communication entre les proches et le personnel s'occupant du/des malade(s).
            </p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-MARS">{{ $t("t-MARS") }} 2021</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Début de la Bêta fermée<br />Création de la plateforme "Web" pour les
              particuliers</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              La première étape du développement de la Bêta fermée fut la création de la plateforme
              "web", accessible aux particuliers depuis n'importe quel navigateur internet.
            </p>
            <!--end row-->
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-AVRI">{{ $t("t-AVRI") }} 2021</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Création de la plateforme "Mobile"<br />Création des services "Back-End"
            </h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              Après la plateforme "web", notre deuxième objectif était de proposer les solutions de MedicFollow pour les
              particuliers sur "Mobile" également. Les services en arrière-plan pour l'exécution correcte des
              fonctionnalités de MedicFollow ont commencé à être
              développés.
            </p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-JUIL">{{ $t("t-JUIL") }} 2021</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Ajout d'une solution pour les professionnels à la plateforme "Web"</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              L'objectif principal étant de faire gagner du temps à notre personnel médical, notre plateforme "web" à
              reçu
              une mise à jour de contenu afin de permettre aux professionnels d'utiliser nos services avec plus
              d'aisance que les particuliers.
            </p>
            <!--end row-->
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-SEPT">{{ $t("t-SEPT") }} 2021</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Ajout de la fonctionnalité "Discussion" aux deux plateformes de MedicFollow
            </h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              L'atout principal pour faciliter la communication entre le personnel médical et les proches : mise en
              place du service de discussion.
            </p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-OCT">{{ $t("t-OCT") }} 2021</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Ajout de la fonctionnalité "Agenda" aux deux plateformes de MedicFollow</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              L'atout secondaire pour apporter une facilitée au quotidien de nos utilisateurs : mise en place du service
              de calendrier et de rappels intelligents.
            </p>
            <!--end row-->
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-DEC">{{ $t("t-DEC") }} 2021</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Version "Plan-Bêta" de MedicFollow en cours de développement</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              Après de nouveaux retours de la part du personnel médical suite à nos premiers tests de MedicFollow bêta,
              nous continuons d'améliorer nos fonctionnalités.
            </p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase" data-key="t-MAI">{{ $t("t-MAI") }} 2022</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}MedicFollow "Bêta" prêt au déploiement en milieu médical</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              Nos constantes améliorations en terme de sécurité et en richesses de fonctionnalités nous permettent dès
              maintenant de fournir une suite de logiciels adaptés au public pour des fins de tests.
            </p>
            <!--end row-->
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase">Q2 2022</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Sprint "Consolidation" de MedicFollow</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              La solution MedicFollow commence à prendre forme. Nous avons recruté des bêtas testeurs pour recueillir
              les premières impressions et valider notre parcours utilisateur.
            </p>
          </div>
        </div>
        <div class="timeline-item left">
          <em class="icon ri-arrow-left-circle-line"></em>
          <div class="date text-uppercase">Q3 2022</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Sprint "Lancement & Métriques" de MedicFollow</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              Les retours de nos bêtas testeurs nous ont permis d'identifier des axes d'amélioration. Nous
              travaillons à l'amélioration de la solution en écoutant nos testeurs.
            </p>
            <!--end row-->
          </div>
        </div>
        <div class="timeline-item right">
          <em class="icon ri-arrow-right-circle-line"></em>
          <div class="date text-uppercase" data-key="t-JAN">{{ $t("t-JAN") }} 2023</div>
          <div class="content">
            <h5 data-key="t-">{{ $t("t-") }}Présentation aux Epitech Expériences de MedicFollow</h5>
            <p class="text-muted text-justify" data-key="t-">{{ $t("t-") }}
              Présentation du projet à "l'Epitech Expérience" devant un jury de professionnels et d'étudiants.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faq',
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5">
          <h1 class="mb-3 ff-secondary fw-semibold lh-base text-uppercase text-success text-center">FAQ</h1>
          <h4 class="mb-3 fw-semibold">
            Si vous ne trouvez pas de réponse à votre question dans notre FAQ,<br />vous pouvez toujours
            nous contactez ou nous envoyer un e-mail.<br />Nous vous répondrons sous peu!
          </h4>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row g-lg-5 g-4">
      <div class="col-lg-6">
        <div class="d-flex align-items-center mb-2">
          <div class="flex-shrink-0 me-1">
            <em class="ri-question-line fs-24 align-middle text-success me-1"></em>
          </div>
          <div class="flex-grow-1">
            <h5 class="mb-0 fw-semibold">Questions Générales</h5>
          </div>
        </div>
        <div class="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
          id="genques-accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseOne" aria-expanded="false" aria-controls="genques-collapseOne">
                Qu’est-ce qu’une FAQ ?
              </button>
            </h2>
            <div id="genques-collapseOne" class="accordion-collapse collapse" aria-labelledby="genques-headingOne"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary">
                La FAQ (Frequently Asked Questions), également nommée « Foire Aux Questions », est une liste de réponses
                aux questions les plus fréquemment posées.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseTwo" aria-expanded="false" aria-controls="genques-collapseTwo">
                Qu'est-ce que MedicFollow et comment ça marche ?
              </button>
            </h2>
            <div id="genques-collapseTwo" class="accordion-collapse collapse" aria-labelledby="genques-headingTwo"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary">
                Medicfollow, c'est une plateforme en cours de développement, qui sera disponible sur mobile et web dans
                le but de faciliter la communication entre le personnel médical et les familles des patients.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseThree" aria-expanded="false" aria-controls="genques-collapseThree">
                Dans quels pays puis-je utiliser MedicFollow ?
              </button>
            </h2>
            <div id="genques-collapseThree" class="accordion-collapse collapse" aria-labelledby="genques-headingThree"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary">
                Medicfollow sera disponible en France uniquement pour l'instant. Prochainement en Europe.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseFour" aria-expanded="false" aria-controls="genques-collapseFour">
                Combien coûte MedicFollow ?
              </button>
            </h2>
            <div id="genques-collapseFour" class="accordion-collapse collapse" aria-labelledby="genques-headingFour"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary">
                Medicfollow est gratuit à l'utilisation pour les particuliers. Pour les professionnels de santé et les
                organisations médicales, il y aura un abonnement mensuel.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseFive" aria-expanded="false" aria-controls="genques-collapseFive">
                Quelles sont les langues prises en charge par MedicFollow ?
              </button>
            </h2>
            <div id="genques-collapseFive" class="accordion-collapse collapse" aria-labelledby="genques-headingFive"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary">
                Les clients mobile & web de Medicfollow gèrent les langues suivantes: Français, Anglais, Espagnol,
                Allemand et Italien.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="genques-headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#genques-collapseSix" aria-expanded="false" aria-controls="genques-collapseSix">
                Résoudre des problèmes liés au compte.
              </button>
            </h2>
            <div id="genques-collapseSix" class="accordion-collapse collapse" aria-labelledby="genques-headingSix"
              data-bs-parent="#genques-accordion">
              <div class="accordion-body ff-secondary">
                Pour résoudre votre problème, prenez contact dans le formulaire ci-dessus et fournissez un maximum
                d'informations.
              </div>
            </div>
          </div>
        </div>
        <!--end accordion-->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="d-flex align-items-center mb-2">
          <div class="flex-shrink-0 me-1">
            <em class="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></em>
          </div>
          <div class="flex-grow-1">
            <h5 class="mb-0 fw-semibold">Confidentialité et sécurité</h5>
          </div>
        </div>

        <div class="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
          id="privacy-accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseOne" aria-expanded="false" aria-controls="privacy-collapseOne">
                Centre de sécurité.
              </button>
            </h2>
            <div id="privacy-collapseOne" class="accordion-collapse collapse" aria-labelledby="privacy-headingOne"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary">
                Votre sécurité sur MedicFollow nous tient à cœur. C'est pourquoi nous avons créé le Centre de sécurité,
                dans lequel vous trouverez des ressources, des outils et des conseils utiles ayant trait à différents
                sujets.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseTwo" aria-expanded="false" aria-controls="privacy-collapseTwo">
                Vos données dans MedicFollow.
              </button>
            </h2>
            <div id="privacy-collapseTwo" class="accordion-collapse collapse" aria-labelledby="privacy-headingTwo"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary">
                Vous pouvez gérer et consulter vos paramètres et commandes de confidentialité depuis la page "Vos
                données dans MedicFollow". Elle inclut un récapitulatif des données relatives à votre contenu et votre
                activité, des paramètres de gestion de ces données
                et des informations sur l'utilisation qui en est faite pour améliorer MedicFollow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseThree" aria-expanded="false" aria-controls="privacy-collapseThree">
                Comment télécharger ou désinstaller MedicFollow.
              </button>
            </h2>
            <div id="privacy-collapseThree" class="accordion-collapse collapse" aria-labelledby="privacy-headingThree"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary">
                MedicFollow est disponible à l'installation sur le PlayStore et l'AppleStore. La désinstallation
                s'exécute dans les paramètres de votre téléphone.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseFour" aria-expanded="false" aria-controls="privacy-collapseFour">
                Comment résilier mon compte MedicFollow ?
              </button>
            </h2>
            <div id="privacy-collapseFour" class="accordion-collapse collapse" aria-labelledby="privacy-headingFour"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary">
                La suppression d'un compte MedicFollow professionnel est disponible après contact avec notre
                support. Pour les comptes particuliers, la suppression est automatique après 6 mois d'inactivité ou
                après la demande dans les paramètres utilisateurs.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseFive" aria-expanded="false" aria-controls="privacy-collapseFive">
                Comment contacter le Service client ?
              </button>
            </h2>
            <div id="privacy-collapseFive" class="accordion-collapse collapse" aria-labelledby="privacy-headingFive"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary">
                Le numéro de téléphone indiqué en haut de cette page vous permettra de contacter
                le service client, si ce dernier n'est pas joignable, vous pouvez toujours nous
                contacter via le formulaire ci-dessus.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="privacy-headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#privacy-collapseSix" aria-expanded="false" aria-controls="privacy-collapseSix">
                Votre question n'est pas dans cette FAQ ?
              </button>
            </h2>
            <div id="privacy-collapseSix" class="accordion-collapse collapse" aria-labelledby="privacy-headingSix"
              data-bs-parent="#privacy-accordion">
              <div class="accordion-body ff-secondary">
                Dans ce cas, il vous suffit de nous contacter via le formulaire de contact. Nos
                conseillers répondront à vos questions dans les plus brefs délais.
              </div>
            </div>
          </div>
        </div>
        <!--end accordion-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </div>
</template>

<script>
// NAVBAR
import navbar from "./navbar.vue";
// FOOTER
import footervit from "./footer.vue";

export default {
  name: 'Usage',
  components: {
    // NAVBAR
    navbar,
    // FOOTER
    footervit
  },
}
</script>
  
<template>
  <div class="layout-wrapper landing">
    <!-- NAVBAR -->
    <navbar />
    <!-- END NAVBAR -->

    <section class="section bg-light">
      <div class="container">
        <div class="row align-items-center gy-4">
          <div class="review-detail fst-italic">
            <h3 style="margin-top: 30px; margin-bottom: 10px;">1. Informations</h3>
            <p class="forceserif">
              VEUILLEZ LIRE ATTENTIVEMENT LES PRÉSENTES CONDITIONS D'UTILISATION. CE CONTRAT VOUS ENGAGE.
              Bienvenue dans les services gérés par MedicFollow , Inc. (appelé avec ses affiliés « MedicFollow » ou «
              nous »), qui comprennent le site internet disponible à l'adresse <a target="_blank"
                rel="noopener noreferrer" href="http://medicfollow.fr">medicfollow.fr</a> et son réseau de sites
              internet, de logiciels et de tout autre produit ou service offert par MedicFollow (les « services
              MedicFollow »).
              Les autres services proposés par MedicFollow peuvent faire l'objet de conditions distinctes.
              Les présentes conditions générales d'utilisation ont pour objet l'encadrement juridique des modalités de
              mise à disposition des services du site MedicFollow et leur utilisation par l'Utilisateur.
              Les Conditions d'utilisation s'appliquent que vous soyez un utilisateur qui crée un compte auprès des
              services MedicFollow ou un utilisateur sans compte.
              Vous acceptez qu'en cliquant sur « S'inscrire » ou en vous inscrivant, en téléchargeant, en utilisant les
              services MedicFollow ou en y ayant accès, vous concluez un accord juridique entre vous et MedicFollow
              concernant votre utilisation des services MedicFollow.
              Vous reconnaissez que vous avez lu, compris et accepté d'être lié par les présentes Conditions
              d'utilisation. Si vous n'acceptez pas ces Conditions d'utilisation, n'accédez à aucun des services
              MedicFollow et ne les utilisez pas.
              MedicFollow peut modifier unilatéralement et à tout moment des clauses des présentes Conditions
              d'utilisation en publiant les conditions modifiées.
              Si vous continuez d'utiliser les services MedicFollow après la date d'entrée en vigueur des Conditions
              d'utilisation modifiées, vous acceptez les conditions.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">2. Mentions légales</h3>
            <p class="forceserif">
              L'édition du site MedicFollow est assurée par la Société MedicFollow.
              Le Directeur de la publication du site est Maxime Barbier et le Directeur de la publication de
              l'application mobile est Bruno Cazabat.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">3. Définitions</h3>
            <p class="forceserif">
              La présente clause a pour objet de définir les différents termes essentiels du contrat.
              Utilisateur : désigne toute personne le site ou l'un des services proposés par le site.
              Contenu utilisateur : les données transmises par l'Utilisateur au sein du site.
              Membre : l'Utilisateur devient membre lorsqu'il est identifié sur le site.
              Identifiant et mot de passe : c'est l'ensemble des informations nécessaires à l'identification d'un
              Utilisateur sur le site. L'identifiant et le mot de passe permettent à l'Utilisateur d'accéder à des
              services réservés aux membres du site. Le mot de passe est confidentiel.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">4. Accès aux services</h3>
            <p class="forceserif">
              Le site permet seulement aux Utilisateur de s'identifier.
              Pour accéder à tous les services proposés il faut être Membre, l'Utilisateur doit donc s'identifier.
              Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels,
              connexion internet, etc.) sont à sa charge.
              Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du réseau ou du
              serveur n'engage pas la responsabilité de MedicFollow.
              L'accès aux services du site peut à tout moment faire l'objet d'une interruption, d'une suspension, d'une
              modification sans préavis pour une maintenance ou pour tout autre cas. L'Utilisateur s'oblige à ne
              réclamer aucune indemnisation suite à l'intéruption, à la suspension ou à la modification du présent
              contrat.
              L'Utilisateur à la possibilité de contacter le site par messagerie à l'adresse
              guillaume.corbet@epitech.eu.
              Vous êtes seul responsable du maintien de la confidentialité de votre compte et mot de passe, et de la
              restriction de l'accès à votre ordinateur.
              Si vous autorisez d'autres personnes à utiliser les informations de connexion de votre compte, vous
              acceptez les présentes Conditions d'utilisation au nom de toutes les autres personnes qui utilisent les
              services avec votre compte ou votre mot de passe, et vous êtes responsable de toutes les activités qui se
              produisent avec votre compte ou votre mot de passe.
              Veuillez vous assurer que les informations que vous fournissez à MedicFollow lors de votre inscription et
              à tout autre moment sont vraies, exactes, à jour et complètes à votre connaissance.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">5. Rappel du droit de la propriété intellectuelle</h3>
            <p class="forceserif">
              Les marques, logos, signes et tout autre contenu du site font l'objet d'une protection par le Code de la
              propriété intellectuelle et plus particulièrement par le droit d'auteur.
              L'Utilisateur sollicite l'autorisation préalable du site pour toute reproduction, publication, copie des
              différents contenus.
              Tout contenu mis en ligne par l'Utilisateur est de sa seule responsabilité. L'Utilisateur s'engage à ne
              pas mettre en ligne de contenus pouvant porter atteinte aux intérêts de tierces personnes. Tout recours en
              justice engagé par un tiers lésé contre le site sera pris en charge par l'Utilisateur.
              Le contenu de l'Utilisateur peut être à tout moment et pour n'importe quelle raison supprimé ou modifié
              par le site. L'Utilisateur ne reçoit aucune justification et notification préalablement à la suppression
              ou à la modification du contenu Utilisateur.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">6. Politique des données personnelles</h3>
            <p class="forceserif">
              Les informations demandées à l'inscription au site sont nécessaires et obligatoires pour la création du
              compte de l'Utilisateur. En pourra être utilisée par le site pour l'administration, la gestion et
              l'animation du service.
              Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect
              de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers
              et aux libertés. Le site est déclaré à la CNIL sous le numéro N/A.
              En vertu des articles 48 et suivant la loi n°78-17 relative à l'informatique, aux fichiers et aux libertés
              en date du 6 janvier 1978, réécrite par l'ordonnance n° 2018-1125 du 12 décembre 2018 applicable au 1er
              juin 2019, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de
              ses données personnelles.
              L'utilisateur exerce ce droit via son espace personnel.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">7. Avis de confidentialité</h3>
            <p class="forceserif">
              MedicFollow considère que votre vie privée est importante.
              Veuillez consulter notre Avis de confidentialité pour obtenir des informations sur la manière dont nous
              recueillons, utilisons et divulguons vos informations personnelles et nos Choix de confidentialité pour
              obtenir des informations sur la façon dont vous pouvez gérer votre vie privée en ligne lorsque vous
              utilisez les Services MedicFollow.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">8. Responsabilité et force majeure</h3>
            <p class="forceserif">
              Les sources des informations diffusées sur le site sont réputées fiables. Toutefois, le site se réserve la
              faculté d'une non-garantie de la fiabilité des sources. Les informations données sur le site le sont à
              titre purement informatif. Ainsi, l'Utilisateur assume seul l'entière responsabilité de l'utilisation des
              informations et contenus du présent site.
              L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que
              soit sa forme, est interdite.
              L'Utilisateur assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline
              toute responsabilité.
              Tout usage du service par l'Utilisateur ayant directement ou indirectement pour conséquence des dommages
              doit faire l'objet d'une indemnisation au profit du site.
              Une garantie optimale de la sécurité et de la confidentialité des données transmise n'est pas assurée par
              le site. Toutefois, le site s'engage à mettre en œuvre tous les moyens nécessaires afin de garantir au
              mieux la sécurité et la confidentialité des données.
              La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et
              insurmontable d'un tiers.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">9. Liens hypertextes</h3>
            <p class="forceserif">
              De nombreux liens hypertextes sortants sont présents sur le site, cependant les pages web où mènent ces
              liens n'engagent en rien la responsabilité de MedicFollow qui n'a pas le contrôle de ces liens.
              L'Utilisateur s'interdit donc d'engager la responsabilité du site concernant le contenu et les ressources
              relatives à ces liens hypertextes sortants.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">10. Évolution du contrat</h3>
            <p class="forceserif">
              Le site se réserve à tout moment le droit de modifier les clauses stipulées dans le présent contrat.
              Si vous continuez d'utiliser les services MedicFollow après la date d'entrée en vigueur des Conditions
              d'utilisation modifiées, vous acceptez les conditions.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">11. Durée</h3>
            <p class="forceserif">
              La durée du présent contrat est indéterminée. Le contrat produit ses effets à l'égard de l'Utilisateur à
              compter de l'utilisation du service.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">12. Droit applicable et juridiction</h3>
            <p class="forceserif">
              La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige
              né entre les parties, seuls les tribunaux N/A sont compétents.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">13. Droit à la portabilité des données</h3>
            <p class="forceserif">
              Le droit à la portabilité vous offre la possibilité de récupérer une partie de vos données dans un format
              lisible par une machine. Libre à vous de stocker ailleurs ces données portables ou les transmettre
              facilement d’un système à un autre, en vue d’une réutilisation à d’autres fins.
              Pour plus d'informations, vous pouvez consulter ce lien <a target="_blank" rel="noopener noreferrer"
                href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article20">ici</a>.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">14. Droit à l'oubli</h3>
            <p class="forceserif">
              Le droit à l'oubli est le droit de faire supprimer des recherches sur Internet et d'autres répertoires,
              sous certaines conditions, les informations privées négatives concernant une personne. Ce concept est en
              vigueur au sein l'Union Européenne depuis 2006.
              Pour plus d'informations, vous pouvez consulter ce lien <a target="_blank" rel="noopener noreferrer"
                href="https://www.cnil.fr/fr/le-droit-leffacement-supprimer-vos-donnees-en-ligne">ici</a>.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">15. Droit à notification</h3>
            <p class="forceserif">
              Le règlement général sur la protection des données (RGPD) impose aux responsables de traitement de
              documenter, en interne, les violations de données personnelles et de notifier les violations présentant un
              risque pour les droits et libertés des personnes à la CNIL et, dans certains cas, lorsque le risque est
              élevé, aux personnes concernées.
              Pour plus d'informations, vous pouvez consulter ce lien <a target="_blank" rel="noopener noreferrer"
                href="https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles">ici</a>.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">16. Droit à réparation du dommage matériel ou moral</h3>
            <p class="forceserif">
              Toute personne ayant subi un dommage matériel ou moral du fait d'une violation du présent règlement a le
              droit d'obtenir du responsable du traitement ou du sous-traitant réparation du préjudice subi.
              Pour plus d'informations, vous pouvez consulter ce lien <a target="_blank" rel="noopener noreferrer"
                href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre8">ici</a>.
            </p>
            <h3 style="margin-top: 30px; margin-bottom: 10px;">17. Publication par l'Utilisateur</h3>
            <p class="forceserif">
              Le site permet aux membres de communiquer par messages.
              Dans ses messages, le membre s'engage à respecter les règles de la Netiquette et les règles de droit en
              vigueur.
              Le site exerce une modération à posteriori sur les messages et se réserve le droit de refuser leur mise en
              ligne, sans avoir à s'en justifier auprès du membre.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="custom-footer bg-primary py-5 position-relative">
      <footervit />
    </footer>
    <!-- END FOOTER -->
  </div>
</template>

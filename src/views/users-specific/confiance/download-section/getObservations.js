import axios from "axios";
import Swal from "sweetalert2";

async function getObservations(patientUUID, userTOKEN) {
  // Constructing the request URL with patient uuid
  let url = "patient/" + patientUUID + "/observation/";
  let observationsArray = [];

  // Axios call to get the observations
  try {
    await axios
      .get(url, {
        headers: {
          token: userTOKEN,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          observationsArray = response.data.observations;
          return observationsArray;
        } else {
          Swal.fire({
            title: response.status + " - Erreur",
            text: "Une erreur est survenue lors de la récupération des observations",
            icon: "error",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/confiance/dashboard");
              return null;
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
        this.$router.push("/confiance/dashboard");
        return null;
      }
    });
  }
  // Sweet Alert if there is no observations
  if (observationsArray.length === 0) {
    Swal.fire({
      title: "Aucune observation",
      text: "Aucune observation n'a été trouvée pour ce patient",
      icon: "info",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        this.$router.push("/confiance/dashboard");
        return null;
      }
    });
  }
}

export default { getObservations };

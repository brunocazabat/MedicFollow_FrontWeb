const chatData = [
  {
    id: 1,
    // TODO: change pfp for Karine
    image: require("@/assets/images/users/avatar-1.png"),
    name: "PETIT Karine",
    message: "Hey! there I'm available",
    time: "",
    color: "secondary",
  },
  {
    id: 2,
    // TODO: change pfp for Alexandre
    image: require("@/assets/images/users/avatar-1.png"),
    name: "MARTIN Alexandre",
    message: "I've finished it! See you so",
    time: "5",
    color: "success",
  },
  {
    id: 3,
    // TODO: change pfp for Victoire
    name: "DUBOIS Victoire",
    message: "This theme is awesome!",
    time: "2",
    color: "success",
  },
];

const chatMessagesData = [
  {
    align: "right",
    name: "DUPONT François",
    message: "Bonjour, Marie est bien arrivée?",
    time: "9:58",
  },
  {
    align: "left",
    name: "PETIT Karine",
    message: "Bonjour, oui nous prenons soin d'elle.",
    time: "10:02",
  },
  {
    align: "right",
    name: "François DUPONT",
    message: "Avez-vous reçu ma demande de RDV?",
    time: "10:40",
  },
  {
    align: "left",
    name: "Karine PETIT",
    message: "Je viens de l'accepter, à Vendredi 15h.",
    time: "18:26",
  },
];

export { chatData, chatMessagesData };

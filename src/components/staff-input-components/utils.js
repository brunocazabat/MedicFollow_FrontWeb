let eventGuid = 0;
let date = new Date();
// let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();
export const INITIAL_EVENTS = [
  {
    id: 153,
    title: "Scan du genou gauche",
    start: new Date(y, m, 1),
    className: "bg-soft-primary",
    location: "San Francisco, US",
    allDay: false,
    extendedProps: {
      department: "All Day Event",
    },
    description: "Scan du genou apès plainte de douleurs du patient",
  },
  {
    id: 136,
    title: "Visite François DUPONT",
    start: new Date(y, m, 9),
    allDay: false,
    className: "bg-soft-info",
    extendedProps: {
      department: "Long Event",
    },
    description: "DUPONT François viendra visiter DUPONT Marie.",
  },
  {
    id: 112,
    title: "Scan pré-opératoire",
    start: new Date(y, m, 14),
    allDay: false,
    className: "bg-soft-warning",
    location: "Head Office, US",
    extendedProps: {
      department: "Meeting",
    },
    description: "Tell how to boost website traffic",
  },
  {
    id: 875,
    title: "Opération du genou gauche",
    start: new Date(y, m, 15),
    allDay: false,
    className: "bg-soft-danger",
    location: "Los Angeles, US",
    extendedProps: {
      department: "Birthday Party",
    },
    description: "Opération du genou gauche.",
  },
  {
    id: 783,
    title: "Sortie de l'hôpital",
    start: new Date(y, m, 19),
    className: "bg-soft-dark",
  },
];

export function createEventId() {
  return String(eventGuid++);
}

export const categories = [
  {
    name: "Danger",
    value: "bg-danger",
  },
  {
    name: "Success",
    value: "bg-success",
  },
  {
    name: "Primary",
    value: "bg-primary",
  },
  {
    name: "Info",
    value: "bg-info",
  },
  {
    name: "Dark",
    value: "bg-dark",
  },
  {
    name: "Warning",
    value: "bg-warning",
  },
];

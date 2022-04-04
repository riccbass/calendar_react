const isSelected = (day, value) => {
  return value.isSame(day, "day");
};

//default dá para exportar uma vez, named quantas vezes quiser

export const beforeToday = (day) => {
  return day.isBefore(new Date(), "day");
};

const isToday = (day) => {
  return day.isSame(new Date(), "day");
};

const dayStyles = (day, value) => {
  if (beforeToday(day)) return "before";
  if (isSelected(day, value)) return "selected";
  if (isToday(day)) return "today";
  return "";
};

export default dayStyles;

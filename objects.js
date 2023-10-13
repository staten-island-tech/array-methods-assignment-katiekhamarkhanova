const schoolBreak = [
  {
    monthName: "November",
    daysOff: [23, 24],
    fullWeek: false,
  },
  {
    monthName: "December",
    daysOff: [25, 26, 27, 28, 29, 30, 31, 1],
    fullWeek: true,
  },
  {
    monthName: "February",
    daysOff: [19, 20, 21, 22, 23],
    fullWeek: true,
  },
  {
    monthName: "April",
    daysOff: [22, 23, 24, 25, 26, 27, 28, 29, 30],
    fullWeek: true,
  },
];
schoolBreak.forEach((schoolBreak) => console.log(schoolBreak.monthName));
schoolBreak.forEach((schoolBreak) => console.log(schoolBreak.daysOff));
const week = schoolBreak.filter(
  (schoolBreak) => schoolBreak.fullWeek === false
);
var days = [schoolBreak.daysOff];
week.forEach((week) => console.log(week.monthName, week.fullWeek));

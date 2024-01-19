/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
}

function isWeekend(day: Days): boolean {
  return day === Days.saturday || day === Days.sunday;
}

console.log(isWeekend(Days.wednesday));

function countHours(year, holidays) {
  const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 0;
  const getHolidayDate = (holiday) => {
    const holidaySplitted = holiday.split("/");
    const holidayDay = parseInt(holidaySplitted[1]);
    const holidayMonth = parseInt(holidaySplitted[0], 10) - 1;
    return new Date(year, holidayMonth, holidayDay);
  };
  const getExtraHours = (holiday) =>
    isWeekend(getHolidayDate(holiday)) ? 0 : 2;

  return holidays.reduce((accumulator, holiday) => {
    return accumulator + getExtraHours(holiday);
  }, 0);
}

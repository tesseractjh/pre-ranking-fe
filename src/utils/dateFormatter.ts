const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const dateFormatter = {
  getFromMonthToDay(dateString: Date | string) {
    const dateObj = new Date(dateString);
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const day = dateObj.getDay();

    return `${month}월 ${date}일 (${DAYS[day]})`;
  },

  getFromMonthToMinute(dateString: Date | string) {
    const dateObj = new Date(dateString);
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const day = dateObj.getDay();
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();

    return `${month}월 ${date}일 (${DAYS[day]}) ${hour
      .toString()
      .padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  }
};

export default dateFormatter;

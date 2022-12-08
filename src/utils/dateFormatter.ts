const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
const DAY_TIME = 24 * 60 * 60 * 1000;

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
  },

  getDateDiff(prevDate: Date | string, curDate: Date | string) {
    const prevDateObj = new Date(prevDate);
    const curDateObj = new Date(curDate);
    return (
      Math.ceil((curDateObj.getTime() - prevDateObj.getTime()) / DAY_TIME) - 1
    );
  }
};

export default dateFormatter;

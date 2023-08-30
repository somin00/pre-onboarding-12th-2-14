export const changeDateFormat = (stringDate: string) => {
  const dateObj = new Date(stringDate);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  return `${year}년 ${month}월 ${date}일`;
};

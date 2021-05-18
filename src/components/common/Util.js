export const setDataToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
export const getDataFromLocalStorage = (key) => key && JSON.parse(localStorage.getItem(key));
export function formatDate(inputDate) {
  let time = new Date(1970, 0, 1);
  time.setSeconds(inputDate);
  const date = time.toDateString();
  return date;
}

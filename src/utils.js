export const getDaysInMonth = (month, year) => {
    month = month -1;
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
        days.push(convertToObject(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
};

const convertToObject = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    return ({day, month, year});
}
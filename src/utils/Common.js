export const dateFormat = (dateObj) => {
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = `${year}-${month}-${day} ${dateObj.getHours().toString().padStart(2, '0')}:${
    dateObj.getMinutes().toString().padStart(2, '0')}:${
    dateObj.getSeconds().toString().padStart(2, '0')}`
    return output
}

export const getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
};
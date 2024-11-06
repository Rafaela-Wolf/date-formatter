const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}/${month}/${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case "dd/mm/yyyy":
            currentDateParagraph.textContent = `${day}/${month}/${year}`;
            break;
        case "mm/dd/yyyy":
            currentDateParagraph.textContent = `${month}/${day}/${year}`;
            break;
        case "yyyy/mm/dd":
            currentDateParagraph.textContent = `${year}/${month}/${day}`;
            break;
        case "dd Month yyyy":
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            currentDateParagraph.textContent = `${day} ${monthNames[date.getMonth()]} ${year}`;
            break;
        case "dd/mm/yyyy hh:mm":
            currentDateParagraph.textContent = `${day}/${month}/${year} ${hours}:${minutes}`;
            break;
        default:
            currentDateParagraph.textContent = formattedDate;
            break;
    }
});
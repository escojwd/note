const presentTime = document.getElementById("present-time");
const addNote = document.getElementById("add-button");
const textarea = document.getElementById("note-text");

addNote.addEventListener('click', () => {
    textarea.removeAttribute('disabled');
    textarea.focus();
})


let date = new Date();
presentTime.textContent = date.toDateString() + " " + date.toLocaleTimeString()

setInterval(() => {
    date = new Date();
    presentTime.textContent = date.toDateString() + " " + date.toLocaleTimeString();
}, 1000);







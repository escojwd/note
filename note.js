let liId = 10;
const presentTime = document.getElementById("present-time");
const addNote = document.getElementById("add-button");
const textarea = document.getElementById("note-text");
const noteList = document.getElementById("note-list");
const saveText = document.getElementById("save");



addNote.addEventListener('click', () => {
    // liId++;
    textarea.removeAttribute('disabled');
    textarea.focus();
    const li = document.createElement("li");
    // li.setAttribute("id", liId);
    const title = document.createElement("p");
    const titleTime = document.createElement("p");
    noteList.appendChild(li);
    li.appendChild(title);
    title.textContent = textarea.value.substring(0, 10) + "...";
    if(!textarea.textContent){
        title.textContent = "Untitled";
    }
    li.appendChild(titleTime);
    titleTime.textContent = date.getHours() + ":" + date.getMinutes();
});

saveText.addEventListener('click', () => {
    const p = document.createElement("p");
    p.textContent = textarea.value;
    // noteList.lastChild.appendChild(p);
    // console.log(textarea.value);
})



let date = new Date();
presentTime.textContent = date.toDateString() + " " + date.toLocaleTimeString()

setInterval(() => {
    date = new Date();
    presentTime.textContent = date.toDateString() + " " + date.toLocaleTimeString();
}, 1000);









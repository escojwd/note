const presentTime = document.getElementById("present-time");
const addNote = document.getElementById("add-button");
const textarea = document.getElementById("note-text");
const noteList = document.getElementById("note-list");
const saveText = document.getElementById("save");
let liId = 10;
let active;

addNote.addEventListener('click', () => {
    liId++;
    
    textarea.removeAttribute('disabled');
    textarea.focus();

    const li = document.createElement("li");
    li.setAttribute("id", liId);
    
    const title = document.createElement("p");
    const titleTime = document.createElement("p");
    const noteText = document.createElement("p");
    
    noteList.appendChild(li);
    li.appendChild(title);
    title.textContent = textarea.value.substring(0, 10) + "...";
    
    if(!textarea.textContent){
        title.textContent = "Untitled";
    }
    
    li.appendChild(titleTime);
    titleTime.textContent = date.getHours() + ":" + date.getMinutes();

    li.appendChild(noteText);


    li.addEventListener('click', () => {
        // remove to all active class
        for(let i = 0; i < noteList.children.length; i++){
            
        }
        // nake active this li
           
    })
});

saveText.addEventListener('click', () => {
    const activeLi = document.querySelector('#note-list li.active');

    if(!activeLi){
        return;
    }

    const date = new Date();
 
    activeLi.children[0].textContent = textarea.value.substring(0, 10) + "...";
    activeLi.children[1].textContent = date.getHours() + ":" + date.getMinutes();
    activeLi.children[2].textContent = textarea.value;
});




let date = new Date();
presentTime.textContent = date.toDateString() + " " + date.toLocaleTimeString();

setInterval(() => {
    date = new Date();
    presentTime.textContent = date.toDateString() + " " + date.toLocaleTimeString();
}, 1000);

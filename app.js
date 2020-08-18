const a = document.getElementsByClassName("to-do-input")[0];
const b = document.getElementsByClassName("to-do-button")[0];
const c = document.getElementsByClassName("to-do-list")[0];

b.addEventListener('click', addToDo);
c.addEventListener('click', completeDelete);

function addToDo(event) {
    event.preventDefault();

    const d = document.createElement("div");
    d.setAttribute("class","to-do");

    const e = document.createElement("li");
    e.innerText = a.value;
    e.setAttribute("class","to-do-item");
    d.appendChild(e);

    const f = document.createElement("button");
    f.innerHTML = '<i class="fas fa-check"></i>';
    f.setAttribute("class","complete-btn");
    d.appendChild(f);

    const g = document.createElement("button");
    g.innerHTML = '<i class="fas fa-trash"></i>';
    g.setAttribute("class","delete-btn");
    d.appendChild(g);

    c.appendChild(d);

    a.value = "";
}

function completeDelete(ev) {
    const item = ev.target;
    if(item.getAttribute("class") === "delete-btn") {
        item.parentElement.classList.add('fall');
        item.parentElement.addEventListener("transitionend", ()=> {
            item.parentElement.remove();
        });
    }   

    if(item.getAttribute("class") === "complete-btn")
        item.parentElement.classList.toggle("completed");
}
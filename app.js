const a = document.getElementsByClassName("to-do-input")[0];
const b = document.getElementsByClassName("to-do-button")[0];
const c = document.getElementsByClassName("to-do-list")[0];
const i = document.getElementsByClassName("filter")[0];

b.addEventListener('click', addToDo);
c.addEventListener('click', completeDelete);
i.addEventListener('click', filterToDo);

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
    const h = ev.target;
    if(h.getAttribute("class") === "delete-btn") {
        h.parentElement.classList.add('fall');
        h.parentElement.addEventListener("transitionend", ()=> {
            h.parentElement.remove();
        });
    }   

    if(h.getAttribute("class") === "complete-btn")
        h.parentElement.classList.toggle("completed");
}

function filterToDo(e) {
    const j = c.children;
    
    for(var i = 0; i < j.length; i++)
    {
        switch(e.target.value) {
            case "all":
                j[i].style.display = "flex";
                break;
            case "completed":
                if(j[i].classList.contains("completed"))
                    j[i].style.display = "flex";
                else
                    j[i].style.display = "none";
                break;
            case "uncompleted":
                if(j[i].classList.contains("completed"))
                    j[i].style.display = "none";
                else
                    j[i].style.display = "flex";
                break;
        }
    }
}
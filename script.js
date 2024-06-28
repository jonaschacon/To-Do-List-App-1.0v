
const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask() {
    let li = document.createElement("li");
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.innerHTML = inputBox.value;
    li.appendChild(span)
    listContainer.appendChild(li);
    saveData()
}

listContainer.addEventListener("click", event => {
    if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData()
    }
    else if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData()
    }
    console.log(event.target.tagName)
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();
const list = document.getElementById("list");
const task = document.getElementById("task");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (task.value === "") {
    alert("You must write something ");
  } else {
    let li = document.createElement("li");
    li.classList = "flex relative";

    let img = document.createElement("img");
    img.src = "http://127.0.0.1:5500/images/unchecked.png";
    img.classList = "h-8 inline-block pr-1 pb-1 hover:cursor-pointer";

    let p = document.createElement("p");
    p.innerHTML = task.value;

    let span = document.createElement("span");
    span.innerHTML = "&#215;";
    span.classList =
      "text-2xl hover:cursor-pointer absolute right-0 border-none rounded-full  hover:bg-gray-300";

    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(span);
    list.appendChild(li);
  }
  task.value = "";
  saveData();
});



list.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    if (e.target.src === "http://127.0.0.1:5500/images/unchecked.png") {
      e.target.src = "http://127.0.0.1:5500/images/checked.png";
    } else {
      e.target.src = "http://127.0.0.1:5500/images/unchecked.png";
    }
    e.target.parentElement.classList.toggle("line-through");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
});

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}

showData();
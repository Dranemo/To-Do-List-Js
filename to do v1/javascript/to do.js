// code pour créer de nouvelles tâches

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementsByClassName("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

const filterOption = document.querySelector(".filter-todo");
filterOption.addEventListener("input", filterTodo);












// code pour les colonnes et le drag and drop
  const items = document.querySelectorAll(".item");
const columns = document.querySelectorAll(".column");
let currentItem = null; // Перетаскиваемый элемент
let nextItem = null; // Перетаскиваемый элемент

const reCalc = () => {
  columns.forEach((column) => {
    const childs = [...column.children].filter((child) => {
      return child.classList.contains("item");
    });
    column.querySelector(".cnt").innerHTML = String(childs.length);
  });
};
reCalc();

const onDragStart = (e) => {
  currentItem = e.target;
  e.target.classList.add("hold");
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
};

const onDragEnd = (e) => {
  e.target.className = "item";
};

const onDragOver = (e) => {
  e.preventDefault();
  const currentElement = e.target;
  nextItem =
    currentElement === currentItem
      ? currentElement.nextElementSibling
      : currentElement;
  if (nextItem?.classList.contains("item")) {
    e.currentTarget.insertBefore(currentItem, nextItem);
  } else {
    e.currentTarget.append(currentItem);
  }
};

const onDragEnter = (e) => {
  e.currentTarget.classList.add("entered");
  reCalc();
};

const onDragLeave = (e) => {};

const onDrop = (e) => {
  e.currentTarget.classList.remove("entered");
  reCalc();
};

const clearBorders = (e) => {
  if (
    !e.target.classList.contains("column") &&
    !e.target.parentNode.classList.contains("column")
  ) {
    columns.forEach((column) => column.classList.remove("entered"));
  }
};

items.forEach((item) => {
  item.addEventListener("dragstart", onDragStart);
  item.addEventListener("dragend", onDragEnd);
});

columns.forEach((column) => {
  column.addEventListener("dragover", onDragOver),
    column.addEventListener("dragenter", onDragEnter),
    column.addEventListener("drop", onDrop);
});

document.addEventListener("dragenter", clearBorders);





var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}




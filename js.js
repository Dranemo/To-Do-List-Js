var btn = document.querySelector('.add');
var remove = document.querySelector('.draggable');

function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function dragEnd(e) {
  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});








function addNewItem() {
  var newItem = document.querySelector('.input').value;
  var table = document.getElementById('select');
  if (table.value == 'fait') {
    if (newItem != '') {
      document.querySelector('.input').value = '';
      var li = document.createElement('li');
      var attr = document.createAttribute('draggable');
      var ul = document.getElementById('2');
      li.className = 'draggable';
      attr.value = 'true';
      li.setAttributeNode(attr);
      li.appendChild(document.createTextNode(newItem));
      ul.appendChild(li);
      var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          li.appendChild(span);
      addEventsDragAndDrop(li);
    }
  }


  if (table.value == 'afaire') {
    if (newItem != '') {
      document.querySelector('.input').value = '';
      var li = document.createElement('li');
      var attr = document.createAttribute('draggable');
      var ul = document.getElementById('1');
      li.className = 'draggable';
      attr.value = 'true';
      li.setAttributeNode(attr);
      li.appendChild(document.createTextNode(newItem));
      ul.appendChild(li);

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      var check = document.createElement("SPAN");
      var checktxt = document.createTextNode("/^[a-zA-Z]+$/")
      check.className = "check";
      check.appendChild(checktxt);
      li.appendChild(check);

      addEventsDragAndDrop(li);
    }
  }
}

    


var close = document.querySelectorAll(".close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    // var div = this.parentElement;
    // div.style.display = "none";
    this.parentNode.remove()
    console.log(close);
   
  }
}

btn.addEventListener('click', addNewItem);

// Click on a close button to hide the current list item


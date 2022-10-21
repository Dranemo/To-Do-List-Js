var btn = document.querySelector('.add');
var remove = document.querySelector('.draggable');

//             // drag and drop
// function dragStart(e) {
//   this.style.opacity = '0.4';
//   dragSrcEl = this;
//   e.dataTransfer.effectAllowed = 'move';
//   e.dataTransfer.setData('text/html', this.innerHTML);
// };

// function dragEnter(e) {
//   this.classList.add('over');
// }

// function dragLeave(e) {
//   e.stopPropagation();
//   this.classList.remove('over');
// }

// function dragOver(e) {
//   e.preventDefault();
//   e.dataTransfer.dropEffect = 'move';
//   return false;
// }

// function dragDrop(e) {
//   if (dragSrcEl != this) {
//     dragSrcEl.innerHTML = this.innerHTML;
//     this.innerHTML = e.dataTransfer.getData('text/html');
//   }
//   return false;
// }

// function dragEnd(e) {
//   var listItens = document.querySelectorAll('.draggable');
//   [].forEach.call(listItens, function(item) {
//     item.classList.remove('over');
//   });
//   this.style.opacity = '1';
// }

// function addEventsDragAndDrop(el) {
//   el.addEventListener('dragstart', dragStart, false);
//   el.addEventListener('dragenter', dragEnter, false);
//   el.addEventListener('dragover', dragOver, false);
//   el.addEventListener('dragleave', dragLeave, false);
//   el.addEventListener('drop', dragDrop, false);
//   el.addEventListener('dragend', dragEnd, false);
// }


// nouveau to do 
function addNewItem() {
  var newItem = document.querySelector('.input').value;
  var table = document.getElementById('select');

      // ajout dans la catégorie pro
      if (table.value == 'fait') {
        if (newItem != '') {
          document.querySelector('.input').value = '';
          var li = document.createElement('li');
          // var attr = document.createAttribute('draggable');
          var ul = document.getElementById('2');
          // li.className = 'draggable';
          // attr.value = 'true';
          // li.setAttributeNode(attr);
          li.appendChild(document.createTextNode(newItem));
          ul.appendChild(li);

          // creation bouton supprimer
          var btn = document.createElement("button");
          var txt = document.createTextNode("\u00D7");
          btn.className = "close";
          btn.setAttribute("name", "delete");
          btn.innerHTML = "\u00D7";
          li.appendChild(btn);
        
          // creation bouton modifier
           var change = document.createElement("button");
           var changetxt = document.createTextNode("✐")
           change.className = "change";
           change.setAttribute("name", "change");
           change.innerHTML = "✐";
           li.appendChild(change);

          // addEventsDragAndDrop(li);
        
          // fonctionnement bouton supprimer
          var close = document.querySelectorAll(".close");
          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              this.parentNode.remove();
              console.log(close);
            
            }
          }
        
          // fonctionnement bouton modifier
          var changed = document.querySelectorAll(".change");
          for (i = 0; i < close.length; i++) {
            changed[i].onclick = function() {
              var textinside = this.parentElement.firstChild
              let changement = prompt("Modifiez la tâche :", textinside.textContent);
              if (changement == null || changement == "") {
                alert("Changement annulé.");
              } else {
                textinside.textContent = changement
              console.log(textinside);
              }
            }
          }
        }

      }

          // ajout dans la catégorie personnel
          if (table.value == 'afaire') {
            if (newItem != '') {
              document.querySelector('.input').value = '';
              var li = document.createElement('li');
              // var attr = document.createAttribute('draggable');
              var ul = document.getElementById('1');
              // li.className = 'draggable';
              // attr.value = 'true';
              // li.setAttributeNode(attr);
              li.appendChild(document.createTextNode(newItem));
              ul.appendChild(li);
            
              // creation bouton supprimer
              var btn = document.createElement("button");
              var txt = document.createTextNode("\u00D7");
              btn.className = "close";
              btn.setAttribute("name", "delete");
              btn.innerHTML = "\u00D7";
              li.appendChild(btn);
            
              // creation bouton modifier
              var change = document.createElement("button");
              var changetxt = document.createTextNode("✐")
              change.className = "change";
              change.setAttribute("name", "change");
              change.innerHTML = "✐";
              li.appendChild(change);
            
              // addEventsDragAndDrop(li);
            
              // fonctionnement bouton supprimer
              var close = document.querySelectorAll(".close");
              for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                  this.parentNode.remove();
                  console.log(close);
                
                }
              }
            
              // fonctionnement bouton modifier
              var changed = document.querySelectorAll(".change");
              for (i = 0; i < close.length; i++) {
                changed[i].onclick = function() {
                  var textinside = this.parentElement.firstChild
                  let changement = prompt("Please enter the changements :", textinside.textContent);
                  if (changement == null || changement == "") {
                    alert("User cancelled the prompt.");
                  } else {
                    textinside.textContent = changement
                  console.log(textinside);
                  }
                }
              }
            }
      
  }
}






btn.addEventListener('click', addNewItem);
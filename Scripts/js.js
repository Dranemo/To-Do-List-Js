var btn = document.querySelector('.add');
var remove = document.querySelector('.draggable');

// nouveau to do 
function addNewItem() {
  var newItem = document.querySelector('.input').value;
  var table = document.getElementById('select');

      // ajout dans la catégorie pro
      if (table.value == 'fait') {
        if (newItem != '') {
          document.querySelector('.input').value = '';
          var li = document.createElement('li');
          var ul = document.getElementById('2');
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
              var ul = document.getElementById('1');
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
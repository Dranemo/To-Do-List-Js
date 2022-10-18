var button = document.getElementsByClassName('btn_s');

function myFunction() {
    var li = document.createElement("li");
    var inputValue = document.getElementsByClassName("btn_s").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Ecrivez quelque chose!");
    } else {
      document.getElementsByClassName("list").appendChild(li);
    }
    document.getElementsByClassName("btn_s").value = "";
  
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
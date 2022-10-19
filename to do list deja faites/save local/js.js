const inputToggle = document.querySelector('.header__button');
const text = document.getElementById('text');
const ul = document.querySelector('.content__list');
inputToggle.addEventListener('click', function() {
  document.querySelector('.input__container').classList.toggle('hide');
  document.querySelector('.content').classList.toggle('hideHeight');
});

text.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (
      !text.value.trim() ||
      text.value.trim().length < 3 ||
      text.value.trim().length > 20
    ) {
      showMessage('At Least 3 Character And 20 For Max', '#721c24', '#f8d7da');
    } else {
      addItem(text.value);
      showMessage('To Do Added Successfully', '#155724', '#d4edda');
    }
  }
});

function addItem(data) {
  document.querySelector('.content__list').innerHTML += `
<div class="wraper">
            <div class="remove fas fa-trash"></div>
            <li class="content__list--item">${data}</li>
          </div>
`;
  addToLocale(data);
  count();
  text.value = null;
}

ul.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    e.target.parentElement.remove();
    delFromLocal2(e.target.parentElement.children[1].textContent);
    showMessage('To Do Deleted Successfully', '#004085', '#cce5ff');
  }
  if (e.target.classList.contains('content__list--item')) {
    e.target.classList.toggle('finished');
    if (e.target.classList.contains('finished')) {
      delFromLocal(e.target.parentElement.children[1].textContent, true);
      showMessage('To Do Is Checked Successfully', '#004085', '#cce5ff');
    } else {
      delFromLocal(e.target.parentElement.children[1].textContent, false);
      showMessage('To Do Is Unchecked Successfully', '#004085', '#cce5ff');
    }
    console.log('g');
  }
});

function addToLocale(data) {
  let arr = [];
  if (localStorage.getItem('todo')) {
    arr = JSON.parse(localStorage.getItem('todo'));
  }
  arr.push({ text: data, isChecked: false });
  localStorage.setItem('todo', JSON.stringify(arr));
}

document.addEventListener('DOMContentLoaded', loadfromlocal);
function loadfromlocal() {
  let data = JSON.parse(localStorage.getItem('todo'));
  document.querySelector('.content__list').innerHTML = null;
  if (data) {
    data.forEach(function(todo) {
      document.querySelector('.content__list').innerHTML += `
            <div class="wraper">
                        <div class="remove fas fa-trash "></div>
                        <li class="content__list--item ${
                          todo.isChecked ? 'finished' : 'notFinished'
                        }">${todo.text}</li>
                      </div>
            `;
    });
  }
  count();
}

function delFromLocal(item, status) {
  let arr = JSON.parse(localStorage.getItem('todo'));
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i].text) {
        arr[i].isChecked = status;
        localStorage.setItem('todo', JSON.stringify(arr));
        break;
      }
    }
  }
  //   count();
}

function count() {
  let a = JSON.parse(localStorage.getItem('todo'));
  if (a) {
    document.querySelector('.footer').textContent = `There Is ${a.length} Todo`;
  } else {
    document.querySelector('.footer').textContent = `There Is 0 Todo`;
  }
}

function showMessage(message, color, bgcolor) {
  let output = document.querySelector('.message');
  output.style.backgroundColor = bgcolor;
  output.style.color = color;
  output.style.width = '100%';
  output.style.fontSize = '17px';
  output.textContent = message;
  setTimeout(() => {
    output.style.backgroundColor = 'none';
    output.style.fontSize = '0';
    output.style.width = '0';
    output.textContent = null;
  }, 3000);
}

function delFromLocal2(item) {
  let arr = JSON.parse(localStorage.getItem('todo'));
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i].text) {
        arr.splice(i, 1);
        localStorage.setItem('todo', JSON.stringify(arr));
        break;
      }
    }
  }
  count();
}
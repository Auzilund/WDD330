var list = document.querySelector('#list'),
    form = document.querySelector('form'),
    item = document.querySelector('#item');

form.addEventListener('submit',function(e){
  e.preventDefault();
  list.innerHTML += '<li class="todo">' + item.value + '</li>';
  store();
  item.value = "";
},false)

list.addEventListener('click',function(e){
  var t = e.target;
  if(t.classList.contains('checked')){
    t.parentNode.removeChild(t);
  } else {
    t.classList.add('checked');
  }
  store();
},false)

function store() {
  window.localStorage.myitems = list.innerHTML;
}

function getValues() {
  var storedValues = window.localStorage.myitems;
  if(!storedValues) {
                      
  }
  else {
    list.innerHTML = storedValues;
  }
}
getValues();


var input = document.getElementById('search');
input.onkeyup = function () {
  var filter = input.value.toUpperCase();
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].innerText;
        if (name.toUpperCase().indexOf(filter) == 0) 
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }
}
function filterCompleted(checkboxelm) {
  var lis = document.getElementsByTagName('li');
  if(checkboxelm.checked){
  
    for (var i = 0; i < lis.length; i++) {
      if(lis[i].classList.contains('checked')){
        lis[i].style.display = 'none';
      }
      else {
        lis[i].style.display = 'list-item';
      }
    }
  }
  else{
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.display = 'list-item';
    }
  }
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}

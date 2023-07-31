const input =document.querySelector('#input');
const addBtn = document.querySelector('#add-btn');
const listItems = document.querySelector('.list-items');

function fun1(){
    const li = document.createElement('li');
    li.innerHTML = input.value;
    listItems.appendChild(li)
}

addBtn.addEventListener('click',fun1)
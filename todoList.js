// alert("hello")
 
const addEle=document.getElementById('todoPlusSign');
const listItem=document.getElementById('todoTextArea');
const textField=document.getElementById('todoTxtBar');

addEle.addEventListener('click', function(){
    const list=document.createElement('li');
    list.innerHTML=textField.value;
    listItem.appendChild(list);
    
})











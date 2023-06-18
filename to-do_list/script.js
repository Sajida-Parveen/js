// alert("hello")

let inputText=document.getElementById('textMenu');
const addBtn= document.getElementById('add');
const listMenu= document.getElementById('list-item');


// console.log(inputText);
addBtn.addEventListener('click', ()=>{
    if(inputText.value.length == ''){
        alert("Your Task Is Empty ");
    
    }else{
        const item = document.createElement('li');
   
    item.innerHTML=`${inputText.value} 
     <i class="fa-solid fa-trash"></i>`;
     listMenu.appendChild(item);
     inputText.value ='' ;

    const trush = document.querySelectorAll('i');
   
        for(let i = 0; i < trush.length; i++){
            trush[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }

    
        
    
    
        
})




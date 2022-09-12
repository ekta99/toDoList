
let c = 1;

document.getElementById('addToDo').addEventListener('click',(e)=>{
    let name = document.getElementById('enterToDo').value;
    let ul = document.getElementById('toDoContainer');

    
    let list = document.createElement('li');
    list.className="toDoItem";
    list.id=c+"";
    list.draggable=true;

    list.addEventListener('dragstart',(e)=>{
        e.dataTransfer.setData('text',e.target.id);
    })

    c++;

    let task=document.createElement('div');
    task.className="name";

    let editButton=document.createElement('button');
    editButton.className='editToDo';
    editButton.innerHTML='edit';

    let deleteButton=document.createElement('button');
    deleteButton.className="deleteToDo";
    deleteButton.innerHTML='delete';

    task.innerHTML=name;
    list.append(task,editButton,deleteButton);
    ul.appendChild(list);
    document.getElementById('enterToDo').value=''

})
function drag(event){
    console.log(event.target);
    event.dataTransfer.setData("text",event.target.id);
}

document.getElementById('toDoContainer').addEventListener('click',(e)=>{
    if(e.target.className=="editToDo"){
      console.log(e.target.parentElement);
      let input = document.createElement('input');
      console.log(e.target.parentElement.firstElementChild.innerHTML)
      input.value=e.target.parentElement.firstElementChild.innerHTML;
      e.target.parentElement.firstElementChild.innerHTML="";

      let doneButton = document.createElement('button');
      doneButton.className='done';
      doneButton.innerHTML='done';

      e.target.parentElement.firstElementChild.append(input,doneButton);
    }else if(e.target.className=='done'){
        e.target.parentElement.innerHTML=e.target.parentElement.firstElementChild.value;
    }else if(e.target.className=='deleteToDo'){
        e.target.parentElement.remove();
    }
})

document.getElementById('doneContainer').addEventListener('dragover',(e)=>{
    e.preventDefault();
})
document.getElementById('doneContainer').addEventListener('drop',(e)=>{
    e.preventDefault();
    var item = e.dataTransfer.getData("text") +"";
    console.log( item, document.getElementById(item))
    document.getElementById('doneContainer').appendChild(document.getElementById(item));
})

document.getElementById('toDoContainer').addEventListener('dragover',(e)=>{
    e.preventDefault();
})
document.getElementById('toDoContainer').addEventListener('drop',(e)=>{
    e.preventDefault();
    var item = e.dataTransfer.getData("text") +"";
    console.log( item, document.getElementById(item))
    document.getElementById('toDoContainer').appendChild(document.getElementById(item));
})

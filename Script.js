var removeicon='<i style="color:#F23D5E;font-size:25px;" id=:"removeicon1" onmouseover="mouseOver()"  class="fa fa-trash"></i>';
var completed='<i style="color:#26717F;font-size:25px;"class="glyphicon glyphicon-thumbs-up"></i>';
//Function to display the To-do item in the completed section.

document.getElementById('button').addEventListener('click', function(){

  var value=document.getElementById('To-do_Content').value;

  if (value) addItemTodo(value);

  document.getElementById('To-do_Content').value = '';
})
//Deleting the TO-DO
function removeItem(){

  var item = this.parentNode.parentNode;

  var parent = item.parentNode;

  parent.removeChild(item);

}

//Marking the TO-DO as completed.
function  removeCompleted(){

  var item = this.parentNode.parentNode;

  var parent = item.parentNode;

  parent.removeChild(item);

}
//Function to display the completed TO-DO in "Your completed list of TO-DO"
function addTodo(){
    
  var item = this.parentNode.parentNode;

  var parent = item.parentNode;

   parent.removeChild(item);

  var target=document.getElementById('completedtoTo-Do');

  var text =  item.innerText;

  var createLi = document.createElement('li');

  createLi.innerText = text;

  var button = document.createElement('div');

  button.classList.add('buttons_completed');

   var removeBut = document.createElement('button');

   removeBut.classList.add('removeBut')

   removeBut.innerHTML=removeicon;
   
   removeBut.addEventListener('click', removeCompleted);

   target.appendChild(createLi);

   createLi.appendChild(button);

   button.appendChild(removeBut);

  
  
  
  
}
//Function to create the TO-DO item.
function addItemTodo(text){
  
  var list=document.getElementById('listoftodo');
  var item = document.createElement('li');

  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove')
  remove.innerHTML=removeicon;
  remove.addEventListener('click', removeItem);

  var add = document.createElement('button');
  add.classList.add('completed')
  add.innerHTML=completed;
  add.addEventListener('click',addTodo);

  buttons.appendChild(remove);
  buttons.appendChild(add);
  item.appendChild(buttons);
  list.insertBefore(item, list.firstElementChild);
}




document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })

  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();


      
    const SimpsonsItem = createSimpsonsListItem(event.target);
    const simpsonsList = document.querySelector('ul');
    simpsonsList.appendChild(SimpsonsItem);
      
    event.target.reset();
      }
      
const createSimpsonsItem = function (form) {
    const SimpsonsItem = document.createElement('li');
    SimpsonsItem.classList.add('SimpsonsItem');
      
    const name = document.createElement('h1');
    title.textContent = form.name.value;
    SimpsonsItem.appendChild(name);
      
    return SimpsonsItem;
      }
    
const handleDeleteAllClick = function (event) {
    const simpsonsList = document.querySelector('#list');
    simpsonsList.innerHTML = '';
      }
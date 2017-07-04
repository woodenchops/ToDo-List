const body = document.querySelector('body');
const form = document.querySelector('form');
const h1 = document.querySelector('h1');
const toDoListHeader = document.createElement('h1');
const input = document.getElementById('inputBox');
const tasksLeftBtn = document.getElementById('incomplete');
const buttonAdd = document.getElementById('button');
const TogglelistBtn = document.getElementById('hideBtn');
const div = document.createElement('div');
const ul = document.createElement('ul'); // contains ul 
let h1Number = 0;

tasksLeftBtn.textContent = "Show Incomplete tasks";
tasksLeftBtn.className = "tasksLeft";

TogglelistBtn.classList = "toggleList";

tasksLeftBtn.addEventListener('click', () => {
    if(tasksLeftBtn.textContent == "Show Incomplete tasks" ) {
        for(let i = 0; i < ul.children.length; i++) {
            const listItems = ul.children[i];
            if(listItems.className == "complete") {
                listItems.style.display = "none";
            } else {
                listItems.style.display = "";
            }
        }
        tasksLeftBtn.textContent = "Show All";
    } else if (tasksLeftBtn.textContent == "Show All") {
            for(let i = 0; i < ul.children.length; i++) {
                const listItems = ul.children[i];
                listItems.style.display = "";
            }
        tasksLeftBtn.textContent = "Show Incomplete tasks";
    }
});

TogglelistBtn.textContent = "hide list";


   TogglelistBtn.addEventListener('click', () => {
       if(TogglelistBtn.textContent == 'hide list') {
           ul.style.display = "none";
           TogglelistBtn.textContent = "show list";
       } else if(TogglelistBtn.textContent = "show list") {
             ul.style.display = "";
             TogglelistBtn.textContent = "hide list";
        }
   });


toDoListHeader.textContent = "To Do List:";
toDoListHeader.className = "tdl_header";
toDoListHeader.appendChild(input);




h1.textContent = "items in list: ";

div.appendChild(toDoListHeader);

div.appendChild(ul);

buttonAdd.type = "submit";

div.appendChild(buttonAdd);

div.insertBefore(buttonAdd, ul);

body.appendChild(div);

//createLI = (userInput) => {
//    const li = document.createElement('li');
//    const span = document.createElement('span');
//    span.textContent = userInput;
//    li.appendChild(span);
//    ul.appendChild(li);


function createLI(userInput) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = userInput;
    li.appendChild(span);
    ul.appendChild(li);
    
    
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = 'remove';
    removeBtn.className = "remove";
    
    
    removeBtn.addEventListener('click', (event) => {
        ul.removeChild(li);
        h1.textContent = "list items: " + (ul.children.length--);
        if(ul.children.length === 0) {
            h1.textContent = "list items:";
        }
    });
    
    const editBtn = document.createElement('button');
    editBtn.textContent = "edit";
    editBtn.className = "edit";
    
    editBtn.addEventListener('click', (event) => {
        const button = event.target;
        const span = li.firstElementChild; 
        const input = document.createElement('input');
        input.type = "text";
        input.className = "editTextInput";
        input.value = span.textContent;
        li.insertBefore(input, span); // targets li and inserts input BEFORE span
        li.removeChild(span);
        editBtn.style.display = "none";
        saveBtn.style.display = "";
    });
    
      const saveBtn = document.createElement('button');
        saveBtn.textContent = "save";
        saveBtn.className = "save";
        saveBtn.style.display = "none";
        
                saveBtn.addEventListener('click', (event) => {
                      const button = event.target;
                      const input = li.firstElementChild; // target input 
                      const span = document.createElement("span"); // create label for li - (name of person)
                      span.textContent = input.value; // name of person equals input value
                      if(input.value == "") {
                          alert('Item is empty');
                      }
                      li.insertBefore(span, input); // targets li and inserts span BEFORE input
                      li.removeChild(input); // remove input from li
                      saveBtn.style.display = "none";
                      editBtn.style.display = "";
                    
                });
    
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.className = "checkbox";
    
    
    checkBox.addEventListener('change', (event) => {
        const ticked = checkBox.checked;
        if(ticked) {
               const li = event.target.parentNode;
               li.className = "complete";
           } else {
               const li = event.target.parentNode;
               li.className = "";
           }
        
    });
    
    
    li.appendChild(editBtn);
    li.appendChild(saveBtn);
    li.appendChild(removeBtn);
    li.appendChild(checkBox);
    
    
    
}





buttonAdd.addEventListener('click', (event) => {
    if(event.target.tagName === "BUTTON") {
        if(event.target.textContent == "Add Item") {
            if(input.value) {
                    
                    const userInput = input.value;
                    createLI(userInput);
                    input.value = "";
                    h1.textContent = "list items: " + (ul.children.length);
                
                   
            }
        }
    }
});


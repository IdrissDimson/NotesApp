// let submitButton = document.getElementById("notes-submit");
// let notesContent = document.getElementById("notes-content");

// let newContent = document.getElementById("new-notes-content");
// let editButton = document.getElementById("notes-edit");
// let addContent = document.getElementById("edit-notes-div");
// let notesDiv = document.getElementById("create-notes-div");

// let deleteNote = document.getElementById("delete-note");

// editButton.addEventListener("click", function() {
//   addContent.style.display = "block";
// })
// submitButton.addEventListener("click", function() {
//   addNewText(newContent, notesContent);
// });
// deleteNote.addEventListener("click", function() {
//   notesDiv.parentNode.removeChild(notesDiv);
// })
let counter = 0;
let oldDiv;
let selected = false;
let addNotes = document.getElementById("add-notes");
let notesGrid = document.getElementById("grid-notes");
let notesArray = document.getElementsByClassName("notes");

addNotes.addEventListener("click", function() {
  if(counter < 7774){
    counter++;
    createNewNotes(counter);
    buttonListeners(counter);
  } else {
    console.log("You reached the limit!");
  }
})

function createNewNotes(index) {
  let notesDiv = document.createElement("div");
  let contentDiv = document.createElement("div");

  let para = document.createElement("p");
  let contentPara = document.createElement("p");

  let contentTextArea = document.createElement("textarea");

  let editButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  let submitButton = document.createElement("button");

  notesDiv.setAttribute("class", "notes");
  notesDiv.setAttribute("id", `add-notes-${index.toString()}`);

  contentDiv.setAttribute("class", "add-content");
  contentDiv.setAttribute("id", `edit-notes-div-${index.toString()}`);

  para.innerText = `Note #${index.toString()}`;
  para.setAttribute("id", `notes-content-${index.toString()}`);
  contentPara.innerText = "Edit Notes Text";
  
  editButton.setAttribute("id", `notes-edit-${index.toString()}`);
  editButton.innerText = "Edit Note";

  deleteButton.setAttribute("id", `delete-note-${index.toString()}`);
  deleteButton.innerText = "Delete Note";

  submitButton.setAttribute("id", `notes-submit-${index.toString()}`);
  submitButton.innerText = "Submit Notes";

  contentTextArea.setAttribute("maxlength", "255");
  contentTextArea.setAttribute("id", `new-notes-content-${index.toString()}`);
  
  notesDiv.appendChild(para);
  notesDiv.appendChild(editButton);
  notesDiv.appendChild(deleteButton);

  contentDiv.appendChild(contentPara);
  contentDiv.appendChild(contentTextArea);
  contentDiv.appendChild(submitButton);

  notesDiv.appendChild(contentDiv);
  notesGrid.appendChild(notesDiv);
}

function buttonListeners(index) {
  let submitButton = document.getElementById(`notes-submit-${index.toString()}`);
  let notesContent = document.getElementById(`notes-content-${index.toString()}`);

  let newContent = document.getElementById(`new-notes-content-${index.toString()}`);
  let editButton = document.getElementById(`notes-edit-${index.toString()}`);
  let addContent = document.getElementById(`edit-notes-div-${index.toString()}`);
  let notesDiv = document.getElementById(`add-notes-${index.toString()}`);

  let deleteNote = document.getElementById(`delete-note-${index.toString()}`);
  notesDiv.addEventListener("click", function() {
    if(selected){
      notesDiv.classList.remove('selected');
      oldDiv.classList.remove('selected');
      let targetNote = document.getElementById(`notes-content-${index.toString()}`);
      if(targetNote === initialNote){
        selected = false;
      } else {
        targetNote.innerText = initialNote.innerText;
        selected = false;
        oldDiv = null;
      }
    } else {
      initialNote = document.getElementById(`notes-content-${index.toString()}`);
      notesDiv.classList.add('selected');
      selected = true;
      oldDiv = notesDiv;
    }
  })
  
  editButton.addEventListener("click", function() {
    addContent.style.display = "block";
  })
  submitButton.addEventListener("click", function() {
    addNewText(newContent, notesContent, addContent);
  });
  deleteNote.addEventListener("click", function() {
    notesDiv.parentNode.removeChild(notesDiv);
  })
}

function addNewText(contentDiv, targetDiv, currentDiv) {
  targetDiv.innerText =  contentDiv.value;
  contentDiv.value = "";
  currentDiv.style.display = "none";
}
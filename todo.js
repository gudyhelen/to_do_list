//todo.js

// July 5th, 2016

function updateStatus() {
    // extract the index
    var cbId = this.id.replace("cb_", "");
    // change it to item id
    var itemInd = document.getElementById("item_" + cbId);
  
    // check the checkbox -> change in text
    if (this.checked){ 
      itemInd.style.textDecoration = "line-through";
      itemInd.style.color="red";
      
      itemInd.style.fontStyle="italic";
      itemInd.style.fontSize="0.9em";
      //itemInd.classname="checked"; 
      // in .css, I can add .checked { //cssStyle }
    } else {
      itemInd.style.textDecoration = "none";
      itemInd.style.fontStyle="";
      itemInd.style.color="black";
      itemInd.style.fontSize="1em";

      // itemInd.classname="";
    }
}

function addItems(itemName,List){

   //make each checkbox+texts unique, for the clicking issue
   totalNum++;

   var Item = document.createElement("li");  

   // give the input type as Checkbox 
   var checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   // give this checkbox an unique id
   checkbox.id = "cb_" + totalNum;
   checkbox.onclick = updateStatus;

   // give the span a unique id, add the innertext be want the user typed
   var span = document.createElement("span");
   span.id = "item_" + totalNum;
   span.innerText = itemName;

   // add checkbox with span(text) to li
   Item.appendChild(checkbox);
   Item.appendChild(span);

   // add li to the list
   List.appendChild(Item);
   

}

//id index
var totalNum = 0;
var totalChecked = 0;

// make the cursor focus on the field
//var inlineText = document.getElementById("inlinetext");
//inlineText.focus();
//var addItem = document.getElementById("buttonNew");

function itemEnter(eve){
   var inlineText = document.getElementById(this.id);
   if(eve.which == 13) {
     var itemName = inlineText.value;
    }

    if((!itemName) || (itemName == "")) {
          return false;
    }

    var listID = this.id.replace("inline-text_", "");
    var thisList = document.getElementById("todolist_"+listID);
    console.log(itemName);
// add items (call function)
       addItems(itemName, thisList);

// after adding items, select the previous field and focus them
         inlineText.value="";
}


// once click the button, add text to according to items
function addItem() {
       var listID = this.id.replace("buttonNew_", "");
       var inlineText = document.getElementById("inline-text_" + listID);
       var itemName = inlineText.value;

//if user enters space or nothing
       if((!itemName) || (itemName == "")) {
          return false;
        }

        var thisList = document.getElementById("todolist_"+listID);

        console.log(itemName);

// add items (call function)
       addItems(itemName, thisList);


// after adding items, select the previous field and focus them
         inlineText.value="";
         inlineText.focus();

}





var totalListNum = 0;

var addList = document.getElementById("addButton");

addList.onclick = function() {
   var listName = prompt("Enter the name of the new list:");
   console.log("1");
     if((!listName) || (listName == "")) {
          return false;
        }

   totalListNum++;
   // print the list Name on the page
   var newList = document.createElement("P");
   var newListName=document.createTextNode(listName);
   newList.style.fontWeight = "bold";
   newList.style.fontSize = "1.5em";
   newList.style.marginBottom="0";
   newList.style.marginTop = "1.5em";
   newList.appendChild(newListName);
   document.body.appendChild(newList);

   // add the text field of item of this list
   var inputLine = document.createElement("P");
   var textField = document.createElement("input");
   textField.type="text";
   textField.id="inline-text_" + totalListNum;
   textField.className="inlinetext";

   // add the button for adding new items of this list
   var itemButton = document.createElement("button");
   var buttonText = document.createTextNode("New Item");
   itemButton.id = "buttonNew_" + totalListNum;
   itemButton.style.marginLeft = "5px";
   itemButton.className="newButton";
   itemButton.appendChild(buttonText);

   // put the text field and list to the page
   inputLine.appendChild(textField);
   inputLine.appendChild(itemButton);
   document.body.appendChild(inputLine);
   console.log("2");

   // add the item ul following the text field and button
   var listOfItem = document.createElement("ul");
   listOfItem.id = "todolist_" + totalListNum;
   document.body.appendChild(listOfItem);


    textField.focus();
    // define the function onkeyup for the textField
    textField.onkeyup = itemEnter;
   // define the function onClick when any new button clicked
   itemButton.onclick = addItem;

   console.log("3");

   
   
};
  

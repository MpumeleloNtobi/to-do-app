"use strict";
let MyTasks=[];
 
function Add_MyTasks(){
    const input_element= document.querySelector('input[name="task"]')
    const input_value=input_element.value.trim() ;
    MyTasks.push(input_value);
    input_element.value="";
    console.log(MyTasks);
    Display(MyTasks);
}

function Display(tasks) {
    let parent_element = document.getElementById("container");
    //for (let i = 0; i < MyTasks.length; i++) {
        let new_element = document.createElement("p");
        new_element.innerHTML = MyTasks[MyTasks.length-1];
        new_element.onclick = () => alert("Delete");
        parent_element.appendChild(new_element);
    //}
}

 //console.log(MyTasks);
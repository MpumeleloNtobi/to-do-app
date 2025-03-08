"use strict";
let MyTasks=[];
 
//I will add a commentgit 
 function Add_MyTasks(){
    const input_element= document.querySelector('input[name="task"]')
    const input_value=input_element.value.trim() ;
    MyTasks.push(input_value);
    
    
        input_element.value="";
    
        console.log(MyTasks); 
 }

 //console.log(MyTasks);
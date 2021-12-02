import React from "react"

function ToDoItems(props){
  
  
 return (
   <div onClick={()=>{props.clickHandler(props.id)}}>
     <li>{props.text}</li>
   </div>
 )
}
export default ToDoItems;
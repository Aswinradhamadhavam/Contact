import React from 'react'
import './display.css'



export default function Display(props) {
  console.log(props);
 
    console.log("display----->",props.disp);
    const ff=props.disp;
 
    // console.log(ff);
  
    
  return (
    
    <div >
    
      {ff.map((read)=>(
        <div className='smain'>
       <div className='sec'>
       <p>Name:  {read.username}</p>
        <p>Email:   {read.email}</p>
       
        <div className='but'> <button onClick={()=>{props.editdetails(read.id)}}>Edit</button> 
         <button onClick={()=>{props.delete(read.id)}}>Delete</button > </div>
       </div>
       </div>
      ))}
    </div>
  )
}

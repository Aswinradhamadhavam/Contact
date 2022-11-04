import React, { useEffect, useState } from 'react'
import './input.css'


export default function Input(props) {
    // console.log(props);


    const tem=props.editdata;
    console.log("editdata------>!!!!!!!!",tem);

    const [update,setupdate]=useState({})
    const [nupdate,setnupdate]=useState(false)

    const [reg,setreg]=useState({})
    const onchange=(e)=>{

      const name=e.target.name;
      const value=e.target.value;
      setreg({...reg,[name]:value})
    
      // console.log(state)
    
    }
    // {tem[0]?.username!=undefined}
    useEffect(()=>{
     if( tem[0]?.username!=undefined){
      setupdate(tem[0])
     }
    

    },[tem])
    console.log("updated----->",update);
    
    const regtr=(event)=>{
      event.preventDefault();
      props.rdata(reg)
    }
    const newchange=(e)=>{
      const uname=e.target.name;
      const nvalue=e.target.value;
      
      setupdate({...update,[uname]:nvalue})

    }
    console.log("new updated---->",update);
    const newupdate=(u)=>{
      u.preventDefault()
      props.delete(tem[0].id)
      // props.rdata(update)
      setnupdate(true)
    }
    useEffect(()=>{
      if(nupdate==true){
        props.rdata(update)
        window.location.reload()
      }
    },[nupdate])
    
  return (
    <div className='main'>
      {tem[0]?.username==undefined?
       <form >
       <div className='mtwo'>
        <h2>Contact </h2>
        <div className='input'>
            <div className='uname'>
            <label>Username</label>
            <input type="text" onChange={onchange} name="username" />
            </div>
           <div className='email'>
           <label>Email ID</label>
            <input type="email" onChange={onchange} name="email" />
           </div>
            <button onClick={regtr}><p>Submit</p></button>

        </div>
        </div>
       </form>
       : <form >
       <div className='mtwo'>
        <h2>Update </h2>
        <div className='input'>
            <div className='uname'>
            <label>Username</label>
            <input type="text" onChange={newchange} value={update.username}  name="username" />
            </div>
           <div className='email'>
           <label>Email ID</label>
            <input type="email" onChange={newchange} value={update.email} name="email" />
           </div>
            <button onClick={newupdate}><p>update</p></button>

        </div>
        </div>
       </form>
      }
    </div>
  )
}

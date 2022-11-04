import logo from './logo.svg';


import { v4 as uuidv4 } from 'uuid';
import Input from './Input';
import {useEffect, useState} from "react";
import Display from './Display';




function App() {


const[state,setState]=useState(JSON.parse(localStorage.getItem("contact"))  || []);
const [edit,setedit]=useState([])

const register=(data)=>
{
 setState([...state,{...data,id:uuidv4()}]) 

}
useEffect(()=>{
localStorage.setItem("contact",JSON.stringify(state))
},[state])


const dele=(uname)=>{
  console.log(uname)
  const fil=state.filter((obj)=>{
    return obj.id!=uname
  })
  setState(fil);
  // localStorage.removeItem("contact",JSON.stringify({username:uname}))
  
}




const editt=(name)=>{
  const filter=state.filter((ob)=>{
    return ob.id==name
  })
  setedit(filter)

  console.log("filter--->",filter);
}

console.log("registrerr---->",state);
  return (
    <div className="App">
     <Input   rdata={register} editdata={edit} delete={dele}/>
     <Display disp={state} delete={dele} editdetails={editt}  />
    
    </div>
  );
}

export default App;

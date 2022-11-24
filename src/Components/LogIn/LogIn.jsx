import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login({saveUserData}) {
    let [user, setUser] = useState({
       
        email: "",
        password: "",
        
      });

      const [error, setError] = useState('')
const [validatError, setValidatError] = useState([])
      let navigate=useNavigate()


 let Submit =async(e)=>{
    e.preventDefault()
let  validatRespons=validatForm()
console.log(validatRespons);
if(validatRespons.error)
{
setValidatError(validatRespons.error.details)
}
else{
  let {data}=await axios.post('https://route-egypt-api.herokuapp.com/signin',user)
  console.log(data);
  if(data.message === 'success')
  {
    localStorage.setItem('token',data.token)
    saveUserData()
  goToHome()
  }
  else{
  setError(data.message)
  }
}

    

}

let validatForm =()=>{
let schema = Joi.object({
 
  email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
  password:Joi.string().min(4).max(14).pattern(new RegExp(/^[a-z][0-9]{3}$/)),
  
})
return schema.validate(user,{abortEarly:false})
}

let goToHome =()=>{
navigate ('/')
}

let getInput=(e)=>{
let myUser={...user}  //deep copy
myUser[e.target.name]=e.target.value
setUser(myUser)
console.log(myUser);
}

  return (
    <>
 
    <form onSubmit={Submit}>

<h1 className='my-5'>LogIn Page</h1>
  {validatError.map((error)=><div className='alert alert-danger'>{error.message}</div>)}

          
       
          <div className="input-data my-2">
            <label htmlFor="email">Email</label>
            <input
              onChange={getInput}
              type="email"
              className="form-control my-2"
              name="email"
            />
          </div>
 {error?         <div>
  <h5 className='alert alert-danger'>{error}</h5>
</div>:''}
          <div className="input-data my-2">
            <label htmlFor="password">Password</label>
            <input
              onChange={getInput}
              type="password"
              className="form-control my-2"
              name="password"
            />
          </div>
          

          <button className="btn btn-info my-3 float-end">Login</button>
          <div className="clear-fix"></div>
        </form>
    
    
    
    </>
  )
}


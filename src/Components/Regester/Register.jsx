import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register() {
    let [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: "",
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
  let {data}=await axios.post('https://route-egypt-api.herokuapp.com/signup',user)
  console.log(data);
  if(data.message === 'success')
  {
  goToLogin()
  }
  else{
  setError(data.message)
  }
}

    

}

let validatForm =()=>{
let schema = Joi.object({
  first_name:Joi.string().alphanum().required().min(4).max(12),
  last_name:Joi.string().alphanum().required().min(4).max(12),
  email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
  password:Joi.string().min(4).max(14).pattern(new RegExp(/^[a-z][0-9]{3}$/)),
  age:Joi.number().min(18).max(50)
})
return schema.validate(user,{abortEarly:false})
}

let goToLogin =()=>{
navigate ('/Login')
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


  {validatError.map((error)=><div className='alert alert-danger'>{error.message}</div>)}

          <div className="input-data my-2 ">
            <label htmlFor="first_name">First Name</label>
            <input
              onChange={getInput}
              type="text"
              className="form-control my-2 "
              name="first_name"
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="last_name">Last Name</label>
            <input
              onChange={getInput}
              type="text"
              className="form-control my-2"
              name="last_name"
            />
          </div>
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
          <div className="input-data my-2">
            <label htmlFor="age">Age</label>
            <input
              onChange={getInput}
              type="number"
              className="form-control my-2"
              name="age"
            />
          </div>

          <button className="btn btn-info my-3 float-end">register</button>
          <div className="clear-fix"></div>
        </form>
    
    
    
    </>
  )
}

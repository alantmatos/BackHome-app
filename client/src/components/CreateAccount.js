import { useState } from "react";
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";



const CreateAccount = ({setUser}) => {

  let navigate = useNavigate();
  let { username } = useParams();

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ e_mail, setEmail ] = useState('');
    const [ city_state, setCity_state ] = useState('');
    const [ password, setPassword ] = useState('');

    const [errors, setErrors] = useState([]);

    const handleCreateAccount = (e) => {
        console.log('Creating Account')
        e.preventDefault();

        const accountData = { name, phone, e_mail,city_state, password }

        fetch('/owners', {
          method: 'POST',
          headers: {'Content-type':'application/json',},
        body: JSON.stringify(accountData)})
        .then((res) => { if (res.ok) {
          res.json().then((user) => setUser(user))
        }
        else {
          res.json().then((err) => setErrors(err.errors));
        }}         )
      console.log("success");
    }





    return ( 
        <div className="formbox">
        <form className="form">
            <label> Create an Account
            <input type="text" name='name' placeholder="Name" onChange={(e)=>setName(e.target.value)} ></input>
            <input type="tel" name='phone' placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}></input>
            <input type="email" name='e_mail' placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="text" name='city_state' placeholder="City_State" onChange={(e)=>setCity_state(e.target.value)}></input>
            <input type="password" name='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>            
            </label>
            <input type="submit" value="Submit" onClick={(e)=>handleCreateAccount(e)} />
        </form>
        </div>
     );
}
 
export default CreateAccount;
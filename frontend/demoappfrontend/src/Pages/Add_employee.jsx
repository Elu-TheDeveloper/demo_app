import React from 'react'
import { useState } from 'react';


function Add_employee() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');   
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    const handleSubmit =  (event) => {
    event.preventDefault();
    const data ={
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password  
    }
    const apiUrl = 'http://16.171.33.168:5000add-employee';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = fetch(apiUrl, requestOptions)
    response.then(res => res.json())
        .then(res=> {
            console.log(res);
        })
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
<label htmlFor="first_name">First Name: </label>
    <input type="text" id="first_name" name="first_name" value={firstName} onChange={event=>setFirstName(event.target.value)} placeholder="Enter first name" required />
    <br />  
    <label htmlFor="last_name">Last Name: </label>
    <input type="text" id="last_name" name="last_name" value={lastName} onChange={event=>setLastName(event.target.value)}placeholder="Enter last name" required />
    <br />
    <label htmlFor="email">Email: </label>      
    <input type="email" id="email" name="email" value={email} onChange={event=>setEmail(event.target.value)}placeholder="Enter email" required />
    <br />
    <label htmlFor="password">Password: </label>
    <input type="password" id="password" name="password" value={password} onChange={event=>setPassword(event.target.value)} placeholder="Enter password" required />
    <br />
     <button type="submit">Add Employee</button>     
    <br />
    </form>
    
   
   
    </>
  )
}

export default Add_employee;
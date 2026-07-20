import React, { useState } from "react";

const Web = () => {

  const [formdata, setFormdata] = useState({
    name:"",
    email:"",
    password:"",

  })

 
  
  const handleChange = (e)=>{
           setFormdata({...formdata,  [e.target.name] : e.target.value})
           console.log(formdata);
      }  

 
  return (
    <div className="flex flex-col gap-4 w-60">
      <input onChange={handleChange} 
        name ="name" 
        className="border-2 p-2"
        type="text"
        placeholder="Name"
      />

      <input onChange={handleChange}
        name = "email"
        className="border-2 p-2"
        type="text"
        placeholder="Email"
      />

      <input onChange={handleChange}
        name="password"
        className="border-2 p-2"
        type="text"
        placeholder="Password"
      />

      <button className="border-2 p-2">Submit</button>

     {/* <h1>this is name - {name}</h1>
     <h1>this is email - {email}</h1>
     <h1>this is password - {password}</h1> */}

    </div>
  );
};

export default Web;

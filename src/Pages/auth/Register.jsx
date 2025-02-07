import axios from "axios";
import React, { useState } from "react";
import {createAlert} from "../../utils/createAlert"

function Register() {
  const [value, setValue] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  });
  const hdlOnChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });

    };
    const hdlSubmit = async(e) => {
      e.preventDefault();
      try {
        const resp =await axios.post("http://localhost:8000/api/register",value)
        console.log(resp);
       
        createAlert("success","Register Success")
        
      } catch (error) {
        createAlert("info",error.response.data.message)
        console.log(error.response.data.message);
      }
      
  };
  console.log(value);
  return (
    <div className="flex w-full h-full justify-end">
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register</h1>

        {/* Form */}
        <form onSubmit={hdlSubmit}> 
          <div>
            <input
              placeholder="Email"
              type="text"
              name="email"
              className="border w-full border-blue-200 round-md p-1 px-4"
              onChange={hdlOnChange}
            />
          </div>

          <div>
            <input
              placeholder="firstname"
              type="text"
              name="firstname"
              className="bg-blue-100 border w-full border-gray-400 round-md p-1 px-4"
              onChange={hdlOnChange}
            />
          </div>

          <div>
            <input
              placeholder="lastname"
              type="text"
              name="lastname"
              className="bg-blue-100 border w-full border-gray-400 round-md p-1 px-4"
              onChange={hdlOnChange}
            />
          </div>

          <div>
            <input
              placeholder="password"
              type="text"
              name="password"
              className="bg-blue-100 border w-full border-gray-400 round-md p-1 px-4"
              onChange={hdlOnChange}
            />
          </div>

          <div>
            <input
              placeholder="confirmpassword"
              type="text"
              name="confirmpassword"
              className="bg-blue-100 border w-full border-gray-400 round-md p-1 px-4"
              onChange={hdlOnChange}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-gray-200 px-2 py-2 rounded-b-md  hover:cursor-pointer">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

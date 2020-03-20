import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useAuth } from "../../context/auth-context";

export const Login = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
    loading: false
  });
const { login } = useAuth();
  useEffect(() => {
    console.log(formInput);
  });

  const handleInputChange = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    
    try {
      console.log(login)
      const res = await login({ ...formInput });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    // const { username, password } = formInput;
    // setFormInput({
    //   ...formInput,
    //   loading: true
    // });
    // try {
    //   const res = await Axios.post("http:localhost:5000", {
    //     username,
    //     password
    //   });
    //   if (res.status === 200) {
    //     console.log("ALL GOOD");
    //     //redirect to tenant dash
    //   }
    // } catch (error) {
    //   //show snackbar
    // } finally {
    //   setFormInput({
    //     ...formInput,
    //     loading: false
    //   });
    // }
  };

  return (
    <>
      <div>
        <input
          name="email"
          placeholder="email"
          onChange={e => handleInputChange(e.target.name, e.target.value)}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={e => handleInputChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </>
  );
};

import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regiterHandle= ()=>{
    console.log(name, email, password);
  }
  
  return (
    <div className="login bg-gray-300    ">
      <form className="login__form bg-gray-300 h-screen  flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold py-4">Regiter Here</h1>
        <input
          className="border-2 px-10 py-2 m-2"
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 px-10 py-2 m-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 px-10 py-2 m-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="submit__btn px-28 py-2 m-2 bg-black text-white" onClick={regiterHandle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;

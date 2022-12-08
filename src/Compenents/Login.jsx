import {logValue,enterValue} from "../redux/action-created"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data , setData]=useState({});
  const [line, setLine]=useState();
  const [line2, setLine2]=useState();
  const[name, setName]=useState("");


  const myState=useSelector(state=>state.ourState.value);
  console.log(myState,"myState")

  const dispatch =useDispatch()

  const loginHandle=()=>{
     let item={email,password,line,line2}
     dispatch(logValue(item))
     
  }

  const submitData=()=>{
    dispatch(enterValue(name))
    setName("")
  }






  console.log(myState);
  
  return (
    <div className="login    ">
      <div className="login__form bg-gray-300 h-screen  flex flex-col justify-center items-center ">
        <h1 className="text-2xl font-bold py-4 ">Login Here</h1>
        
       
        <input
          className="border-2 px-10 py-2 m-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
        />
        <input
          className="border-2 px-10 py-2 m-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

<input
          className="border-2 px-10 py-2 m-2"
          type="line"
          placeholder="line"
          value={line}
          onChange={(e) =>setLine(e.target.value)}
        />
        <input
          className="border-2 px-10 py-2 m-2"
          type="line2"
          placeholder="line2"
          value={line2}
          onChange={(e) => setLine2(e.target.value)}
        />

<input
          className="border-2 px-10 py-2 m-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>setName(e.target.value)}
        />

        <button type="submit" className="submit__btn px-24 py-2 m-2 bg-black text-white" onClick={loginHandle}>
          Submit
        </button>
        <div>
          {myState.map((item ,index)=>{
            return(
              <>
              <div>
                {item}

              </div>
              </>
            )
            
          })}
          <button type="submit" className="submit__btn px-24 py-2 m-2 bg-black text-white" onClick={submitData}>
          Name Click
        </button>

          
        

        </div>
        
      </div>
    </div>
  );
};

export default Login;

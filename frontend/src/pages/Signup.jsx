import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName, SetfirstName] = useState('');
    const [lastName, SetlastName] = useState('');
    const [username, Setusername] = useState('');
    const [password, Setpassword] = useState('')
    const navigate = useNavigate()

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox parentFun={(e)=>{
          SetfirstName(e.target.value)
        }} placeholder="John" label={"First Name"} />
        <InputBox parentFun={(e)=>{
          SetlastName(e.target.value)
        }} placeholder="Doe" label={"Last Name"} />
        <InputBox parentFun={(e)=>{
          Setusername(e.target.value)
        }} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox parentFun={(e)=>{
          Setpassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async ()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            })
            localStorage.setItem("token", response.data.token)
            // navigate hook likhna hai yaha pe
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}
// the onClick function in Button component can also be onpress, we just have to change it in the component also
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signin = () => {
    const [username, Setusername] = useState('');
    const [password, Setpassword] = useState('');
    const navigate = useNavigate()

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox parentFun={(e)=>{
          Setusername(e.target.value)
        }} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox parentFun={(e)=>{
          Setpassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async ()=>{
            const response = await axios.post("https://payment-app-fvkc.onrender.com/api/v1/user/signin", {
              username,
              password
            })
            localStorage.setItem("token", response.data.token)
            navigate('/dashboard')
          }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/"} />
      </div>
    </div>
  </div>
}

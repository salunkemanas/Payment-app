import React from 'react'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'
export function Sent() {
  const navigate = useNavigate()
  return (<>
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">Money Sent</div>
        <img src="../tick.png" alt="tick" className=' w-80'/>
        <Button onClick={()=>{
          navigate("/dashboard")
        }} label={"Dashboard"} />
    </div>
    </div>
    
  </>
    
  )
}

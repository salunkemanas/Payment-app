import React from 'react'
import { useLocation } from 'react-router-dom'

export function Failed() {
    const location = useLocation();
    const errorMessage = location.state?.errorMessage || 'An unknown error occurred'
    console.log(errorMessage)
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <h1>Failed</h1>
                <div>Error Message: {errorMessage}</div>
            </div>
            
        </div>
    </div>
  )
}

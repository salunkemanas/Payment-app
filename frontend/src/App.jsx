import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { Sent } from "./pages/Sent"
import { Failed } from "./pages/Failed"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney/>}/>
          <Route path="/sent" element={<Sent/>}/>
          <Route path="/failed" element={<Failed/>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App

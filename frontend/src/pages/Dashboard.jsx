import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"
export const Dashboard = () => {
    const [username, Setusername] = useState("");
    const [firstName, SetfirstName] = useState("");
    const [lastName, SetlastName] = useState("");
    const [balance, Setbalance] = useState("");
    useEffect(()=>{
        axios("http://localhost:3000/api/v1/account/balance",{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res)=>{
            Setbalance(res.data.balance);
            Setusername(res.data.username);
            SetfirstName(res.data.firstName);
            SetlastName(res.data.lastName);
        })
    },[])
    return <div>
        <Appbar firstName={firstName} lastName={lastName}/>
        <div className="m-8">
            <Balance value={balance} />
            <Users username={username} />
        </div>
    </div>
}
import Users from "./Users"
// import UserData from '../Data/Users'
import { useState } from "react"
import usersData from "../Data/Users"
// console.log(UserData);
const UserList = () => {
const [user, setUser] = useState(usersData);
    return (
        <div className="container">
            {user.map(p =>(
                <Users {...p} key={p.id}/>
            ))}
            <button onClick={()=> setUser([])}
            className="bg-red-300 p-5 text-white">Remove All</button>
        </div>
    )
}
export default UserList
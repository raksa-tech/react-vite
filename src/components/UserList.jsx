import Users from "./Users"
import { useState } from "react"
import usersData from "../Data/Users"
const UserList = () => {
const [user, setUser] = useState(usersData);
const getIdUser = (id) => {
    const filter = user.filter(u => u.id !== id);
    setUser(filter);
}
    return (

        <div className="container">
            {user.map(p =>(
                <Users {...p} getId={getIdUser} key={p.id}/>
            ))}
            <button onClick={()=> setUser([])}
            className="bg-red-300 p-5 text-white">Remove All</button>
        </div>
    )
}
export default UserList
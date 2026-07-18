import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import axios from 'axios'
const FetchingData = () => {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setTimeout(() => {
          setUsers(data);
        }, 300);
      } catch (error) {
        console.log('error.response.status :>> ', error.response.status);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-4 gap-6">
      <button className="p-3 border-2 border-blue-500 cursor-pointer"

      >Refresh</button>
      <button className="p-3 border-2 border-blue-500 cursor-pointer"

      >Update Data</button>
      {
        users.map((user) => <UserCard user={user} key={user.key} />)
      }
    </div>
  );
};

export default FetchingData;
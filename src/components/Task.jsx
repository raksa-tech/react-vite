import {useState} from 'react'
const Task = () => {
    const [count, setCount] = useState(0);
    return(
        <div className="container mx-auto p-4 flex items-center justify-center h-screen">
            <h3 className="text-2xl font-bold">Count: {count}</h3>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white p-2 rounded-md ml-4 cursor-pointer">+</button>
            <button onClick={() => {
                if(count > 0) {
                    setCount(count - 1);
                }else {
                    return;
                }
            }} className="bg-red-500 text-white p-2 rounded-md ml-2 w-7 cursor-pointer">-</button>
        </div>
    )
}
export default Task;
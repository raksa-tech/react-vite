import { useState } from "react";
const GetInput =() => {
    const [value, setValue] = useState('');
    return (
        <div className="container mx-auto p-4 block items-center justify-center h-screen">
            <h2 className="p-3">Value: {value}</h2>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button onClick={()=> setValue('')} className="bg-red-500 text-white p-2 rounded-md ml-4 cursor-pointer" onClick={() => setValue('')}>Clear</button>
        </div>
    )
}
export default GetInput
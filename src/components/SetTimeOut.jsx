import { useState } from 'react';
const SetTimeOut = () => {
const [num, setNumber] = useState(0);

return (
    <div className="container mx-auto p-4 flex items-center justify-center h-screen">
        <h3 className="text-2xl font-bold">Number: {num}</h3>
        <button className="bg-blue-500 text-white p-2 rounded-md ml-4 cursor-pointer" onClick={() => {
            setTimeout(() => setNumber((pre) => pre+1), 3000);
        }}>Set</button>
    </div>
)
}
export default SetTimeOut
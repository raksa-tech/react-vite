import { useState } from "react"
const Toggle = () => {
    const [state, setState] = useState(true);
    return (
        <div className="container bg-gray-200">
            {state ? <Message /> : null}
            <button onClick={() => setState(!state)}
            className="bg-blue-400 p-1.5 cursor-pointer">Click</button>
        </div>
    )
}
const Message = () =>{
    return (
        <div>
        <h2 className="font-bold">Message Loading .... </h2>
        </div>
    )
}
export default Toggle;
import { useState } from "react";
const Form =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    function HandleSubmit(e){
        e.preventDefault();
        console.log(name, email);
    }
    return(
       
        <div className="container">
            <form className="form bg-amber-100 p-2">
                <label htmlFor="name">Your Name</label>
                <input id="name" value={name} type="text" 
                onChange={(e)=> setName(e.target.value)}
                className="p-2 border-2"
                />
                <label htmlFor="email">Email</label>

                <input id="email" value={email} type="email" 
                onChange={(e)=> setEmail(e.target.value)}
                className="p-2 border-2"
                />
                <button onClick={HandleSubmit}
                  >Submit</button>
            </form>
        </div>
    )
}
export default Form;
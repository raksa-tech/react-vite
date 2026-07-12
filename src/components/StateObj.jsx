import {useState} from 'react'
const Person = {
    name: "Chhem Raksa",
    age: 30,
    email: "chhem.raksa@gmail.com"
}
const StateObj = () => {
    const [person, setPerson] = useState(Person);
    return (
        <div className="container p-4 flex items-center justify-center">
            <div className="bg-gray-200 p-4 rounded-md shadow-md">
                <h2 className="text-gray-700 text-xl font-bold">{person.name}</h2>
                <p className="text-gray-700">Age: {person.age}</p>
                <p className="text-gray-700">Email: {person.email}</p>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md ml-4 cursor-pointer" onClick={() => setPerson({...person, name: "John Doe", email: "john.doe@gmail.com"})}>Edit</button>
        </div>
    )
}
export default StateObj;
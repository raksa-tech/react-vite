
const Users = ({img, name, age, gender, email,id, getId}) => {
function handleGetId() {
    getId(id)
}
    return (
        
        <div className="container mx-auto p-4 flex items-center justify-center">
            <article className='flex items-center justify-center bg-blue-500 font-bold'>
                <img className='h-20' src={img} alt="" />
                <h3 className='p-3'>{name}</h3>
                <h3 className='p-3'>{age}</h3>
                <h3 className='p-3'>{gender}</h3>
                <h3 className='p-3'>{email}</h3>
               <button onClick={handleGetId}
                className='bg-red-500 cursor-pointer p-4'>Remove</button>
            </article>
             
        </div>
    )
}
export default Users
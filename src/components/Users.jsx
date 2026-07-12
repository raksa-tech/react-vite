
const Users = ({id,img, name, age, gender, email }) => {
    
    return (
        
        <div className="container mx-auto p-4 flex items-center justify-center">
            <article className='flex items-center justify-center bg-blue-500 font-bold'>
                <img className='h-20' src={img} alt="" />
                <h3 className='p-3'>{name}</h3>
                <h3 className='p-3'>{age}</h3>
                <h3 className='p-3'>{gender}</h3>
                <h3 className='p-3'>{email}</h3>
               
            </article>
             <button onClick={() => console.log(id)}
                className='bg-red-500 cursor-pointer p-4 mask-radial-from-cyan-300'>Remove</button>
        </div>
    )
}
export default Users
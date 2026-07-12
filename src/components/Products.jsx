import Card from "./Card"
const Products = () => {
const shoes = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/14029288/pexels-photo-14029288.jpeg",
        brand: "ABC",
        description: "New comfortable running shoes",
        price: "$5.0"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/14029288/pexels-photo-14029288.jpeg",
        brand: "ABV",
        description: "Comfortable running shoes",
        price: "$54.0"
    },
]
const newShoes = [...shoes];
return (
    <div className="flex space-x-4">
       {newShoes.map((item)=> {
        return <Card key={item.id} {...item}/>
       })}
    </div>
)
}
export default Products;
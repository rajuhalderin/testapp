
async function ProductList(){
    let data = await fetch("https://dummyjson.com/products");
    data = data.json();
    return data.products
}

export default async function Product(){
    let products = await ProductList();
    console.log(products);
    return(
        <div>
            {
                products.map((item)=>(
                    <h3>{item.title}</h3>
                ))
            }
        </div>
    )
}
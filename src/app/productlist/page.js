
async function ProductList(){
    let data = await fetch("https://dummyjson.com/products");
    data = data.json();
    return data.products
}

export default async function Product(){
    return(
        <div>
            <p>Hello</p>
        </div>
    )
}
import {useParams} from "react-router-dom"
import {products } from "../../db/product"
import {useNavigate} from "react-router-dom";

export const ProductDetail=()=>{
    const navigate = useNavigate();
    const params = useParams()
    console.log(params)

    const selectedProduct=products.find((product)=>{return product.id === params.productId})
    return (
        <div>
            <h1>Product Detail</h1>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name}/>
            <button onClick={()=>{navigate('/')}}>Logout</button>
        </div>
    )
}
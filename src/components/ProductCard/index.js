import {useCart} from "../../context/count-context"
import {useNavigate} from 'react-router-dom'


export const ProductCard=({product})=>{
    const {cartDispatch} = useCart()
    const Navigate = useNavigate();
    const addToCartOnClick=()=>{
        cartDispatch({
            type :'ADD_TO_CART',
            payload:product
        })
    }

    function RemoveToCartOnClick() {
        cartDispatch({
            type :'REMOVE_TO_CART',
            payload:product
        })
    }

    function onProductShow() {
        Navigate(`/ProductDetail/${product.id}`)
    }

    return (
        <div className="flex flex-col border">
            <div onClick={onProductShow}>
                <h2 >{product.name}</h2>
            </div>
            <div className="flex gap-8px">
                <p>Brand-{product.brand}  </p>
                <p>Price-{product.currentPrice} </p>
                <p>Rating-{product.rating} </p>
                <p >Discount-{product.discountPercentage}</p>
            </div>
            <div>
                <button onClick={addToCartOnClick}>Add To Cart</button>
                <button onClick={RemoveToCartOnClick}>Remove To Cart</button>
            </div>
        </div>
    )
}
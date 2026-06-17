import {useCart} from "../../context/count-context"

export const Product=({product})=>{
    const {cartDispatch} = useCart()
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

    return (
       <div className="flex flex-col border">
           <div>
               {/*/<img src={product.imageUrl} alt={product.name}/>*/}
               <h2>{product.name}</h2>
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
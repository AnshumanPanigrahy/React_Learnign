import {useCart} from "../../context/count-context"

export const Navbar=()=>{

    const{cart}=useCart()
    console.log(cart);
    return (
        <div>
           <h2>Shop</h2>
            <p>Cart Count-{cart.length}</p>
        </div>
    )
}

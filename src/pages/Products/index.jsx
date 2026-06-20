import {Navbar} from "../../components/Navbar";
import {products} from "../../db/product";
import {ProductCard} from "../../components/ProductCard";


export const Products=()=>{
    return(
        <div className="App">
            <Navbar className="app-header"/>
            <h1 className="app">Product</h1>
            <div className='flex gap-16px app'>
                {products.length > 0 ? (
                    products.map(item => <ProductCard key={item.id} product={item} />)
                ) : (
                    <p>No products found.</p>
                )}
            </div>

        </div>
    )
}
import './App.css';
import {Navbar} from './components/Navbar'
import {Product} from './components/Products'
import { products } from "./db/product";


function App() {


    return (
    <div className="App">
        <Navbar className="app-header"/>
        <h1 className="app">Product</h1>
        <div className='flex gap-16px app'>
            {products.length > 0 ? (
                products.map(item => <Product key={item.id} product={item} />)
                 ) : (
                 <p>No products found.</p>
            )}
        </div>

    </div>
  );
}

export default App;

import './App.css';
import {useState} from 'react'

const  allBrand=[
    {id:1,brand:'puma'},
    {id:2,brand:'adidas'},
    {id:3,brand:'bat'},
    {id:4,brand:'titan'},
    {id:5,brand:'techno Sports'},
    {id:6,brand:'reebok'},
]

function App() {
    const [selectedBrand, setSelectedBrand] = useState([]);

    function onAddToCartClick(id) {
             const  selectedItem=allBrand.find(item => item.id === id);
             setSelectedBrand([...selectedBrand,selectedItem])
    }
    const onRemoveClick=(id)=>{
         const filteredItem=selectedBrand.filter(item => item.id !== id);
         setSelectedBrand(filteredItem)
    }

    return (
    <>
        <div className="App">
            <p>Add Brand to your Cart</p>
            {
                allBrand.map(item=>
                    <div>
                        <span>{item.brand}</span>
                        <button onClick={()=>onAddToCartClick(item.id)}>Add To Cart</button>
                    </div>
                )
            }
        </div>
        <div>
            <p>Your Cart</p>
            {
                selectedBrand  &&   selectedBrand.map(item=><p>{item.brand}:<button onClick={()=>onRemoveClick(item.id)}>Remove</button></p>)
            }
        </div>
    </>
  );
}

export default App;

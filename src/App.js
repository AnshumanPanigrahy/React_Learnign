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
    let [brands,setBrand]=useState(allBrand)

    function onSearchChange(event) {
        let filteredBrand;
        filteredBrand = event.target.value.length > 0 ? brands.filter(branded => branded.brand.includes(event.target.value.toLowerCase())) : allBrand;
        setBrand(filteredBrand)
    }

    return (
    <>
        <input onChange={onSearchChange} placeholder="Search..."/>
        <ul>
            {
            brands.map(branded=><li key={branded.id}>{branded.brand}</li>)
            }
        </ul>
    </>
  );
}

export default App;

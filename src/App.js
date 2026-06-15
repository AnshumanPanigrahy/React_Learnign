import './App.css';
import {useReducer} from 'react'


function App() {
   // const [price, setPrice] = useState("")
   // const[discount, setDiscount] = useState("40")
   // const [rating, setRating] = useState()

    const initialState = {
        count: 0
    }


    function reducerFun(state, action) {
        switch(action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    count: state.count + 1
                }
            case 'DECREMENT':
                return {
                    ...state,
                    count: state.count - 1
                }
            default:
                return state;
        }

    }

    const [state,dispatch]=useReducer(reducerFun,initialState)
     //console.log(state)

    function onDecClick() {
        dispatch({type:'DECREMENT'})
    }

    return (
    <div className="App">
       <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Inc</button>
        <button onClick={onDecClick}>Dec</button>
    </div>
  );
}

export default App;

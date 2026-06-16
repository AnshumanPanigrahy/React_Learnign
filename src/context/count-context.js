import {createContext,useContext,useState} from 'react';




const CountContext = createContext(0);
//Provider
const CountProvider=({children})=>{
    const [count,setCount]=useState(111)

    return(
        <CountContext.Provider value={{count,setCount}}>
            {children}
        </CountContext.Provider>
    )
}
//consumer
const useCount = () => useContext(CountContext)

export {useCount,CountProvider}

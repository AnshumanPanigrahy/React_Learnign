import './App.css';
import {useRef,forwardRef} from 'react'


const MyBtn=forwardRef(
    (props,ref)=>{
    console.log(props)
    return (
        <input ref={ref} placeholder='Serching'/>
    );
})


function App() {

    const inputRef = useRef(0);

    const onFocusClick = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    return (
    <>
        <MyBtn placeholder="Searching Something" ref={inputRef}/>
        <button onClick={onFocusClick}>Focus on Input</button>
    </>
  );
}

export default App;

import './App.css';
import {useState,useRef} from 'react'



function App() {
    const [count, setCount] = useState(0);
    const timerRef = useRef("Anshuman");
    // eslint-disable-next-line no-unused-vars

    const onStartClick=()=>{
            timerRef.current=setInterval(()=>{
                setCount(count => count + 1)
            },100)
        console.log({timerRef})
    }
     const onStopClick=()=>{
        clearInterval(timerRef.current)
         console.log({timerRef})
     }
    return (
    <>
      <p>Count-{count}</p>
        <button onClick={onStartClick}>Start</button>
        <button onClick={onStopClick}>Stop</button>
    </>
  );
}

export default App;

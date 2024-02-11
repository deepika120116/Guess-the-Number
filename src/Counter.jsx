import {useState} from 'react';

const Counter=()=>{
    const [count,setCount]=useState({counter:100});
    const increment=()=>{
        setCount((prev)=>{
            return {counter:prev.counter+3}
        });
    };
    const decrement=()=>{
        setCount((prev) =>{
            return{counter:prev.counter-3}
        });
    };
    return(
        <>
            <h1>Counter Using State</h1>
            <h4>{count.counter}</h4>
            <button onClick={increment}>+3</button>
            <button onClick={decrement}>-3</button>
        </>
    );
};
export default Counter;
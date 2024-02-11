import { useReducer } from "react";
const ReducerCounter=()=>{
    const reducerFunc=(state,action)=>{
        switch(action.type){
            case "INCREMENT":
                return state+action.payload;
            case "DECREMENT":
                return state-action.payload;
            default:
                return state;
        }
    };
    const[state,dispatch]=useReducer(reducerFunc,1000);
    const increment=(amount)=>{
        dispatch({type:"INCREMENT",payload:amount});
    };
    const decrement=(amount)=>{
        dispatch({type:"DECREMENT",payload:amount});
    };
    return(
        <>
            <h1>Counter using useReducer</h1>
            <h4>{`current state is ${state}`}</h4>
            <button onClick={()=>increment(500)}>+3</button>
            <button onClick={()=>decrement(500)}>-3</button>
        </>
    );
};
export default ReducerCounter;
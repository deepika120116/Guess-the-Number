import { createContext, useContext, useState } from 'react';

const headingContext=createContext();
const Context=()=>{
   const[name]= useState('Rendering to Child component');
    return(
        <headingContext.Provider value={name}>
        <h1>Component main Heading</h1>
        <Comp1/>
        </headingContext.Provider>
    );
};
export default Context;

const Comp1=()=>{
    return(
        <>
        <h3>Component1</h3>
        <Comp2/>
        </>
    
    )
};
const Comp2=()=>{
    return (
        <>
        <h3>Component2</h3>
        <Comp3/>
        </>
    )
};
const Comp3=()=>{
    const heading=useContext(headingContext);
    return(
        <>
        <h3>Component3</h3>
        <h4>{heading}</h4>
        </>
    )
};
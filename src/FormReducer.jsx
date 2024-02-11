import { useId,useReducer } from "react";

const FormReducer=()=>{
    const nameId=useId();
    const emailId=useId();
    const passwordId=useId();
    const ageId=useId();
    const studentId=useId();
const initialState={
    name:"",
    email:"",
    password:"",
    age:0,
    student:false
};
const formValidation=(state,action)=>{
    switch(action.type){
        case "INPUT_VALUE":
            return{
                ...state,
                [action.field]:action.payload
            }
        case "INPUT_NUMBER":
            return{
                ...state,
                [action.field]:action.payload
            }
        case "INPUT_BOOLEAN":
            return{
                ...state,
                [action.field]:action.payload
            }
        default:
            return state;
    }
};
   const[formState,dispatch]= useReducer(formValidation,initialState);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formState);
    };
    const handleInputValue=(e)=>{
        dispatch({
            type:"INPUT_VALUE",
            field:e.target.name,
            payload:e.target.value
        })
    };
    const handleInputNumber=(e)=>{
        dispatch({
            type:"INPUT_NUMBER",
            field:e.target.name,
            payload:Number(e.target.value)
        })
    };
    const handleBoolean=()=>{
        dispatch({
            type:"INPUT_BOOLEAN",
            field:"student",
            payload:!formState.student
        })
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={nameId}>Name</label>
                <input type="text" placeholder="name"
                value={formState.name}
                name="name"
                id={nameId} onChange={handleInputValue}/>
            </div>
            <div>
                <label htmlFor={emailId}>Email</label>
                <input type="email" placeholder="email" id={emailId}
                value={formState.email} 
                name="email"
                onChange={handleInputValue}/>
            </div>
            <div>
                <label htmlFor={passwordId}>Password</label>
                <input type="password" id={passwordId} placeholder="Password" 
                value={formState.password}
                name="password"
                onChange={handleInputValue}/>
            </div>
            <div>
                <label htmlFor={ageId}>Age</label>
                <input type="number" id={ageId} placeholder="Age" 
                value={formState.age}
                name="age"
                onChange={handleInputNumber}/>
            </div>
            <div>
                <label htmlFor={studentId}>Student</label>
                <input type="checkBox" id={studentId} 
                value={formState.student}
                name="student"
                onChange={handleBoolean}/>
            </div>
        <button type="submit">Submit</button>
        </form>
    );
};
export default FormReducer;
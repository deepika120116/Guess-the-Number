import { useEffect, useState } from 'react'
import Result from './Result';
import Login from './Login';
import './App.css'
import FormReducer from './FormReducer';


function App() {
  const [term, setTerm] = useState(0);
  const [secretNum,setSecretNum]=useState(0);
  const handleChange=(e)=>{
    setTerm(e.target.value);
  }
  useEffect(()=>{
	setSecretNum(Math.floor(Math.random()*10)+1);
  },[]);
  let myWindow;
  const openWindow=()=>{
    myWindow=window.open("Counter.jsx","","width=1000px,height=400px");
    // myWindow=window.open("login.jsx");
  }
const closeWindow=()=>{
  myWindow.close();
}
  return (
    <>
    <div className="container">	
    <div   style={{height:"5vh"}}>

    {/* <Login/> */}

    </div>
		<div className="head">
			<label htmlFor="term">Guess a number between 1 to 10</label>
			ans({secretNum})
		</div>   
			<input type="text" id="term" name="term" 
			onChange={handleChange}
			/>   
			<Result suspense={secretNum} userNum={term}/>
      {/* <FormReducer/>
      <button onClick={openWindow}>open window</button>
      <button onClick={closeWindow}>Close window</button> */} 
	</div>

  </>
  )
}

export default App

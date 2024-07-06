import { useState } from "react";



function App() {

  const [value, setValue] = useState("");
  // const handleClick = (e) => {
  //  (prev)=>{
  //   setInput(e.target.value+prev);
  //  }
    
  // }
  const handleAdd = () => {
    
  }




  return (
    <div className="App">
      <h1>Calculator</h1>
    <div class="container center">
            <div class="textbox" maxLength={10} >
            {value}
            </div>
            <button value='+' class="buttons plus .btn-color" onClick={(e) => (setValue(value + e.target.value))}>+</button>
            <button value='-' class="buttons minus .btn-color" onClick={(e) => (setValue(value + e.target.value))}>-</button>

            <button value='*'  class="buttons into .btn-color" onClick={(e) => (setValue(value + e.target.value))}>x</button>
            <button value= '/' class="buttons divide .btn-color" onClick={(e) => (setValue(value + e.target.value))}>/</button>
            <button value= '7'  class="buttons seven" onClick={(e) => (setValue(value + e.target.value))}>7</button>
            <button value= '8' class="buttons eight" onClick={(e) => (setValue(value + e.target.value))}>8</button>
            <button value= '9' class="buttons nine" onClick={(e) => (setValue(value + e.target.value))}>9</button>
            <button value= '4' class="buttons four" onClick={(e) => (setValue(value + e.target.value))}>4</button>
            <button value= '5' class="buttons five" onClick={(e) => (setValue(value + e.target.value))}>5</button>
            <button value= '6' class="buttons six" onClick={(e) => (setValue(value + e.target.value))}>6</button>
            <button value= '1' class="buttons one" onClick={(e) => (setValue(value + e.target.value))}>1</button>
            <button value= '2' class="buttons two" onClick={(e) => (setValue(value + e.target.value))}>2</button>
            <button value= '3' class="buttons three" onClick={(e) => (setValue(value + e.target.value))}>3</button>
            <button value= '0' class="buttons zero" onClick={(e) => (setValue(value + e.target.value))}>0</button>
            <button value='.' class="buttons dot" onClick={(e) => (setValue(value + e.target.value))}>.</button>
            <button class="buttons clear" onClick={()=>setValue("")}>C</button>
            <button class="buttons equalTo .btn-color" onClick={(e) => (setValue(eval(value)))}>=</button>
            
    </div>
    </div>
  );
}

export default App;

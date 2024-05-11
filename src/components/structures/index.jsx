import React, { useState } from 'react'

const UseStateCounterComponent = () => {
    const [count, setCount] = useState(0)
    
    function handleIncreament(){
       setCount (count +1)
    }
    function handleDecreament(){
        if (count > 0){
        setCount (count -1)
    }
    else{
        alert("The count is: 0")
    }
     }
   
  return (
    <div  style={{ border: "1px solid orange", margin: "60px", padding: "30px" }}>
        <p>Count: {count}</p>
        <button onClick={ handleIncreament}>Increament</button>
        <button onClick={ handleDecreament}>Decreament</button>
    </div>
  )
}

export default UseStateCounterComponent
import React, { useState } from 'react'

const UseStateComponent = () => {
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
    <div>
        <p>Count: {count}</p>
        <button onClick={ handleIncreament}>Increament</button>
        <button onClick={ handleDecreament}>Decreament</button>
    </div>
  )
}

export default UseStateComponent
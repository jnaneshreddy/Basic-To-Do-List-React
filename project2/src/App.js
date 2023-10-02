
import './App.css';
import React, { useState } from 'react';

import './index.css'


const  App = () => {
  const [count,setCount] = useState(0)

  // const incr = ()=>{
  //   setCount(count+1);
  // }
  return (
<div className="holder"  >
<button className="btn"onClick={()=> setCount(count+1)}>+</button>
<h1>{count}</h1>
<button className="btn" onClick={()=> setCount(count-1)}>-</button>

</div>
  
  );
}

export default App;

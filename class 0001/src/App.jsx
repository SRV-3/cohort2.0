import { useState } from "react";

function App() {
  const [name, setName] = useState('')
    
    
  
  return (
    <div>
      <input type="text" 
      value={name}
      onChange={(e)=>{
        console.log(e.target.value);
        setName(e.target.value)
      }}/>
    </div>
  )
}

export default App

import React, {useState} from 'react';
import { Button, Display } from './Components';


const App =()=>{
   const [counter, setCounter] = useState(5);
  const incrementCounter=(incrementvalue)=>setCounter(counter*incrementvalue)
  return(
    <div>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={20}/>
      <Button onClickFunction={incrementCounter} increment={40}/>
      <Display message={counter} />
    </div>
  )
}

export default App;


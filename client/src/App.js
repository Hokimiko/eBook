import React, {useState} from 'react';
import Button from './components/UI/button/Button';

function App() {

  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState("")

  function increment(){
    setLikes(likes + 1)
  }
  function decrement(){
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
       type='text'
       value={value}
       onChange={event => setValue((event.target.value))}
      />
      <Button onClick={increment}>Увеличить</Button>
      <Button onClick={decrement}>Уменьшить</Button>
    </div>
  );
}

export default App;

import { useState } from 'react'

import './App.css'

function App() {
  const [text, settext] = useState('')

  return (
    
    <div className="Apps">
      <h1>Character Counter</h1>
    <input type="text" placeholder="Type something..." value={text} onChange={(e) => settext(e.target.value)}
    />
    <h1>{text}</h1>
    <p>character count:{text.length}</p>
      
      </div>
    );
    }

export default App

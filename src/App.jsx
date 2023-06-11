import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='main'>
      <div className='drum-container'>
        <div className='drums'>
          <div className='drum'>
            Q
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='bg-[#242424] flex items-center justify-center text-white h-screen'>
        <div>
          <h1 className='text-4xl'>Hashnode Hackathon</h1>
          <div className='card'>
            <button
              onClick={() => setCount((count) => count + 1)}
              className='my-4 mx-auto block rounded-lg border-transparent py-2 px-4 bg-[#1a1a1a] cursor-pointer transition-all hover:border-[#646cff] focus: outline-4 focus-visible:outline-4'
            >
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

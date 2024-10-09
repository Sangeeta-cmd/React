import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
         <div className='fixed flex flex-wrap justify-center bottom-10 px-2 inset-x-0 '>
          <div className='flex justify-center flex-wrap px-3 py-2 gap-3 bg-white rounded-3xl border-none'>
            <button className='outline-none px-4 py-1 rounded-3xl bg-red-700 text-xl' style={{color: '#fff'}}
            onClick={()=> setColor('red')}>red</button>
            <button className='outline-none px-4 py-1 rounded-3xl bg-green-700 text-xl'style={{color: '#fff'}} 
            onClick={()=> setColor('green')}>green</button>
            <button className='outline-none px-4 py-1 rounded-3xl bg-blue-700 text-xl' style={{color: '#fff'}}
            onClick={()=> setColor('blue')} >blue</button>
            <button className='outline-none px-4 py-1 rounded-3xl bg-gray-700 text-xl' style={{color: '#fff'}} 
            onClick={()=> setColor('gray')}>gray</button>
            <button className='outline-none px-4 py-1 rounded-3xl bg-pink-700 text-xl' style={{color: '#fff'}} 
            onClick={()=> setColor('pink')}>pink</button>
            <button className='outline-none px-4 py-1 rounded-3xl bg-orange-700 text-xl' style={{color: '#fff'}} 
            onClick={()=> setColor('orange')}>orange</button>
            <button className='outline-none px-4 py-1 rounded-3xl bg-violet-500 text-xl' style={{color: '#fff'}}
            onClick={()=> setColor('voilet')} >voilet</button>
          </div>
         </div>
      </div>
      
    </>
  )
}

export default App

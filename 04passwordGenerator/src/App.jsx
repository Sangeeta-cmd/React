import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef
  const passwordRef = useRef(null)

   const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,8) ---- this will select portion of test for copying [0 to 8 means 0to7 end one is non inclusive]
    window.navigator.clipboard.writeText(password)
   }, [password])


  const passGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*`~' 

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass = pass + str.charAt(char)
    }

    setPassword(pass)
  }, 
  [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passGenerator();
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto my-10 px-4 py-5 rounded-lg text-orange-600 bg-gray-800 shadow-md' >
        <h1 className = 'text-white text-center mb-4'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-3' >
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-600  px-3 py-0.5  text-white active:bg-blue-800 duration-100'
          onClick={copyPasswordToClipboard}
          >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
             id="numberInput"
             defaultChecked = {numberAllowed}
             onChange={() =>{
              setNumberAllowed((prev)=> !prev);
             }} 
             />
             <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
             id="charInput"
             defaultChecked = {charAllowed}
             onChange={() =>{
              setCharAllowed((prev)=> !prev);
             }} 
             />
             <label>Characters</label>
          </div>
        </div>


      </div>
    
    </>
  )
}

export default App
import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(16)
  const [number, setNumber] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)
  const [Password, setPassword] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const passwordRef = useRef(null);
  
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(Password);
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 2000)
  }
  
  const generatePassword = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(number) str += '0123456789';
    if(specialChar) str += '!@#$%^&*()_+-=[]{}|;:,.<>/?';
    for(let i=0; i<length; i++){
      let char = str[Math.floor(Math.random()*str.length)];
      pass += char;
    }
    setPassword(pass)
  },[length,number,specialChar,setPassword])  
  
  useEffect(()=>{generatePassword()}, [length,number,specialChar, generatePassword])
  
  return (
    <>
      <div className="w-full h-screen bg-gray-900 text-center pt-8 relative">
        <h1 className="text-4xl font-bold text-white mb-8">Password Genrator</h1>
        <div className='flex items-start justify-center '>
          <div className='bg-gray-500 w-[700px] h-44 rounded-3xl p-10 space-y-4'>
            <div><input className='rounded-l-lg text-gray-700 font-bold px-2 outline-none p-1 w-[32rem] h-10' ref={passwordRef} type="text" readOnly  value={Password}/>
            <button className="bg-blue-700 h-10 rounded-r-lg text-white p-1 w-20 font-bold" onClick={copyPasswordToClipboard} >Copy</button></div>
            <div className='flex justify-center items-center space-x-4 font-bold text-lg'>
              <input type="range" id='range' min={8} max={32} value={length} onChange={(e)=>{setLength(e.target.value)}} /> <label htmlFor='range'>Lenght ({length})</label>
              <div> <input type="Checkbox" defaultChecked={number} id='c-box' onChange={()=>{setNumber((prev)=>!prev)}}/> <label htmlFor='c-box'>Number</label></div>
              <div><input type="Checkbox" defaultChecked={specialChar} id='c-box1' onChange={()=>{setSpecialChar((prev)=>!prev)}}/> <label htmlFor='c-box1'>Special Character</label></div>
            </div>
          </div>
        </div>
        
        {showPopup && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-pulse">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">Password Copied!</span>
          </div>
        )}
      </div>
    </>
  )
}

export default App
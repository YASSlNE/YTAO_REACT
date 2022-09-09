import {useState, useContext} from 'react'

import {AudioContext} from '../context/AudioContext';
import Button from './Button'

function UrlBox() {

  
  const {url, addUrl} = useContext(AudioContext)

  const [urlChange, setUrlChange] = useState("")


  const handleUrl=(e : any)=>{
    setUrlChange(e.target.value)
  }

  const handleSubmit=(e : any)=>{
    e.preventDefault();
    // console.log(urlChange)
    addUrl?.("ussssssssssrl")
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="flex items-center flex-col">
      <input className="flex bg-butter w-[500px] h-12 
      break-all mt-20 pl-2 font-mono rounded-md text-md
       " onChange={handleUrl} type="text" value={urlChange} placeholder='Insert a youtube url' />
    
      <Button/>
    </form>
    </>
  )
}
  
export default UrlBox  
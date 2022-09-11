import {useState, useContext} from 'react'

import AudioContext from '../context/AudioContext';
import Button from './Button'


import {v4 as uuidv4} from 'uuid'

function UrlBox() {

  
  const {audios, addAudio, getDetailsFromTheApi} = useContext(AudioContext)

  const [urlChange, setUrlChange] = useState("")


  const handleUrl=(e : any)=>{
    setUrlChange(e.target.value)
  }

  const handleSubmit=async (e : any)=>{
    e.preventDefault();
    if(!urlChange.includes("www.youtube.com/watch?v=")){
      console.log("a7a")
    }
    else{

    const newId=uuidv4()
    addAudio({isLoading:true, id:newId})
    const doc=await getDetailsFromTheApi(urlChange)
    doc.id=newId
    addAudio(doc)
    console.log(audios)
  }

  }

  return (
    <>
    <form onSubmit={handleSubmit} className="flex items-center flex-col">
      <input required className="flex bg-butter w-[500px] h-12 
      break-all mt-20 pl-2 font-mono rounded-md text-md
       " onChange={handleUrl} type="text" value={urlChange} placeholder='Insert a youtube url' />
    
      <Button/>
    </form>
    </>
  )
}
  
export default UrlBox  
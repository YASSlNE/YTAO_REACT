import {useState} from 'react'
import axios from 'axios'

function AudioCard(){

  const [url,setUrl] = useState("https://www.youtube.com/watch?v=ALahNOwrTvg")

  const handleClick=async()=>{
    await axios.get(`http://localhost:3001/?v=${url}`)
    .then((res:any) =>{
      console.log(res['data']);
    })
  }


  return (
    <div className="flex justify-center bg-turquoise h-10 w-1/2 rounded-md ">
      <button onClick={handleClick}>
        How to not quit
      </button>
    </div>
  )
}
  
export default AudioCard
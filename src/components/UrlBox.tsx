import {useState} from 'react'
function UrlBox() {

  const [url,setUrl] = useState("")
  const handleUrl=(e : any)=>{
    setUrl(e.target.value)
  }

  return (
    <>
      <input className="flex justify-center bg-butter w-2/5 h-12 
      break-all mt-20 pl-2 font-mono rounded-md text-md
       " onChange={handleUrl} type="text" value={url} placeholder='Insert a youtube url' />
    </>
  )
}
  
export default UrlBox 
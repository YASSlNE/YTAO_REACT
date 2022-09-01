import {useState} from 'react'
// import axios from 'axios'

import ydl from 'youtube-dl-exec'
 

function Home( ) {
  const [Yurl, SetYurl] = useState("https://www.youtube.com/watch?v=ERAj90DYzzE");
  const [Aurl, SetAurl] = useState();
  const getUrl = async() =>{
    // SetYurl()
    ydl(Yurl,{'format': 'bestaudio',
             skipDownload: true,
             dumpSingleJson: true,}).then(output=>{
              // const formats: any=output['formats']
              // const audio_source=formats[6]['resolution'].includes('audio only')?formats[6]['url']:false
              // console.log(audio_source)
              console.log("qsdmlfkjqsmldfkj")
             }
             )
           }
  const onChange = (e : any)=>{
    SetYurl(e.target.value)
  }
  return (
    <>
    <audio controls preload="auto" key={Aurl} >
            <source src={Aurl} type="audio/mpeg" /> 
    </audio>
    <input type="text" value={Yurl} onChange={onChange} placeholder='Put the youtube link here' />
    <button onClick={getUrl}>Get audio</button>
    
    </>
  )
}



export default Home

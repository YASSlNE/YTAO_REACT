import {useState} from 'react'
import axios from 'axios'
function Home( ) {
  const [Yurl, SetYurl] = useState();
  const [Aurl, SetAurl] = useState();
  const getUrl = async() =>{
    // SetYurl()
    await axios.get(`https://ytaoapp.herokuapp.com/api?url=${Yurl}`)
      .then(res => {
        SetAurl(res['data']['url']); 
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

import {createContext, useState} from 'react'

import axios from 'axios'



 

const AudioContext= createContext<any>();



export const AudioProvider= ({children} : any)=>{
    

    const [currentAudioSrc, setCurrentAudioSrc] = useState()




    const [audios,setAudios] = useState<any>([])



    const addAudio=(doc : any)=>{
        audios.map((item)=>{
            if(item.id==doc.id)
                item=doc
        }
        )
        setAudios([doc,...audios])
    }



  const getDetailsFromTheApi=async(urlFetched : any)  =>{
    try{
        let res=await axios.get(`http://localhost:3001/?v=${urlFetched}`)
        
        const doc={
            link: res['data']['url'],
            title: res['data']['title'],
            isLoading: false,
            isPlaying: false,
        }
        return doc   
    }
    catch(err){
        console.error(err)
    }

    }


    



    const deleteAudio=(id)=>{
        if(window.confirm('Are you sure you want to delete ? ')){
            setAudios(audios.filter((item)=>item.id!==id))
        }
    }



    const onEndedHandler=()=>{
       for(let i=0;i<audios.length;i++){
        if(audios[i].isPlaying){
            console.log(audios[i].title)
            audios[i].isPlaying=false
            if(audios.length!=1)
                if(i!=audios.length-1){
                    audios[i+1].isPlaying=true
                    setCurrentAudioSrc(audios[i+1].link)
                }
            break
        }
       }
     }





    return (<AudioContext.Provider value={{
        audios,
        addAudio,
        getDetailsFromTheApi,
        onEndedHandler,
        currentAudioSrc,
        setCurrentAudioSrc,
        deleteAudio,
        
        
    }}>
    {
        children
    }


    </AudioContext.Provider>)
}
export default AudioContext
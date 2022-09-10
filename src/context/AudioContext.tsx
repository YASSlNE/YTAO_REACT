import {createContext, useState, Dispatch} from 'react'

import axios from 'axios'









const AudioContext= createContext<any>();



export const AudioProvider= ({children} : any)=>{
    

    const [isLoading, setIsLoading] = useState(true);


    const [audios,setAudios] = useState<any>([{
    link:"youtube link grbw",
    title:"Title is good",
}])



    const addAudio=(doc : any)=>{
        setAudios([doc,...audios])
    }



  const getDetailsFromTheApi=async(urlFetched : any)  =>{
    try{
        let res=await axios.get(`http://localhost:3001/?v=${urlFetched}`)
        
        const doc={
            link: res['data']['url'],
            title: res['data']['title'],
        }
        return doc   
    }
    catch(err){
        console.error(err)
    }

    }





    return (<AudioContext.Provider value={{
        audios,
        addAudio,
        getDetailsFromTheApi,
        isLoading,
    }}>
    {
        children
    }


    </AudioContext.Provider>)
}
export default AudioContext
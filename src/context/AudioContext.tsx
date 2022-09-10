import {createContext, useState, Dispatch} from 'react'

import axios from 'axios'


interface AudioContextInterface {
  audios: {
    link : string,
    title : string,
  }[] | null;
  addAudio: (arg0: any)=> void | null
  // addUrl : Dispatch<React.SetStateAction<string | null>>

}




// const AudioContext= createContext<AudioContextInterface | any>({url: "mlsqdkjf", addUrl:(url : any)=>console.log(url)});


const AudioContext= createContext<AudioContextInterface | any>({audios: [{}], addAudio:(url : any)=>undefined});



export const AudioProvider= ({children} : any)=>{
    

    const [isLoading, setIsLoading] = useState(false);


    const [audios,setAudios] = useState<AudioContextInterface | any>([{
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



    // await axios.get(`http://localhost:3001/?v=${urlFetched}`)
    // .then((res:any) =>{
    //   const doc={
    //     link: res['data']['url'],
    //     title: res['data']['title'],
    //   }
    //   console.log("normalement hedhi awel msg yo5roj")
    //   console.log(doc)
    //   return doc
    // })
  // }



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
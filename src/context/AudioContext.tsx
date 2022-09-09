import {createContext, useState, Dispatch} from 'react'



interface AudioContextInterface {
  url: string | null;
  addUrl: (arg0: any)=> void | null
  // addUrl : Dispatch<React.SetStateAction<string | null>>

}




// const AudioContext= createContext<AudioContextInterface | any>({url: "mlsqdkjf", addUrl:(url : any)=>console.log(url)});


const AudioContext= createContext<AudioContextInterface | any>({url: "", addUrl:(url : any)=>undefined});



export const AudioProvider= ({children} : any)=>{
    
    const [url,setUrl] = useState<AudioContextInterface | any>("default url value")


    const addUrl=(link : any)=>{
        setUrl(link)
        // console.log("link")
        // console.log(url)
    }


    return (<AudioContext.Provider value={{
        url,
        addUrl,
    }}>
    {
        children
    }


    </AudioContext.Provider>)
}
export default AudioContext
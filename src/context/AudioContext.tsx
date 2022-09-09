import {createContext, useState, Dispatch} from 'react'



// interface AudioContextInterface {
//   url: string | null;
//   addUrl: (arg0: any)=> void | null
//   // addUrl : Dispatch<React.SetStateAction<string | null>>

// }




export const AudioContext= createContext({});

function AudioProvider(){
    
    const [url,setUrl] = useState<string | null>(null)


    const addUrl=(link : any)=>{
        // setUrl(link)
        console.log("link")
        // console.log(url)
    }


    return (<AudioContext.Provider value={{
        url,
        addUrl,
    }}>

    </AudioContext.Provider>)
}
export default AudioProvider 
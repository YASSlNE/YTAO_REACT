import {createContext, useState} from 'react'

import axios from 'axios'



 

const AudioContext= createContext<any>();



export const AudioProvider= ({children} : any)=>{
    

    const [currentAudioSrc, setCurrentAudioSrc] = useState("https://rr1---sn-uv2oxuuo-u0os.googlevideo.com/videoplayback?expire=1662916612&ei=pMMdY-KnIM2R1gKbzZM4&ip=197.0.4.126&id=o-ALsF-L4SowlBaI5hYs2gGJhfqleugbM4n7LqdMM8_8_P&itag=249&source=youtube&requiressl=yes&mh=SN&mm=31%2C29&mn=sn-uv2oxuuo-u0os%2Csn-hpa7zne6&ms=au%2Crdu&mv=m&mvi=1&pl=17&initcwndbps=346250&spc=lT-KhnWy5C6ZRfVOgQ8lK4DK86d6n9g&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=7377793&dur=1155.041&lmt=1651391848057249&mt=1662894532&fvip=4&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&rbqsm=fr&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgSez58fD19N8WKe_qRj9D7dpa5Y3aHZAMLF5UM_ctb-wCIQCf6_YB2CvxlsTGEoUG1ij8crR4_6687HemyqjTqIQEOg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANGwpMtyvxJSYVpyTUcrfgLde_ks3MDMfWomV_FxxCoAAiEAvFMpi9lNp7S5q-arl_3pLUxlvWwhyFcsH4RPCOnMZcg%3D")




    const [audios,setAudios] = useState<any>([{
                                                link:"https://rr1---sn-uv2oxuuo-u0od.googlevideo.com/videoplayback?expire=1662855961&ei=udYcY8CJDI34gQfUr5XYAw&ip=197.0.64.7&id=o-APTdGARygrsGdOhN1GDkune0iAkIAg8cg7WwAFYndjcg&itag=249&source=youtube&requiressl=yes&mh=Vl&mm=31%2C29&mn=sn-uv2oxuuo-u0od%2Csn-hpa7znz6&ms=au%2Crdu&mv=m&mvi=1&pl=17&initcwndbps=273750&spc=lT-KhjON9eM73k3nvyk1KLz-rbbRXYw&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=6540194&dur=904.501&lmt=1662749692618452&mt=1662834064&fvip=4&keepalive=yes&fexp=24001373%2C24007246&beids=24239128&c=ANDROID&rbqsm=fr&txp=4432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPbTsIxIJStkt8NkIVXoulZWAgt2ljLB598ACLDT8O57AiBrLoc_pZ-GvR1TMjlqqr0murTqWS5i3dTPKMrS6tmMzQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAM8F9ihVr6VoVTSg9axKi2Yvsv4NZfe2pCJ0cFnQyHeIAiByHN0NbjPq7Hk5pgbIIZ8uPpm4QauKCD4FsaTOJ_nunw%3D%3D",
                                                title:"Behiry video 1",
                                            },
                                            {
                                                link:"https://rr3---sn-uv2oxuuo-u0os.googlevideo.com/videoplayback?expire=1662856200&ei=qNccY4HTKIva1wKX3oDQBw&ip=197.0.64.7&id=o-AMYMUVHaXdV1C4bZWw_WJKjI6cj0orfYLhp8nQrHBvAv&itag=249&source=youtube&requiressl=yes&mh=MM&mm=31%2C29&mn=sn-uv2oxuuo-u0os%2Csn-hpa7kn7s&ms=au%2Crdu&mv=m&mvi=3&pl=17&initcwndbps=262500&spc=lT-KhsClgZPsQtaX7SkSSz2HQP557uQ&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=6069181&dur=709.581&lmt=1662184965544000&mt=1662834300&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&rbqsm=fr&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKlhP2rBN1nIVcsrYdiyUi8cJVba9io3w4LCqxlRVgqyAiEA-CHlqj44kgSYoXCifsjB89H1pGwLuN0hUHuePf2i7sE%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgFZBBfyTJNB6HRfEh5xMEozikVAJ_u9cLYND3RNweUOcCIC6RncB0wdTJNJ6iZT4Z07rFnahQfSDH5v9PhBkxvwDK",
                                                title:"Behiry video 2",
                                            }
                                            ])



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
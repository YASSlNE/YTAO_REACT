import {useState, useContext} from 'react'
import axios from 'axios'
// import AudioContextInterface from '../context/AudioContext';
import AudioContext from '../context/AudioContext';

import Spinner from './Spinner'

import {MdDelete} from 'react-icons/md'



function AudioCard({isLoading, title, link, id, isPlaying}){

 


  const {addUrl, setCurrentAudioSrc, deleteAudio, audios} = useContext(AudioContext)

  const handleClick=()=>{
    setCurrentAudioSrc(link)
    
    audios.map((item)=>{
      if(item.id!=id)
        item.isPlaying=false
      else
        item.isPlaying=true
    })
  }





  const isPlayingClass=isPlaying ? 'bg-[#248278]': 'bg-turquoise'


  return isLoading?
  (
    <div className="flex justify-center bg-turquoise h-10 w-1/2 rounded-md ">
      
        <Spinner />
      
    </div>
  )
  :(
    <div className={`flex justify-center bg-turquoise hover:bg-[#31b0a3] h-10 w-1/2 rounded-md ${isPlayingClass}`}>
      <button className="h-10 w-full" onClick={handleClick}>

        <button onClick={()=>deleteAudio(id)}>
            <MdDelete color="red"> </MdDelete>
        </button>
        
          

        {title}

      </button>
    </div>
  )
}
  

AudioCard.defaultProps={
  isLoading: false,
  isPlaying: false,
}



export default AudioCard 
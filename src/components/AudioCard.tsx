import {useState, useContext} from 'react'
import axios from 'axios'
// import AudioContextInterface from '../context/AudioContext';
import AudioContext from '../context/AudioContext';

import Spinner from './Spinner'

import {MdDelete} from 'react-icons/md'

import {motion, AnimatePresence} from 'framer-motion'



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


  const dropIn={
    
    visible:{
      y:'2vh',
      opacity:1,
    },
    initial:{ 
      scale: 0.8,
      opacity: 0
    },
    animate:{
    scale: 1,
    opacity: 1
    },
    exit:{
    scale: 0.8,
    opacity: 0
    },
    transition:{
    type: "spring"
    },
  };


  const dropOut={
    exit:{
      y:'0',
      opacity:0,
    }
  }


  return <AnimatePresence>
  <motion.div key={id} variants={dropIn}  className="flex justify-center bg-turquoise h-10 w-1/2 rounded-md ">
   {isLoading?
  (
    
    
      
        <Spinner />
      
    
  )
  :(
    <button className="h-10 w-full" onClick={handleClick}>

        <button onClick={()=>deleteAudio(id)}>
            <MdDelete color="red"> </MdDelete>
        </button>
        
          

        {title}

      </button>
    
  )
}
</motion.div>
</AnimatePresence>

}
  

AudioCard.defaultProps={
  isLoading: false,
  isPlaying: false,
}



export default AudioCard 
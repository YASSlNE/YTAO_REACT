import {useState, useContext} from 'react'
import axios from 'axios'
// import AudioContextInterface from '../context/AudioContext';
import AudioContext from '../context/AudioContext';

import Spinner from './Spinner'

import {FaTimes, FaEdit} from 'react-icons/fa'



function AudioCard({isLoading, title, link, id}){


  const {addUrl, setCurrentAudioSrc, deleteAudio} = useContext(AudioContext)

  const handleClick=()=>{
    setCurrentAudioSrc(link)
    console.log(link)
  }


  return isLoading?
  (
    <div className="flex justify-center bg-turquoise h-10 w-1/2 rounded-md ">
      
        <Spinner />
      
    </div>
  )
  :(
    <div className="flex justify-center bg-turquoise h-10 w-1/2 rounded-md ">
      

        <button onClick={()=>deleteAudio(id)}>
            <FaTimes color="red"> </FaTimes>
        </button>
      <button onClick={handleClick}>
          

        {title}
      </button>
    </div>
  )
}
  

AudioCard.defaultProps={
  isLoading: false,
}



export default AudioCard 
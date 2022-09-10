import {useState, useContext} from 'react'
import axios from 'axios'
// import AudioContextInterface from '../context/AudioContext';
import AudioContext from '../context/AudioContext';

import Spinner from './Spinner'



function AudioCard({isLoading, title, link}){


  const {addUrl} = useContext(AudioContext)


  const handleClick=()=>{
    console.log("url")
  }


  return isLoading?
  (
    <div className="flex justify-center bg-turquoise h-10 w-1/2 rounded-md ">
      
        <Spinner />
      
    </div>
  )
  :(
    <div className="flex justify-center bg-turquoise h-10 w-1/2 rounded-md ">
      <button onClick={handleClick}>
        How to not quit
      </button>
    </div>
  )
}
  
export default AudioCard 
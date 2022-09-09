import {useState, useContext} from 'react'
import axios from 'axios'
import AudioContextInterface from '../context/AudioContext';
import {AudioContext} from '../context/AudioContext';

function AudioCard(){


  const {url, addUrl} = useContext(AudioContext)


  // const handleClick=async()=>{
  //   await axios.get(`http://localhost:3001/?v=${url}`)
  //   .then((res:any) =>{
  //     setUrl(res['data'])
  //     console.log(res['data']);
  //   })
  // }
  const handleClick=()=>{
    console.log(url)
  }


  return (
    <div className="flex justify-center bg-turquoise h-10 w-1/2 rounded-md ">
      <button onClick={handleClick}>
        How to not quit
      </button>
    </div>
  )
}
  
export default AudioCard 
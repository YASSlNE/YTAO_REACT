import {useContext} from 'react'
import AudioContext from '../context/AudioContext'
import AudioCard from './AudioCard'
import AudioCardList from './AudioCardList'


import ReactAudioPlayer from 'react-audio-player';

function Playlist() {



    const {isLoading, currentAudioSrc, setNextAudio, onEndedHandler} = useContext(AudioContext)


  return (
    <>
    <div className="bg-butter w-[744px] h-[360px] mt-5 flex flex-col justify-around rounded-md">
        <div className="flex justify-center ">
        <ReactAudioPlayer src={currentAudioSrc} onEnded={onEndedHandler} autoplay controls/>
        </div>
        <div className="h-[200px] overflow-y-scroll mt-2 gap-3 flex items-center flex-col flex-nowrap">
            <AudioCardList />
        </div>
    </div>

{/*    <div className="justify-center">

    </div>*/}
    </>
  )
}


  
export default Playlist 
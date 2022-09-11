import {useContext} from 'react'
import AudioContext from '../context/AudioContext'
import AudioCard from './AudioCard'
import AudioCardList from './AudioCardList'

function Playlist() {



    const {isLoading, currentAudioSrc} = useContext(AudioContext)


  return (
    <>
    <div className="bg-butter w-[744px] h-[360px] mt-5 flex flex-col justify-center rounded-md">
        <div className="flex justify-center mb-a mt-a">
        <audio src={currentAudioSrc} controls preload="auto">
            <source type="audio/mpeg" src={currentAudioSrc} />
        </audio>
        </div>
        <div className="overflow-y-scroll mt-2 gap-3 flex items-center flex-col flex-nowrap">
            <AudioCardList />
        </div>
    </div>

{/*    <div className="justify-center">

    </div>*/}
    </>
  )
}


  
export default Playlist 
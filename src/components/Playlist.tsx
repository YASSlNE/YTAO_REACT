import {useContext} from 'react'
import AudioContext from '../context/AudioContext'
import AudioCard from './AudioCard'

import Spinner from './Spinner'

function Playlist() {





  return (
    <>
    <div className="bg-butter w-[744px] h-[360px] mt-5 flex flex-col justify-center rounded-md">
        <div className="flex justify-center">
        <audio controls preload="auto">
            <source type="audio/mpeg" />
        </audio>
        </div>
        <div className="overflow-y-scroll mt-2 gap-3 flex items-center flex-col flex-nowrap">
            <AudioCard />
            <AudioCard />
            <AudioCard />
            <AudioCard />
            <AudioCard />
        </div>
    </div>

{/*    <div className="justify-center">

    </div>*/}
    </>
  )
}
  
export default Playlist 
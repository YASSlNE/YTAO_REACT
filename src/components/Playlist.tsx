import {useContext} from 'react'
import AudioContext from '../context/AudioContext'
import AudioCard from './AudioCard'


function Playlist() {



    const {isLoading} = useContext(AudioContext)


  return (
    <>
    <div className="bg-butter w-[744px] h-[360px] mt-5 flex flex-col justify-center rounded-md">
        <div className="flex justify-center">
        <audio controls preload="auto">
            <source type="audio/mpeg" />
        </audio>
        </div>
        <div className="overflow-y-scroll mt-2 gap-3 flex items-center flex-col flex-nowrap">
            <AudioCard isLoading={isLoading}/>
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
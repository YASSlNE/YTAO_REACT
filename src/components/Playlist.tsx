

import AudioCard from './AudioCard'

function Playlist() {
  return (
    <>
    <div className="bg-butter w-1/2 h-[360px] mt-5 flex flex-col justify-center rounded-md">
        <div className="flex justify-center">
        <audio controls preload="auto">
            <source type="audio/mpeg" />
        </audio>
        </div>
        <div className="overflow-y-scroll mt-2 gap-3 flex justify-center items-center flex-col flex-nowrap">
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
import {useContext} from 'react'

import AudioContext from '../context/AudioContext'

import { AnimatePresence} from 'framer-motion'


import AudioCard from './AudioCard'

function AudioCardList(){

	const {audios} = useContext(AudioContext)


	return audios.length==0?<h1 className="flex">No audios yet</h1>:(

		<>
		
		{
			audios.map((item)=>(
				
					<AudioCard isPlaying={item.isPlaying} title={item.title} link={item.link} isLoading={item.isLoading} id={item.id} />
				
				)
			)
		}
		</>

	)

}
export default AudioCardList
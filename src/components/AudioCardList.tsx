import {useContext} from 'react'

import AudioContext from '../context/AudioContext'


import AudioCard from './AudioCard'

function AudioCardList(){

	const {audios} = useContext(AudioContext)


	return (

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
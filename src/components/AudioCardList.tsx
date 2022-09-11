import {useContext} from 'react'

import AudioContext from '../context/AudioContext'


import AudioCard from './AudioCard'

function AudioCardList(){

	const {audios} = useContext(AudioContext)


	return (

		<>
		{
			audios.map((item)=>(
				<AudioCard title={item.title} link={item.link} isLoading={item.isLoading} id={item.id} />
				)
			)
		}
		</>

	)

}
export default AudioCardList
import React, { useState, useEffect } from 'react'
import './details.scss'
import apiConfig from '../../api/apiConfig'
import tmdbApi from '../../api/tmdbApi'
import { useParams } from 'react-router-dom'

export default function CastList(props) {
	const { category } = useParams()
	const [cast, setCast] = useState([])

	useEffect(() => {
		const getCast = async () => {
			const response = await tmdbApi.credits(
				category,
				props.item.id
			)
			setCast(response.cast)
			console.log(response)
		}
		getCast()
	}, [category, props.item.id])

	return (
		<div className='cast-list'>
			{cast.slice(0, 12).map((item, idx) => (
				<div
					key={idx}
					className='cast-list__item'
					style={{
						backgroundImage: `url(${apiConfig.w500Img(
							item.profile_path
						)})`,
					}}
					title={item.name}
				></div>
			))}
		</div>
	)
}

import React from 'react'
import { Link } from 'react-router-dom'
import './movie-card.scss'
import apiConfig from '../../api/apiConfig'
import { category } from '../../api/tmdbApi'

import { Button } from '../button/Button'

export default function MovieCard(props) {
	const item = props.item
	const link = `/${category[props.category]}/${item.id}`
	const bg = apiConfig.w500Img(item.poster_path || item.backdrop_path)
	return (
		<Link to={link}>
			<div
				className='movie-card'
				style={{ backgroundImage: `url(${bg})` }}
			>
				<Button>▶</Button>
			</div>
		</Link>
	)
}

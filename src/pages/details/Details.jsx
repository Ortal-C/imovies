import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './details.scss'
import apiConfig from '../../api/apiConfig'
import tmdbApi from '../../api/tmdbApi'
import CastList from './CastList'
import MovieList from '../../components/movie-list/MovieList'

export default function Details() {
	const { category, id } = useParams()
	const [item, setItem] = useState(null)
	useEffect(() => {
		const getDetail = async () => {
			const params = {}
			const response = await tmdbApi.detail(category, id, {
				params,
			})
			setItem(response)
			console.log(response)
			window.scrollTo(0, 0)
		}
		getDetail()
	}, [category, id])

	return (
		<>
			{item && (
				<>
					<div
						className='banner'
						style={{
							backgroundImage: `url(${apiConfig.originalImg(
								item.backdrop_path ||
									item.poster_path
							)})`,
						}}
					></div>
					<div className='mb-3 movie-content container'>
						<div className='movie-content__poster'>
							<div
								className='movie-content__poster__img'
								style={{
									backgroundImage: `url(${apiConfig.originalImg(
										item.poster_path ||
											item.backdrop_path
									)})`,
								}}
							></div>
						</div>
						<div className='movie-content__info'>
							<h1 className='title'>
								{item.title || item.name}
							</h1>
							<div className='genres'>
								{item.genres &&
									item.genres
										.slice(0, 5)
										.map(
											(
												genre,
												idx
											) => (
												<span
													key={
														idx
													}
													className='genres__item'
												>
													{
														genre.name
													}
												</span>
											)
										)}
							</div>
							<p className='overview'>
								{item.overview}
							</p>
							<div className='movie-content__cast'>
								<h2>Cast</h2>
								<CastList item={item} />
							</div>
						</div>
					</div>
					<div className='container'>
						{/* <VideoList id={item.id} /> */}

						<div className='movie-content__similar'>
							<h2>Similar</h2>
							<MovieList
								type='similar'
								category={category}
								id={item.id}
							/>
						</div>
					</div>
				</>
			)}
		</>
	)
}

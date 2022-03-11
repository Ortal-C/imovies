import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, OutlineButton } from '../button/Button'
import apiConfig from '../../api/apiConfig'
import tmdbApi, { category } from '../../api/tmdbApi'

const HeroSlideItem = (props) => {
	let navigate = useNavigate()
	const item = props.item
	const bgImg = apiConfig.originalImg(
		item.backdrop_path ? item.backdrop_path : item.poster_path
	)

	const setModalActive = async () => {
		const modal = document.getElementById(`modal_${item.id}`)
		const videos = await tmdbApi.getVideos(category.movie, item.id)
		if (videos.results.length > 0) {
			modal.querySelector('.modal__content > iframe').setAttribute(
				'src',
				`https://www.youtube.com/embed/${videos.results[0].key}`
			)
		} else {
			modal.querySelector('.modal__content').innerHTML =
				'No Trailer'
		}
		modal.classList.toggle('active')
	}

	return (
		<div
			className={`hero-slide__item ${props.className}`}
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<div className='hero-slide__item__content container'>
				<div className='hero-slide__item__content__info'>
					<h2 className='title'>{item.title}</h2>
					<div className='overview'>{item.overview}</div>
					<div className='btns'>
						<Button
							onClick={() =>
								navigate(`/movie/${item.id}`)
							}
						>
							Watch Now
						</Button>
						<OutlineButton onClick={setModalActive}>
							Watch Trailer
						</OutlineButton>
					</div>
				</div>
				<div className='hero-slide__item__content__poster'>
					<img
						src={apiConfig.w500Img(item.poster_path)}
						alt='Poster'
					/>
				</div>
			</div>
		</div>
	)
}

export default HeroSlideItem

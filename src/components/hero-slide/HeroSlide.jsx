import React, { useState, useEffect } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './hero-slide.scss'
import HeroSlideItem from './HeroSlideItem'

import tmdbApi, { movieType } from '../../api/tmdbApi'
import TrailerModal from './TrailerModal'

export default function HeroSlide() {
	SwiperCore.use([Autoplay])

	const [movieItems, setmovieItems] = useState([])
	useEffect(() => {
		const getMovies = async () => {
			// const params = { page: 1 }
			const params = {}
			try {
				const res = await tmdbApi.getMoviesList(
					movieType.popular,
					{ params }
				)
				setmovieItems(res.results.slice(0, 4))
			} catch {
				console.log('err')
			}
		}
		getMovies()
	}, [])

	return (
		<div className='hero-slide'>
			<Swiper
				modules={[Autoplay]}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={1}
				autoplay={{ delay: 4500 }}
			>
				{movieItems.map((item, idx) => (
					<SwiperSlide key={idx}>
						{({ isActive }) => (
							<HeroSlideItem
								item={item}
								className={`${
									isActive ? 'active' : ''
								}`}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>
			{movieItems.map((item, idx) => (
				<TrailerModal key={idx} item={item} />
			))}
		</div>
	)
}

import React from 'react'
import { Link } from 'react-router-dom'
import { HeroSlide } from '../components'
import MovieList from '../components/movie-list/MovieList'
import { OutlineButton } from '../components/button/Button'
import { category, movieType, tvType } from '../api/tmdbApi'

const strFixing = (str) => {
	return str.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function Home() {
	return (
		<>
			<HeroSlide />
			<div className='container'>
				{Object.keys(movieType).map((type, idx) => (
					<div className='section mb-3' key={idx}>
						<header
							className='section__header'
							key={idx}
						>
							<h2>{strFixing(type) + ' Movies'}</h2>
							<Link to='/movie'>
								<OutlineButton className='small'>
									View More
								</OutlineButton>
							</Link>
						</header>
						<MovieList
							category={category.movie}
							type={type}
						/>
					</div>
				))}
				{Object.keys(tvType).map((type, idx) => (
					<div className='section mb-3' key={idx}>
						<header
							className='section__header'
							key={idx}
						>
							<h2>
								{strFixing(type) + ' TV Series'}
							</h2>
							<Link to='/tv'>
								<OutlineButton className='small'>
									View More
								</OutlineButton>
							</Link>
						</header>
						<MovieList
							category={category.tv}
							type={type}
						/>
					</div>
				))}
			</div>
		</>
	)
}

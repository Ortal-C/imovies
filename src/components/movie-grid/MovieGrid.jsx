import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './movie-grid.scss'
import MovieCard from '../movie-card/MovieCard'
import MovieSearch from '../movie-search/MovieSearch'
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi'
import { OutlineButton } from '../button/Button'

export default function MovieGrid(props) {
	const { keyword } = useParams()
	const [items, setItems] = useState([])
	const [page, setPage] = useState(1)
	const [totalPage, setTotalPage] = useState(0)
	useEffect(() => {
		const getList = async () => {
			let response = null
			if (keyword) {
				const params = { query: keyword }
				response = await tmdbApi.search(props.category, {
					params,
				})
			} else {
				const params = {}
				switch (props.category) {
					case category.movie:
						response = await tmdbApi.getMoviesList(
							movieType.popular,
							{ params }
						)
						break
					default:
						response = await tmdbApi.getTvList(
							tvType.popular,
							{ params }
						)
						break
				}
			}
			setItems(response.results)
			setTotalPage(response.total_pages)
		}
		getList()
	}, [props.category, keyword])

	const loadMore = async () => {
		let response = null
		if (keyword !== undefined) {
			const params = {
				page: page + 1,
				query: keyword,
			}
			response = await tmdbApi.search(props.category, { params })
		} else {
			const params = {
				page: page + 1,
			}
			switch (props.category) {
				case category.movie:
					response = await tmdbApi.getMoviesList(
						movieType.popular,
						{ params }
					)
					break
				default:
					response = await tmdbApi.getTvList(
						tvType.popular,
						{ params }
					)
			}
		}
		setItems([...items, ...response.results])
		setPage(page + 1)
	}

	return (
		<>
			<MovieSearch category={props.category} keyword={keyword} />
			<div className='movie-grid'>
				{items.map((item, idx) => (
					<MovieCard
						key={idx}
						category={props.category}
						item={item}
					/>
				))}
			</div>
			{page < totalPage && (
				<div className='movie-grid__load'>
					<OutlineButton
						className='small'
						onClick={loadMore}
					>
						Load more...
					</OutlineButton>
				</div>
			)}
		</>
	)
}

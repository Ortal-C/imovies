import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './movie-search.scss'
import Input from '../input/Input'

export default function MovieSearch(props) {
	let navigate = useNavigate()
	const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '')
	const goToSearch = useCallback(() => {
		if (keyword.trim().length > 0) {
			navigate(`/${props.category}/search/${keyword}`)
		}
	}, [keyword, props.category, navigate])

	useEffect(() => {
		const enterEvent = (e) => {
			e.preventDefault()
			if (e.keyCode === 13) goToSearch()
		}
		document.addEventListener('keyup', enterEvent)
		return () => document.removeEventListener('keyup', enterEvent)
	}, [keyword, goToSearch])

	return (
		<Input
			type='text'
			placeholder='Enter keyword...'
			value={keyword}
			onChange={(e) => setKeyword(e.target.value)}
		/>
	)
}

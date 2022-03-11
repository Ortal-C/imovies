import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/Logo'
import './header.scss'

const headerNavLinks = [
	{
		display: 'Home',
		path: '/',
	},
	{
		display: 'Movies',
		path: '/movie',
	},
	{
		display: 'TV Series',
		path: '/tv',
	},
	// {
	// 	display: 'Login',
	// 	path: '/login',
	// },
]

export default function Header() {
	const { pathname } = useLocation()
	const active = headerNavLinks.findIndex((e) => e.path === pathname)
	const headerRef = useRef(null)

	useEffect(() => {
		const shrinkHeader = () => {
			if (
				document.body.scrollTop > 100 ||
				document.documentElement.scrollTop > 100
			) {
				headerRef.current.classList.add('shrink')
			} else {
				headerRef.current.classList.remove('shrink')
			}
			window.addEventListener('scroll', shrinkHeader)
		}

		return () => {
			window.removeEventListener('scroll', shrinkHeader)
		}
	}, [])

	return (
		<div className='header' ref={headerRef}>
			<div className='header__wrap container'>
				<Logo size='50' />
				<ul className='header__nav'>
					{headerNavLinks.map((e, idx) => (
						<li
							key={idx}
							className={
								idx === active ? 'active' : ''
							}
						>
							<Link to={e.path}>{e.display}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

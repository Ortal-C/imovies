import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import Logo from '../../assets/Logo'
import bg from '../../assets/images/footer-bg.jpg'

export const links = [
	{ path: '/', title: 'Contact Us' },
	{ path: '/', title: 'Help Center' },
	{ path: '/', title: 'Term of Use' },
	{ path: '/', title: 'Cookie Preferences' },
	{ path: '/', title: 'Privacy' },
	{ path: '/', title: 'Legal Notices' },
	{ path: '/', title: 'Ways to Watch' },
	{ path: '/', title: 'Media Center' },
	{ path: '/', title: 'Investor Relations' },
]

export default function Footer() {
	return (
		<div className='footer' style={{ backgroundImage: `url(${bg})` }}>
			<div className='footer__blur'></div>
			<div className='footer__content container'>
				<Logo />
				<div className='footer__content__links'>
					{links.map((link, idx) => (
						<Link key={idx} to={link.path}>
							{link.title}
						</Link>
					))}
				</div>
				<div className='footer__content__rights'>
					Built by Ortal Cohen. All rights reserved © 2021.
				</div>
			</div>
		</div>
	)
}

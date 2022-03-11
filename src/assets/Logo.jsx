import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ size = 32 }) {
	return (
		<Link
			to='/'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '20px',
			}}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='48'
				height='48'
				viewBox='0 0 172 172'
				style={{ fill: '#000000' }}
			>
				<defs>
					<linearGradient
						x1='35.3245'
						y1='35.3245'
						x2='136.6755'
						y2='136.6755'
						gradientUnits='userSpaceOnUse'
						id='color-1_KQ5qZwOlaNdR_gr1'
					>
						<stop offset='0' stopColor='#f07f33'></stop>
						<stop offset='1' stopColor='#d90a8d'></stop>
					</linearGradient>
				</defs>
				<g transform=''>
					<g
						fill='none'
						fillRule='nonzero'
						stroke='none'
						strokeWidth='1'
						strokeLinecap='butt'
						strokeLinejoin='miter'
						strokeMiterlimit='10'
						strokeDasharray=''
						strokeDashoffset='0'
						fontFamily='none'
						fontWeight='none'
						fontSize='none'
						textAnchor='none'
						style={{ mixBlendMode: 'normal' }}
					>
						<path
							d='M0,172v-172h172v172z'
							fill='none'
						></path>
						<g>
							<path
								d='M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z'
								fill='url(#color-1_KQ5qZwOlaNdR_gr1)'
							></path>
							<path
								d='M119.51133,80.41l-40.979,-27.31933c-2.06758,-1.37958 -4.7085,-1.50858 -6.89792,-0.33325c-2.18942,1.17175 -3.55108,3.44 -3.55108,5.92325v54.63867c0,2.48325 1.36167,4.75508 3.55108,5.92683c0.99617,0.53392 2.08192,0.7955 3.16767,0.7955c1.30433,0 2.6015,-0.37983 3.72667,-1.12875l40.979,-27.31933c1.87408,-1.25058 2.99208,-3.33967 2.99208,-5.59c0.00358,-2.25392 -1.118,-4.343 -2.9885,-5.59358z'
								fill='#000000'
								opacity='0.05'
							></path>
							<path
								d='M77.69025,54.59925l38.66417,25.7785c2.46892,1.77375 4.13158,3.36117 4.13158,5.42158c0,2.06042 -0.80267,3.49733 -2.56208,4.78017c-1.32942,0.9675 -39.57792,26.38767 -39.57792,26.38767c-3.22858,2.16433 -8.471,1.70567 -8.471,-5.37142v-51.59642c0,-7.18458 5.676,-6.82625 7.81525,-5.40008z'
								fill='#000000'
								opacity='0.07'
							></path>
							<path
								d='M71.66667,113.11867v-54.23375c0,-2.66242 2.967,-4.25342 5.18508,-2.7735l40.678,27.11867c1.98158,1.31867 1.98158,4.22833 0,5.55058l-40.678,27.11867c-2.21808,1.47275 -5.18508,-0.11467 -5.18508,-2.78067z'
								fill='#ffffff'
							></path>
						</g>
					</g>
				</g>
			</svg>
			<span style={{ fontSize: '2.5rem', fontWeight: 600 }}>
				iMovies
			</span>
		</Link>
	)
}	

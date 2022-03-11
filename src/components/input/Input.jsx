import React from 'react'
import './input.scss'

export default function Input(props) {
	return (
		<div className='input'>
			<input
				type={props.type}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange ? props.onChange : null}
				title='Press enter to submit value.'
			/>
			<span>🔍</span>
		</div>
	)
}

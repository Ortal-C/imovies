import React from 'react'

import { Route, Routes as Switch } from 'react-router-dom'

import { Home, Catalog, Details } from './pages'

export default function Routes() {
	return (
		<Switch>
			<Route path='/' element={<Home />} />
			<Route path='/:category' element={<Catalog />} />
			<Route
				path='/:category/search/:keyword'
				element={<Catalog />}
			/>
			<Route path='/:category/:id' element={<Details />} />
		</Switch>
	)
}

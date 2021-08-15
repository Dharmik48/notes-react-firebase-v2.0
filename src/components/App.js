import React from 'react'
import Notes from './Notes'
import SearchBar from './SearchBar'
import SideBar from './SideBar'

const colors = [
	{
		order: 1,
		color: 'yellow',
	},
	{
		order: 2,
		color: 'orange',
	},
	{
		order: 3,
		color: 'purple',
	},
	{
		order: 4,
		color: 'blue',
	},
	{
		order: 5,
		color: 'green',
	},
]

const App = () => {
	return (
		<div className="app">
			<SideBar colors={colors} />
			<main>
				<SearchBar />
				<h1>Notes.</h1>
				<Notes />
			</main>
		</div>
	)
}

export default App

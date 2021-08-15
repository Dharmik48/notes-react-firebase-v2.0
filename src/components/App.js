import React from 'react'
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
		</div>
	)
}

export default App

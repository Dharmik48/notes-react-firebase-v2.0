import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebase'
import Account from './Account'
import CreateNote from './CreateNote'
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
	const [createNote, setCreateNote] = useState(false)
	const [notes, setNotes] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	const [user, setUser] = useState(null)
	const [color, setColor] = useState('')

	useEffect(() => {
		;(async () => {
			if (user) {
				const res = await db.collection('notes').doc(user.uid).get('notes')
				if (res.exists) {
					if (res.data().notes) {
						console.log('data is available')
						setNotes(res.data().notes)
					}
				}
				// console.log(res)
			}
		})()
	}, [user])

	return (
		<div className="app">
			<SideBar
				colors={colors}
				setColor={setColor}
				setCreateNote={setCreateNote}
				user={user}
			/>
			<main>
				<nav>
					<SearchBar setSearchTerm={setSearchTerm} />
					<Account
						user={user}
						setUser={setUser}
						setNotes={setNotes}
						setCreateNote={setCreateNote}
					/>
				</nav>
				<h1>Notes.</h1>
				{createNote ? (
					<CreateNote
						color={color}
						notes={notes}
						user={user}
						setCreateNote={setCreateNote}
						setNotes={setNotes}
					/>
				) : (
					<Notes
						searchTerm={searchTerm}
						notes={notes}
						user={user}
						setNotes={setNotes}
					/>
				)}
			</main>
		</div>
	)
}

export default App

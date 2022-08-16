import React, { useState, useEffect, createContext } from 'react'
import { db } from '../firebase/firebase'
import Account from './Account'
import CreateNote from './CreateNote'
import Notes from './Notes'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import ReactSwitch from 'react-switch'
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
export const ThemeContext = createContext(null);

const App = () => {
	const [createNote, setCreateNote] = useState(false)
	const [notes, setNotes] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	const [user, setUser] = useState(null)
	const [color, setColor] = useState('')
	const [theme,setTheme] = useState("light")

	const toggleTheme =()=>{
		setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
	};	

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
		<ThemeContext.Provider value = {{theme,toggleTheme}}>
		<div className="app" id={theme}>
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
						setSearchTerm={setSearchTerm}
					/>
					<div className='switch'>
					<ReactSwitch onChange = {toggleTheme} checked ={theme === "dark"} 
								offColor = '#000' onColor = '#fff' onHandleColor = '#000'
								uncheckedIcon = {false} checkedIcon = {false}/>
					</div>
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
		</ThemeContext.Provider>
	)
}

export default App

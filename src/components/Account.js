import React from 'react'
import { auth, provider } from '../firebase/firebase'

const Account = ({ user, setUser, setNotes, setCreateNote, setSearchTerm }) => {
	const perfromLogin = async () => {
		await auth.signInWithPopup(provider)
	}

	auth.onAuthStateChanged((user) => {
    	setUser(user);
    	setSearchTerm("");
  	});

	const signout = () => {
		auth.signOut()
		setUser(null)
		setNotes([])
		setCreateNote(false)
		setSearchTerm('')
	}

	return user ? (
		<div className="account">
			<div className="avatar-container">
				<img src={user.photoURL} alt="avatar" />
			</div>
			<p className="user-name">{user.displayName}</p>
			<button className='signin__button' style={{ marginLeft: '2.5em' }} onClick={signout}>Sign Out</button>
		</div>
	) : (
		<button className='signin__button' onClick={perfromLogin} style={{ cursor: 'pointer' }}>Sign In</button>
	)
}

export default Account

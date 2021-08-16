import React from 'react'
import { auth, provider } from '../firebase/firebase'

const Account = ({ user, setUser, setNotes, setCreateNote }) => {
	const perfromLogin = async () => {
		const res = await auth.signInWithPopup(provider)
		setUser(res.user)
	}

	const signout = () => {
		auth.signOut()
		setUser(null)
		setNotes([])
		setCreateNote(false)
	}

	return user ? (
		<div className="account">
			<div className="avatar-container">
				<img src={user.photoURL} alt="avatar" />
			</div>
			<p className="user-name">{user.displayName}</p>
			<p style={{ marginLeft: '2.5em' }} onClick={signout}>
				Sign Out
			</p>
		</div>
	) : (
		<p onClick={perfromLogin} style={{ cursor: 'pointer' }}>
			Sign In
		</p>
	)
}

export default Account

import React from 'react'
import { auth, provider } from '../firebase/firebase'
import icon from "../images/Gicon.png";


const Account = ({ user, setUser, setNotes, setCreateNote, setSearchTerm }) => {
	const perfromLogin = async () => {
		const res = await auth.signInWithPopup(provider)
		setUser(res.user)
		setSearchTerm('')
	}

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
			<p style={{ marginLeft: '2.5em' }} onClick={signout}>
				Sign Out
			</p>
		</div>
	) : (
		<p onClick={perfromLogin} style={{ cursor: 'pointer', display: "flex", boxShadow:"3px 5px #888888", borderRadius: "5px", border: "0.2px solid #888888", padding: "5px"}}>
			<img style={{height: "30px"}} className='googleIcon' src={icon} alt='icon' />  
			<span style={{marginTop: "5px"}}>Login with Google</span>
		</p>
	)
}

export default Account

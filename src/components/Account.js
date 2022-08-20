import React from 'react';
import { auth, provider } from '../firebase/firebase';
import icon from '../images/Gicon.png';

const Account = ({ user, setUser, setNotes, setCreateNote, setSearchTerm }) => {
	const perfromLogin = async () => {
		const res = await auth.signInWithPopup(provider);
		setUser(res.user);
		setSearchTerm('');
	};

	const signout = () => {
		auth.signOut();
		setUser(null);
		setNotes([]);
		setCreateNote(false);
		setSearchTerm('');
	};

	return user ? (
		<div className='account'>
			<div className='avatar-container'>
				<img src={user.photoURL} alt='avatar' />
			</div>
			<p className='user-name' style={{ marginRight: '2rem' }}>
				{user.displayName}
			</p>
			<p
				style={{
					cursor: 'pointer',
					display: 'flex',
					alignItems: 'center',
					boxShadow: '0px 0px 5px #bcb9b9',
					borderRadius: '5px',
					padding: '5px',
					height: '30px',
				}}
				onClick={signout}
			>
				<span style={{ marginTop: '5px' }}>Log out</span>
			</p>
		</div>
	) : (
		<p
			onClick={perfromLogin}
			style={{
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				boxShadow: '0px 0px 5px #bcb9b9',
				borderRadius: '5px',
				padding: '5px',
				height: '30px',
			}}
		>
			<img
				style={{ height: '100%', marginRight: '8px' }}
				className='googleIcon'
				src={icon}
				alt='icon'
			/>
			<span style={{ marginTop: '5px' }}>Log in</span>
		</p>
	);
};

export default Account;

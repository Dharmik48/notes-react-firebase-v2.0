import React, { useState } from 'react'
import '../css/SideBar.css'
import '../css/ColorPicker.css'

const SideBar = ({ colors, setColor, user, setCreateNote }) => {
	const [showColors, setShowColors] = useState(false)

	const renderdColors = colors.map((color) => {
		return (
			<div
				key={color.order}
				style={{ '--order': color.order }}
				className={showColors ? 'appear' : 'hidden'}
				data-color={color.color}
				onClick={() => {
					setColor(color.color)
					setCreateNote(true)
					// setNotes([...notes, { text: '', color: color.color }])
				}}
			></div>
		)
	})

	return (
		<aside>
			<h2>Docket</h2>
			{user ? (
				<div className="add-note">
					<button
						className="add-note-btn"
						onClick={() => setShowColors(!showColors)}
					>
						<i className="fad fa-plus"></i>
					</button>
					<div className="add-note-colors">{renderdColors}</div>
				</div>
			) : (
				<p style={{ marginTop: '1em', textAlign: 'center' }}>Sign In to Add</p>
			)}
		</aside>
	)
}

export default SideBar

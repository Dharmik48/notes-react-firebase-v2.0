import React, { useState } from 'react'
import ColorPicker from './ColorPicker'
import '../css/SideBar.css'

const SideBar = ({ colors }) => {
	const [showColors, setShowColors] = useState(false)

	return (
		<aside>
			<h2>Docket</h2>
			<div className="add-note">
				<button
					className="add-note-btn"
					onClick={() => setShowColors(!showColors)}
				>
					<i className="fad fa-plus"></i>
				</button>
				<ColorPicker colors={colors} showColors={showColors} />
			</div>
		</aside>
	)
}

export default SideBar

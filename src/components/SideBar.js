import React from 'react'
import ColorPicker from './ColorPicker'
import '../css/SideBar.css'

const SideBar = ({ colors }) => {
	return (
		<aside>
			<h2>Docket</h2>
			<div className="add-note">
				<button className="add-note-btn">
					<i className="fad fa-plus"></i>
				</button>
				<ColorPicker colors={colors} />
			</div>
		</aside>
	)
}

export default SideBar

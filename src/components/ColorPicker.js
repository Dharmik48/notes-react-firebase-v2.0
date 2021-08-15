import React from 'react'
import '../css/ColorPicker.css'

const ColorPicker = ({ colors, showColors }) => {
	const renderdColors = colors.map((color) => {
		return (
			<div
				style={{ '--order': color.order }}
				className={showColors ? 'appear' : 'hidden'}
				data-color={color.color}
			></div>
		)
	})

	return <div className="add-note-colors">{renderdColors}</div>
}

export default ColorPicker

import React from 'react'
import '../css/ColorPicker.css'

const ColorPicker = ({ colors }) => {
	const renderdColors = colors.map((color, i) => {
		return (
			<div
				style={{ '--order': color.order }}
				className="hidden"
				data-color={color.color}
			></div>
		)
	})

	return <div className="add-note-colors">{renderdColors}</div>
}

export default ColorPicker

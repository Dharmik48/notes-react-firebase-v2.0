import React, { useState } from 'react'

const SearchBar = ({ setSearchTerm }) => {
	const [term, setTerm] = useState('')

	const onFormSubmit = (e) => {
		e.preventDefault()
		setSearchTerm(term)
	}

	return (
		<form
			className="search"
			onSubmit={(e) => onFormSubmit(e)}
			style={{ position: 'relative' }}
		>
			<i className="fad fa-search"></i>
			<input
				type="text"
				name="search"
				className="search"
				value={term}
				placeholder="Search"
				onChange={(e) => setTerm(e.target.value)}
			/>
			{term ? (
				<i
					className="far fa-times"
					style={{ position: 'absolute', right: '1em', cursor: 'pointer' }}
					onClick={() => {
						setTerm('')
						setSearchTerm('')
					}}
				></i>
			) : null}
		</form>
	)
}

export default SearchBar

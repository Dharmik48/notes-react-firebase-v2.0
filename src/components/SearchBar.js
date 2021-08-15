import React from 'react'

const SearchBar = () => {
	return (
		<form>
			<i className="fad fa-search"></i>
			<input
				type="text"
				name="search"
				className="search"
				placeholder="Search"
			/>
		</form>
	)
}

export default SearchBar

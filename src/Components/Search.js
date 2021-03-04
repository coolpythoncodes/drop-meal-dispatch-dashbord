import "../Sass/Search.scss";

const Search = ({ onSearchChange }) => {
	return (
		<form className="search">
			<input
				className="search__input"
				type="text"
				placeholder="Search"
				onChange={onSearchChange}
			/>
		</form>
	);
};

export default Search;

import { useDispatch } from "react-redux";
import { addSearchItem } from "../features/search/searchSlice";
import "../Sass/Search.scss";


const Search = () => {

	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(addSearchItem(e.target.value));
	};

	return (
		<form className="search">
			<input
				className="search__input"
				type="text"
				placeholder="Search"
				onChange={handleChange}
			/>
		</form>
	);
};

export default Search;

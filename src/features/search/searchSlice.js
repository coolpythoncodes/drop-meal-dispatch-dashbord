import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		addSearchItem: (state, action) => {
			return action.payload ;
		},
	},
});

export const { addSearchItem } = searchSlice.actions;
export const selectSearchItem = state => state.search;
export default searchSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { filterSliceState } from "./types";

const initialState: filterSliceState = {
	filterType: 'Все',
	sortType: '',
	searchText: '',
	page: 1
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilterType: (state, action: PayloadAction<string>) => {
			state.filterType = action.payload;
		},
		setSortType: (state, action: PayloadAction<string>) => {
			state.sortType = action.payload;
		},
		setSearchText: (state, action: PayloadAction<string>) => {
			state.searchText = action.payload;
		},
		setCountPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		}
	}
});

export const { setFilterType, setSortType, setSearchText, setCountPage } = filterSlice.actions;

export default filterSlice.reducer;

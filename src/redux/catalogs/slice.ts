import { createSlice } from '@reduxjs/toolkit';
import { getCatalogs } from './asyncActions';
import { catalogsSliceState } from './types';
import { Status } from 'shared/types/types';

const initialState: catalogsSliceState = {
	catalogGoods: [],
	status: Status.LOADING
};

const catalogsSlice = createSlice({
	name: 'catalogs',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(getCatalogs.pending, (state) => {
			state.status = Status.LOADING;
			state.catalogGoods = [];
		});

		builder.addCase(getCatalogs.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.catalogGoods = action.payload;
		});

		builder.addCase(getCatalogs.rejected, (state) => {
			state.status = Status.ERROR;
			state.catalogGoods = [];
		});
	},
});

export default catalogsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { getWare } from './asyncActions';
import { wareSliceState } from './types';
import { Status } from 'shared/types/types';

const initialState: wareSliceState = {
	ware: null,
	status: Status.LOADING
};

const wareSlice = createSlice({
	name: 'ware',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(getWare.pending, (state) => {
			state.status = Status.LOADING;
			state.ware = null;
		});

		builder.addCase(getWare.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.ware = action.payload;
		});

		builder.addCase(getWare.rejected, (state) => {
			state.status = Status.ERROR;
			state.ware = null;
		});
	},
});

export default wareSlice.reducer;

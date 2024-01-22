import { createSlice } from '@reduxjs/toolkit';
import { getGoods } from './asyncActions';
import { Ware as WareModel } from 'shared/models/Ware';
import { WareSliceState } from './types';
import { Status } from 'shared/types/types';

const initialState: WareSliceState = {
	goods: [],
	status: Status.LOADING,
	totalPages: 0
};

const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(getGoods.pending, (state) => {
			state.status = Status.LOADING;
			state.goods = [];
			state.totalPages = 0;
		});

		builder.addCase(getGoods.fulfilled, (state, action) => {
			state.goods = action.payload.goods;
			state.totalPages = action.payload.totalPage;
			state.status = Status.SUCCESS;
		});

		builder.addCase(getGoods.rejected, (state) => {
			state.status = Status.ERROR;
			state.goods = [];
			state.totalPages = 0;
		});
	},
});

export default goodsSlice.reducer;

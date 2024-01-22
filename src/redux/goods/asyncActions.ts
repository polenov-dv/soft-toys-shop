import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Ware as WareModel } from 'shared/models/Ware';
import { getPageCount } from 'utils/pages';
import { SearchParams, getGoodsState } from './types';

export const getGoods = createAsyncThunk<getGoodsState, SearchParams>(
	'goods/getGoodsStatus',
	async (params) => {
		const { limit, page, filter, sort, order, search } = params;
		const response = await axios.get<WareModel[]>(`http://localhost:8000/goods`, {
			params: {
				_limit: limit,
				_page: page,
				catalog_like: filter,
				_sort: sort,
				_order: order,
				filter_like: search
			}
		});
		const totalCount = response.headers['x-total-count'];
		return { goods: response.data, totalPage: getPageCount(totalCount, limit) };
	},
);

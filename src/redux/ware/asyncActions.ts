import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Ware as WareModel } from 'shared/models/Ware';

export const getWare = createAsyncThunk<WareModel, number>(
	'ware/getWareStatus',
	async (id) => {
		const response = await axios.get<WareModel>(`http://localhost:8000/goods/${id}`);
		const ware: WareModel = response.data;
		return ware;
	},
);

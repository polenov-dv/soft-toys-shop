import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Ware as WareModel } from 'shared/models/Ware';

export const getCatalogs = createAsyncThunk<string[]>(
	'catalogs/getCatalogsStatus',
	async () => {
		const response = await axios.get<WareModel[]>(`http://localhost:8000/goods`);
		const data: WareModel[] = response.data;
		let catalogs = [];
		catalogs = data.map(item => item.catalog).filter((item, index, arr) => { return arr.indexOf(item) === index });
		return catalogs;
	},
);

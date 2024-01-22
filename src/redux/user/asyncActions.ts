import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User as UserModel } from 'shared/models/User';

export const getUsers = createAsyncThunk<UserModel[]>(
	'user/getUserStatus',
	async () => {
		const response = await axios.get<UserModel[]>(`http://localhost:8000/users`);
		return response.data;
	},
);

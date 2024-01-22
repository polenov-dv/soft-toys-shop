import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers } from './asyncActions';
import { getUserFromLS } from 'utils/getUserFromLS';
import { userSliceState } from './types';
import { User as UserModel } from 'shared/models/User';
import { Status } from 'shared/types/types';

const initialState: userSliceState = {
	users: null,
	activeUser: getUserFromLS(),
	status: Status.LOADING
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setActiveUser: (state, action: PayloadAction<UserModel>) => {
			state.activeUser = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getUsers.pending, (state) => {
			state.status = Status.LOADING;
			state.users = null;
		});

		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.status = Status.SUCCESS;
			state.users = action.payload;
		});

		builder.addCase(getUsers.rejected, (state) => {
			state.status = Status.ERROR;
			state.users = null;
		});
	},
});

export const { setActiveUser } = userSlice.actions;

export default userSlice.reducer;

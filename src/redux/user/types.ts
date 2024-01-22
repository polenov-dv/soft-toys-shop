import { User as UserModel } from 'shared/models/User';
import { Status } from 'shared/types/types';

export interface userSliceState {
	users: UserModel[],
	status: Status,
	activeUser: UserModel,
}

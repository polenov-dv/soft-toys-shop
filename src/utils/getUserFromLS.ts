import { User as UserModel } from 'shared/models/User';

export const getUserFromLS = () => {
	const data = localStorage.getItem('user');
	const user: UserModel = data ? JSON.parse(data) : null;
	return user;
};

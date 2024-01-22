import React, { useState } from 'react';
import { useAppDispatch } from "redux/store";
import { useLocation, useNavigate } from 'react-router-dom';
import { User as UserModel } from 'shared/models/User';
import { setActiveUser } from 'redux/user/slice';
import WareService from 'api/WareService';

export const useAutorization = (userName: string, email: string, password: string, users: UserModel[], isLogin: boolean) => {

	const dispatch = useAppDispatch();
	const [errorMessage, setErrorMessage] = useState('');
	const location = useLocation();
	const router = useNavigate();
	const [changeLocation, setChangeLocation] = useState(location.pathname);

	if (location.pathname !== changeLocation) {
		setErrorMessage('');
		setChangeLocation(location.pathname);
	}

	//Регистрация нового пользователя
	const authorizationUser = () => {
		const user = users.find((user) => user.name === userName);

		if (!user) {
			const newUser: UserModel = {
				id: users.length + 1,
				name: userName,
				email: email,
				password: password,
			}

			WareService.createUser(newUser);
			dispatch(setActiveUser(newUser));
			const json = JSON.stringify(newUser);
			localStorage.setItem('user', json);
			router('/');
		} else {
			setErrorMessage(`Пользователь ${userName} уже зарегистрирован`);
		}
	}

	//Вход зарегестрированного пользователя
	const entryUser = () => {
		const user = users.find((user) => user.name === userName && user.password === password);

		if (user) {
			dispatch(setActiveUser(user));
			const json = JSON.stringify(user);
			localStorage.setItem('user', json);
			router('/');
		} else {
			setErrorMessage('Неверное имя или пароль!');
		}
	}

	//Пользователь нажал на кнопку авторизации
	const authorization = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (isLogin) {
			if (password && userName) {
				entryUser();
			} else {
				setErrorMessage('Заполните все поля входа!');
			}
		} else {
			if (email && password && userName) {
				authorizationUser();
			} else {
				setErrorMessage('Заполните все поля регистрации!');
			}
		}
	}


	return { authorization, errorMessage };
}
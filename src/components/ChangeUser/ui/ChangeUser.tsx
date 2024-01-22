import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './ChangeUser.module.scss';
import { selectUser } from 'redux/user/selectors';
import { useAppDispatch } from "redux/store";
import { getUsers } from 'redux/user/asyncActions';
import { useAutorization } from 'hooks/useAutorization/useAutorization';
import { ErrorMessage } from 'components/ErrorMessage';

export const ChangeUser = () => {

	const [isLogin, setIsLogin] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const { users, status } = useSelector(selectUser);
	const dispatch = useAppDispatch();

	const pageTitle = isLogin ? 'Войти' : 'Зарегистрироватся';
	const descriptionText = isLogin ? 'Создать аккаунт?' : 'Есть аккаунт?';

	const getData = async () => {
		dispatch(getUsers());
	}

	useEffect(() => {
		getData();
	}, [])

	const { authorization, errorMessage } = useAutorization(userName, email, password, users, isLogin);

	if (status === 'error') {
		return (
			<ErrorMessage textMessage="Ошибка загрузки данных" />
		)
	}

	return (
		<>
			{
				status === 'completed' &&
				<div className={cls.content}>
					<h1 className={cls.title}>{pageTitle}</h1>
					<span className={cls.change_login}
						onClick={() => setIsLogin(!isLogin)}
					>{descriptionText}</span>
					<form className={cls.form} onSubmit={authorization}>
						<fieldset className={cls.form_content}>
							<ErrorMessage textMessage={errorMessage} />
							<fieldset className={cls.form_item}>
								<input
									type="text"
									className={cls.form_input}
									placeholder='Имя'
									value={userName}
									onChange={e => setUserName(e.target.value)}
								/>
							</fieldset>
							{!isLogin && (
								<fieldset className={cls.form_item}>
									<input
										type="email"
										className={cls.form_input}
										placeholder='Электронная почта'
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</fieldset>
							)}
							<fieldset className={cls.form_item}>
								<input
									type="password"
									className={cls.form_input}
									placeholder='Пароль'
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</fieldset>
							<button className={cls.btn} type='submit'>{pageTitle}</button>
						</fieldset>
					</form>
				</div>
			}
		</>
	);
};

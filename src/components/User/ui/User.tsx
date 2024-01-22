import { useSelector } from 'react-redux';
import cls from './User.module.scss';
import { selectUser } from 'redux/user/selectors';
import { setActiveUser } from 'redux/user/slice';
import { useAppDispatch } from "redux/store";
import avatar from 'shared/assets/images/profile.jpg';

export const User = () => {

	const { activeUser } = useSelector(selectUser);
	const dispatch = useAppDispatch();

	const changeUser = () => {
		dispatch(setActiveUser(null));
		localStorage.setItem('user', '');
	}

	return (
		<div className={cls.content}>
			<div className={cls.menu}>
				<div className={cls.id_user}>
					<img className={cls.user_img} src={avatar} alt="Логотип" />
					<p className={cls.user_text}>{activeUser.name}</p>
				</div>
				<button className={cls.btn} type='button' onClick={changeUser} > Выйти</button>
			</div>

			<div className={cls.info}>
				Информация о пользователe:
			</div>
		</div>
	);
};

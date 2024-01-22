import { useSelector } from 'react-redux';
import cls from './Sign.module.scss';
import { User } from 'components/User';
import { ChangeUser } from 'components/ChangeUser';
import { selectUser } from 'redux/user/selectors';

const Sign = () => {

	const { activeUser } = useSelector(selectUser);

	return (
		<main className='container'>
			<div className={cls.inner}>
				{
					activeUser
						? <User />
						: <ChangeUser />
				}
			</div>
		</main>
	);
};

export default Sign;

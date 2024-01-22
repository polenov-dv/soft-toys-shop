import { Link } from 'react-router-dom';
import cls from './CartEmpty.module.scss';
import cartEmptyImg from 'shared/assets/images/empty_cart.png';

export const CartEmpty = () => {
	return (
		<main className={`${cls.inner} container`}>
			<div className={cls.content}>
				<h2 className={cls.title}>
					Корзина пустая <span>😕</span>
				</h2>
				<p className={cls.desc}>
					Вероятней всего, вы еще не выбрали игрушку.
					<br />
					Для того, чтобы купить игрушку, перейди на главную страницу.
				</p>
				<img className={cls.cart_empty} src={cartEmptyImg} alt="Empty cart" />
				<Link to="/" className={cls.btn}>
					<span>Вернуться назад</span>
				</Link>
			</div>
		</main>
	);
};

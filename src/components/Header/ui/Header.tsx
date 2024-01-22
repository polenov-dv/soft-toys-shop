import { useEffect, useRef, useState } from 'react';
import { Search } from 'components/Search';
import { useSelector } from 'react-redux';
import cls from './Header.module.scss';
import logo from 'shared/assets/images/logo.png';
import cart from 'shared/assets/images/shopping_cart.png';
import avatar from 'shared/assets/images/profile.jpg';
import { Link, useLocation } from 'react-router-dom';
import { selectCart } from 'redux/cart/selectors';
import { selectUser } from 'redux/user/selectors';

export const Header = () => {

	const { totalPrice, totalCount, itemsCart } = useSelector(selectCart);
	const { activeUser } = useSelector(selectUser);
	const location = useLocation();
	const isMounted = useRef(false);
	const [openMenu, setOpenMenu] = useState(false);

	const nav_list = openMenu
		? cls.menu_list + " " + cls.menu_open
		: cls.menu_list;

	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(itemsCart);
			localStorage.setItem('cart', json);
		}
		isMounted.current = true;
	}, [itemsCart])

	return (
		<header className={cls.header}>
			<div className={`${cls.inner} ${'container'}`}>
				<div className={cls.logo_wrapper}>
					<Link to='/'>
						<img className={cls.logo} src={logo} alt="Логотип" />
					</Link>
					<div className={cls.about_shop}>
						<h1 className={cls.title}>Магазин детских игрушек</h1>
						<p className={cls.text}>Самые лучшие мягкие игрушки !</p>
					</div>
				</div>
				<div className={cls.search_wrapper}>
					{location.pathname === '/' && <Search />}
				</div>

				<div className={cls.nav_wrapper}>
					<nav className={cls.menu}>
						<div onClick={() => setOpenMenu(!openMenu)} className={cls.menu_btn}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<ul className={nav_list}>
							<li className={cls.nav_item}>
								<Link
									onClick={() => setOpenMenu(false)}
									className={location.pathname === "/" ? cls.nav_link_active : cls.nav_link}
									to="/"
								>
									Главная
								</Link>
							</li>
							<li className={cls.nav_item}>
								<Link
									onClick={() => setOpenMenu(false)}
									className={location.pathname === "/about" ? cls.nav_link_active : cls.nav_link}
									to="/about"
								>
									O сайте
								</Link>
							</li>
							<li className={cls.nav_item}>
								<Link
									onClick={() => setOpenMenu(false)}
									className={location.pathname === "/login" ? cls.nav_link_active : cls.nav_link}
									to="/login"
								>
									{
										activeUser ?
											<img className={cls.avatar} src={avatar} alt="Аватарка" />
											:
											<span>Регистрация</span>
									}
								</Link>
							</li>
						</ul>
					</nav>

					<Link to={'/cart'} className={cls.basket_wrapper}>
						<span>{totalPrice} ₽</span>
						<div className={cls.delimiter}></div>
						<img className={cls.cart_img} src={cart} alt="Корзина" />
						<span>   {totalCount > 0 ? totalCount : ''}</span>
					</Link>
				</div>
			</div>
		</header >
	);
};
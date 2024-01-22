import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cls from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { CartEmpty } from 'components/CartEmpty';
import { CartItem } from 'components/CartItem';
import ShoppingCart from 'shared/assets/icons/cart.svg';
import ClearCart from 'shared/assets/icons/clear.svg';
import ArrowBack from 'shared/assets/icons/arrow_back.svg';
import { selectCart } from 'redux/cart/selectors';
import { removeAllWareCart } from 'redux/cart/slice';
import { ConfirmModal } from 'components/ConfirmModal';

const Cart = () => {

	const { itemsCart, totalPrice, totalCount } = useSelector(selectCart);
	const [modal, setModal] = useState(false);
	const dispatch = useDispatch();

	const clearCart = () => {
		dispatch(removeAllWareCart());
	}

	if (!totalPrice) {
		return <CartEmpty />
	}

	return (
		<main className='container'>
			<ConfirmModal visible={modal} setVisible={setModal} />
			<div className={cls.cart}>
				<div className={cls.cart_top}>
					<h2 className={cls.title}>
						<ShoppingCart className={cls.title_img} />
						Корзина
					</h2>
					<div
						className={cls.clear}
						onClick={() => clearCart()}
					>
						<ClearCart className={cls.clear_img} />
						<span>Очистить корзину</span>
					</div>
				</div>

				<div className={cls.content_items}>
					{
						itemsCart.map((item, index) => (
							<CartItem key={index} ware={item} />
						))
					}
				</div>

				<div className={cls.cart_bottom}>
					<div className={cls.details}>
						<span className={cls.details_text}>
							Всего товаров: <b> {totalCount} шт.</b>
						</span>
						<span className={cls.details_text}>
							Сумма заказа: <b className={cls.price}>{totalPrice} ₽</b>
						</span>
					</div>
					<div className={cls.buttons}>
						<Link to="/" className={`${cls.btn} ${cls.btn_back}`}>
							<ArrowBack />
							<span>Вернуться назад</span>
						</Link>
						<div
							className={`${cls.btn} ${cls.btn_buy}`}
							onClick={() => setModal(true)}
						>
							<span>Оплатить сейчас</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Cart;

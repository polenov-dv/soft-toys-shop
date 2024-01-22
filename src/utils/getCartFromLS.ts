import { Ware as WareModel } from 'shared/models/Ware';
import { calcTotalPrice } from './calcTotalPrice';
import { calcTotalCount } from './calcTotalCount';

export const getCartFromLS = () => {
	const data = localStorage.getItem('cart');
	const itemsCart = data ? JSON.parse(data) : [];
	const totalPrice = calcTotalPrice(itemsCart);
	const totalCount = calcTotalCount(itemsCart);

	return {
		totalPrice,
		totalCount,
		itemsCart: itemsCart as WareModel[]
	};
};

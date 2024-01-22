import { useDispatch } from 'react-redux';
import cls from './CartItem.module.scss';
import CountImg from 'shared/assets/icons/count.svg';
import { Ware as WareModel } from 'shared/models/Ware';
import { removeWareFromCart, plusWareCount, minusWareCount } from 'redux/cart/slice';

interface CartItemProps {
	ware: WareModel;
}

export const CartItem = ({ ware }: CartItemProps) => {

	const dispatch = useDispatch();

	const removeWare = (selectWare: WareModel) => {
		dispatch(removeWareFromCart(selectWare));
	}

	const plusWare = (selectWare: WareModel) => {
		dispatch(plusWareCount(selectWare));
	}

	const minusWare = (selectWare: WareModel) => {
		dispatch(minusWareCount(selectWare));
	}

	return (
		<div className={cls.item}>
			<div className={cls.info_ware}>
				<img className={cls.ware_img} src={ware.image_url} alt="Игрушка" />
				<h3>{ware.name}</h3>
				<p>размер: {ware.size} см</p>
			</div>

			<div className={cls.count}>
				<button
					className={`${cls.btn} ${cls.circle} ${cls.minus}`}
					onClick={() => minusWare(ware)}
					disabled={ware.count <= 1 ? true : false}
				>
					<CountImg />
				</button>
				<b className={cls.count_value}>{ware.count}</b>
				<button
					className={`${cls.btn} ${cls.circle}`}
					onClick={() => plusWare(ware)}
				>
					<CountImg />
				</button>
			</div>

			<div className={cls.price}>
				<b>{ware.price * ware.count}  ₽</b>
			</div>
			<div className={cls.remove}>
				<div
					className={`${cls.btn} ${cls.circle} ${cls.btn_remove}`}
					onClick={() => removeWare(ware)}
				>
					<CountImg />
				</div>
			</div>
		</div>
	);
};

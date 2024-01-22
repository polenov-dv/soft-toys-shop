import { useState } from 'react';
import { Ware as WareModel } from 'shared/models/Ware';
import WareService from 'api/WareService';
import { useDispatch } from 'react-redux';
import { addWareToCart } from 'redux/cart/slice';
import { calcActiveIndexPrice } from 'utils/calcActiveIndexPrice';

import cls from './Ware.module.scss';
import star from "shared/assets/images/star.png";
import { Link } from 'react-router-dom';

interface Props {
	ware: WareModel;
}

export const Ware = ({ ware }: Props) => {

	const [acticeSize, setActiveSize] = useState(calcActiveIndexPrice(ware.prices, ware.price));
	const dispatch = useDispatch();

	const changeSize = (index: number) => {
		setActiveSize(index);
		WareService.createPriceWare(ware, index);
	}

	const buyWare = (selectedWare: WareModel) => {
		let obrWare: WareModel = Object.assign({}, selectedWare);
		obrWare.size = obrWare.prices[acticeSize].size;
		obrWare.price = obrWare.prices[acticeSize].value;
		obrWare.count += 1;
		dispatch(addWareToCart(obrWare));
	}

	return (
		<div className={cls.content}>
			<Link to={`/ware/${ware.id}`} className={cls.link_ware}>
				<div className={cls.ware_img_wrapper}>
					<img className={cls.ware_img} src={ware.image_url} alt="Игрушка" />
				</div>
				<div className={cls.rating}>
					<div className={cls.rating_star}>
						<img className={cls.rating_img} src={star} alt="Звезда" />
						<b className={cls.star_number}>{ware.stars}</b>
						<div className={cls.rating_circle}></div>
						<p>{ware.likes} оценки</p>
					</div>
					<p className={cls.rating_comment}>отзывов: {ware.comments.length}</p>
				</div>

				<p className={cls.ware_description}>
					<b>{ware.name} </b>
					/ {ware.description}
				</p>
			</Link>

			<div className={cls.ware_size}>
				<p className={cls.size_text}>Размер</p>
				<ul className={cls.size_wrapper}>
					{
						ware.prices.map((price, index) => (
							<li
								key={index}
								onClick={() => changeSize(index)}
								className={acticeSize == index ? `${cls.size_item} ${cls.active_size}` : cls.size_item}>
								{price.size} см.
							</li>
						))
					}
				</ul>
			</div>

			<ul className={cls.package}>
				<li className={cls.price}>
					{
						ware.prices.map((price, index) => (
							acticeSize == index && (
								<div key={index}>
									{price.value}
									<span className={cls.price_icon}>  ₽</span>
								</div>
							)
						))
					}
				</li>
				<li className={cls.add}>
					<button
						className={cls.add_btn}
						onClick={() => buyWare(ware)}
					>
						Купить
					</button>
				</li>
			</ul>
		</div>
	);
};

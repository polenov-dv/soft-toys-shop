import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from "redux/store";
import cls from './FullWare.module.scss';
import { Ware as WareModel } from 'shared/models/Ware';
import { useParams } from 'react-router-dom';
import star from "shared/assets/images/star.png";
import { calcActiveIndexPrice } from 'utils/calcActiveIndexPrice';
import WareService from 'api/WareService';
import { addWareToCart } from 'redux/cart/slice';
import { selectWare } from 'redux/ware/selectors';
import { getWare } from 'redux/ware/asyncActions';
import { Comments } from 'components/Comments';

const FullWare = () => {

	const { id } = useParams();
	const { ware, status, } = useSelector(selectWare);
	const [acticeSize, setActiveSize] = useState(0);
	const [changeComments, setChangeComments] = useState(false);
	const dispatch = useAppDispatch();

	const getData = async () => {
		dispatch(getWare(+id));
	}

	useEffect(() => {
		getData();
	}, [changeComments])

	useEffect(() => {
		setActiveSize(ware !== null ? calcActiveIndexPrice(ware.prices, ware.price) : 0)
	}, [ware])

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
		<main className='container'>
			<>
				{status === 'completed' &&
					<div className={cls.content}>
						<div className={cls.link_ware}>
							<div className={cls.ware_img_wrapper}>
								<img className={cls.ware_img} src={`../${ware.image_url}`} alt="Игрушка" />
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
						</div>

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

						<Comments ware={ware} />
					</div>
				}
			</>
		</main>
	);
};

export default FullWare;
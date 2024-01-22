import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cls from './Filter.module.scss';
import { setFilterType } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import { ErrorMessage } from 'components/ErrorMessage';
import { selectCatalogs } from 'redux/catalogs/selectors';
import { useAppDispatch } from "redux/store";
import { getCatalogs } from 'redux/catalogs/asyncActions';

export const Filter = () => {

	const { filterType } = useSelector(selectFilter);
	const { catalogGoods, status } = useSelector(selectCatalogs);
	const dispatch = useAppDispatch();

	const changeFilterWare = (filterType: string) => {
		dispatch(setFilterType(filterType));
	}

	const getData = async () => {
		dispatch(getCatalogs());
	}

	useEffect(() => {
		getData();
	}, [])

	if (status === 'error') {
		return (
			<ErrorMessage textMessage='Ошибка загрузки данных' />
		)
	}

	return (
		<div className={cls.inner}>
			<p className={cls.desc}>Каталог товаров:</p>
			<div>
				{status === 'completed' &&
					<ul className={cls.catalog}>
						{
							catalogGoods.map((item, index) => (
								<li
									className={filterType === item ? `${cls.ware} ${cls.ware_active}` : cls.ware}
									key={index}
									onClick={() => changeFilterWare(item)}
								>
									{item}
								</li>
							))
						}
						<li className={filterType === 'Все' ? `${cls.ware} ${cls.ware_active}` : cls.ware} onClick={() => changeFilterWare('Все')}>Все</li>
					</ul>
				}
			</div>
		</div >
	);
};

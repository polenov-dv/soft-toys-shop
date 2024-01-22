import { useDispatch, useSelector } from 'react-redux';
import cls from './Sort.module.scss';
import { setSortType } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';

export const Sort = () => {

	const sortList = [
		{ name: 'По популярности', sortProperty: 'stars' },
		{ name: 'Сначала дорогие', sortProperty: 'price' },
		{ name: 'Сначала недорогие', sortProperty: '-price' }
	];

	const { sortType } = useSelector(selectFilter);
	const dispatch = useDispatch();

	const changeFilter = (filter: string) => {
		dispatch(setSortType(filter));
	}

	return (
		<div className={cls.inner}>
			<div className={cls.title}>
				Сортировать:
			</div>
			<ul className={cls.content}>
				{
					sortList.map((item, index) => (
						<li
							key={index}
							className={sortType === item.sortProperty ? `${cls.item} ${cls.item_active}` : cls.item}
							onClick={() => changeFilter(item.sortProperty)}
						>
							{item.name}
						</li>
					))
				}
			</ul>
		</div >
	);
};

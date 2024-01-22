import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useAppDispatch } from "redux/store";
import cls from './Home.module.scss';
import { SectionNews } from "components/SectionNews";
import { Sort } from "components/Sort";
import { Goods } from "components/Goods";
import { Filter } from "components/Filter";
import { Pagination } from "components/Pagination";
import { Sceleton } from "components/Sceleton";
import { ErrorMessage } from "components/ErrorMessage";
import { selectFilter } from "redux/filter/selectors";
import { selectGoods } from "redux/goods/selectors";
import { getGoods } from "redux/goods/asyncActions";
import { setCountPage } from "redux/filter/slice";

const Home = () => {

	const { filterType, sortType, searchText, page } = useSelector(selectFilter);
	const { goods, status } = useSelector(selectGoods);
	const dispatch = useAppDispatch();
	const limit = 8;

	const getData = async () => {

		const order = sortType.includes('-') ? 'asc' : 'desc';
		const sortBy = sortType.replace('-', '');
		const filter = `${filterType !== 'Все' ? `${filterType}` : ''}`;
		const sort = `${sortType !== '' ? `${sortBy}` : ''}`;
		const search = searchText ? `${searchText}` : '';

		dispatch(
			getGoods({
				limit,
				page,
				filter,
				sort,
				order,
				search
			}),
		);

		window.scrollTo(0, 0);
	};

	useEffect(() => {
		getData();
	}, [filterType, sortType, searchText, page])


	useEffect(() => {
		dispatch(setCountPage(1));
	}, [filterType, sortType, searchText])

	if (status === 'error') {
		return (
			<main className='container'>
				<SectionNews />
				<ErrorMessage textMessage="Ошибка загрузки данных" />
			</main>
		)
	}

	return (
		<>
			<SectionNews />
			<main className='container'>
				<Sort />
				<div className={cls.inner}>
					<Filter />
					{status === 'loading' ?
						<Sceleton /> :
						<Goods goods={goods} />
					}
				</div>
				<Pagination />
			</main>
		</>
	);
};

export default Home;

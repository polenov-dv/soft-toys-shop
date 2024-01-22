import { useSelector, useDispatch } from 'react-redux';
import cls from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { selectFilter } from 'redux/filter/selectors';
import { selectGoods } from 'redux/goods/selectors';
import { setCountPage } from 'redux/filter/slice';

export const Pagination = () => {

	const dispatch = useDispatch();
	const { totalPages } = useSelector(selectGoods);
	const { page } = useSelector(selectFilter);

	return (
		<ReactPaginate
			className={cls.root}
			breakLabel="..."
			nextLabel=">"
			onPageChange={e => dispatch(setCountPage(e.selected + 1))}
			pageRangeDisplayed={2}
			marginPagesDisplayed={2}
			pageCount={totalPages}
			previousLabel="<"
			renderOnZeroPageCount={null}
			forcePage={page - 1}
		/>
	);
};

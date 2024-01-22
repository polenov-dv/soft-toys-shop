import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cls from './Search.module.scss';
import search from 'shared/assets/images/search.png'
import Clear from 'shared/assets/icons/clearSearch.svg';
import useDebounce from 'hooks/useDebounce/useDebounce';
import { selectFilter } from 'redux/filter/selectors';
import { setSearchText } from 'redux/filter/slice';

export const Search = () => {

	const [inputText, setInputText] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	const debounce = useDebounce(inputText, 250);
	const dispatch = useDispatch();
	const { searchText } = useSelector(selectFilter);

	const clearInput = () => {
		setInputText('');
		inputRef.current.focus();
	}

	useEffect(() => {
		dispatch(setSearchText(debounce));
	}, [debounce]);

	return (
		<div className={cls.inner}>
			<div className={cls.content}>
				<img className={cls.search_img} src={search} alt="Лупа поиска" />
				<input
					ref={inputRef}
					value={inputText}
					onChange={e => setInputText(e.target.value)}
					className={cls.input}
					placeholder="Поиск игрушки..."
				/>
				{searchText &&
					<Clear onClick={clearInput} className={cls.clear_icon} />
				}
			</div>
		</div >
	);
};
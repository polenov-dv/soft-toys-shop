import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import filter from 'redux/filter/slice';
import cart from 'redux/cart/slice';
import goods from 'redux/goods/slice';
import catalogs from 'redux/catalogs/slice';
import ware from 'redux/ware/slice';
import user from 'redux/user/slice';

export const store = configureStore({
	reducer: {
		filter,
		cart,
		goods,
		catalogs,
		ware,
		user
	}
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
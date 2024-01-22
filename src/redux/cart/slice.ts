import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Ware as WareModel } from 'shared/models/Ware';
import { CartSliceState } from "./types";
import { calcTotalPrice } from 'utils/calcTotalPrice';
import { calcTotalCount } from 'utils/calcTotalCount';
import { getCartFromLS } from "utils/getCartFromLS";

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
	name: 'cartWare',
	initialState,
	reducers: {
		addWareToCart: (state, action) => {
			const ware = state.itemsCart.find((item) => item.id === action.payload.id && item.size === action.payload.size);
			if (ware) {
				ware.count += 1;
			} else {
				state.itemsCart.push(action.payload);
			}
			state.totalPrice = calcTotalPrice(state.itemsCart);
			state.totalCount = calcTotalCount(state.itemsCart);
		},
		removeWareFromCart: (state, action: PayloadAction<WareModel>) => {
			const wareIndex = state.itemsCart.findIndex((item) => item.id === action.payload.id && item.size === action.payload.size);
			if (wareIndex !== -1) {
				state.itemsCart.splice(wareIndex, 1);
				state.totalPrice = calcTotalPrice(state.itemsCart);
				state.totalCount = calcTotalCount(state.itemsCart);
			}
		},
		removeAllWareCart: (state) => {
			state.itemsCart.length = 0;
			state.totalPrice = calcTotalPrice(state.itemsCart);
			state.totalCount = calcTotalCount(state.itemsCart);
		},
		plusWareCount: (state, action: PayloadAction<WareModel>) => {
			const ware = state.itemsCart.find((item) => item.id === action.payload.id && item.size === action.payload.size);
			if (ware) {
				ware.count += 1;
				state.totalPrice = calcTotalPrice(state.itemsCart);
				state.totalCount = calcTotalCount(state.itemsCart);
			}
		},
		minusWareCount: (state, action: PayloadAction<WareModel>) => {
			const ware = state.itemsCart.find((item) => item.id === action.payload.id && item.size === action.payload.size);
			if (ware) {
				if (ware.count > 1) {
					ware.count -= 1;
					state.totalPrice = calcTotalPrice(state.itemsCart);
					state.totalCount = calcTotalCount(state.itemsCart);
				}
			}
		}
	}
});

export const { addWareToCart, removeWareFromCart, removeAllWareCart, plusWareCount, minusWareCount } = cartSlice.actions;

export default cartSlice.reducer;
import { RootState } from 'redux/store';

export const selectGoods = (state: RootState) => state.goods;

export const selectWareById = (id: number) => (state: RootState) => state.goods.goods.find((item) => item.id === id);
import { Ware as WareModel } from 'shared/models/Ware';

export interface CartSliceState {
	totalPrice: number;
	totalCount: number;
	itemsCart: WareModel[];
}
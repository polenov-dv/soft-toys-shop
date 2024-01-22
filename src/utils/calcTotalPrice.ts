import { Ware as WareModel } from 'shared/models/Ware';

export const calcTotalPrice = (items: WareModel[]) => {
	return items.reduce((sum, item) => item.price * item.count + sum, 0);
};

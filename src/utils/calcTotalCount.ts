import { Ware as WareModel } from 'shared/models/Ware';

export const calcTotalCount = (items: WareModel[]) => {
	return items.reduce((sum, item) => item.count + sum, 0);
};

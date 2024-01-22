import { Ware as WareModel } from 'shared/models/Ware';
import { Status } from 'shared/types/types';

export type getGoodsState = {
	goods: WareModel[];
	totalPage: number;
}

export type SearchParams = {
	limit: number;
	page: number;
	filter: string;
	sort: string;
	order: string;
	search: string;
};

export interface WareSliceState {
	goods: WareModel[];
	totalPages: number;
	status: Status;
}

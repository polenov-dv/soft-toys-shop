import { Status } from 'shared/types/types';

export interface catalogsSliceState {
	catalogGoods: string[],
	status: Status;
}

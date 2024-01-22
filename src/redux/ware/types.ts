import { Ware as WareModel } from 'shared/models/Ware';
import { Status } from 'shared/types/types';

export interface wareSliceState {
	ware: WareModel,
	status: Status;
}

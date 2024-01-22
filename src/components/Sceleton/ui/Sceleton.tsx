import cls from './Sceleton.module.scss';
import { SceletonItem } from "components/SceletonItem";

export const Sceleton = () => {

	return (
		<div className={cls.content}>
			<SceletonItem />
			<SceletonItem />
			<SceletonItem />
			<SceletonItem />
			<SceletonItem />
			<SceletonItem />
			<SceletonItem />
			<SceletonItem />
		</div>
	);
};
import cls from './Goods.module.scss';
import { Ware } from 'components/Ware';
import { Ware as WareModel } from 'shared/models/Ware';

interface Props {
	goods: WareModel[];
}

export const Goods = ({ goods }: Props) => {
	return (
		<div className={`${cls.content} ${'container'}`}>
			{
				goods.map((ware) => (
					<Ware key={ware.id} ware={ware} />
				))
			}
		</div>
	);
};

import cls from './Slide.module.scss';
import { Slide as SlideModel } from 'shared/models/Slide';

interface SlideProps {
	slide: SlideModel;
	status: boolean;
}

export const Slide = ({ slide, status }: SlideProps) => {

	return (
		<div
			style={{ backgroundImage: `linear-gradient(to top, ${slide.colorStart}, ${slide.colorEnd})` }}
			className={status ? cls.content : cls.hidden}
		>
			<h2 className={cls.title}>{slide.title}</h2>
			<p className={cls.text}>{slide.text}</p>
		</div>
	);
};

import cls from './SectionNews.module.scss';
import { Slide as SlideModel } from 'shared/models/Slide';
import { Slider } from 'components/UI/Slider';

export const SectionNews = () => {

	const contentSlider: SlideModel[] = [
		{ title: 'Брендовые игрушки от лучших производителей', text: 'Только качественный и проверенный товар', colorStart: '#b5dbff', colorEnd: '#c4fbfe' },
		{ title: 'Найдите друга для вашего ребенка', text: 'Мы вам с этим поможем', colorStart: '#fedcda', colorEnd: '#faf6f6' },
		{ title: 'Большой выбор игрушек популярных животных', text: 'От маленьких до больших', colorStart: '#ccfde0', colorEnd: '#f3fbc9' }
	]

	return (
		<div className={`${cls.inner} container`}>
			<Slider slides={contentSlider} />
		</div>
	);
};

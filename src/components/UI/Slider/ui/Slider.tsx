import { useState } from 'react';
import cls from './Slider.module.scss';
import { Slide as SlideModel } from 'shared/models/Slide';
import { Slide } from 'components/UI/Slide/ui/Slide';

interface SliderProps {
	slides: SlideModel[];
}

export const Slider = ({ slides }: SliderProps) => {

	const [activeSlide, setActiceSlide] = useState(0);

	return (
		<>
			<div className={cls.content}>
				{
					slides.map((slide, index) => (
						<Slide key={index} slide={slide} status={index === activeSlide} />
					))
				}
			</div>

			<div className={cls.nav}>
				{
					slides.map((item, index) => (
						<span
							key={index}
							onClick={() => setActiceSlide(index)}
							className={index === activeSlide ? `${cls.nav_item} ${cls.active}` : cls.nav_item}
						>
						</span>
					))
				}
			</div>
		</>
	);
};

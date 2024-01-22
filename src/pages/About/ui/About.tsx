import cls from './About.module.scss';

const About = () => {
	return (
		<main className='container'>
			<div className={cls.content}>
				<p className={cls.title}>Сайт создан с целью изучения основных концепций React.</p>
				<p className={cls.desc}>В рамках данного сайта реализован интернет магазин, который включает следующую функциональность:</p>
				<ul className={cls.list}>
					<li>
						постраничная навигация (react-router-dom);
					</li>
					<li>
						взаимодействие с серверов (json-server): получение, добавление, изменение элементов в базе данных;
					</li>
					<li>
						типизация кода TypeScript;
					</li>
					<li>
						регистрация/авторизация пользователя с использованием Redux Toolkit;
					</li>
					<li>
						работа с БД товаров с использованием Redux Toolkit;
					</li>
					<li>
						сортировка/фильтрация/поиск товаров;
					</li>
					<li>
						создание комментариев авторизованными пользователями;
					</li>
					<li>
						добавление товаров в корзину для дальнейшего оформления заказа;
					</li>
					<li>
						выполнение расчета общей стоимости и количества товаров в заказе;
					</li>
					<li>
						описание товара на отдельной странице по значению идентификатора (id);
					</li>
					<li>
						отображение макета товаров при загрузке из БД с использыванием ContentLoader (Skeleton UI);
					</li>
					<li>
						разбитие бандла на отдельные файлы (чанки) с использыванием Lazy Loading;
					</li>
					<li>
						постраничный вывод (пагинация);
					</li>
					<li>
						слайдер;
					</li>
					<li>
						переиспользуемые компоненты;
					</li>
					<li>
						кастомные хуки.
					</li>
				</ul>
			</div>
		</main>
	);
};

export default About;

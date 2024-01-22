import cls from './Comment.module.scss';
import avatar from 'shared/assets/images/profile.jpg';

interface commentProps {
	user: string;
	text: string;
}

export const Comment = ({ user, text }: commentProps) => {
	return (
		<div className={cls.content}>
			<div className={cls.user}>
				<img className={cls.user_img} src={avatar} alt="Пользователь" />
				<p className={cls.name}>{user}</p>
			</div>

			<div className={cls.comment_text}>
				{text}
			</div>

		</div>
	);
};

import { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { Ware as WareModel } from 'shared/models/Ware';
import { Comment as CommentModel } from 'shared/models/Comment';
import cls from './Comments.module.scss';
import { Comment } from 'components/Comment';
import { selectUser } from 'redux/user/selectors';
import WareService from 'api/WareService';

interface commentsProps {
	ware: WareModel
}

export const Comments = ({ ware }: commentsProps) => {

	const [textComment, setTextComment] = useState('');
	const [changeWare, setChangeWare] = useState<WareModel>(ware);
	const { activeUser } = useSelector(selectUser);

	const createComment = () => {
		if (textComment.length !== 0) {
			const wrkWare: WareModel = JSON.parse(JSON.stringify(changeWare))
			const newComment: CommentModel = { user: activeUser.name, text: textComment };
			wrkWare.comments.push(newComment);
			WareService.createComment(wrkWare);
			setTextComment('');
			setChangeWare(wrkWare);
		}
	}

	return (
		<div>
			<span className={cls.comments}>Комментарии:</span>
			<div className={cls.new_comment}>
				<textarea
					className={cls.text_area}
					value={textComment}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTextComment(e.currentTarget.value)}
				>
				</textarea>
				<button
					onClick={() => createComment()}
					className={cls.btn}
					disabled={activeUser ? false : true}
				>Добавить</button>
			</div>

			<div className={cls.comments_wrapper}>
				{
					changeWare.comments.map((item, index) => (
						<Comment key={index} text={item.text} user={item.user} />
					))
				}
			</div>
		</div>
	);
};


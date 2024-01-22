import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAllWareCart } from 'redux/cart/slice';
import cls from "./ConfirmModal.module.scss";
import Close from 'shared/assets/icons/close-icon.svg';

interface Props {
	visible: boolean;
	setVisible: (status: boolean) => void;
}

export const ConfirmModal = ({ visible, setVisible }: Props) => {

	const router = useNavigate();
	const dispatch = useDispatch();

	const onClose = () => {
		dispatch(removeAllWareCart());
		setVisible(false);
		router('/');
	}

	const modalClasses = [cls.modalWindow];
	if (visible) {
		modalClasses.push(cls.active);
	}

	return (
		<div
			className={modalClasses.join(' ')}
			onClick={() => onClose()}
		>
			<div
				className={cls.content}
				onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
			>
				<div className={cls.close_modal} onClick={() => onClose()}>
					<Close />
				</div>
				<h1 className={cls.title}>Спасибо за покупку!</h1>
			</div>
		</div>
	)
}
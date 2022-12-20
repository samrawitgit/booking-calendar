import React, { Dispatch, SetStateAction, useState } from "react";
import { Field } from "formik";
import { Reorder, useDragControls } from "framer-motion";
import { DragIcon } from "./DragIcon";

interface ItemProps {
	option: any, onSelect: (option: any) => void, isDragging: boolean, setIsDragging: Dispatch<SetStateAction<boolean>>, drag: boolean
}

export const Item = ({ option, onSelect, isDragging, setIsDragging, drag = false }: ItemProps) => {
	const dragControls = useDragControls();

	if (drag) {
		return (<Reorder.Item
			value={option}
			dragControls={dragControls}
			dragListener={false}
			onDragStart={(event, info) => { console.log(info.point.x, info.point.y); setIsDragging(true) }}
			onDragEnd={() => setIsDragging(false)}
		>
			<label
				className="label cursor-pointer justify-start"
			>
				<Field
					type="radio"
					name="picked"
					value="option.id"
					className="radio"
					checked={option.selected}
					onClick={() => !isDragging && onSelect(option)}

				/>
				<span className="label-text" >{option.title}</span>
				<DragIcon dragControls={dragControls} drag={drag} />
			</label>
		</Reorder.Item>)
	}

	return (
		<label
			className="label cursor-pointer justify-start"
		>
			<Field
				type="radio"
				name="picked"
				value="option.id"
				className="radio"
				checked={option.selected}
				onClick={() => /* !isDragging && */ onSelect(option)}

			/>
			<span className="label-text" >{option.title}</span>
			<DragIcon dragControls={dragControls} drag={drag} />
		</label>
	);
};


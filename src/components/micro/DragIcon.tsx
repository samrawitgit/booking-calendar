import { DragControls } from "framer-motion";

interface Props {
	dragControls: DragControls;
	drag: boolean
}

export function DragIcon({ dragControls, drag }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 39 39"
			width="13"
			height="39"
			onPointerDown={(event) => dragControls.start(event)}
			onTouchStart={(event) => dragControls.start(event)}
			onDragStart={(event) => dragControls.start(event)}
			onTouchMove={(event) => dragControls.start(event)}
			style={{
				width: "18px",
				height: "18px",
				cursor: drag ? "grab" : "pointer",
			}}
		>
			<path
				d="M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z"
				fill="#CCC"
			/>
			<path
				d="M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z"
				fill="#CCC"
			/>
			<path
				d="M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z"
				fill="#CCC"
			/>
		</svg>
	);
}

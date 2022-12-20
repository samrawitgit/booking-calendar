import { Dayjs } from "dayjs";

interface DaysProps {
	now: Dayjs
}

export const CalendarDays = (props: DaysProps) => {
	const { now } = props;
	const dateFormat = "ddd";
	const days: any = [];

	for (let i = 0; i < 7; i++) {
		const weekString = now.day(i).format(dateFormat);
		days.push(
			<div
				className="col grow basis-0 max-w-full justify-center text-center"
				key={i}
			>
				{weekString[0]}
			</div>,
		);
	}

	return <div className="days row w-full">{days}</div>;
};

import { CalendarHours } from "./CalendarHours";

export const CalendarCells = (props) => {
	const { view, totalDays } = props;

	const rows: any = [];
	let days: any = [];

	totalDays.forEach((week, index) => {
		week.dates.forEach((d, i) => {
			days.push(
				<div
					className={`col cell grow-0 relative h-20 border-r border-r-border-color overflow-hidden cursor-pointer bg-neutral-color ease-out duration-25 hover:bg-bg-color hover:ease-out duration-50  ${
						!d.isCurrentMonth
							? "disabled pointer-events-none text-text-color-light"
							: d.isCurrentDay
							? "selected border-l-8 border-transparent "
							: ""
					}`}
					key={`day-${i}`}
				>
					<span className="number">{d.day}</span>
					<span className="bg">{d.day}</span>
				</div>,
			);
		});
		rows.push(
			<div className="row border-b border-border-color" key={`row-${index}`}>
				{days}
			</div>,
		);
		days = [];
	});

	return (
		<>
			<div className="flex">
				<CalendarHours clssName="flex-none" />
				<div className="calendar-body flex-initial w-full">{rows}</div>
			</div>
		</>
	);
};

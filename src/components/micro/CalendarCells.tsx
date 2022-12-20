import { useRecoilState } from 'recoil'
import { dateState } from 'src/recoil/date';
import { DateObject } from "../";

interface CellsProps {
	totalDays: {
		dates: DateObject[]
	}[]
}

export const CalendarCells = (props: CellsProps) => {
	const { totalDays } = props;
	const [selectedDate, setSelectedDate] = useRecoilState(dateState)

	const onSelect = (event, d, i) => {
		console.log({ event, d, i, selectedDate, new: new Date(`${d.month}-${d.day}-${d.year}`) })
		setSelectedDate(new Date(`${d.month}-${d.day}-${d.year}`))
	}

	const rows: any = [];
	let days: any = [];

	totalDays.forEach((week, index) => {
		week.dates.forEach((d, i) => {
			days.push(
				<div
					className={`col cell grow-0 relative h-10 border-r border-r-border-color overflow-hidden cursor-pointer bg-neutral-color ease-out duration-25 hover:bg-bg-color hover:ease-out duration-50  ${!d.isCurrentMonth
						? "disabled pointer-events-none text-text-color-light"
						: d.isCurrentDay
							? "selected border-l-8 border-transparent "
							: ""
						}`}
					key={`day-${i}`}
					onClick={(event) => onSelect(event, d, i)}
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
				<div className="calendar-body flex-initial w-full">{rows}</div>
			</div>
		</>
	);
};

import { DateViews } from "../";

export const CalendarHeader = (props) => {
	const { view, currentMonth, prevMonth, nextMonth } = props;
	const dateFormat = "MMMM YYYY";

	if (view === DateViews.Week) {
		return <></>;
	}

	return (
		<div className="header p-6 border-b-2 border-border-color flex w-full items-center">
			<div className="grow basis-0 max-w-full justify-start text-left">
				<div
					className="icon cursor-pointer ml-4 justify-start text-left"
					onClick={() => prevMonth()}
					onKeyPress={() => prevMonth()}
				>
					chevron_left
				</div>
			</div>
			<div className="grow basis-0 max-w-full justify-center text-center">
				<span>{currentMonth.format(dateFormat)}</span>
			</div>
			<div
				className="grow basis-0 max-w-full justify-end text-right"
				onClick={() => nextMonth()}
				onKeyPress={() => nextMonth()}
			>
				<div className="icon cursor-pointer mr-4">chevron_right</div>
			</div>
		</div>
	);
};

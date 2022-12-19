import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
// Plugins
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";
import {
	CalendarCells,
	CalendarDays,
	CalendarHeader,
	DateViews,
	getAllDays,
} from ".";

dayjs.extend(weekdayPlugin);
dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);

const CustomCalendar = (props) => {
	const { view = DateViews.Month } = props;
	const now = dayjs();

	const [currentMonth, setCurrentMonth] = useState(now);
	const [arrayOfDays, setArrayOfDays] = useState([]);

	const nextMonth = () => {
		const plus = currentMonth.add(1, "month");
		setCurrentMonth(plus);
	};
	const prevMonth = () => {
		const minus = currentMonth.subtract(1, "month");
		setCurrentMonth(minus);
	};

	useEffect(() => {
		getAllDays(currentMonth, setArrayOfDays);
	}, [currentMonth]);

	return (
		<>
			<div className="calendar relative w-full flex-col bg-neutral-color border border-border-color">
				<CalendarHeader
					view={view}
					currentMonth={currentMonth}
					prevMonth={prevMonth}
					nextMonth={nextMonth}
				/>
				<CalendarDays view={view} now={now} />
				<CalendarCells view={view} totalDays={arrayOfDays} />
			</div>
		</>
	);
};

export default CustomCalendar;

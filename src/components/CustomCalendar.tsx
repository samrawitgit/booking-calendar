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
	DateObject,
	getAllDays,
} from "./";

dayjs.extend(weekdayPlugin);
dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);

const CustomCalendar = () => {
	const now = dayjs();

	const [currentMonth, setCurrentMonth] = useState(now);
	const [arrayOfDays, setArrayOfDays] = useState<{ dates: DateObject[] }[]>([]);

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
					currentMonth={currentMonth}
					prevMonth={prevMonth}
					nextMonth={nextMonth}
				/>
				<CalendarDays now={now} />
				<CalendarCells totalDays={arrayOfDays} />
			</div>
		</>
	);
};

export default CustomCalendar;

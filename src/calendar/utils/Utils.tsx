import dayjs, { Dayjs } from "dayjs";

/** Interfaces */

interface DateObject {
	day: number;
	month: number;
	year: number;
	isCurrentMonth: boolean;
	isCurrentDay: boolean;
}

export const DateViews = {
	Month: "month",
	Week: "week",
};

/** Utils */

const formateDateObject = (date: Dayjs, currentMonth: Dayjs): DateObject => {
	const clonedObject = { ...date.toObject() };
	const formatedObject = {
		day: clonedObject.date,
		month: clonedObject.months,
		year: clonedObject.years,
		isCurrentMonth: clonedObject.months === currentMonth.month(),
		isCurrentDay: date.isToday(),
	};

	return formatedObject;
};

export const getAllDays = (currentMonth, setArrayOfDays) => {
	let currentDate = currentMonth.startOf("month").weekday(0);
	const nextMonth = currentMonth.add(1, "month").month();
	let allDates: { dates: DateObject[] }[] = [];
	let weekDates: DateObject[] = [];
	let weekCounter = 1;
	while (currentDate.weekday(0).toObject().months !== nextMonth) {
		const formated = formateDateObject(currentDate, currentMonth);
		weekDates.push(formated);
		if (weekCounter === 7) {
			allDates.push({ dates: weekDates });
			weekDates = [];
			weekCounter = 0;
		}
		weekCounter++;
		currentDate = currentDate.add(1, "day");
	}
	setArrayOfDays(allDates);
};

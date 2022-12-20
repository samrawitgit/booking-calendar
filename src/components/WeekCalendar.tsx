import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import { useRecoilValue, } from "recoil";
import { filteredClasses } from "../recoil/classes";

import dayjs from "dayjs";
import isTodayPlugin from "dayjs/plugin/isToday";
import { DayHeaderContentArg, EventClickArg, EventContentArg } from "@fullcalendar/core";
import { dateState } from "../recoil/date";

dayjs.extend(isTodayPlugin);

const WeekCalendar = (props) => {
	const events = useRecoilValue(filteredClasses);
	const selectedDate = useRecoilValue(dateState)

	const customHeader = (day: DayHeaderContentArg) => {
		const dayObj = dayjs(day.date);

		return (
			<div className="flex flex-col h-20 justify-around overflow-hidden">
				<div>{dayObj.format("ddd")}</div>
				<div
					className={
						dayObj.isToday() ? "badge bg-green border-green w-9 h-9" : ""
					}
				>
					{dayObj.date()}
				</div>
			</div>
		);
	};

	const renderEvent = (event: EventContentArg) => {
		const { title, startStr, extendedProps } = event.event;
		const startTime = dayjs(startStr).format("HH:mm");

		return (
			<div className="flex flex-col h-full justify-around">
				<h1 className="truncate text-center">{title}</h1>
				{extendedProps.description && (
					<span className="text-center">{`${startTime} ${extendedProps.description}`}</span>
				)}
			</div>
		);
	};

	const onEventClick = (event: EventClickArg) => {
		console.log(`You booked "${event.event.title}"!`);
	};

	return (
		<div className="min-w-[60%]">
			<FullCalendar
				initialDate={selectedDate}
				visibleRange={{	// TODO:implement dynamic view when changing date
					start: "2022-12-20",
					end: "2022-12-26",
				}}
				plugins={[timeGridPlugin]}
				headerToolbar={{ start: "", center: "", end: "" }}
				dayHeaderContent={(arg) => customHeader(arg)}
				allDaySlot={false}
				slotMinTime="08:00:00"
				slotDuration="01:00:00"
				slotLabelFormat={{
					hour: "2-digit",
					minute: "2-digit",
					hour12: false,
				}}
				nowIndicator
				slotLabelClassNames="slotLabel"
				slotLaneClassNames="slotLanes"
				events={events}
				eventContent={(e) => renderEvent(e)}
				eventClick={(e) => onEventClick(e)}
				height="850px"
			/>
		</div>
	);
};

export default WeekCalendar;

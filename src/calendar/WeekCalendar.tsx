import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import CustomCalendar from "./CustomCalendar";
import { DateViews } from "./utils/Utils";
import { Calendar, EventSourceInput } from "@fullcalendar/core";
import { useRecoilValue } from "recoil";
import { classesState } from "src/recoil/classes";

import dayjs from "dayjs";
import isTodayPlugin from "dayjs/plugin/isToday";
import Availability from "src/components/Availability";

dayjs.extend(isTodayPlugin);

const CATEGORIES = {
	ALL: "all",
	ENG: "english",
	CONVO: "conversation",
	NIGHT: "night",
};

const WeekCalendar = (props) => {
	const events = useRecoilValue(classesState);
	const category = CATEGORIES.CONVO;

	const customHeader = (day) => {
		const dayObj = dayjs(day.date);

		return (
			<div className="flex flex-col h-20 justify-around">
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

	const renderEvent = (event) => {
		const { title, startStr, endStr, extendedProps } = event.event;
		const startTime = dayjs(startStr).format("HH:mm");
		const endTime = dayjs(endStr).format("HH:mm");

		return (
			<div className="flex flex-col h-full justify-around">
				<h1 className="truncate text-center">{title}</h1>
				{extendedProps.description && (
					<span className="text-center">{`${startTime} ${extendedProps.description}`}</span>
				)}
			</div>
		);
	};

	const onEventClick = (event) => {
		console.log({ event });
	};

	return (
		<div className="w-full">
			<FullCalendar
				visibleRange={{
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
				events={events.filter((e) => e.category === category)}
				eventColor="#B1B2FF"
				eventContent={(e) => renderEvent(e)}
				eventClick={(e) => onEventClick(e)}
			/>
			<Availability />
		</div>
	);
	// return <CustomCalendar view={DateViews.Week} />;
};

export default WeekCalendar;

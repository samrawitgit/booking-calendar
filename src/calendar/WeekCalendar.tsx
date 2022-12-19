import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState, filteredClasses } from "src/recoil/classes";

import dayjs from "dayjs";
import isTodayPlugin from "dayjs/plugin/isToday";
import Availability from "src/components/Availability";

dayjs.extend(isTodayPlugin);

const WeekCalendar = (props) => {
	const [categories, setCategories] = useRecoilState(categoryState);
	const events = useRecoilValue(filteredClasses);

	const customHeader = (day) => {
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

	const renderEvent = (event) => {
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
				events={events}
				eventContent={(e) => renderEvent(e)}
				eventClick={(e) => onEventClick(e)}
			/>
			<Availability categories={categories} setCategories={setCategories} />
		</div>
	);
};

export default WeekCalendar;

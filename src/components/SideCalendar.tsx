import React, { useState } from "react";
import Calendar from "react-calendar";
import { useRecoilState } from "recoil";
import { dateState } from "src/recoil/date";

const SideCalendar = () => {
	const [showTime, setShowTime] = useState(false);
	const [date, setDate] = useRecoilState(dateState);

	return (
		<>
			<div className="calendar-container">
				{/* <Calendar onChange={setDate} value={date} /> */}
				<Calendar
					onChange={setDate}
					value={date}
					onClickDay={() => setShowTime(true)}
					selectRange={true}
				/>
			</div>
			{/* <div className="text-center">Selected date: {date.toDateString()}</div> */}
		</>
	);
};

export default SideCalendar;

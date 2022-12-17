import React, { useState } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";

const time = ["08:00", "09:00", "10:00", "14:00", "15:00"];

function Times(props) {
	const [event, setEvent] = useState(null);
	const [info, setInfo] = useState(false);

	function displayInfo(e) {
		setInfo(true);
		setEvent(e.target.innerText);
	}

	return (
		<div className="times">
			{time.map((times) => {
				return (
					<div>
						<button onClick={(e) => displayInfo(e)}> {times} </button>
					</div>
				);
			})}
			<div>
				{info
					? `Your appointment is set to ${event} ${props.date.toDateString()}`
					: null}
			</div>
		</div>
	);
}

function Time(props) {
	return <div>{props.showTime ? <Times date={props.date} /> : null}</div>;
}

const WeeklyCalendar = () => {
	const [date, setDate] = useState(new Date());
	// const [date, setDate] = useRecoilState(dateState);
	const [showTime, setShowTime] = useState(false);

	/** dayjs */
	const startOfWeek = dayjs().day(0).format();
	const endOfWeek = dayjs().day(6).format();
	// const startOfWeek = dayjs().startOf("week");
	// const weekdays = new Array(7)
	// 	.fill(startOfWeek)
	// 	.map((day, idx) => day.add(idx, "day").format("dddd, MMMM D YYYY"));
	console.log({ startOfWeek, endOfWeek });

	return (
		<>
			<h1 className='header'>React Calendar</h1>
			<div>
				{/* minDate- maxDate || value = [startDate, endDate] */}
				<Calendar
					onChange={setDate}
					minDate={new Date(startOfWeek)}
					maxDate={new Date(endOfWeek)}
					value={date}
					onClickDay={() => setShowTime(true)}
					selectRange={true}
				/>
			</div>

			{/* {date.length > 0 ? (
				<p>
					<span>Start:</span>
					{date[0].toDateString()}
					&nbsp; &nbsp;
					<span>End:</span>
					{date[1].toDateString()}
				</p>
			) : ( */}
			<p>
				<span>Default selected date:</span>
				{date.toDateString()}
			</p>
			{/* )} */}
			<Time showTime={showTime} date={date} />
		</>
	);
};

export default WeeklyCalendar;

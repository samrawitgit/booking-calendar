import React from "react";
import { Link } from "react-router-dom";
import CustomCalendar from "src/calendar/CustomCalendar";
import WeekCalendar from "src/calendar/WeekCalendar";
import Availability from "src/components/Availability";
import CalendarSection from "src/components/SideCalendar";
import WeeklyCalendar from "src/components/WeeklyCalendar";
import Navbar from "../components/Navbar";

const BookClass = () => {
	return (
		<>
			<Navbar />
			<div className="flex flex-col w-full">
				<CustomCalendar />
				<div className="divider">Hourly week</div>
				<Link className="btn m5 btn-ghost normal-case text-xl" to="/week">
					View current week
				</Link>
				{/* <WeekCalendar /> */}
			</div>

			{/* <CalendarSection />
      <Availability />
      <WeeklyCalendar /> */}
		</>
	);
};

export default BookClass;

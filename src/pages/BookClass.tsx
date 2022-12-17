import React from "react";
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
				<WeekCalendar />
			</div>

			{/* <CalendarSection />
      <Availability />
      <WeeklyCalendar /> */}
		</>
	);
};

export default BookClass;

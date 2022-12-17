import React from "react";
import CustomCalendar from "./CustomCalendar";
import { DateViews } from "./utils/Utils";

const WeekCalendar = (props) => {
	return <CustomCalendar view={DateViews.Week} />;
};

export default WeekCalendar;

import React from "react";
import { useRecoilState } from "recoil";
import CustomCalendar from "../components/CustomCalendar";
import WeekCalendar from "../components/WeekCalendar";
import Availability from "src/components/Availability";
import { categoryState } from "../recoil/classes";
import Navbar from "../components/Navbar";

const BookClass = () => {
	const [categories, setCategories] = useRecoilState(categoryState);
	return (
		<>
			<Navbar />
			<div className="flex justify-between">
				<div className="flex flex-col h-full mt-[24px] min-w-[30%]">
					<CustomCalendar />
					<Availability categories={categories} setCategories={setCategories} />
				</div>
				<WeekCalendar />
			</div>
		</>
	);
};

export default BookClass;

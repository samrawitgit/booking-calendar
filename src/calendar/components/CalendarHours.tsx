import { DateViews } from "../utils/Utils";
import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import { endHourState, startHourState } from "src/recoil/date";

export const CalendarHours = (props) => {
	const startHour = useRecoilValue(startHourState);
	const endHour = useRecoilValue(endHourState);
	const dayHours = Array.from(Array(endHour - startHour + 1).keys());

	const hours: any = [];

	for (let i = 0; i <= endHour; i++) {
		const hourString = `${dayHours[i]}:00`;
		hours.push(
			<div
				className="col grow basis-0 max-w-full justify-center text-center"
				key={i}
			>
				{hourString}
			</div>,
		);
	}

	return <div className="days col">{hours}</div>;
};

// TDOD: for lessons duration dayjs.duration().hours()

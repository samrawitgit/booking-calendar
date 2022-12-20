import { atom, selector } from "recoil";
import dayjs from "dayjs";

export const dateState = atom<Date>({
	key: "date",
	default: new Date(),
});

export const startHourState = selector<number>({
	key: "startHour",
	get: ({ get }) => {
		const dateSelected = get(dateState);
		return dayjs(dateSelected).startOf("day").get("hour");
	},
});

export const endHourState = selector<number>({
	key: "endHour",
	get: ({ get }) => {
		const dateSelected = get(dateState);
		return dayjs(dateSelected).endOf("day").get("hour");
	},
});

import { EventInput } from "@fullcalendar/core";
import { atom, selector } from "recoil";
import { CATEGORIES } from "src/calendar";

export const categoryState = atom({
	key: "Category",
	default: [
		{ id: "all", title: "View All", selected: true },
		{
			id: "english",
			title: "English classes",
			selected: false,
		},
		{
			id: "conversation",
			title: "Conversation Classes",
			selected: false,
		},
		{ id: "night", title: "Night Classes", selected: false },
	],
});

export const classesState = atom<EventInput[]>({
	key: "Classes",
	default: [
		{
			id: "1",
			title: "International Meeting",
			description: "w/James",
			category: "english",
			color: "#B1B2FF",
			start: "2022-12-19T10:00:00",
			end: "2022-12-19T11:00:00",
		},
		{
			id: "2",
			title: "Presentation 01",
			description: "w/Mary",
			category: "english",
			color: "#B1B2FF",
			start: "2022-12-19T11:00:00",
			end: "2022-12-19T12:00:00",
		},
		{
			id: "3",
			title: "21 Century Commentary",
			description: "w/John",
			category: "english",
			color: "#B1B2FF",
			start: "2022-12-19T13:00:00",
			end: "2022-12-19T14:00:00",
		},
		{
			id: "4",
			title: "International Meeting",
			description: false,
			category: "english",
			color: "#B1B2FF",
			start: "2022-12-19T15:30:00",
			end: "2022-12-19T16:00:00",
		},
		{
			id: "5",
			title: "The Popularity of Tooti",
			description: false,
			category: "english",
			color: "#B1B2FF",
			start: "2022-12-19T16:00:00",
			end: "2022-12-19T16:30:00",
		},
		{
			id: "6",
			title: "Presentation 3",
			description: "w/John",
			category: "english",
			color: "#B1B2FF",
			start: "2022-12-21T13:00:00",
			end: "2022-12-21T14:30:00",
		},
		{
			id: "7",
			title: "HipHop, 15:30",
			description: false,
			category: "english",
			color: "#B1B2FF",
			start: "2022-12-21T15:30:00",
			end: "2022-12-21T16:00:00",
		},
		{
			id: "8",
			title: "Let's Talk Culture",
			description: "w/John",
			category: "english",
			color: "#B1B2FF",
			start: "2022-12-22T13:00:00",
			end: "2022-12-22T14:30:00",
		},
		{
			id: "9",
			title: "Greetings, 15:30",
			description: false,
			category: "english",
			color: "#B1B2FF",
			start: "2022-12-23T15:30:00",
			end: "2022-12-23T16:00:00",
		},
		{
			id: "10",
			title: "Introduce yourself",
			description: "w/Aaliyah",
			category: "conversation",
			color: "#F09997",
			start: "2022-12-20T12:00:00",
			end: "2022-12-20T13:00:00",
		},
		{
			id: "11",
			title: "Movie discussion",
			description: "w/Janet",
			category: "conversation",
			color: "#F09997",
			start: "2022-12-23T12:00:00",
			end: "2022-12-23T14:00:00",
		},
		{
			id: "12",
			title: "Presentation 1",
			description: "w/Ted",
			category: "night",
			color: "#56C795",
			start: "2022-12-19T20:00:00",
			end: "2022-12-19T21:00:00",
		},
		{
			id: "13",
			title: "Book time",
			description: "w/Janet",
			category: "night",
			color: "#56C795",
			start: "2022-12-22T20:00:00",
			end: "2022-12-22T21:00:00",
		},
	],
});

export const filteredClasses = selector({
	key: "FilteredClasses",
	get: ({ get }) => {
		const filter = get(categoryState).find((cat) => cat.selected)?.id;
		const list = get(classesState);
		const filtered = list.filter((item) => item.category === filter);
		console.log({ filter, filtered });
		return filter === CATEGORIES.ALL
			? list
			: list.filter((item) => item.category === filter);
	},
	set: ({ set }) => {},
});

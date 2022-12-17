import {atom} from 'recoil'

export const classesState = atom({
  key: 'Classes',
  default: [
    { id: "all", title: "View All", color: "none" },
    { id: "eng", title: "English classes", color: "purple" },
    { id: "conversation", title: "Conversation Classes", color: "red" },
    { id: "night", title: "Night Classes", color: "green" },
  ]
})
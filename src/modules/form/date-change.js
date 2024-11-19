import { schedulesDay } from "../schedules/load"

// Selecting the input date
const selectedDate = document.getElementById("date")

// Loading the timetable when changes the input date
selectedDate.onchange = () => schedulesDay()
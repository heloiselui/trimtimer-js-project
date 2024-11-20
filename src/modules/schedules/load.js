import { fetchScheduleByDay } from "../../services/fetch-schedule-by-day.js"
import { hoursLoad } from "../form/hour-load.js"
import { scheduleDisplay } from "../schedules/display.js"

// Selecting the date input
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  // Getting the input date
  const date = selectedDate.value

  // Searching the API for bookings
  const dailySchedules = await fetchScheduleByDay({ date })

  // Display bookings
  scheduleDisplay({ dailySchedules })

  // Rendering the hours available
  hoursLoad({ date, dailySchedules })
}
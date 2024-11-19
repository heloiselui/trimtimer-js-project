import { fetchScheduleByDay } from "../../services/fetch-schedule-by-day.js"
import { scheduleDisplay } from "../schedules/display.js"
import { hoursLoad } from "../form/hour-load"

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
  hoursLoad({ date })
}
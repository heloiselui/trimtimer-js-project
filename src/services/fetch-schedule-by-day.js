import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function fetchScheduleByDay({ date }) {
  try {
    // Making the request 
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Conveting JSON format
    const data = await response.json()

    // Filtering appointments by the day selected
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules

  } catch (error) {
    alert("We couldn't retrieve the day's bookings!")
    console.log(error)
  }
}
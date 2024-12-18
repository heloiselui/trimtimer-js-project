import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
  // Cleaning the timetable
  hours.innerHTML = ""


  // Get a list of all unavailable timeslots
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

  const opening = openingHours.map((hour) => {
    // Only retrieve the time
    const [scheduleHour] = hour.split(":")

    // Adding the gorario to the date and checking that it is in the past.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })

  // Rendering the timetable  
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour

    if (hour === "9:00") {
      hourHeaderAdd("Morning")
    } else if (hour === "13:00") {
      hourHeaderAdd("Afternoon")
    } else if (hour === "18:00") {
      hourHeaderAdd("Night")
    }

    hours.append(li)

  })

  // Adding a click event to the timetables.
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}
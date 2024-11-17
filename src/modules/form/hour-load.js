import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recuperar somente o horario.
    const [scheduleHour] = hour.split(":")


    // Adding the gorario to the date and checking that it is in the past.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    return {
      hour,
      available: isHourPast,

    }
  })

  // Rendering the timetable  
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour
    hours.append(li)
  })

}
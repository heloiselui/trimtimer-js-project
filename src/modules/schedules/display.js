import dayjs from "dayjs";

// Selecting the section (Morgin, Afternoon and night)
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function scheduleDisplay({ dailySchedules }) {
  try {
    // Cleaning the list
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // Rendering bookings by period
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // Adding the booking ID
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Creating the cancel icon
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancel")

      // Adding time, name and Icon in the item
      item.append(time, name, cancelIcon)

      // Obtem somente a hora
      const hour = dayjs(schedule.when).hour()

      // Render the appointment in the session (morning, afternoon or evening)
      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    alert("The bookings couldn't be displayed!")
    console.log(error)
  }
}
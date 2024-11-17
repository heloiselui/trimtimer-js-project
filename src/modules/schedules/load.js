import { hoursLoad } from "../form/hour-load"

// Selecting the date input
const selectedDate = document.getElementById("date")

export function schedulesDay() {
  // Getting the input date
  const date = selectedDate.value
  // Rendering the hours available
  hoursLoad({ date })

}
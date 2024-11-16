import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Current date to better format the input
const currentDateInput = dayjs(new Date()).format("YYYY-MM-DD")

// Loading the current date and setting the minimum date to the current date
selectedDate.value = currentDateInput
selectedDate.min = currentDateInput

form.onsubmit = (event) => {
  // Preventing default page loading
  event.preventDefault()
}
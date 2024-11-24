import dayjs from "dayjs"
import { newSchedule } from "../../services/new-schedule.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

// Current date to better format the input
const currentDateInput = dayjs(new Date()).format("YYYY-MM-DD")

// Loading the current date and setting the minimum date to the current date
selectedDate.value = currentDateInput
selectedDate.min = currentDateInput

form.onsubmit = async (event) => {
  // Preventing default page loading
  event.preventDefault()

  try {
    // Retrieving the client's name
    const name = clientName.value.trim()

    if (!name) {
      return alert("Please enter the client's name!")
    }

    // Recover the selected time
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Please inform the time!")
    }

    // Retrieving only the time
    const [hour] = hourSelected.innerText.split(":")

    // Inserting the time in the date
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Creating an identifier
    const id = new Date().getTime()

    await newSchedule({
      id,
      name,
      when,
    })

  } catch (error) {
    alert("Oops..! Someting went wrong. It was not possible to book your appointment. Please try again later.")
    console.log(error)
  }
}
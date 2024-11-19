import { apiConfig } from "./api-config.js";

export async function newSchedule({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, when })
    })

    alert("Your booking was successful!")
  } catch (error) {
    console.log(error)
    alert("It was not possible to book your appointment. Please try again later.")
  }
}
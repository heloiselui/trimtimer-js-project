export function hoursClick() {
  const hours = document.querySelectorAll('.hour-available');

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {

      // Removing the class hour-selected of all not selected li 
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      // Adding the class only in the selected li
      selected.target.classList.add("hour-selected")
    })
  })
}
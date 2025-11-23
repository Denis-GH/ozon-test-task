import { Progress } from "./progress.js"

const container = document.querySelector(".progress-container")
const progress = new Progress(container)

document.getElementById("valueInput").addEventListener("input", (event) => {
  progress.setValue(+event.target.value)
})

document.getElementById("animateInput").addEventListener("change", (event) => {
  progress.setAnimated(event.target.checked)
})

document.getElementById("hideInput").addEventListener("input", (event) => {
  progress.setHidden(event.target.checked)
})
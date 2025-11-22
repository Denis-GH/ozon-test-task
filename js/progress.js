class Progress {
  constructor(container) {
    this.value = 0
    this.animated = false
    this.hidden = false

    this.container = container

    this.progressElement = document.createElement("div")
    this.progressElement.classList.add("progress")

    this.container.appendChild(this.progressElement)

    this.render()
  }

  setValue(value) {
    this.value = value
    this.render()
  }

  setAnimated(animated) {
    this.animated = animated
    this.render()
  }

  setHidden(hidden) {
    this.hidden = hidden
    this.render()
  }

  render() {
    this.progressElement.style.setProperty("--percent", `${this.value}%`)

    if (this.animated) {
      this.progressElement.classList.add("animated")
    } else {
      this.progressElement.classList.remove("animated")
    }

    if (this.hidden) {
      this.progressElement.classList.add("hidden")
    } else {
      this.progressElement.classList.remove("hidden")
    }
  }
}

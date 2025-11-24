export class Progress {
  constructor(container) {
    this.value = 0
    this.animated = false
    this.hidden = false

    if (typeof container === "string") {
      this.container = document.querySelector(container);
    } else if (container instanceof HTMLElement) {
      this.container = container
    }

    this.progressElement = document.createElement("div")
    this.progressElement.classList.add("progress")

    this.container.appendChild(this.progressElement)

    this.render()
  }

  setValue(value) {
    let currentValue = this.value

    // постепенное заполнение прогресса до указанного value
    const step = () => {
      this.value = currentValue;
      this.render();

      if (currentValue === value) return;

      if (value > currentValue) {
        currentValue += 1;
      } else {
        currentValue -= 1;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
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

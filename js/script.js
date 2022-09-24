const buttonContainer = document.querySelector(".button-container")
const output = document.querySelector(".output")


handleClick = (e) => {
    e.preventDefault()
    console.log(e.target)
    output.innerHTML = e.target.innerHTML
}


buttonContainer.addEventListener("click", handleClick)

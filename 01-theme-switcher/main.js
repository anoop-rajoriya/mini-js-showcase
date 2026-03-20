function main() {
    const App = document.querySelector("#app")
    const ButtonList = document.querySelectorAll(".theme-btn")

    ButtonList.forEach(Button => Button.addEventListener("click", (event) => {
        const theme = Button.dataset.pick
        App.setAttribute("data-theme", theme)
        ButtonList.forEach(Button => Button.classList.toggle("active", Button.dataset.pick === theme))
        document.getElementById("theme-name").textContent = theme
    }))
}

main()
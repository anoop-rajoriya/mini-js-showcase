const projects = [{
    id: "#01",
    icon: "🌗",
    link: "/01-theme-switcher/",
    title: "Theme Switcher",
    description: "Change themes between dark and light (or more) themes using css variables.",
    tags: ["dom"],
    difficulty: "intermediate"
}, {
    id: "#02",
    icon: "📦",
    link: "/02-drag-drop-kanban/",
    title: "Drag & Drop Kanban",
    description: "Create new columns for To Do cards. Create or drag & drop cards between them columns.",
    tags: ["dom", "events"],
    difficulty: "advanced"
},]

function main() {
    const Grid = document.querySelector("#grid")
    projects.forEach(project => {
        const Card = document.createElement("a")
        Card.classList.add("card")
        Card.setAttribute("href", project.link)
        Card.setAttribute("data-tags", project.tags.join(" "))
        Card.innerHTML = `<span class="card-num">${project.id}</span>
        <div class="card-preview">
          <span class="card-icon">${project.icon}</span>
        </div>
        <div class="card-body">
          <div class="card-top">
            <h3 class="card-title">${project.title}</h3>
            <svg class="card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </div>
          <p class="card-desc">${project.description}</p>
          <div class="card-footer">
            <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}</div>
            <span class="card-difficulty diff-advanced">${project.difficulty}</span>
          </div>
        </div>`

        Grid.appendChild(Card)
    })

    const TotalCount = document.getElementById("totalCount")
    TotalCount.textContent = projects.length.toString().padStart(2, "0")

    const Pills = document.querySelectorAll('.pill');
    const CardList = document.querySelectorAll(".card")
    Pills.forEach(Pill => Pill.addEventListener("click", (event) => {
        Pills.forEach(Pill => Pill.classList.remove("active"))
        Pill.classList.add("active")

        const filter = Pill.dataset.filter

        CardList.forEach(Card => {
            const tags = Card.dataset.tags || ""

            if (filter === "all" || tags.includes(filter)) {
                Card.classList.remove("hidden")
            } else {
                Card.classList.add("hidden")
            }
        })

        const visible = document.querySelectorAll(".card:not(.hidden)").length
        TotalCount.textContent = visible.toString().padStart(2, "0")
    }));

}

main()
const banner = document.getElementById("banner")

function updateBackground() {
    banner.style.backgroundPosition = `0px ${(-window.scrollY / 3)}px`
}

let ticking = false
window.addEventListener("scroll", (event) => {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateBackground()
            ticking = false
        })
        ticking = true
    }
})

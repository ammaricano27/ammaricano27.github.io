function onScroll() {
    const header = document.getElementById("header")
    if (window.scrollY > 0) {
        header.classList.add("backdrop-blur-sm")
        header.classList.add("bg-white/[0.8]")
        //  header.classList.add("bg-opacity-50")
        header.classList.add("dark:bg-black")
        header.classList.add("shadow-sm")
    } else {
        header.classList.remove("backdrop-blur-sm")
        header.classList.remove("bg-white/[0.8]")
        // header.classList.remove("bg-opacity-50")
        header.classList.remove("dark:bg-black")
        header.classList.remove("shadow-sm")
    }
}

document.addEventListener("scroll", onScroll)

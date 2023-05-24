const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-text").forEach(n => n.addEventListener ("click", () => {
    burger.classList.remove("active");
navLinks.classList.remove("active");
}))


<li><a href=""><i class="fab fa-twitter nav-text" style="color: #404040;"></i></a></li>

                <li><a href=""><i class="fab fa-discord nav-text" style="color: #404040;"></i></a></li>
                F7EDD0
                151515
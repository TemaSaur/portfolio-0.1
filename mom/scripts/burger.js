const burger = document.querySelector(".burger");
const list = document.querySelector("header nav ul")

burger.onclick = () => {
    burger.classList.toggle("active");
    list.classList.toggle("active");
}
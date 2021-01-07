const pupils = document.querySelectorAll(".pupil");

document.onmousemove = e => {
    let width = window.screen.width;
    let height = window.screen.height;

    let x = e.clientX / width * 80;
    let y = e.clientY / height * 80;

    pupils[0].style.left = x + '%';
    pupils[0].style.top = y + '%';
    pupils[1].style.left = x + '%';
    pupils[1].style.top = y + '%';
}

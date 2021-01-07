const imgMe = document.querySelector(".img-me")

document.onmousemove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    imgMe.style.left = x/15 + 'px';
    imgMe.style.top = y/15 + 'px';
}
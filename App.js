const cursor = document.querySelector('.cursor');

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    let timeout;

    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
    cursor.style.display = "block"

    function stopmous() {
        cursor.style.display = "none"
    }
    clearTimeout(timeout);
    timeout = setTimeout(stopmous, 1000);
});
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});
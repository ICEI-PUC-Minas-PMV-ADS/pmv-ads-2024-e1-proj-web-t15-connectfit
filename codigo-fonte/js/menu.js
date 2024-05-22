function changeMenu(rightStyle) {
    const menu = document.getElementById("side_items");
    menu.style.right = rightStyle;
}

function openMenu() {
    changeMenu("0.1rem");
}

function closeMenu() {
    changeMenu("-100%");
}

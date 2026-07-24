const btn_menu = document.querySelector(".btn-menu");
const menu = document.getElementById("mobile-menu");

btn_menu.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    const icon = document.querySelector(".btn-menu i");
    if(menu.classList.contains("hidden")){
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }else{
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }
});
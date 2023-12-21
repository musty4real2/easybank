let navSlide = () =>{
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () =>{
        nav.classList.toggle("nav-active");
    })
}

navSlide();

let btn = document.getElementById("btn00");

btn.addEventListener("click", () =>{
    alert("MAAZ WORKING ON THE PROJECT");
})

let btn1 = document.getElementById("btn000");

btn1.addEventListener("click", () =>{
    alert("MAAZ WORKING ON THE PROJECT");
})
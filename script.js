// var crsr = document.querySelector("#cursor");
// var blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   blur.style.left = dets.x - 250 + "px";
//   blur.style.top = dets.y - 250 + "px";
// });

let navbar = document.querySelector('.navbar')
let menu = document.querySelector('#menu-btn')
menu.addEventListener("click", function(){
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

navbar.addEventListener("click", function(){
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

// document.querySelector('#menu-btn').onclick = () => {
// navbar.classList.toggle('active')
// }

let themeBtn = document.querySelector('#theme-btn');

// themeBtn.addEventListener("click", function(){
//     themeBtn.classList.toggle('fa-sun')
//     // if(themeBtn.classList.contains('fa-sun')){
//     //     document.body.classList.add('active')
//     // }

//     // else{
//     //     document.body.classList.remove('active')
//     // }
// })

themeBtn.onclick = () => {
    themeBtn.classList.toggle("fa-sun")
    if(themeBtn.classList.contains('fa-sun')){
       document.body.classList.add('active')

    }
    else{
        document.body.classList.remove('active')

    }
}

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centerdSlides: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });
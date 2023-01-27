let menu = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    menu.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('active')
}


// select landing page 

let landingPage = document.querySelector('.home');


//  get arrey 
let imgArrey = ["slide1.jpg","slide2.jpg","slide3.jpg"];





setInterval(()=>{
    // get random numper 
    let randomNumpur = Math.floor(Math.random() * imgArrey.length);
    // change background img url
    landingPage.style.backgroundImage = 'url("img/'+imgArrey[randomNumpur] +'")';

},2000);


var swiper = new Swiper(".brand-silder", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  // 


  let nums = document.querySelectorAll(".nun");
let section =document.querySelector(".products");
let started = false;
// scrollY up
window.onscroll = function (){
    if(window.scrollY >= section.offsetTop - 100){
        if(!started){
          nums.forEach((nun) => startCount(nun));
      }
      started = true;
    }
};

function startCount(el){
    let goal = el.dataset.goal;
    let count =setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },0/goal);
}



function revealFunction (){
  window.sr = ScrollReveal({duration:650, distance:'250px',
  easing:'ease-out'});
  sr.reveal('.reveal-reset-top',{origin:'top', reset:true});
  sr.reveal('.reveal-reset-bottom',{origin:'bottom', reset:true});
  sr.reveal('.reveal-rotateww',{origin:'bottom', rotate:{z:-1, z:2},
  reset:true
});

}

window.addEventListener('load',()=>{
  revealFunction();
})
// no click 
document.addEventListener('contextmenu' , function(e){
  'ues strict';
  e.preventDefault();
  alert('اتصل بنا ')
})
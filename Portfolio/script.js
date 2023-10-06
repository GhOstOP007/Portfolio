let typed = new Typed(".text",{
    strings :["Web Developer","Youtuber","Problem-Solver","Tech-Geek","5 Star C++ Hacker Rank Coder"],
    typeSpeed:100,
    backspeed:100,
    backdelay:1000,
    loop:true
});

let btn = document.getElementById("btns");

btn.addEventListener("click",function(){
    window.open("https://drive.google.com/file/d/1mBjdTeDsXgacV-dGTRGF8ubZdrBXGIwj/view?usp=sharing", "_blank");
});

function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length>instance){
        elements[instance].scrollIntoView({behviour:'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListner('click',()=>{
    scrollToElement('about-text');
});

link2.addEventListner('click',()=>{
    scrollToElement('.container1');
});

link3.addEventListner('click',()=>{
    scrollToElement('.resume');
});

link4.addEventListner('click',()=>{
    scrollToElement('.contact-text');
});


var my_element = document.getElementById("link3");

my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});

let bg = document.getElementById('bg');


window.addEventListener('scroll', () => {
    
    const val = window.scrollY;
    
    const zoomFactor = 1 + val / 1000;
    
    const rotateAngle = val / 100;

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const opacity = Math.max(1 - val / maxScroll, 0); 

    bg.style.transform = `scale(${zoomFactor}) rotate(${rotateAngle}deg)`;


    bg.style.opacity = opacity;



});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));


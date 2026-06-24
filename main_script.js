// Typing Animation
const words=['IT Support Specialist','Web Developer','System Configurator','Problem Solver'];
let i=0,j=0,current='',deleting=false;
const el=document.getElementById('typing');

function type(){
    current=words[i];
    if(!deleting){
        el.textContent=current.slice(0,++j);
    if(j===current.length){deleting=true;setTimeout(type,1200);return;}
    }else{
        el.textContent=current.slice(0,--j);
    if(j===0){deleting=false;i=(i+1)%words.length;}
    }
    setTimeout(type,deleting?50:100);
}
type();

// Mobile Menu Toggle
window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinksMenu = document.getElementById('navLinks');
    
    if (hamburger && navLinksMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinksMenu.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        navLinksMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinksMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav')) {
                hamburger.classList.remove('active');
                navLinksMenu.classList.remove('active');
            }
        });
    }
});

//####################################################################################

// Get all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a')
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
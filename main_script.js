// Show and hide 

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
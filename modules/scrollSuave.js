export default function scrollSuave(){
    const sections = document.querySelectorAll('[data-scroll="section"]');
    const windowMetade = window.innerHeight * 0.6;
    
    if(sections.length){ 
    
        function animaScroll(){
            sections.forEach(section =>{
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if(sectionTop < 0){
                    section.classList.add('ativo');
                }else if(section.classList.contains('ativo')){
                    section.classList.remove('ativo')
                }
            })
        }   
    
        addEventListener('scroll', animaScroll);
    }
}


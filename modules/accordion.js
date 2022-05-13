export default function accordion(){
    const dt = document.querySelectorAll('[data-faq="list"] dt');
    const dd = document.querySelectorAll('[data-faq="list"] dd');
    const span = document.querySelectorAll('[data-faq="list"] dt span');
    dd[0].classList.add('ativo');
    dt[0].classList.add('ativo');

    dt.forEach((item) =>{
        item.addEventListener('click', () =>{
            item.nextElementSibling.classList.toggle('ativo');
            item.classList.toggle('ativo');
        })
    })
}



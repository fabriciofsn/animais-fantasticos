export default function menuMobile(){

}

const btn = document.querySelector('[data-menu="btn"]');
const menu = document.querySelector('#menu');

['touchstart', 'click'].forEach(userEvent =>{
    btn.addEventListener(userEvent, handleEvent);
})

function handleEvent(){
    menu.classList.toggle('active');
    btn.classList.toggle('active');
    clickOutside(this, () =>{
        this.classList.remove('active');
        menu.classList.remove('active');
    });
}

function clickOutside(element, callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){
        html.addEventListener('click', removeEvent);
        element.setAttribute(outside, '');
    }

    function removeEvent(event){     
       if(!element.contains(event.target)){
           element.removeAttribute(outside);
           html.removeEventListener('click', removeEvent);
           callback();
       }
    }
}


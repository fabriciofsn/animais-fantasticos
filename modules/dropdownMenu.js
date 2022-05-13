export default function dropdownMenu(){

}

const sobre = document.querySelectorAll('[data-dropdown]');

function openList(event){
    event.preventDefault();
    sobre.forEach(e =>{
        e.classList.add('ativo');
    })
    clickOutside(this,() =>{
        this.classList.remove('ativo');
    });
}

function clickOutside(element, callback){
    const html = document.documentElement;
    const outside = 'data-outside';
    if(!element.hasAttribute(outside)){ 
        html.addEventListener('click', handleOutside);
        element.setAttribute(outside, '');
    }
    function handleOutside(event){
        if(!element.contains(event.target)){
            element.removeAttribute(outside);
            html.removeEventListener('click', handleOutside);
            callback();
        }
    }
}

sobre.forEach(menu =>{
    ['touchstart', 'click'].forEach(userEvent =>{
        menu.addEventListener(userEvent, openList);
    })
})


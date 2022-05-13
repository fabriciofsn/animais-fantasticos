export default function tooltip(){

}

const toolTips = document.querySelectorAll('[data-tooltip="tooltip"]');

function onMouseOver(event){
    const tooltipBox = criarTooltipBox(this); // o this faz referência ao item que estou passando o mouse;

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
}   


const onMouseMove = {
    handleEvent(event){
        this.tooltipBox.style.top = event.pageY + 10 + 'px';
        this.tooltipBox.style.left = event.pageX + 10 + 'px';
    }
}

const onMouseLeave = {
    tooltipBox: '',
    element: '',
    handleEvent(){
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
    }
}

function criarTooltipBox(element){
    const tooltip = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltip.classList.add('tooltip');
    tooltip.innerText = text;
    document.body.appendChild(tooltip);
    return tooltip;
}

toolTips.forEach(tooltip =>{
    tooltip.addEventListener('mouseover', onMouseOver);
})
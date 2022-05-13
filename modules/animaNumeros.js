export default function animaNumeros(){
    function animation(){ 
        const numeros = document.querySelectorAll('[data-numeros="section"] span');
    
        numeros.forEach(num =>{
            let total = +num.innerText;
            const incremento = Math.floor(total / 100);
            let start = 0;
            const timer = setInterval(() =>{
                start = start + incremento;
                num.innerText = start;
    
                if(start > total){ 
                    num.innerHTML = total;
                    clearInterval(timer);
                }
            },10 * Math.random());
        })
    
    }
    
    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('ativo')){
            oberver.disconnect();
            animation();
        }
    }
    
    const section = document.querySelector('[data-numeros="section"]');
    
    const oberver = new MutationObserver(handleMutation);
    oberver.observe(section, {attributes: true});
}



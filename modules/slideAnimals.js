export default function slideAnimals(){
    
    const imgs = document.querySelectorAll('[data-animals="animals"] img');
    const description = document.querySelectorAll('[data-description="desc"] section');
    description[0].classList.add('ativo');

    function descriptionIndex(index){

        description.forEach(item =>{
            item.classList.remove('ativo');
        })  
        description[index].classList.add('ativo');
    }   

    imgs.forEach((img, index) =>{
        img.addEventListener('click', () =>{
            descriptionIndex(index);
        })
    })
}


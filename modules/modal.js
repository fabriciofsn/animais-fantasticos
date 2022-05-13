export default function modalLogin(){
    const login = document.querySelector('[data-modal="abrir"]');
    const modal = document.querySelector('[data-modal="container"]');
    const btnClose = document.querySelector('[data-modal="container"] button');

    if(login && modal && btnClose){ 

        function toggleModal(event){
            event.preventDefault();
            modal.classList.toggle('ativo');
        }

        function clickOutside(event){
            if(event.target === this)
            toggleModal(event);
        }

        login.addEventListener('click', toggleModal);
        btnClose.addEventListener('click', toggleModal);
        modal.addEventListener('click', clickOutside);
    }
}



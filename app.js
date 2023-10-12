const burger =  document.querySelector('#burger');
const hiddenNav = document.querySelector('#hidden');


burger.addEventListener('click', () => {
    if(hiddenNav.classList.contains('hidden')){
        console.log(hiddenNav);
        hiddenNav.classList.remove('hidden');
    }else{
        hiddenNav.classList.add('hidden');
    }
})
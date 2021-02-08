/*---- Change Offer Icon Wrapper Background on Button Hover ----*/

const offerItemBtn = document.querySelectorAll('.offer-item__btn');

offerItemBtn.forEach((btn)=>{
    const offerItemBtnLink = btn.querySelector('a');
    offerItemBtnLink.addEventListener('mouseover', (e)=>{
        offerItemBtnLink.parentNode.parentNode.firstElementChild.classList.add('hovered');
    })
    offerItemBtnLink.addEventListener('mouseout', (e)=>{
        e.stopPropagation();
        offerItemBtnLink.parentNode.parentNode.firstElementChild.classList.remove('hovered');
    })
})
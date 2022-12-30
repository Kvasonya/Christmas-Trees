const buttonsOrder = document.querySelectorAll('.product__button_order');
const overlayOrder = document.querySelector('.overlay_order');

buttonsOrder.forEach((buttonOrder) => {
  buttonOrder.addEventListener('click', () => {
    overlayOrder.classList.add('overlay_active');
  })
});

overlayOrder.addEventListener('click', event => {
  const target = event.target;
  console.log('target: ', target);
  if(target === overlayOrder || target.closest('.modal__close')) {
    overlayOrder.classList.remove('overlay_active');
  }
})

const buttonsConsultation = document.querySelectorAll('.product__button_more, .header__consultation');
const overlayConsultation = document.querySelector('.overlay_consultation');

buttonsConsultation.forEach((buttonConsultation) => {
  buttonConsultation.addEventListener('click', () => {
    overlayConsultation.classList.add('overlay_active');
  })
});

overlayConsultation.addEventListener('click', event => {
  const target = event.target;
  console.log('target: ', target);
  if(target === overlayConsultation || target.closest('.modal__close')) {
    overlayConsultation.classList.remove('overlay_active');
  }
})

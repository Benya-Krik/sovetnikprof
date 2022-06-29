new Splide( '#slider1', {
    type: 'slide',
    speed: 400,
    arrows: true,
    pagination: false,
} ).mount();

new Splide( '#slider2', {
    type: 'slide',
    gap: '40px',
    arrows: true,
    autoWidth: true,
    pagination: false,
    padding: '10px',
} ).mount();

const introSlider = new Splide( '#slider3', {
    type: 'slide',
    arrows: false,
    pagination: true,

} );

// introSlider.on ('pagination:mounted', function( data ) {
//     data.list.classList.add( 'intro__pagination')
// });

introSlider.mount()

//бургер и попап

const burger = $.burger();
const popup = $.popup();

//Якори

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

//Валидация формы

const form = document.querySelector('.popup__form')
const inputPhone = document.querySelector('.popup__input')
const errorIncorrect = document.querySelector('.popup__form--error')
const errorEmpty = document.querySelector('.popup__form--errorempty')

function validatePhone(phone) {
    const re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

form.onsubmit = function () {

    let phoneValue = inputPhone.value

    if(inputPhone.value === '') {
        inputPhone.classList.add('error')
        errorEmpty.style.display = 'block'
        errorIncorrect.style.display = 'none'
        return false;
    } else {
        inputPhone.classList.remove('error')
        errorEmpty.style.display = 'none'
    }
    if (!validatePhone(phoneValue)) {
        inputPhone.classList.add('error');
        errorIncorrect.style.display = 'block'
        errorEmpty.style.display = 'none'
        return false;
    } else {
        inputPhone.classList.remove('error');
        errorIncorrect.style.display = 'none'
    }
}
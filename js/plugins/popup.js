$.popup = function() {

    const $popup = document.getElementById('popup')
    const animationSpeed = 200

    const popup = {
        open() {
            $popup.classList.add('open')
            document.body.classList.toggle('no-scroll');
        },
        close() {
            $popup.classList.remove('open')
            $popup.classList.add('hide')
            document.body.classList.remove('no-scroll');
            inputPhone.classList.remove('error')
            errorEmpty.style.display = 'none'
            errorIncorrect.style.display = 'none'
            inputPhone.value = ''
            setTimeout(()=>{
                $popup.classList.toggle('hide')
            }, animationSpeed)
        },
    }
    const listener = event => {
        if(event.target.dataset.close) {
            popup.close()
        }
    }
    $popup.addEventListener('click', listener)

    return popup
}
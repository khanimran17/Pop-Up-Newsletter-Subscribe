const popUp = document.querySelector('.pop-up');
const newsLetterBtn = document.querySelector('.get-news-letter-btn');
const closeBtn = document.querySelector('.close');
const subscribeBtn = document.querySelector('.subscribe-btn');
const subscribeInput = document.querySelector('.subscribe-input');
const alertMsg = document.querySelector('.alert');

newsLetterBtn.addEventListener('click', () => {
    popUp.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popUp.style.display = 'none';
});

subscribeBtn.addEventListener('click', () => {
    if (subscribeInput.value === '') {
        popUp.style.display = 'block';
    } else {
        if (!subscribeInput.value.includes('@')) {
            popUp.style.display = 'block';
            alertMsg.style.visibility = 'visible';
        } else {
            popUp.style.display = 'none';
            subscribeInput.value = '';
        }
    }
});

subscribeInput.addEventListener('focus', () => {
    alertMsg.style.visibility = 'hidden';
});

// document word is part of DOM
function domDetail(percentage){
    document.getElementById('percent-off').textContent = percentage + '% OFF';
}

// Styling of DOM Elements

const header = document.getElementById('message');

header.style.color = '#FFF';

// Detecting button clicks

const button = document.getElementById('see-review');
button.addEventListener('click', function() {
    console.log('clicked')
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'Close Review';
    }else {
        review.classList.add('d-none');
        button.textContent = 'See Review';
    }
    
});

// Showing and Hiding DOM Elements
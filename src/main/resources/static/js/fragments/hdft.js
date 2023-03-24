const topBtn = document.getElementsByClassName('top_btn')[0];

topBtn.addEventListener('click', function () {
    let stop = setInterval(() => {
        window.scrollBy(0, -5);

        if (window.scrollY <= 0) {
            clearInterval(stop);
        }
    })
});
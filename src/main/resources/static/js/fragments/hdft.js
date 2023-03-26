/* scroll top btn ======================= */
const topBtn = document.getElementsByClassName('top_btn')[0];

topBtn.addEventListener('click', function () {
    let stop = setInterval(() => {
        window.scrollBy(0, -5);

        if (window.scrollY <= 0) {
            clearInterval(stop);
        }
    })
});




/* search btn  ======================= */
// const searchContainer = document.getElementsByClassName('popular_container')[0];
const searchOnBtn = document.getElementById('search_btn');
const searchOffBtn = document.getElementById('search_off');

searchOnBtn.addEventListener('click', () => {
    $('.search_container').show();
});

searchOffBtn.addEventListener('click', () => {
    $('.search_container').hide();
});











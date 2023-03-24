const bannerContainer = document.getElementsByClassName('banner_container')[0];
const banners = document.getElementsByClassName('banner_image');
const bannerBtns = document.getElementsByClassName('buttons');

let bannerNum = 0;
let slide;

function autoSlide() {
    banners[bannerNum].classList.remove('banner_on');
    bannerBtns[bannerNum].classList.remove('button_on');

    bannerNum++;
    bannerNum = bannerNum % banners.length;

    banners[bannerNum].classList.add('banner_on');
    bannerBtns[bannerNum].classList.add('button_on');
}

// onload 이벤트
window.onload = function () {
    slide = setInterval(autoSlide, 9000);
};

// 배너 mouseover 이벤트
bannerContainer.addEventListener('mouseover', function () {
    clearInterval(slide);
});

// 배너 mouseleave 이벤트
bannerContainer.addEventListener('mouseleave', function () {
    slide = setInterval(autoSlide, 9000);
});

// 배너 버튼 클릭 이벤트
for (let i = 0; i < bannerBtns.length; i++) {
    bannerBtns[i].addEventListener('click', function () {
        banners[bannerNum].classList.remove('banner_on');
        bannerBtns[bannerNum].classList.remove('button_on');

        bannerNum = i;

        banners[bannerNum].classList.add('banner_on');
        bannerBtns[bannerNum].classList.add('button_on');
    });
}
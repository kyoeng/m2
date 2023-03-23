// 언더바 컨테이너
const underContainer = document.getElementById('under_nav');
// 언더바 이미지
const underImage = document.getElementById('under_img');
// 헤더에서 언더바 메뉴를 가진 요소들
const categorys = document.getElementsByClassName('have_under');
// 언더바 ul 태그
const underCategoryBox = document.getElementsByClassName('under_nav_btns')[0];

// 언더바에 들어갈 데이터
const underCate = [
    ["리빙쉘 텐트", "돔 텐트", "팝업 텐트", "알파인 텐트"],
    ["렉타 타프", "헥사 타프"],
    ["접이식 테이블", "조립식 테이블", "높낮이조절 테이블"],
    ["접이식 의자", "조립식 의자", "경량 의자", "릴렉스 의자"],
    ["침낭", "매트"],
    ["화로", "버너"]
];

// 언더바에 따른 링크들
const underLink = [
    ["living", "dom", "popup", "alpine"],
    ["rekta", "hexa"],
    ["table1", "table2", "table3"],
    ["chair1", "chair2", "chair3", "chair4"],
    ["sleeping", "mattress"],
    ["stove", "burner"]
];

const underTags = [];
for (let i = 0; i < underCate.length; i++) {
    underTags[i] = [];

    for (let j = 0; j < underCate[i].length; j++) {
        underTags[i][j] = `<li><a href='${underLink[i][j]}'>${underCate[i][j]}</a></li>`;
    }
}

/* 여기서 부터 작업 시작 */
for (let i = 0; i < categorys.length; i++) {
    categorys[i].addEventListener('mouseover', function() {

    });
}
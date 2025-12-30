/*
 * SoC Design Lab - Menu Script
 * 기능: 메뉴바 HTML 생성 + 스마트 스크롤 동작 (내리면 숨김, 올리면 보임)
 */

// 1. 메뉴바 HTML 생성 (document.write로 그려줌)
document.write(`
<div class="menu" id="navbar">
  <div class="menu-table flex-row-space-between" style="max-width: 100%; padding: 0 20px;">
    
    <div class="logo flex-row-center">
      <a href="index.html" style="
          font-family: 'Open Sans Condensed', Helvetica, Arial, sans-serif; 
          font-size: 30px; 
          font-weight: 700; 
          color: #ffffff; 
          text-decoration: none; 
          white-space: nowrap;">
        SoC Design Lab.
      </a>
    </div>

    </div>
</div>
`);

// 2. 스크롤 동작 기능 (메뉴 생성 후 실행)
(function() {
  var prevScrollpos = window.pageYOffset;
  
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");

    if (navbar) {
      if (prevScrollpos > currentScrollPos) {
        // 스크롤 올릴 때: 보이기
        navbar.style.top = "0";
      } else {
        // 스크롤 내릴 때: 숨기기 (높이만큼 위로 이동)
        navbar.style.top = "-80px"; 
      }
    }
    prevScrollpos = currentScrollPos;
  }
})();
/*
 * SoC Design Lab - Menu Script
 * 1. HTML 생성: 로고 및 메뉴바
 * 2. 동작 제어: 맨 위에선 고정, 내리면 숨김, 올리면 보임
 */

// 1. 메뉴바 HTML 생성
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

// 2. 스크롤 동작 기능 (모바일 터치 최적화)
(function() {
  var prevScrollpos = window.pageYOffset;
  
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");

    if (navbar) {
      // [수정 포인트] 
      // "스크롤을 올릴 때" OR "화면 맨 위(0~10px)에 있을 때"는 무조건 보여준다.
      if (prevScrollpos > currentScrollPos || currentScrollPos < 10) {
        navbar.style.top = "0";
      } 
      // 그 외(스크롤을 쭉 내릴 때)에는 숨긴다.
      else {
        navbar.style.top = "-80px"; 
      }
    }
    prevScrollpos = currentScrollPos;
  }
})();
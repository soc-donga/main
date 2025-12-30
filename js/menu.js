/*
 * SoC Design Lab - Menu Script
 * 1. HTML 생성: 로고 및 메뉴바
 * 2. 동작 제어: 모바일 바운스(Bounce) 현상 방지 포함
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

// 2. 스크롤 동작 기능 (바운스 방지 적용)
(function() {
  var prevScrollpos = window.pageYOffset;
  
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");

    if (navbar) {
      /* * [수정 핵심]
       * currentScrollPos <= 0 : 화면 맨 위(또는 바운스로 음수가 됐을 때)를 의미합니다.
       * 이럴 때는 무조건 메뉴를 보여줍니다(top: 0).
       */
      if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        navbar.style.top = "0";
      } 
      else {
        navbar.style.top = "-80px"; 
      }
    }
    // 바운스로 인해 음수값이 들어가는 걸 방지하기 위해 0보다 작으면 0으로 저장
    prevScrollpos = currentScrollPos <= 0 ? 0 : currentScrollPos;
  }
})();
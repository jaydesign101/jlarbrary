
var jl = jl || {};


/* obj를 클릭하면 id로 연결된 섹션으로 이동 20231201 */
jl.scrollToAreaMenu = function(menuString) {
  const menuLinkEls = document.querySelectorAll(menuString);
  menuLinkEls.forEach(function(linkEl) {
    linkEl.addEventListener("click", function(e) {
      e.preventDefault();  // 브라우저 기본 이벤트 무력화
      const linkLocation = this.getAttribute('href');
      const targetElement = document.querySelector(linkLocation);
      console.log(targetElement)

      if (linkLocation && targetElement) {
        const targetOffsetTop = targetElement.offsetTop;
        window.scrollTo({ 
          top: targetOffsetTop,
          behavior: 'smooth' // 부드럽게 스크롤
        });
      }
    });
  });
};

/* 원페이지 무한 및 스와이프 슬라이더 20231204 */
jl.infiniteSlider = function(sliderString){
  /* DOM 요소 */
  const customSlide = document.querySelector(sliderString);
  const sliderEl = customSlide.querySelector(".slider");
  const slideWrapEl = customSlide.querySelector(".slide-wrap");
  const slideEls = customSlide.querySelectorAll(".slide");
  const slideElsLength = slideEls.length;
  const paginationEl = customSlide.querySelector(".pagination");
 
  const btnPrevEl = document.querySelector(sliderString + "> .btn-prev");
  const btnNextEl = document.querySelector(sliderString + "> .btn-next");
  
  const firstEl = slideWrapEl.firstElementChild;
  const lastEl = slideWrapEl.lastElementChild;


  /* 화면 초기 설정 */
  // 슬라이더 양 옆에 추가
  let currentIndex = 1;
  let cloneFirst = firstEl.cloneNode(true);
  let cloneLast = lastEl.cloneNode(true);
  slideWrapEl.appendChild(cloneFirst);
  slideWrapEl.insertBefore(cloneLast, slideWrapEl.firstElementChild);
  slideWrapEl.style.transform = "translateX(-100%)";
  // pagination 요소 추가
  let paginationItem;
  slideEls.forEach(function (slide, index) {
    let pageNumber = index + 1;
    paginationItem = document.createElement('div');
    paginationItem.classList.add('pagination-item');
    paginationItem.textContent = pageNumber;
    paginationEl.appendChild(paginationItem);
  });
  const paginationItems = document.querySelectorAll('.pagination-item');
  paginationItems[0].classList.add('active');

  /* 슬라이드 클릭 *********************************************************/
  let isAnimating = false; // 애니메이션 진행 중 여부를 나타내는 변수 (클릭 한번에 애니메이션 한번)

  /* 슬라이더 transition 세팅 */
  function sliderSetTransition(transition, transform){
    slideWrapEl.style.transition = transition;
    slideWrapEl.style.transform = transform;
  }
  /* 슬라이더 페이지네이션 확인 */
  function sliderMove(currentIndex){
    sliderSetTransition(".3s", "translateX(" + (-currentIndex * 100) + "%)" )
    paginationItems.forEach(function (item) {
      item.classList.remove('active');
    });
    let activeIndex = currentIndex;
    if (activeIndex == slideElsLength + 1){
      activeIndex = 1;
    }else if(currentIndex == 0){
      activeIndex = slideElsLength;
    }
    paginationItems[activeIndex-1].classList.add('active');
  }
  /* 슬라이더 무한 세팅 */
  function sliderInfinite(){
    if (currentIndex == slideElsLength + 1){
      // 마지막 슬라이더일때
      sliderSetTransition("none", "translateX(-100%)")
      currentIndex =1;
    } else if ((currentIndex == 0)){
      // 처음 슬라이더일때
      sliderSetTransition("none", "translateX(" + (-slideElsLength * 100) + "%)" )
      currentIndex = slideElsLength;
    }
    return currentIndex;
  }

  /* 이전 버튼 클릭 */
  btnPrevEl.addEventListener("click", function() {
    if (!isAnimating) {
      currentIndex--;
      isAnimating = true; // 애니메이션이 시작됨을 표시
      sliderMove(currentIndex);
    }
  });

  /* 다음 버튼 클릭 */
  btnNextEl.addEventListener("click", function() {
    if (!isAnimating) {
      currentIndex++;
      isAnimating = true; // 애니메이션이 시작됨을 표시
      sliderMove(currentIndex);
    }
  });

  /* pagination 버튼 클릭 */
  paginationItems.forEach(function(item, index){
    item.addEventListener("click", function() {
        currentIndex = index + 1;
        sliderMove(currentIndex);
    })
  })

  /* transitionend 이벤트 리스너 추가 (transiton이 끝나면 transitionend 이 발생) */
  slideWrapEl.addEventListener('transitionend', function() {
    sliderInfinite();
    isAnimating = false; // 애니메이션이 끝남을 표시
  });

  /* Slider 스와이프 */
  let startPos = 0;
  let offset = 0;
  let sliderClick = false;
  let changePoint;

  function handleSwipeStart(e) {
    startPos = e.clientX || e.touches[0].clientX;
    sliderClick = true;
  }
  
  function handleSwipeMove(e) {
    if (sliderClick) {
      offset = (e.pageX || e.targetTouches[0].pageX) - startPos;
      sliderSetTransition("none", `translateX( calc( ${currentIndex} * -100% +  ${offset}px))`);
    }
  }
  
  function handleSwipeEnd() {
    sliderClick = false;
    changePoint = Math.round(slideWrapEl.offsetWidth / 4);
  
    if (changePoint < Math.abs(offset)) {
      if (offset < 0 && !isAnimating) {
        currentIndex++;
      } else {
        currentIndex--;
      }
  
      isAnimating = true;
      sliderMove(currentIndex);
  
      setTimeout(function () {
        sliderInfinite();
        isAnimating = false;
      }, 300);

    } else {
      sliderMove(currentIndex);
    }
  }
  
  // 데스크탑 스와이프
  sliderEl.addEventListener("mousedown", handleSwipeStart);
  sliderEl.addEventListener("mousemove", handleSwipeMove);
  sliderEl.addEventListener("mouseup", handleSwipeEnd);
  
  // 모바일 스와이프
  sliderEl.addEventListener("touchstart", handleSwipeStart);
  sliderEl.addEventListener("touchmove", handleSwipeMove);
  sliderEl.addEventListener("touchend", handleSwipeEnd);
};


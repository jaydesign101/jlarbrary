## 원페이지 해당 화면 스크롤 이동 (scrollToArea)

<br>

1. [설명 및 이력](#설명-및-이력)
1. [코드](#코드)
    - [HTML](#html)
    - [css](#jl00scss)
    - [js](#jl00js)
1. [코드 설명](#코드-설명)
1. [문법 정리](#문법-정리)

<br>
<a href="https://jaydesign101.github.io/jlarbrary/html/scrollToAreaMenu/index.html">화면보기</a>

<br>

----------------------------------------------------  

# 설명 및 이력

### 설명
- 헤더 메뉴 클릭시 화면이 스크롤로 이동하여 해당 위치로 이동함
- 메뉴 태그를 `<a>`로 사용

### 이력
- 20231201 : 최초 작성

<br>

------------  

# 코드
### HTML
```
<!-- scrollToAreaMenu HTML -->
<header id="scrollToAreaMenu">
    <a href="#s1">s1</a>
    <a href="#s2">s2</a>
    <a href="#s3">s3</a>
</header>

<section id="s1">s1</section>
<section id="s2">s2</section>
<section id="s3">s3</section>

<!-- scrollToAreaMenu SCRIPT -->
<script>
document.addEventListener("DOMContentLoaded", function() {
    jl.scrollToAreaMenu("header#scrollToAreaMenu a");
});
</script>
```

### jl0.0.SCSS
```
/* scrollToAreaMenu CSS */
header#scrollToAreaMenu{
  position: fixed;
  background-color: #999;
  width: 100%;
  color: #fff;
  font-size: 20px;
  a{
    padding: 10px;
  }
}
section{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  border: 1px solid #000;
  font-size: 30px;
  color: #999;
}
```

### jl0.0.js
```
/* 원페이지 해당 화면 스크롤 이동 (scrollToArea) 20231204 */
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
```

<br>

------------  

# 코드 설명

1. header의 a 태그를 가져와 for문을 돌려, 각각의 a태그에 click 이벤트시 발생하는 코드를 무력화시킨다. 
    - a태그는 href를 통해 하이퍼링크로 이동한다. 이 동작을 막아준다.
    ```
    const menuLinkEls = document.querySelectorAll("header a");

    menuLinkEls.forEach(function(linkEl) {
        linkEl.addEventListener("click", function(e) {
            e.preventDefault();
            /* 코드 작성*/
        }
    }
    ```

<br>

2. a태그의 href 속성값("#s1")을 가져와 linkLocation에 담는다. targetElement는 a태그의 href 속성값 이름("#s1")을 가진 요소가 된다.

    ```
    const linkLocation = this.getAttribute('href');
    const targetElement = document.querySelector(linkLocation);
    ```

<br>

3. targetElement의 top 좌표를 반환하여, 그 값의 위치에 부드러운 스크롤로 이동시킨다.
    ```
    const targetOffsetTop = targetElement.offsetTop;
    window.scrollTo({ 
        top: targetOffsetTop,
        behavior: 'smooth' // 부드럽게 스크롤
    });
    ```


------------  
# 문법 정리

### 기본 동작 중단 : preventDefault()
```
요소.addEventListener("click", function(e) {
    e.preventDefault();
}
```
- e.preventDefault(): 현재 이벤트의 기본 동작을 중단
- a태그는 href를 통해 하이퍼링크로 이동한다. 이 동작을 막아준다.

<br>

### 속성값 가져오기 : getAttribute()
```
const attributeValue = 요소.getAttribute('속성');
```
- 요소.getAttribute('속성') : 요소의 속성(attribute)의 속성값(attributeValue)을 가져와 반환
- 요소.setAttribute('속성', '값') : 요소에 속성과 속성값을 추가
- 요소.removeAttribute('속성') : 요소의 속성/속성값 삭제

<br>

### 위치 스크롤 이동 : window.scrollTo()
#### ※ x 값, y값 좌표로 이동
```
window.scrollTo(xpos, ypos)
```
#### ※ x 값, y값 'option' 형식으로 이동 
    
```
window.scrollTo({top:x, left:y, behavior:'option'})
```  
- option :  'auto' (바로이동), 'instant' (바로이동), 'smooth' (애니메이션 이동)

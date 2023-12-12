# Index

1. [클래스명 관련](#클래스명-관련)
    - [.classList.add()](#클래스명-추가하기--classlistadd)
    - [.classList.remove()](#클래스명-삭제하기--classlistremove)
    - [.classList.toggle()](#클래스명-토글하기--classlisttoggle)
    - [.classList.contains()](#클래스명-포함-유후-확인하기--classlistcontains)
    - [.classList.replace()](#클래스명-교체하기--classlistreplace)
    - [.classList.value](#클래스명-문자열-반환하기--classlistvalue)
1. [텍스트값 get 및 set](#텍스트값-get-및-set)
    - [.innerHTML](#요소의-텍스트값-설정1--innerhtml)
    - [.innerText](#요소의-텍스트값-설정2--innertext)
    - [.textContent](#요소의-텍스트값-설정3--textcontent)
1. [x값, y값 구하기](#x값-y값-구하기)
    - [e.screenX, e.screenY](#모니터-기준-xy값--screenx-screeny)
    - [e.pageX, e.pageY](#페이지-기준-xy값--pagex-pagey)
    - [e.clientX, e.clientY](#뷰포트-기준-xy값--clientx-clienty)
    - [e.offsetX, e.offsetY](#node-기준-xy값--offsetx-offsety)

<br>

----------------------------------------------------------------------------

# 클래스명 관련

### 클래스명 추가하기 : .classList.add()
```
요소.classList.add('className');
```
- 요소에 className이라는 클래스명을 추가한다.
- <요소 class="className"> 이 된다.
- 같은 클래스명이 있다면 무시된다.

<br> 

### 클래스명 삭제하기 : .classList.remove()
```
요소.classList.remove('className');
```
- 요소에 className이라는 클래스명을 삭제한다.
- 해당 클래스명이 없다면 무시된다.

<br>

### 클래스명 토글하기 : .classList.toggle()
```
요소.classList.toggle('className');
```
- 요소에 className이라는 클래스명을 추가 및 삭제로 토글로 작동한다.

<br>

### 클래스명 포함 유후 확인하기 : .classList.contains()
```
var boolean = 요소.classList.contains('className');
```
- 요소에 className이라는 클래스명의 유무를 확인하여 true 혹은 false로 구분하여 반환한다.

<br>

### 클래스명 교체하기 : .classList.replace()
```
요소.classList.replace('old', 'new');
```
- 요소에 className이라는 이전 클래스명(old)를 찾아 새로운 클래스명(new)로 변경한다. 

<br>

### 클래스명 문자열 반환하기 : .classList.value
```
var classNameString = 요소.classList.value;
```
- 요소에 클래스명을 문자열로 반환한다.

<br>

---------------------------------------------------------------------------

# 텍스트값 get 및 set

### 요소의 텍스트값 설정1 : innerHTML
```
요소.innerHTML
```
- 'element'의 속성으로, 해당 요소의 HTML, XML을 읽어오거나 설정할 수 있음
- 요소 안에 있는 HTML 전체 내용을 가져옴

<br>

### 요소의 텍스트값 설정2 : innerTEXT
```
요소.innerTEXT
```
- 'element'의 속성으로, 사용자에게 보여지는 해당 요소의 콘텐츠 텍스트를 읽어온다.
- {display:none} 으로 되어있는 텍스트값는 가져오지 않는다.

<br>

### 요소의 텍스트값 설정3 : textContent
```
요소.textContent
```
- 'node'의 속성으로, script나 style 태그 상관 없이 해당 노드가 가지고 있는 텍스트값을 그대로 가져온다.
- {display:none} 으로 되어있는 텍스트도 가져온다.
```
요소.textContent = "문자열";
```
- 요소 텍스트에 "문자열"을 넣는다. (기존에 텍스트가 있다면 삭제)

<br>

----------------------------------------------------------------------------

# x값, y값 구하기

### 모니터 기준 xy값 : screenX, screenY
```
function(e){
  e.screenX;
  e.screenY;
}
```
- 사용자 모니터 화면 기준으로 x,y값을 구한다.
- 만약 더블 모니터라면, 왼쪽 모니터와 오른쪽 모니터의 좌표값이 각각 다르다.

<br>

### 페이지 기준 xy값 : pageX, pageY
```
function(e){
  e.pageX;
  e.pageY;
}
```

- 전체 문서를 기준으로 x,y값을 구한다.
- 만약 스크롤이 있다면, 스크롤 값을 포함하여 좌표값을 반환한다. 즉 스크롤이 있다면 좌표값은 바뀐다.

<br>

### 뷰포트 기준 xy값 : clientX, clientY
```
function(e){
  e.clientX;
  e.clientY;
}
```

- 브라우저에서 사용자에게 보여지는 웹페이지 기준으로 x,y값을 구한다.
- 스크롤바로 화면이 이동하더라도 좌표값은 일정하다.

<br>

### node 기준 xy값 : offsetX, offsetY
```
function(e){
  e.offsetX;
  e.offsetY;
}
```

- 이벤트가 걸려 있는 DOM node 기준으로 x,y값을 구한다. (상대값)

<br>

----------------------------------------------------------------------------

# 
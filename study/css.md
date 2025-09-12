# CSS의 측면

## :root

```
:root {
  --primary-color: #007bff;
  --bg-color: #fff;
  --text-color: #333;
  --section-bg-color: #f8f9fa;
  --border-color: #dee2e6;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --transition: 0.3s ease;
}
```

- CSS 내부 변수 : `--`


## body.dark-mode

```
body.dark-mode {
  --primary-color: #3498db;
  --bg-color: #2c3e50;
  --text-color: #ecf0f1;
  --section-bg-color: #34495e;
  --border-color: #5d6d7e;
  --shadow-color: rgba(0, 0, 0, 0.4);
}
```

- `body.dark-mode` 활성화 조건
    - `<body>` 태그에
    - `dark-mode` class가 적용되었을 때

```
// index.js

const themeToggleButton = document.getElementById("theme-toggle");

// ...

themeToggleButton.addEventListener("click", () => {
    // 현재 body에 dark-mode 클래스가 있는지 확인
    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        // 다크 모드이면 클래스 제거 (라이트 모드로 전환)
        document.body.classList.remove("dark-mode");
    } else {
        // 라이트 모드이면 클래스 추가 (다크 모드로 전환)
        document.body.classList.add("dark-mode");
    }
});
```

- 버튼(`#theme-toggle`)을 클릭
- `<body>` 태그에 `dark-mode` 클래스가 있는지 확인
    - 없으면 추가 `<body class="dark-mode">`
    - 있으면 제거

```
#sun-icon {
    display: none;
}
body.dark-mode #sun-icon {
    display: block;
}
body.dark-mode #moon-icon {
    display: none;
}
```

| 상태 | `<body>`의 클래스 | `#moon-icon` 🌙 | `#sun-icon` ☀️ | 의미 |
| -- | -- | -- | -- | -- |
| 라이트 | (클래스 없음) | 보임 | 숨김 | 누르면 다크 모드 |
| 다크 | `.dark-mode` | 숨김 | 보임 | 누르면 라이트 모드 | 

## display 속성의 주요 설정

| 속성값 | 배치 방식 | 너비/높이 | 대표 특징 |
| -- | -- | -- | -- |
| `block` | 한줄 전체 차지 | 적용 가능 | 수직으로 쌓이는 박스 |
| `inline` | 콘텐츠 크기만큼 차지 | 적용 불가 | 글자처럼 흐름 |
| `inline-block` | `inline`처럼 흐름 | 적용 가능 | `inline` +  `block` | 
| `flex` | 1차원 (가로 or 세로) | 자식 요소 제어 | 유연한 아이템 정렬 | 
| `grid` | 2차원 (가로 + 세로) | 자식 요소 제어 | 강력한 격자무늬 레이아웃 | 
| `none` | 렌더링 안됨 | - | 화면에서 완전히 제거 | 

## body

```
body {
  font-family: "Noto Sans KR", sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color var(--transition), color var(--transition);
  line-height: 1.6;
  margin: 0;
  padding-top: 60px; /* Nav height */
}
```

- `transtion` : 화면 전환
    - `background-color 0.3s ease-in-out;`
- `margin` : 요소의 바깥 여백
- `padding`: 요소의 안쪽 여백

## a

```
a {
    color: var(--primary-color);
    text-decoration: none;
}
a:hover {
    text-decoration: underline wavy;
}
```

- **pseudo-class**
    - 링크(`<a>`), 버튼(`<button>`)
        - `:hover` : 버튼 올림
        - `:active` : 클릭 동안
        - `:link` : 방문 안한
        - `:visited` : 방문 했던
    - 입력 (form)
        - `:focus` : focus를 받음
            - 입력 커서 깜빡
            - tab으로 버튼, 링크 선택
        - `:focus-within` : 자신 or 자식 요소가...
        - `:disabled` : 요소가 비활성화됨
        - `:checked` 

- `text-decoration`
    - `line` : underline, none ...
    - `deco-style` : solid, wavy ...
    - `deco-color`
    - `deco-thinkness`

## section

```
section {
    padding: 5rem 2rem;
}
section:nth-of-type(even) {
    background-color: var(--section-bg-color);
}
```
- `rem` : **r**oot **e**le**m**ent (font-size)
- `em` : **e**le**m**ent (font-size)

## nav

```
nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bg-color);
  box-shadow: 0 2px 5px var(--shadow-color);
  z-index: 1000;
  height: var(--padding-top);
  box-sizing: border-box;
}
```
### `position: fixed`
    
| 옵션 | GPT 비유 |
| -- | -- | 
| `static` | 도서관에 순서대로 꽂힌 책들 📚 |
| `relative` | 자리에 앉아 몸만 움직이는 사람 🧍 |
| `absolute` | 교실 벽에 붙은 게시물 📌 |
| `fixed` | 스마트폰 화면의 카메라 앱 아이콘 📱 |
| `sticky` | 포스트잇으로 책에 붙인 인덱스 📑 |

- `postion` 옵션을 없애면 `--padding-top`만큼 아래로 밀림
    - `<body>`의 *padding-top* 옵션 때문

### `display : flex`
- 주요 특징 (책장과 책 📚)
    - 1차원 (가로 or 세로)
    - 자식 요소 제어
    - 유연한 아이템 정렬 
- 2개의 축
    - `justify-content` : 가로
    - `align-items` : 세로

- `justify-content`
    - `flex-start` (기본값)
    - `flex-end`
    - `center`
    - `space-between` : 벽🧍↔️🧍↔️🧍벽
    - `space-around` : 벽➡️🧍↔️🧍↔️🧍⬅️벽

- `align-items`
    - `stretch` (기본값)
    - `flex-start`
    - `flex-end` 
    - `center` 

### `box-shadow: 0 2px 5px var(--shadow-color);`

- 인자들
    - offset-x : 수평 위치
    - offset-y : 수직 위치
    - blur-radius : 그림자의 **부드러움**
    - spread-radius : 그림자의 **크기**
    - color
    - inset : 요소의 안쪽에 생김

- **offset** vs **spread-radius**
    - offset: **위치**가 바뀜
    - spread-radius: 그림자가 **커짐**

- DJT 사진으로 확인할 것

    | offset-y | spread-radius |
    | -- | -- |
    | ![](image/offset-y.png) | ![](image/spread-radius.png) |

### `box-sizing: border-box`





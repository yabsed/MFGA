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

- `transtion`
    - property : width, background-color
    - duration : 2s
    - timing-function : ease-in, linear
    - delay

- `margin` : 요소의 바깥 여백
    - longhand
        - margin-top
        - margin-right
        - margin-bottom
        - margin-left
    - `margin: 10px 20px 30px 40px;` (시계방향)
    - `margin: 25px 50px;` (상하, 좌우)
    - `margin: 20px`
    - 가운데 정렬 : `margin: 0 auto`

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
        - `:active` : 클릭하고 있는 동안
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



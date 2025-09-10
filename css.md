# CSS의 측면

## 큰 그림

### :root

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

- `:root` ( = `<html>`)
    - CSS 변수를 선언 : `--primary-color: #007bff;`
- 기본 (라이트 모드)


### body.dark-mode

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

- 사용자가 테마 변경 버튼(`#theme-toggle`)을 클릭
- JS는 `<body>` 태그에 `dark-mode` 클래스가 있는지 확인
    - 없으면 추가
    - 있으면 제거

- 평상시
    `<body>` 태그에는 `dark-mode` 클래스가 없음
    - `:root`에 정의된 변수들 사용
- 다크 모드
    - JS가 `<body>` 태그에 `class="dark-mode"`를 추가
        - `<body class="dark-mode">`
    - `body.dark-mode` 선택자 활성화

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


```
.hero-button:hover {
    background-color: #0056b3;
    text-decoration: none;
}
body.dark-mode .hero-button:hover {
    background-color: #2980b9;
}
```

- `#moon-icon`
    - 기본 상태 :  
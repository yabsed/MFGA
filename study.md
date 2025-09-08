# HTML 공부하기

## body

### big picture

- body
    - nav
    - header
    - main
    - footer

### nav

문서의 주요 내비게이션 링크를 담는 공간

- `<a href="#home" class="nav-logo">`
    - `<a>` 태그 : **하이퍼링크**를 만든다. 
    - `href="#home"` : `id="home"`인 header로 이동
    - `class="nav-logo"` : CSS Class를 부여
        ```
        .nav-logo {
            font-weight: 700;
            font-size: 1.5rem;
        }
        ```
- `<div class="nav-links"> ... </div>`
    - `<div>` 태그 : 컨테이너 (📦)
        - 레이아웃 구성 : 웹 페이지의 구조를 잡음
        - 스타일링 및 스크립팅: CSS, JavaScript 동작 제어
    - `class="nav-links"`
        ```
        .nav-links a {
            margin: 0 0.75rem;
            font-weight: 800;
        }
        ```
        ```
        @media (max-width: 630px) {
            h1 { font-size: 2.5rem; }
            .nav-links { display: none; }
            .about-content { flex-direction: column; }
        }
        ```
    - `<a href="#about">About</a>` : 하이퍼링크
    

#### class와 id

- HTML 요소에 이름을 붙이는 **속성**
- **class**와 **id**의 큰 차이는 **재사용 가능성**이다. 

| 구분 | class | id |
| -- | -- | -- |
| 재사용 | 가능 | 불가능 |
| 선택자 | `.` | `#` |
| 주요 용도 | 공통 스타일 그룹화 | 고유 요소 지정, 스크립트 제어 |
| 비유 | 학교의 반 | 학번 |

#### 기타 다양한 CSS의 선택자

| 종류 | 선택자 | 설명 | 
| -- | -- | -- |
| 태그 | `div`, `p`, `img` | 해당 태그를 가진 모든 요소 |
| class | `.item` | `class="item"` 을 가진 모든 요소 |
| id | `#header` | `id="header"`를 가진 유일한 요소 |
| 속성 | `[type="text"]` | `type="text"` 속성을 가진 요소 |
| 가상 클래스 | `:hover`, `:focus` | 요소가 특정 상태일 때 |
| 가상 요소 | `::before`, `::after` | 요소의 특정 부분을 만들어 선택 | 
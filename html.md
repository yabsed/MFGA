# HTML 공부하기

## body

### big picture

- nav
- header
- main
    - section
    - section
    - section
- footer

### big picture - id and clas

- nav
    - a (`.nav-logo`) : My Portfolio
    - div (`.nav-links`)
        - a : About
        - a : Skills
    - button (`#theme-toggle`)
        - span (`#moon-icon`) : 🌙
        - span (`#sun-icon`) : ☀️
- header (`#home`)
    - img (`.profile-img .header-img`)
    - a (`.hero-button`) : View My Projects
- (main)
- section (`#about .animate-on-scroll`)
    - h2 : about me
    - div (`.about-content`)
        - img (`.profile-img .about-img`)
        - p : ...
- section (`#skills .animate-on-scroll`)
    - div (`.skills-grid`)
        - div (`skill-item`)
            - span : HTML5
        - div (`skill-item`)
            - span : CSS3
        - (...)
- section (`#projects .animate-on-scroll`)
    - div (`.projects-grid`)
        - div (`.projects-card`)
            - div(`projects-content`)
                - h3 : E-commerce
                - p : ...
                - div(`projects-links`)
                    - a : view site
                    - a : github
        - div (`.projects-card`)

- footer (`#contact`)
    - h2 : contact
    - p : ...
    - div (`.contact-links`)
        - a
        - a
    - p (`.footer-copy`) : 2025 DJT. 


### nav

문서의 주요 내비게이션 링크를 담는 공간
- `<a>` (**My Portofolio**)
- `<div>` (여러 가지 링크들)
    - `<a>` (About) 
    - `<a>` (Skills)
    - `<a>` (Projects)
    - `<a>` (Contact)
- `<button>` 
    - `<span>` (moon)
    - `<span>` (sun)

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

#### span와 div

- `<span>` (인라인 요소) : 형광펜 🖊️
- `<div>` (블록 요소) : 상자 📦
- <p>
    이 문장은 평범한 텍스트지만
    <span style="color:red; font-weight: bold;">이 부분</span>에는
    span 태그를 사용해서 스타일을 적용했다. 
</p>

#### button 

- type
    - `button` : 기본
    - `submit` : form 데이터를 제출
    - `reset` : form 데이터를 초기화
- `disabled` : 비활성화

#### 간단한 form 예제

```
<form action="/submit-page" method="post">
    
    <div>
        <label for="username">이름:</label>
        <input type="text" id="username" name="user_name">
    </div>

    <div>
        <label for="email">이메일:</label>
        <input type="email" id="email" name="user_email">
    </div>

    <div>
        <input type="submit" value="제출">
    </div>
</form>
```

- `submit` 버튼을 누르면?
    - `<input type="submit">` or `<button type="submit">`
    1. 데이터 수집 : 모든 **input** 요소들의 값
    2. 유효성 검사 
        - type이 email인데 골뱅이 @가 없음
        - 경고 메시지 🚨
    3. 데이터 전송
        - `method`에 정의된 방식 (`get`, `post`)으로
    4. 페이지 이동, 변화
        - `action`에 지정된 페이지로 이동하거나
        - 현재 페이지에 변화가 생긴다. 

#### CSS의 단위

- 절대 단위 : `px` (픽셀)
- 상대 단위
    - 글꼴 기준
        - `rem` : `<html>`의 글자 크기 기준
        - `em` : 부모 요소 글자 크기
    - 뷰포트 기준
        - 뷰포트는 브라우저에서 웹페이지가 실제로 보이는 영역을 의미한다. 
        - `vw` : viewport width의 1%
        - `vh` : viewport height의 1%
        - `vmin`, `vmax`
    - 백분율 단위
        - `%` : 부모 요소의 특정 값에 대한 백분율 

#### 백분율 사용 예시

- *HTML*
    ```
    <div class="parent-box">
        부모 요소 (너비 500px)
        <div class="child-box">
            자식 요소 (너비 50%)
        </div>
    </div> 
    ```

- *CSS*
    ```
    .parent-box{
        width : 500px;
        height : 200px;
        background-color: lightgray; 
        padding: 10px;
    }
    .child-box {
        width: 50%; 
        height: 100px; 
        background-color: skyblue; 
    }
    ```

- width는 부모 요소의 50%인 250px가 된다. 


#### nav의 모습

```
<nav>
    <a href="#home" class="nav-logo">My Portfolio</a>
    <div class="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>
    <button id="theme-toggle">
        <span id="moon-icon">🌙</span>
        <span id="sun-icon">☀️</span>
    </button>
</nav>
```

#### header의 모습
```
<header id="home">
        <img src="링크"
             alt="Header Picture" 
             class="profile-img header-img">
        <h1>Hello, I'm DJT.</h1>
        <p>We are going to <strong>Make Frontend Developing Great Again.</strong> </p>
        <a href="#projects" class="hero-button">View My Projects</a>
    </header> 
```

#### 하나의 태크, 중복되는 class
- `<img ... class="profile-img header-img>`
    ```
    .profile-img {
        border-radius: 50%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out; 
    }

    .about-img {
        width: 200px;
        height: 200px;
    }

    .header-img {
        width: 250px; 
        height: 250px;
        border: 5px solid var(--primary-color); 
        box-shadow: 0 10px 30px var(--shadow-color), 0 0 0 10px var(--bg-color); 
        animation: float 4s ease-in-out infinite; 
        margin-bottom: 1.5rem; 
    }

    .header-img:hover {
        transform: scale(1.05);
    }
    ```
- 두 클래스에 중복되는 속성이 있다면? (not good)
    - CSS의 **cascade**
        - `.css` 파일을 위에서 아래로 읽음
        - 맨 밑에 있는 *class*의 설정을 따름
- "(위의 예시처럼) 중복되는 속성이 없도록 설계해야..."

### main 

#### section1 - About Me

```
<section id="about" class="animate-on-scroll">
    <h2>About Me</h2>
    <div class="about-content">
        <img src="사진.jpg" 
             alt="Profile Picture" class="profile-img about-img" />
        <p> Believe me... </p>
    </div>
</section>
```

- `<main>` : 문서의 핵심, 단 하나의 주인공!
- `<section>` : 내용의 의미 있는 구분, 책의 장
- `<div>` : 의미 없는 만능 상자
# wanted_pre_onboarding_assignment

# 소개

👩‍💻 Portfolio: [fe_portfolio.pdf](https://github.com/saanglee/pre-assignment/files/8957588/fe_portfolio.pdf)

📝 velog short essay: https://velog.io/@sanglee/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%BD%94%EC%8A%A4

# 데모

🚀 https://pre-assignment.vercel.app/

# 사용 기술 스택 🛠

- JavaScript
- React
- SCSS

## 라이브러리

- store
- classnames

<br>

# 디렉토리 구조 📂

### src

```
├── App.js
├── Layout.jsx
├── assets
├── components
│   ├── Comment
│   │   ├── Comment.jsx
│   │   ├── CommentList.jsx
│   │   └── comment.module.scss
│   ├── Feed
│   │   ├── Feed.jsx
│   │   └── feed.module.scss
│   ├── Header
│   │   ├── Header.jsx
│   │   └── header.module.scss
│   └── Image.jsx
├── index.js
├── pages
│   ├── Login
│   │   ├── Login.jsx
│   │   └── login.module.scss
│   ├── Main
│   │   ├── Main.jsx
│   │   └── main.module.scss
│   └── PreAssignmentGuide.jsx
└── styles
    └── globalStyles.js
```

### public

```
├── data
│   └── data.json
├── images
│   ├── Bom.jpg
│   ├── Cat1.jpg
│   ├── Cat2.jpg
│   ├── Cat3.jpg
│   └── Janggun.jpg
├── index.html
├── instagram_favicon.ico
└── manifest.json
```

<br>

# < 구현 완료 목록 >

## ✔️ 로그인 페이지

- [x] input 2개 button 1개
- [x] Local Storgae에 로그인 정보 저장
- [x] 로그인 완료 후 메인 페이지로 이동

### 로그인 유효성 검사

- [x] Email 조건: `@` , `.` 포함 <정규표현식 사용>
- [x] Password 조건: 대문자, 숫자, 특수문자 포함 8자리 이상 <정규표현식 사용>
- [x] Email, Password Validation 상태를 CSS로 표현(border 색상 변경)
- [x] Login Button: Validation Check가 모두 통과된 경우, Button 색상을 진하게 변경
- [x] 로그인 시 Email, Password 등록되어 있는 것과 일치 여부 확인

⚠️ 유효성 검사 시 아래 두 가지를 적용해서 구현

- 정규표현식 사용
- Validation 함수 분리

<br>

## ✔️ 메인 페이지

- [x] GNB 구현 : sticky
- [x] 상단 가운데 Input창 (기능은 X)

### 메인페이지 모바일

- [x] 상단 가운데 Input창 사라짐
- [x] 양옆으로(space-between) 정렬

<br>

## ✔️ Routing

- [x] 로그인->로그아웃: 라우팅 로직을 통해 페이지가 이동 되도록 구현 (Local Storage)
- [x] 로그인이 완료되면 라우터에서 Main Page로 이동
- [x] 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동

⚠️ history push 사용 X

<br>

## ✔️ Feeds

- [x] 화면 중앙에 위치
- [x] Feed Component Layout: 인스타그램과 동일하게 구현
- [x] 각 Feed의 정보: public/data 디렉토리에 json형식으로 구성하여 fetch, axios 등을 이용하여 data를 요청
- [x] Feed 3개이상 랜더링
- [x] 각 Feed에 댓글 추가 기능 구현 - 클릭으로 게시 가능
- [x] 각 Feed에 댓글 추가 기능 구현 - Enter key로 게시 가능
- [x] 모바일 대응 가능
- [x] 게시 후 Input 초기화
- [x] Feed의 이미지: 각각 사이즈 다르게 구현

### Feeds 로딩

- [x] Feed Image lazy loading 구현

## ✔️ CSS

- [x] Main Page 전체에 반응형 CSS 적용

## ✔️ 그 외

- [x] Feed: 피드 이미지 하단 아이콘 삽입
- [x] Feed: 댓글 삭제 기능
- [x] Feed: 댓글 1자 이하 입력 시 포커스 기능
- [x] favicon변경

---

# < 구현 세부설명 >

## Login/Logoout

### 로그인 유효성 검사

![login_50pecent](https://user-images.githubusercontent.com/92660097/175022608-fd2904c5-ee58-45c4-a2b0-fb151086cf0f.gif)

**유효성 검사 조건**

- 유효한 이메일, 비밀번호가 아닐 경우 input field의 border 색을 변경합니다.
  - 입력 중에(focus상태인 경우), border 색 변경 하지 않습니다.
  - 입력 후에(focus상태가 아닌 경우), 유효성 검사 실행하여 통과하지 못한 경우 border 색을 변경합니다.
- 이메일, 비밀번호 모두 유효한 경우 로그인 버튼의 opacity 변경합니다.

### 문제 & 해결

- ❗️이메일과 비밀번호 입력 중에 validate함수가 실행되면 email, pwd state의 업데이트 마다 validation 함수가 호출되어야 하여 불필요한 렌더링이 발생했습니다.
- ❗️입력 중에 border 색이 변경되는 것이 사용자 경험 측면에서 좋은 경우가 아니라고 판단했습니다.
- ✅ onFocus, onBlur이벤트를 이용하여 focus상태가 아닐 경우, 그리고 validate함수를 통과하지 못한 경우에만 border색이 변경되도록 했습니다.

### 로그인버튼 클릭 후 로직

**Local Storage**

- 이메일, 비밀번호를 저장하는 local storage의 키값은 userList입니다.
- useMemo Hook을 이용해 local storage에 새로운 계정이 추가될 때에만 업데이트 되도록 최적화해두었습니다.
- 로그인 버튼을 클릭하면 handleSubmitLogin함수가 호출됩니다. handleSubmitLogin함수에서 local storage의 계정정보와 로그인 상태 값을 업데이트 합니다.

**아래는 local storage에 email, pwd, isLoggedIn 값이 저장되는 경우입니다.**

1. userList가 빈 값일 경우: 새로운 사용자이므로 email, pwd, isLoggedIn: true를 저장 후 메인페이지로 이동합니다.

2. userList가 비어있지 않은 경우: userList에 존재하는 이메일인 지 확인합니다.

- 2-1. targetUser가 undefined인 경우: 새로운 사용자이므로 email, pwd, isLoggedIn: true를 저장 후 메인페이지로 이동합니다.
- 2-2. targetUser의 email과 pwd가 userList에 존재하는 정보와 일치하는 경우: 기존 사용자 이므로 메인페이지로 이동합니다.
- 2-3 targetUser의 email이 userList에 존재하지만 pwd가 일치하지 않는 경우: 비밀번호 확인 안내창을 띄웁니다.

### 로그아웃

- local storage에서 사용자정보를 삭제하고 login페이지로 이동합니다.

### 문제 & 해결

사전 과제 가이드에서 로그인/로그아웃과 관련된 내용은 아래와 같았는데,

```
- Local Storage 에 로그인 정보 저장
- 로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인
- 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동되어야 합니다.
```

❗️ 로그인 정보가 저장되고 로그인 시 local storage에 등록된 것과 일치여부를 확인해야 하는데, "로그아웃 되면 (local storage 정보가 삭제 되면)"이라는 문장에서 문제의 의도를 파악하기가 어려웠습니다. 회원가입을 해서 사용자 정보를 저장하고 그 정보로 로그인을 하는 것없이, 로그인 만으로 사용자 정보를 저장하고 삭제해야하는 것을 어떻게 구현할 지 고민하는 부분에 시간을 많이 썼던 것 같습니다.

✅ 위에서 설명한 것과 같이 로그인 하면 email, pwd를 저장하고, 로그아웃 버튼을 누르지 않고 페이지에서 나갈 경우 local storage에서 삭제되지 않으며 다시 로그인 할 경우 local storage에 저장된 정보와 확인하는 방식으로 구현했습니다.

<br>

## Main

```
< 역할 >
- public/data 디렉토리의 data.json에 fetch를 이용하여 data를 요청
- Feed 렌더링
```

- getData함수에서 fetch요청을 통해 data.json로부터 Feed에 들어갈 데이터를 가져옵니다.
- useEffect Hook을 사용해 getData함수는 렌더링 시 한번만 호출되도록 했습니다.

  ```jsx
  const getData = async () => {
    const response = await fetch('data/data.json').then((response) =>
      response.json()
    );
    const initData = response.map((item) => {
      return {
        name: item.name,
        image: item.img,
        content: item.content,
        id: feedId.current++,
      };
    });
    setFeedData(initData);
  };

  useEffect(() => {
    getData();
  }, []);
  ```

- Feed 컴포넌트에 feedData의 값들을 prop으로 전달합니다.
- map함수를 이용해 Feed 컴포넌트를 렌더링합니다.

```jsx
return (
  <div className={styles.Main}>
    {feedData.map((item) => (
      <div key={item.id}>
        <Feed key={item.id} {...item}></Feed>
      </div>
    ))}
  </div>
);
```

<br>

## Feed

```
< 기능 >
- Image lazy loading
- 내용 더 보기 & 간략하게 보기 토글 버튼
```

_lazy loading: 개발자도구 Network탭 `slow 3G` 적용 화면_
![lazy_loading2](https://user-images.githubusercontent.com/92660097/175023506-8285aced-0920-4252-879f-6e3486a87ecc.gif)

- Main페이지에서 prop으로 받아온 name, content, image를 사용합니다.
- CommentList컴포넌트와 Commnet컴포넌트를 자식 컴포넌트로 갖으며 피드 하단에서 렌더링합니다.
- 피드 이미지의 로딩을 구현하는 부분은 intersection observer을 사용하여 lazy loading을 시키는 방법을 사용했습니다. 메인 페이지로 들어와 피드 컴포넌트가 렌더링 될 때 피드 이미지가 로딩되기 전에 place holder 이미지가 먼저 렌더링되고, 로딩이 완료 된 후 이미지를 렌더링 합니다.

### 어려웠던 점 & 배운 것

- hteml태그를 어떻게 구성할 지 Feed컴포넌트에서 가장 고민을 많이 했던 것 같습니다.
  - Feed 가장 바깥에 감싸는 부분을 main, article, section태그 중 어떤 것으로 하는 것이 맞을 지 고민이 되었으나 각각의 피드가 독립된 컨텐츠라고 생각했기에 article태그를 사용했습니다.
  - 시멘틱 태그에 대해 더 알아보고 공부해볼 수 있었습니다.
- article태그 안으로 다른 태그들을 사용했는데, Feed 상단 프로필 이름이 있는 부분은 header태그, 그리고 그 아래로 이미지와 아이콘, 댓글 목록 부분은 각각 section태그를 사용해 나눠주었습니다.

```jsx
<article className={styles.Feed}>
  <header className={styles.feed_header}> ... </header>
  <section className={styles.image_wrapper}>...</section>

  <section className={styles.contents}>
    ...
    <section className={styles.content}> ...</section>
  </section>
  <CommentList commentList={comments} onRemove={onRemove} />
  <Comment onCreate={onCreate} />
</article>
```

- svg파일의 icon을 ReactComponent 방식으로 사용하는 것을 처음 시도해보았습니다. assets폴더에 icon svg파일들을 넣어두고 index.js에서 ReactComponent로 export하고, 다른 컴포넌트에서 import해와서 사용할 수 있도록 했습니다.

## Comment, CommentList

```
< 기능 >
- 댓글 추가 (+ Enter Key로 댓글 추가)
- 댓글 삭제
- 글자 1글자 미만 일 경우 input feild focus
- 댓글 개수 표시
```

![writing_comment](https://user-images.githubusercontent.com/92660097/175023548-bbee6738-2df7-40ab-b949-4f20252d5354.gif)

- Comment와 CommentList의 부모 컴포넌트인 Feed 컴포넌트에서 Comment state를 관리하고 댓글 추가, 삭제 (onCreate, onRemove) 함수를 관리합니다.

<br>

## Header

```
< 기능 >
- 로고 클릭 시 main페이지로 이동
- 로그인, 로그아웃 버튼 전환
- 반응형 input
```

![routing2](https://user-images.githubusercontent.com/92660097/175024349-6b695755-654e-49df-91f5-ff85e65f1306.gif)

### Header의 로그인, 로그아웃 버튼

**👩‍💻시행착오**

처음에 아래와 같은 구조로, Login컴포넌트에서 Main컴포넌트로 useNavigate Hook을 이용해 라우팅 하며 state값을 보내는 방식으로 구현을 했었습니다.
<img width="714" alt="image" src="https://user-images.githubusercontent.com/92660097/175020298-9bc2f94e-8455-42a6-bc84-7686b18e85c6.png">

```jsx
// useNavigate
navigate('main', {
  state: { email: emailState, pwd: pwdState, isLoggedIn: true },
});
```

이렇게 컴포넌트 구조를 설계하니, Login컴포넌트에서 Header컴포넌트로 로그인 값을 바로 보내지 못하는 문제가 발생했습니다.

**< 💡 생각했던 해결 방안 >**

1. Login 컴포넌트와 Main 컴포넌트 밑으로 각각 Header 컴포넌트를 넣는다. 그리고 props를 통해 Header 컴포넌트로 로그인 상태값을 전달한다.
2. useContext Hook 또는 Recoil과 같은 상태관리 라이브러리를 사용한다.
3. Layout 컴포넌트를 만들어 그 안으로 Header 컴포넌트를 넣는다. 그리고 App 컴포넌트에서 Header Route 안으로 Login과 Main 컴포넌트가 오도록 한다.

➡️ 3번 방법을 선택하여 해결 💡

<img width="461" alt="image" src="https://user-images.githubusercontent.com/92660097/175020992-8e6e4c0d-2b04-4172-ab92-a062a4465954.png">

<br>

_Layout 컴포넌트_

```jsx
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
```

_App 컴포넌트_

```jsx
function App() {
  return (
    // <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="main" element={<Main />} />
      </Route>
    </Routes>
  );
}
```

위와 같은 구조로 변경하여 Header 컴포넌트에서도 Login 컴포넌트의 useNavigate Hook 내부 state값에 접근할 수 있도록 하였습니다.

- useLocation을 사용해서 state값에 접근하고 email과 isLoggedIn값을 가져옵니다.
- handleLogOutBtn 함수에서 가져온 email값을 이용해 local storage(`userList`)에서 해당 email값을 삭제합니다.

```jsx
  const location = useLocation();

  const userState = location.state || { email: '', pwd: '', isLoggedIn: false };

  const { email, isLoggedIn } = userState;

  const handleLogOutBtn = () => {
    const newUserList = userList.filter((user) => user.email !== email);
    store.set(USER_LIST, newUserList);
    navigate('/');
```

<br>

# 마무리

- 구현 하면서 부족한 점을 많이 느꼈습니다. 특히 login 후에 local storage에 저장된 정보를 이용하는 (로그인,로그아웃 버튼 등) 방식이나 intersection observer을 사용하여 lazy loading을 구현하는 것, svg파일 아이콘을 리액트 컴포넌트로 사용하는 방법 등 이번 과제를 수행하면서 새롭게 익히고 구현해보는 것들이 많이 있었습니다.

- 이전에 배웠던 부분을 복습하며 리마인드 하는 계기가 되었습니다. 텍스트를 추가하고 삭제하는 기능, fetch 메서드를 이용해 데이터를 가져오는 기능, 그리고 html 태그를 의미에 맞게 사용하는 방법 등 배웠던 내용을 이번 과제에 적용시키며 조금씩 다른 방식으로 응용해볼 수 있었습니다.

## 아쉬운 점 😂

- 코드를 더 깔끔하게 작성하고 중복 코드를 최대한 줄일 수 있는 방법에 대해 더 고민하고, 더 공부해야겠다는 생각이 많이 들었습니다.

<br>

---

<br>

# 그 외

### 모바일 화면

![mobile](https://user-images.githubusercontent.com/92660097/175043323-77dbf99c-9f0c-497c-adb4-bacc6d1d84cb.gif)

### 내용 더보기 토글

![show_more](https://user-images.githubusercontent.com/92660097/175023791-45e536af-43d1-45e1-bcca-650cf20e6b38.gif)

### 댓글 삭제 버튼

![remove_comment](https://user-images.githubusercontent.com/92660097/175035445-e5152ba2-442e-4e74-8435-0a3ba1f65d89.gif)

# 구현 목록

<br>

## 로그인 페이지

- [x] input 2개 button 1개
- [x] Local Storgae에 로그인 정보 저장
- [x] 로그인 완료 후 메인 페이지로 이동

### 로그인 유효성 검사

- [ ] Email 조건: `@` , `.` 포함 <정규표현식 사용>
- [ ] Password 조건: 대문자, 숫자, 특수문자 포함 8자리 이상 <정규표현식 사용>
- [x] Email, Password Validation 상태를 CSS로 표현(border 색상 변경)
- [x] Login Button: Validation Check가 모두 통과된 경우, Button 색상을 진하게 변경
- [x] 로그인 시 Email, Password 등록되어 있는 것과 일치 여부 확인

⚠️ 유효성 검사 시 아래 두 가지를 적용해서 구현

- 정규표현식 사용
- Validation 함수 분리

<br>

## 메인 페이지

- [x] GNB 구현 : sticky
- [x] 상단 가운데 Input창 (기능은 X)

### 메인페이지 모바일

- [x] 상단 가운데 Input창 사라짐
- [x] 양옆으로(space-between) 정렬

<br>

## Routing

- [x] 로그인->로그아웃: 라우팅 로직을 통해 페이지가 이동 되도록 구현 (Local Storage)
- [x] 로그인이 완료되면 라우터에서 Main Page로 이동
- [x] 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동

⚠️ history push 사용 X

<br>

## Feeds

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

- [ ] Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현 (로딩바는 선택)

## CSS

- [x] 메인 Page 전체에 반응형 CSS 적용

## 그 외

- [x] 피드 이미지 하단 아이콘 삽입
- [ ] index.html - title, icon 변경 (favicon.ico)
- [x] 댓글 삭제 기능
- [x] 댓글 1자 이하 입력 시 포커스 기능
- [ ] 각 컴포넌트 렌더링 최적화

로그인 -> 메인으로 navigate하면서 email pwd정보 같이 보냄
헤더: 로그인 -> 메인에서 받은 email정보 가져와야 함
로그인 -> 메인 -> 헤더로 email정보 이동됨
헤더에서 로그아웃 버튼 클릭 시 메인으로부터 받은 email과 localStorage에 있는 email 일치 여부 확인 후 일치하는 email 계정 (+pwd) 삭제한 뒤, login페이지로 navigate함

로그인 상태인데 /에 접근하려고 할 경우 main으로 redirect 함
로그인 상태 전 OR 로그아웃 버튼 눌렀을 경우만 /로 이동

useContext사용 시
App 컴포넌트에서 Header, Login, Main모두 관리
Login의 email state와 login state(true/false)를 Header와 Main페이지로 보냄

# 구현 목록

<br>

## 로그인 페이지

- [x] input 2개 button 1개
- [ ] 컴포넌트 렌더링 최적화
- [ ] Local Storgae에 로그인 정보 저장
- [ ] 로그인 완료 후 메인 페이지로 이동

### 로그인 유효성 검사

- [ ] Email 조건: `@` , `.` 포함 <정규표현식 사용>
- [ ] Password 조건: 대문자, 숫자, 특수문자 포함 8자리 이상 <정규표현식 사용>
- [ ] Email, Password Validation 상태를 CSS로 표현(border 색상 변경 등)
- [ ] Login Button: Validation Check가 모두 통과된 경우, Button 색상을 진하게 변경
- [ ] 로그인 시 Email, Password 등록되어 있는 것과 일치 여부 확인

⚠️ 유효성 검사 시 아래 두 가지를 적용해서 구현

- 정규표현식 사용
- Validation 함수 분리

<br>

## 메인 페이지

- [x] GNB 구현 : sticky
- [x] 상단 가운데 Input창 (기능은 X)

### 메인페이지 모바일

- [x] 상단 가운데 Input창 사라짐
- [ ] 양옆으로(space-between) 정렬

<br>

## Routing

- [ ] 로그인->로그아웃: 라우팅 로직을 통해 페이지가 이동 되도록 구현 (Local Storage)
- [ ] 로그인이 완료되면 라우터에서 Main Page로 이동
- [ ] 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동

⚠️ history push 사용 X

<br>

## Feeds

- [x] 화면 중앙에 위치
- [ ] Feed Component Layout: 인스타그램과 동일하게 구현
- [x] 각 Feed의 정보: public/data 디렉토리에 json형식으로 구성하여 fetch, axios 등을 이용하여 data를 요청
- [x] Feed 3개이상 랜더링
- [x] 각 Feed에 댓글 추가 기능 구현 - 클릭으로 게시 가능
- [x] 각 Feed에 댓글 추가 기능 구현 - Enter key로 게시 가능
- [x] 모바일 대응 가능
- [x] 게시 후 Input 초기화
- [ ] Feed의 이미지: 각각 사이즈 다르게 구현

### Feeds 로딩

- [ ] Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현 (로딩바는 선택)

## CSS

- [ ] 메인 Page 전체에 반응형 CSS가 적용 되어있는지 평가

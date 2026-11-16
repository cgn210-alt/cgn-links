# 경영관리실 업무링크 (비밀번호 웹앱)

주소: https://cgn210-alt.github.io/cgn-links/ (저장소를 만든 뒤부터 열림)

- 이 저장소에는 링크 자료가 없습니다. 화면 코드만 있습니다.
- 링크 자료는 Firebase 데이터베이스(`links` 경로)에 저장되고, 비밀번호를 입력해야 보기·편집할 수 있습니다.
- 비밀번호는 코드에 없고 Firebase 콘솔의 사용자(cgn210@cgnmail.net) 비밀번호입니다.
- 한 번 로그인하면 그 브라우저에서는 로그아웃할 때까지 유지됩니다.
- 로컬 경로 링크(G:\..., \\192.168...)는 웹 주소에서는 브라우저 보안 때문에 열리지 않을 수 있습니다.

## 처음 한 번 설정

1. Firebase 콘솔(console.firebase.google.com)에서 새 프로젝트 만들기 (예: cgn-links)
2. Authentication > 로그인 방법 > 이메일/비밀번호 사용 설정
3. Authentication > 사용자 > 사용자 추가: 이메일 `cgn210@cgnmail.net`, 비밀번호는 원하는 값(6자 이상)
4. Authentication > 설정 > 승인된 도메인에 `cgn210-alt.github.io` 추가
5. Authentication > 설정 > 사용자 작업에서 '생성(가입) 사용' 끄기 (다른 사람이 계정을 만들지 못하게)
6. Realtime Database 만들기 (위치: 싱가포르 asia-southeast1, 잠금 모드로 시작)
7. Realtime Database > 규칙 탭에 `database.rules.json` 내용을 붙여 넣고 게시
8. 프로젝트 설정 > 내 앱 > 웹 앱 추가 → 나오는 설정값을 `firebase-config.js`에 붙여 넣기
9. github.com/new 에서 저장소 `cgn-links`(Public) 만들기 → 이 폴더에서 `사이트-올리기.bat` 실행
10. 저장소 Settings > Pages > Branch: main / (root) 저장
11. 앱 주소 접속 → 로그인 → 편집 → '백업 가져오기'로 기존 링크 백업(JSON) 올리기

## 비밀번호 바꾸기

Firebase 콘솔 Authentication > 사용자 > 해당 계정 메뉴에서 비밀번호 재설정.

## 보안 규칙을 바꿨을 때

`database.rules.json`을 고치면 Firebase 콘솔 규칙 탭에 직접 다시 붙여 넣고 게시해야 합니다.

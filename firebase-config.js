// 경영관리실 업무링크 Firebase 설정
// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에 나오는 값을 그대로 붙여 넣으세요.
var FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCWkwTiBQQWwsGnACRovqo59GGwRFovoHc",
  authDomain:        "cgn-links.firebaseapp.com",
  databaseURL:       "https://cgn-links-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "cgn-links",
  storageBucket:     "cgn-links.firebasestorage.app",
  messagingSenderId: "1086116057410",
  appId:             "1:1086116057410:web:2af2dadeee9f2e6b8878db"
};

// 비밀번호 로그인에 쓰는 계정 (화면에는 비밀번호만 입력)
// Firebase 콘솔 Authentication > 사용자에 이 이메일로 추가하고, database.rules.json 의 값과 같아야 합니다
var EDITOR_EMAIL = "cgn210@cgnmail.net";

# 모바일 청첩장 💕

간단하고 세련된 모바일 청첩장 웹사이트입니다.

## 📱 주요 기능

- **반응형 디자인**: 모바일 최적화된 레이아웃
- **갤러리**: 사진 4장 표시 및 확대 기능
- **오시는 길**: 카카오맵/네이버지도/티맵 연동
- **연락하기**: 전화/문자 바로가기
- **계좌번호**: 토글 및 복사 기능
- **방명록**: 외부 서비스 연동 가능
- **부드러운 애니메이션**: 스크롤 애니메이션

## 🎨 커스터마이징 방법

### 1. 기본 정보 수정 (`index.html`)

```html
<!-- 날짜 및 시간 -->
<p class="date">2026년 00월 00일</p>
<p class="time">오후 0시 00분</p>

<!-- 신랑/신부 이름 -->
<p class="name">신랑 <strong>홍길동</strong></p>
<p class="name">신부 <strong>김영희</strong></p>
```

### 2. 장소 정보 수정 (`index.html`)

```html
<h3>웨딩홀 이름</h3>
<p class="address">서울특별시 000구 000로 000</p>
<p class="tel">Tel. 02-0000-0000</p>
```

### 3. 연락처 수정 (`index.html`)

```html
<a href="tel:010-1234-5678" class="contact-btn">📞</a>
<a href="sms:010-1234-5678" class="contact-btn">💬</a>
```

### 4. 계좌번호 수정 (`index.html`)

```html
<p>은행명 123-456-789-00</p>
<button class="copy-btn" onclick="copyAccount('123-456-789-00')">복사</button>
```

### 5. 사진 추가

`images/` 폴더에 다음 파일들을 추가하세요:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`

### 6. 색상 테마 변경 (`styles.css`)

```css
/* 메인 색상 변경 */
background: linear-gradient(135deg, #ffeef8 0%, #fff5f7 100%);
color: #d4a5a5; /* 핑크톤 */
```

## 🚀 Netlify 배포 방법 (추천)

### 1단계: GitHub 저장소 생성

1. GitHub에 로그인
2. 우측 상단 `+` 버튼 → `New repository`
3. Repository name: `wedding-invitation` (원하는 이름)
4. **`Private` 선택** (Private 저장소도 배포 가능!)
5. `Create repository` 클릭

### 2단계: 코드 푸시

터미널에서 다음 명령어를 실행하세요:

```bash
# 원격 저장소 연결 (GitHub에서 제공하는 URL로 변경)
git remote add origin https://github.com/[사용자명]/wedding-invitation.git

# 코드 푸시
git branch -M main
git push -u origin main
```

### 3단계: Netlify 배포

1. **[Netlify](https://www.netlify.com/) 접속**
   - `Sign up` 클릭
   - GitHub 계정으로 로그인

2. **Import from Git**
   - `Add new site` → `Import an existing project` 클릭
   - `Deploy with GitHub` 선택
   - `wedding-invitation` 저장소 선택

3. **배포 설정**
   - Build command: 비워두기 (정적 사이트)
   - Publish directory: 비워두기 (루트 디렉토리)
   - `Deploy site` 클릭

4. **배포 완료!**
   - 약 30초~1분 후 배포 완료
   - 자동 생성된 URL: `https://random-name-123456.netlify.app`
   - 커스텀 도메인 설정 가능

### 4단계: 도메인 이름 변경 (선택)

1. Site settings → `Change site name`
2. 원하는 이름으로 변경 (예: `우리의결혼식`)
3. URL이 `https://우리의결혼식.netlify.app`으로 변경됨

### ✨ Netlify 장점

- ✅ **Private 저장소 지원** (무료!)
- ✅ 자동 배포 (코드 푸시 시 자동 업데이트)
- ✅ HTTPS 자동 적용
- ✅ 빠른 CDN
- ✅ 커스텀 도메인 연결 가능

---

## 🚀 Vercel 배포 방법 (대안)

### 간단 배포

1. **[Vercel](https://vercel.com/) 접속**
   - GitHub 계정으로 로그인

2. **Import Project**
   - `Add New` → `Project` 클릭
   - `wedding-invitation` 저장소 선택
   - `Deploy` 클릭

3. **배포 완료!**
   - URL: `https://wedding-invitation.vercel.app`

---

### 배포 후 URL 공유

배포가 완료되면 생성된 URL을 친구/가족들에게 공유하세요! 📤

## 📝 추가 기능 설정 (선택사항)

### 카카오맵 API 연동

1. [카카오 개발자 사이트](https://developers.kakao.com/) 접속
2. 앱 생성 및 JavaScript 키 발급
3. `index.html`에 스크립트 추가:

```html
<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY"></script>
```

4. `script.js`의 주석 처리된 카카오맵 코드 활성화

### 방명록 연동 (Google Forms)

1. [Google Forms](https://forms.google.com/) 생성
2. 폼 작성 완료 후 `보내기` 클릭
3. URL 복사
4. `script.js`의 `openGuestbook()` 함수에 URL 입력

## 📂 프로젝트 구조

```
wedding_invitation/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 기능
├── images/            # 사진 폴더
│   └── .gitkeep
├── .gitignore         # Git 제외 파일 목록
└── README.md          # 이 파일
```

## 🎯 로컬에서 테스트

브라우저에서 `index.html` 파일을 직접 열거나, VS Code의 Live Server 확장을 사용하세요.

```bash
# Live Server 설치 (VS Code)
# Ctrl+Shift+P → "Live Server: Open with Live Server"
```

## 💡 팁

- 모바일에서 테스트: 브라우저 개발자 도구 (F12) → 모바일 모드
- 사진 최적화: 웹 최적화된 JPG 형식 권장 (1MB 이하)
- 로딩 속도: 사진 크기를 적절히 조절하세요

## 📞 문제 해결

- **사진이 안 보여요**: `images/` 폴더에 파일명이 정확한지 확인
- **지도가 안 보여요**: 카카오맵 API 키 발급 및 설정 필요
- **배포가 안 돼요**: GitHub Settings → Pages에서 설정 확인

---

축하합니다! 🎉 멋진 청첩장을 만드셨네요!

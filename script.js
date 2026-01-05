// 계좌번호 토글
function toggleAccount(type) {
    const accountDetail = document.getElementById(`${type}-account`);
    const button = accountDetail.previousElementSibling;

    if (accountDetail.style.display === 'none') {
        accountDetail.style.display = 'block';
        button.textContent = '계좌번호 숨기기 ▲';
    } else {
        accountDetail.style.display = 'none';
        button.textContent = '계좌번호 보기 ▼';
    }
}

// 이미지 Lazy Loading (Intersection Observer) - 더 이상 필요 없음, 썸네일 사용
// const lazyImageObserver = new IntersectionObserver(...)

// 페이지 로드시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 갤러리 초기화
    initGallery();
});

// 새로고침 시 맨 위로 스크롤
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

// 계좌번호 복사
function copyAccount(accountNumber) {
    // 클립보드에 복사
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(accountNumber).then(() => {
            alert('계좌번호가 복사되었습니다.');
        }).catch(err => {
            console.error('복사 실패:', err);
            fallbackCopy(accountNumber);
        });
    } else {
        fallbackCopy(accountNumber);
    }
}

// 클립보드 API를 지원하지 않는 브라우저용
function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        alert('계좌번호가 복사되었습니다.');
    } catch (err) {
        alert('복사에 실패했습니다. 직접 입력해주세요: ' + text);
    }
    
    document.body.removeChild(textarea);
}

// 지도 앱 열기
function openKakaoMap() {
    // 카카오맵 주소 입력 (실제 좌표로 변경 필요)
    const address = encodeURIComponent('서울특별시 000구 000로 000');
    window.open(`https://map.kakao.com/link/search/${address}`, '_blank');
}

function openNaverMap() {
    // 네이버지도 주소 입력 (실제 좌표로 변경 필요)
    const address = encodeURIComponent('서울특별시 000구 000로 000');
    window.open(`https://map.naver.com/v5/search/${address}`, '_blank');
}

function openTMap() {
    // 티맵 주소 입력 (실제 좌표로 변경 필요)
    const address = encodeURIComponent('서울특별시 000구 000로 000');
    window.open(`https://tmap.life/9a06a37e`, '_blank');
}

// 방명록 열기 (구글 폼 등의 URL로 변경)
function openGuestbook() {
    // 방명록 서비스 URL을 입력하세요
    const guestbookUrl = 'https://forms.gle/your-google-form-id';
    window.open(guestbookUrl, '_blank');
}

// 갤러리 이미지 모달
let galleryImages = []; // {thumb: '', full: ''} 형태로 저장
let currentImageIndex = 0;

function initGallery() {
    const images = document.querySelectorAll('.photo-grid .photo-item img');
    galleryImages = Array.from(images)
        .filter(img => img.src || img.dataset.full)
        .map(img => ({
            thumb: img.src,
            full: img.dataset.full || img.src
        }));
}

function openModal(imgElement) {
    if (galleryImages.length === 0) {
        initGallery();
    }

    const fullSrc = imgElement.dataset.full || imgElement.src;
    currentImageIndex = galleryImages.findIndex(img => img.full === fullSrc);
    if (currentImageIndex === -1) currentImageIndex = 0;

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.classList.add('active');

    // 원본 이미지 로드
    modalImg.src = galleryImages[currentImageIndex].full;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function changeImage(direction) {
    if (galleryImages.length === 0) return;

    currentImageIndex += direction;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }

    const modalImg = document.getElementById('modalImage');
    // 원본 이미지 로드
    modalImg.src = galleryImages[currentImageIndex].full;
}

// ESC 키로 모달 닫기, 좌우 화살표로 이미지 넘기기
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imageModal');
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeImage(1);
    }
});

// 모달 배경 클릭시 닫기
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// 스크롤 애니메이션 (선택사항)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 섹션에 애니메이션 적용
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// 카카오맵 API 연동 예시 (선택사항)
// 카카오 개발자 사이트에서 앱 키를 발급받아 사용하세요
/*
function initKakaoMap() {
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 실제 좌표로 변경
        level: 3
    };
    
    const map = new kakao.maps.Map(container, options);
    
    // 마커 표시
    const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
}

// 카카오맵 API 스크립트가 로드된 후 실행
// <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY"></script>
// window.addEventListener('load', initKakaoMap);
*/

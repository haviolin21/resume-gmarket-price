// Initialize Lucide Icons
lucide.createIcons();

// Initialize Smooth Scroll (Lenis)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    updateThemeIcon(true);
}

themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
});

function updateThemeIcon(isDark) {
    themeToggle.innerHTML = isDark ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    lucide.createIcons(); 
}

// Project Data
const projects = [
    {
        title: "예약 담당자 IVR 대체 자동화",
        period: "2025.07.29 ~ 2025.09.21 (김캐디)",
        summary: [
            "문제 정의: 예약 담당자 미운영 시간대에는 전화 예약 대응이 불가하여, 고객 예약 실패·매출 손실·운영 리소스 비효율이 동시에 발생하는 문제를 확인하였습니다.",
            "가설 설정: IVR 기반 예약 프로세스를 도입하면 24시간 예약 커버가 가능해지고, 운영 비용 절감과 함께 예약 성공률 및 플랫폼 운영 효율이 개선될 것이라는 가설을 설정하였습니다.",
            "실험 설계 및 검증: 미운영 시간대 예약 성공률 분석, IVR 통화 방식에 대한 사용자 거부감 사전 조사, 도입 전·후 예약 성과 및 운영 비용 비교를 통해 효과를 검증하였습니다.",
            "결과: 미운영 시간대 예약 성공률 50% → 70%로 개선, 인건비 연 약 2억 원 → 월 200만 원 수준(IVR 통화료)으로 운영 비용 대폭 절감하였습니다.",
            "기여 내용: 예약 성공률·운영 시간대별 성과 지표 대시보드 구축, 예약 담당자 운영 기여도 및 결제 영향 분석, IVR 도입 효과에 대한 비용·효율성 검증을 통해 운영 자동화 체계 구축에 기여"
        ],
        details: `
            <p>김캐디는 매장 예약 관리를 위한 사장님 솔루션을 운영하고 있으며, 솔루션 사용이 어려운 매장이나 예약을 놓친 경우를 보완하기 위해 프리랜서 형태의 ‘예약 담당자’가 전화로 예약 내용을 전달하고 수락하는 구조를 운영하고 있었습니다.</p>
            <p>해당 운영 방식은 예약 담당자 근무 시간 외에는 예약 대응이 불가능해 새벽 시간대 예약이 누락되는 문제가 있었고, 프리랜서 인력 특성상 갑작스러운 업무 이탈이나 관리 리스크가 반복적으로 발생했습니다. 또한 재택 근무 기반 운영으로 인해 예약 처리 품질이 일정하지 않아 플랫폼 운영 안정성과 비용 측면 모두에서 비효율이 발생하고 있었습니다.</p>
            <p>입사 후 운영 전반을 빠르게 파악하는 과정에서 예약 담당자 운영 구조가 가장 큰 구조적 문제라고 판단했습니다. 이를 검증하기 위해 예약 담당자가 처리하는 전화 예약이 전체 결제액에서 차지하는 비중을 분석한 결과, 전체 결제액의 1%에도 미치지 않는 수준이었습니다. 반면 새벽 시간대에는 전화 예약을 받지 못해 예약이 실패하는 사례가 많았고, 약 200건의 예약 중 절반가량이 처리되지 못하고 있음을 확인했습니다.</p>
            <p>이러한 분석을 바탕으로 사람 중심의 전화 예약 운영을 IVR 기반 자동화로 전환할 경우, 운영 리스크를 제거하고 비용을 절감하는 동시에 24시간 예약 대응을 통해 예약 성과를 개선할 수 있을 것이라는 가설을 수립했습니다.</p>
            <p>기존 예약 담당자의 주요 역할은 예약 수락 또는 거절 여부를 확인하는 것이었기 때문에 IVR 시나리오 설계 자체는 비교적 단순하게 시작할 수 있었습니다. 초기에는 버튼 입력만으로 수락과 거절이 이루어지도록 설계했으나, 수락을 잘못 선택할 경우 복구가 불가능하다는 리스크를 발견했습니다. 이에 수락 시 한 번 더 확인 절차를 거치도록 시나리오를 보완해 안정성을 확보했습니다.</p>
            <p>도입에 앞서 거래액 규모별로 매장을 선정해 파일럿 테스트를 진행하고, IVR 음성 안내에 대한 거부감 여부를 사전 인터뷰로 검증했습니다. 우려와 달리 대부분의 매장 사장님들은 사람이 아닌 자동 응답이라 하더라도 예약만 정상적으로 처리된다면 큰 불편을 느끼지 않는다는 의견을 보였고, 이를 근거로 IVR를 전면 도입했습니다.</p>
            <p>그 결과 예약 담당자 미운영 시간대의 예약 성공률이 50%에서 70% 수준으로 개선되었으며, 연간 약 2억 원 규모의 인건비를 월 200만 원 수준의 IVR 통화 비용으로 대체하는 성과를 거둘 수 있었습니다. 또한 전체 예약 건수 증가에도 약 5% 수준으로 기여하며 플랫폼 운영 성과 개선에 긍정적인 영향을 미쳤습니다.</p>
            <p>본 프로젝트를 통해 운영 리스크가 높은 영역을 데이터로 식별하고 우선순위를 정해 해결하는 경험을 쌓았습니다. 사람이 전화를 받아야 한다는 내부 우려에 대해서도 정량적인 분석과 파일럿 결과를 통해 설득하며 실행으로 이어냈고, 기획부터 시나리오 설계, 개발 협업, 성과 분석과 개선까지 전 과정을 주도하며 플랫폼 운영 자동화 프로젝트를 끝까지 완결시킨 경험을 확보했습니다.</p>
        `
    },
    {
        title: "중고나라 페이 결제 2배 증가",
        period: "23.04.07 ~ 23.12.31 (중고나라)",
        summary: [
            "문제 정의: 결제액 저조 문제 해결을 위해 사용자 행동 데이터를 분석하여 결제 퍼널의 이탈률 개선 필요 확인",
            "가설 설정: 결제 퍼널 중 이탈률이 발생하는 구간을 개선하고, 세그먼트 분석 및 이벤트 실행이 결제액 상승에 기여할 것이라는 가설 설정",
            "실험 설계 및 검증: SQL을 활용한 결제 퍼널 분석 및 이탈률 개선, 세그먼트 분석 및 타겟팅 이벤트 실행",
            "결과: 결제액 2.4배 상승, 2023년 최고 결제액 달성.",
            "기여 내용: 대시보드 생성, 퍼널 분석, 이탈률 개선, 이벤트 기획 및 타당성 분석, 상위 결제자 관리"
        ],
        details: `
            <p>2023년 중고나라 페이 결제액 상승 목표 달성을 위해 결제제휴사업팀이 신설되었습니다. 이 팀은 결제액 목표 달성을 위해 운영/기획, 디자인, 마케팅, 데이터 분석, 영업 등 각 분야의 전문가들이 모여 하나의 목표를 향해 효율적으로 움직일 수 있도록 구성된 목적 조직입니다.</p>
            <p>기존에 운영, PM 등으로 분산되어 있던 페이먼트 서비스 업무를 한 팀에서 통합 운영하며, 페이 결제 서비스를 바닥부터 구축하고 효율적으로 운영해야 했습니다. 저는 데이터 분석 및 보고, 운영 업무를 담당하며, 결제 서비스를 한눈에 파악할 수 있는 대시보드 생성, 데일리 푸쉬 대상자 추출 및 효율 분석, 결제 퍼널 분석, 이벤트 기획 타당성 분석, 상위 결제자 관리를 주도했습니다.</p>
            <p>저는 결제액 상승을 위해 사용자 행동 데이터를 분석하고, 결제까지의 여정에서 이탈률을 개선하며, 특정 세그먼트를 집중 관리하여 결제액을 상승시키고, 이벤트 기획을 통해 신규 회원 유입을 늘리는 것이 핵심 전략이라고 판단했습니다.</p>
            <p>결제 퍼널 분석을 통해 이탈률이 가장 높게 발생하는 구간을 찾아내는 데 집중했습니다. SQL을 활용해 결제 퍼널을 세분화하여 분석한 결과, 채팅 구간에서 이탈률이 가장 높게 발생한다는 것을 발견했습니다. 앱 내 크롤링 된 카페 상품에서 채팅 이탈률이 높음을 확인했습니다. 이는 카페에서 크롤링된 상품에 대해 앱 내에서 채팅을 걸어도 판매자가 확인하지 못해 이탈이 발생한 것이었습니다.</p>
            <p>이를 해결하기 위해, 앱 내에서 채팅이 발생하면 카페 상품 게시물에 자동 댓글을 달아 판매자가 앱으로 유도되도록 하는 ‘카페 채팅 앱 유도’ 기능을 구현했습니다. 이를 통해 카페 회원이 앱으로 유입되었고, 연동 회원 수가 증가하면서 결제액 상승에 기여했습니다.</p>
            <p>특정 세그먼트를 집중 관리하여 결제액을 상승시키기 위해, 결제액에 가장 큰 볼륨을 차지하는 상위 판/구매자를 집중 관리했습니다. SQL을 활용해 결제 데이터를 분석하고, 거래 횟수, 거래액, 상품 등록수, 채팅 응답률, 사기율, 택배거래 이용수와 같은 중고거래 주요 지표를 기반으로 앱 내 중고거래 지표 상위 10%에 해당하는 약 300명의 상위 판/구매자를 추출했습니다.</p>
            <p>상위 판/구매자에게는 빠른 송금, 빠른 CS 응답을 제공하고, 판매 금액에 따른 리워드를 제공하여 중고나라 앱 내 경험을 개선하고, 앱 사용률을 높여 고액 결제 볼륨 상승을 목표했습니다. 그 결과, 상위 판/구매자의 거래액이 이전 대비 약 20% 상승하며 결제액 2.4배 상승에 기여했습니다.</p>
            <p>중고나라 앱 내에서 매달 진행하는 이벤트 기획에 참여하여, 중고나라만의 특색 있는 날인 ‘중요일’을 기획하고 실행했습니다. 중요일 이벤트는 신규 회원 유입과 이탈 회원 복귀를 목적으로 했으며, 고객이 결제에 가장 민감하게 반응하는 지표를 분석한 결과, 수수료 감면이 가장 큰 효율을 가져올 것으로 판단했습니다. 결제액이 가장 낮은 시간대에 수수료 감면 이벤트를 진행해, 결제 감소를 보완하고 결제액 증가까지 이뤄냈습니다. 신규 회원 인입과 기존 이탈 회원의 복귀를 유도하며, 결제액 상승에 긍정적인 영향을 주었습니다.</p>
            <p>최종적으로 23년 12월 ‘중요일’ 이벤트에서 23년 최고 결제액을 달성했고, 2023년 결제액 2.4배 상승이라는 목표를 달성했습니다. 결제제휴사업팀은 신설된 팀 중 23년 KPI 목표를 달성한 유일한 팀이 되었습니다.</p>
            <p>이 프로젝트를 통해, SQL을 활용한 결제 퍼널 분석 및 이탈률 개선 능력을 강화했고, 상위 결제자 세그먼트 분석 및 집중 관리를 통해 데이터 기반 의사결정 능력을 키웠습니다. 또한, 이벤트 기획 및 타당성 분석을 통해 사업 운영 기획 역량을 강화했으며, 크로스팀 협업을 통해 목표 달성을 위한 전략 수립 및 실행 경험을 쌓았습니다.</p>
        `
    },
    {
        title: "중고나라 카페-앱 연동 구조 개선",
        period: "22.03.15 ~ 22.12.31 (중고나라)",
        summary: [
            "문제 정의: 중고나라 앱 활성화 및 MAU 증대를 위해 회원수 및 상품 등록수 증가 필요성 확인",
            "가설 설정: 네이버 카페(중고나라)와 중고나라 앱의 연동을 통해, 기존 카페 회원의 앱 유입 증가 및 상품 등록 활성화가 가능할 것이라는 가설 설정",
            "실험 설계 및 검증: LTV 분석, 회원 활동 지표 추출, 카페-앱 연동 기능 개발, 회원수 및 상품 등록수 모니터링을 통해 효율성 검증",
            "결과: 회원수 1.6배 증가, 상품 등록수 2배 증가, LTV 상승 및 회원 활동 지표 개선",
            "기여 내용: 카페to앱 연동 기획, 데이터 분석 및 수치 증대, 연동 신청 기능 자동화, 이벤트 기획&실행"
        ],
        details: `
            <p>네이버 카페 1위이며 1900만 명의 회원을 보유한 중고나라 카페를 효율적으로 활용하면, 중고나라 앱 활성화와 MAU 증대를 이룰 수 있을 것이라 예상했습니다. 중고거래에 익숙한 중고나라 카페 회원이 앱을 사용하게 된다면 낮은 비용으로 높은 효용을 창출할 수 있을 것이라고 판단했습니다. 카페와 앱을 연결하여 어디서든 상품이 등록되고 판매될 수 있는 구조를 만들기 위해, 카페 to 앱 연동(및 앱 to 카페 연동)을 기획하고 데이터 분석을 통해 효율적인 수치 증대를 이끌어냈습니다. 또한, 상품 등록 이벤트와 연동 신청 기능 자동화를 통해 상반기 대비 하반기 상품 수 2배, 연동 회원 수 1.7배 증가라는 결과를 달성했으며, 10월 기준 연동 회원의 상품 수가 전체 앱 상품의 60%를 차지하게 되었습니다.</p>
            <p>기존에는 셀러를 위한 연동 신청 절차만 있었으며, 수기로 요청받아 진행하는 비효율적인 방식이었습니다. 효율적인 연동 신청 시스템이 필요하다고 판단하여, 연동 신청 페이지 구현을 기획하고 팀 내 요청했습니다. 8월, 시스템 구현 완료 전까지는 구글 폼을 활용해 수기로 요청을 받으며 진행했고, 이 과정이 효율적으로 운영될 수 있도록 프로세스를 설계했습니다.</p>
            <p>연동 회원 증가 - 상품 등록수 증가 - 중고나라 페이 활용 증가로 이어지는 단계적 이벤트 기획을 진행했습니다. 연동 회원 증가를 위해, 연동 신청 시 고객에게 상품을 제공하는 이벤트를 기획했습니다.</p>
            <p>이벤트 진행 전 사전 조사를 통해, 스타벅스 커피 증정이 가장 적극적인 반응을 이끌어낸다는 것을 확인했습니다. 이는 중고나라 앱 내 LTV보다 낮은 비용으로, 적은 비용으로 높은 효율을 창출할 수 있는 이벤트였습니다. 연동 시 스타벅스 커피를 증정하는 이벤트를 진행한 결과, 기존 4월 초 평균 70명대였던 연동 회원 수가 4월 말 평균 900명대로 폭발적으로 증가했습니다. 이벤트 진행 후 약 1달 후, 기존 신규 회원과 카페 to 앱 연동 회원을 비교 분석한 결과, 카페 to 앱 연동 회원의 회원 활동 지표가 약 20% 더 높게 발생했습니다. 검증에따라 본격적으로 연동 프로젝트를 이어갔습니다.</p>
            <p>연동 회원 증가가 상품 등록수 증가로 자연스럽게 이어지도록 하기 위해, 상품 등록 이벤트도 단계적으로 기획하고 실행했습니다. 6월에는 최초 상품 등록 시 마일리지를 자동 지급하는 이벤트를 진행했으나, 자동 지급 방식에서는 고객 반응이 미미하다는 것을 확인했습니다. 이에 따라, 7월에는 이벤트 참여 페이지를 만들어, 각 상품 등록 구간별로 마일리지를 획득할 수 있는 게임적 요소를 추가했습니다. 이벤트에 참여하며 목표를 달성하는 재미를 제공하며, 참여율을 높이는 전략을 활용했습니다. 그 결과, 6월 일평균 5,500개였던 연동 회원의 상품 수가 7월 일평균 10,400개로 2배 증가하며 높은 효과를 얻었습니다. 8월과 9월에는 상품 등록 후 중고나라 페이로 거래 시 가장 많이 거래한 사람과 최다액 구매자에게 보상을 제공하는 이벤트를 진행했습니다. 이를 통해 연동 회원의 상품 수가 일 평균 1만 개 이상을 유지하며, 일별 최고 14,000개라는 최고 수치를 기록했습니다.</p>
            <p>이 프로젝트를 통해, SQL을 활용한 데이터 분석 및 LTV 분석 역량을 강화했고, 카페와 앱 연동 기획 및 연동 신청 기능 자동화를 통해 서비스 운영 효율화를 달성했습니다. 또한, 이벤트 기획 및 실행 경험을 통해 고객 행동 데이터 기반의 전략 수립과 단계적 이벤트 기획의 중요성을 체감하며 기획 역량을 한층 높였습니다. 특히, 카페-앱 연동 전략을 통해 회원수와 상품 등록수를 동시에 증대시키는 유기적인 성장 전략을 데이터 기반으로 실현한 경험은 강력한 성과로 이어졌습니다.</p>
        `
    }
];

// Modal Logic
function openModal(index) {
    const project = projects[index];
    const modalBody = document.getElementById('modalBody');
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');

    modalBody.innerHTML = `
        <span class="modal-period">${project.period}</span>
        <h2>${project.title}</h2>
        
        <div class="modal-section">
            <h3>Project Summary</h3>
            <ul class="modal-summary-list">
                ${project.summary.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Detailed Action</h3>
            <div class="modal-text">
                ${project.details}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    modalContent.scrollTop = 0; // Reset scroll position
    document.body.classList.add('modal-open');
}

function closeModal(event) {
    if (!event || event.target.classList.contains('modal-overlay') || event.target.classList.contains('modal-close')) {
        const modal = document.getElementById('projectModal');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

// Global scope access for onclick
window.openModal = openModal;
window.closeModal = closeModal;

// Number Counting Animation
const countElements = document.querySelectorAll('.counter');
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const targetVal = parseFloat(target.getAttribute('data-target'));
            animateValue(target, 0, targetVal, 1500);
            countObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const isFloat = end % 1 !== 0;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let currentVal = progress * (end - start) + start;
        obj.innerHTML = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

countElements.forEach(el => countObserver.observe(el));

// Smooth Scrolling for All Internal Links (Integrated with Lenis)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            lenis.scrollTo(targetElement, {
                offset: -80,
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            })
        }
    });
});

// Header scroll effect and Active Link update
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Header shadow and height
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Animation on scroll (Intersection Observer)
const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .cap-item, .exp-row, .project-card, .divider').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.2, 0, 0.2, 1)';
    revealOnScroll.observe(el);
});

const style = document.createElement('style');
style.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
var mouseover = document.getElementById('mouse-event');

// 마우스 오버 이벤트에 대한 핸들러 함수
function handleMouseOver() {
    mouseover.style.backgroundColor = "red";
}

// 마우스 아웃 이벤트에 대한 핸들러 함수
function handleMouseOut() {
    mouseover.style.backgroundColor = "blue";
}

// 이벤트 리스너 등록
mouseover.addEventListener("mouseover", handleMouseOver);
mouseover.addEventListener("mouseout", handleMouseOut);
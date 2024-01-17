var iconList= document.querySelectorAll('.favorites-icon');

for(var i = 0; i < iconList.length; i++) {
    iconList[i].onclick  =
        function (e) {e.preventDefault();}
}

for(var i = 0; i < iconList.length; i++) {
    iconList[i].onclick = function () {
        var iconId = this.getAttribute('id');

        // 모든 탭과 탭 내용에 대해 'on' 클래스를 제거
        document.querySelectorAll(".favorites-icon")
            .forEach(function (item) { item.classList.remove("on");
        });
        document.querySelector(iconId).classList.add('on');
        this.classList.add('on');
    }
}

//제안하기 - 모달창 닫기버튼
const buttonX = document.querySelector(".modal__x");

//제안하기 - 모달창 on,off
const onModal = () => {
  const modal = document.querySelector("#modal");
  modal.classList.add("on");
}

const offModal = () => {
const modal = document.querySelector("#modal");
  modal.classList.remove("on");
}

buttonX.addEventListener("click", offModal);

//제안하기 - 이메일 전송을 위한 emailJS API 기본 셋팅
(function() {
  emailjs.init("user_OMvrMreKDEOENmm4PYs2T");
  })();

  window.onload = function() {
    document.querySelector('.proposal__inputs').addEventListener('submit', function(event) {
        event.preventDefault();
        for (let i = 1; i < event.target.length; i++ ){
          if (event.target[i].value == "") {
            return alert("필수 입력란이 비어있습니다. 확인해주세요");
          }
        }
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_ugd2mjp', 'template_fsgpbaa', this)
            .then(function() {
              console.log('SUCCESS!');
              return onModal();
            }, function(error) {
              console.log('FAILED...', error);
              return alert("전송 실패");
            });
            //어뷰징 방지 리셋
            for (let i = 1; i < event.target.length; i++) {
              event.target[i].value = "";
            }
    });
}
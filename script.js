var infoQuestions = document.querySelectorAll(".info-questions");
var span = document.getElementsByTagName("span");
var p = document.getElementsByTagName("p");
var arrow = document.querySelectorAll(".info-card-faq img");

for (let i = 0; i < infoQuestions.length; i++){
  infoQuestions[i].onclick = function(){
    if (span[i].classList.contains("show-span")) {
      span[i].className = "";
      p[i].className = "";
      arrow[i].className = "";
    }else {
      span[i].className = "show-span";
      p[i].className = "font-weight";
      arrow[i].className = "arrow-up";
    }
  };
}

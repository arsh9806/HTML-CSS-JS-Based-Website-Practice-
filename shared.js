var ChoosePlan = document.querySelectorAll('.plan button');
var backdrop = document.querySelector('.backdrop');
var noButton = document.querySelector('.modal__action--negative');
var modal = document.querySelector('.modal');
var HamBurger = document.querySelector('.toggle-button');
var sidebar = document.querySelector('.mobile-nav');
for(var i=0;i<ChoosePlan.length;i++){
    ChoosePlan[i].addEventListener("click",fun);
}
function fun(){
    backdrop.style.display = "block";
    modal.style.display = "block";
    setTimeout(function(){
        backdrop.classList.add("open");
        modal.classList.add("open");
    }, 10);
}
backdrop.addEventListener("click",function(){
    backdrop.classList.remove("open");
    modal.classList.remove("open");
    setTimeout(function(){
        backdrop.style.display = "none";
        modal.style.display = "none";
}, 200);
});
if(noButton){
    noButton.addEventListener("click",function(){
        backdrop.classList.remove("open");
        modal.classList.remove("open");
        setTimeout(function(){
            backdrop.style.display = "none";
            modal.style.display = "none";
    }, 200);
    });
}
HamBurger.addEventListener("click", function(){
    sidebar.style.display = "block";
    backdrop.style.display = "block";
});

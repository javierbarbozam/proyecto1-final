document.getElementById("sign-in__btn").addEventListener("click", function(event){
  event.preventDefault();
  document.querySelectorAll(".pop-up").forEach(function(popUp) {
    popUp.style.display = "block";
  });
});

document.getElementById("sign-in-close").addEventListener("click", function(){
  document.querySelectorAll(".pop-up").forEach(function(popUp) {
    popUp.style.display = "none";
  });
});

document.getElementById("sign-in__btn").addEventListener("click", function(event){
  event.preventDefault();
  document.querySelectorAll(".popUp").forEach(function(popUp) {
    popUp.style.display = "flex";
  });
});

document.getElementById("modal--close").addEventListener("click", function(){
  document.querySelectorAll(".popUp").forEach(function(popUp) {
    popUp.style.display = "none";
  });
});

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  if(window.pageYOffset >= 208){
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.height = "60px";
  }
  else{
    document.getElementById("header").style.position = "absolute";
    document.getElementById("header").style.height = "260px";
  }
})

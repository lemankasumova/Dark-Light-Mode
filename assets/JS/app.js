let btn=document.querySelector("#btn");
let btnText=document.querySelector("#btnText");
let btnIcon=document.querySelector("#btnIcon");

btn.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        btnIcon.src="assets/images/sun.png";
        btnText.innerHTML="Light";
    }else{
        btnIcon.src="assets/images/moon.png";
        btnText.innerHTML="Dark";
    }
}


let changeTheme = function (theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme)
}
let i = 1;
let ctheme=localStorage.getItem("theme")
if(ctheme){
    changeTheme(ctheme)
    if(ctheme=="light"){
        document.getElementById("tselector").style="background-color:black;"
        document.getElementById("imgHash").src="/image/logo-hash-clr.svg"
        document.getElementById("nav1").style="background-color:aliceblue;"
        i=-1;
    }
}
let tChanger = function () {
    i = i * (-1);
    let ctheme="1"
    let clr=""
    let link=""
    if (i == 1) {
        ctheme = "dark"
        link="/image/logo-w-hash.svg"
        clr="background-color:white;"
        document.getElementById("tselector").style="background-color:white;"
        document.getElementById("imgHash").src="/image/logo-w-hash.svg"
        document.getElementById("nav1").style="background-color:black;"
    } else {
        ctheme = "light"
        link="/image/logo-hash-clr.svg"
        clr="background-color:black;"
        document.getElementById("tselector").style="background-color:black;"
        document.getElementById("imgHash").src="/image/logo-hash-clr.svg"
        document.getElementById("nav1").style="background-color:aliceblue;"
    }
    changeTheme(ctheme,clr,link)
    localStorage.setItem("theme",ctheme)
}
var sliceIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("reviews");
    for (i=0; i < x.length; i++){
        x[i].style.display = "none";
    }
    sliceIndex++;
    if (sliceIndex > x.length){
        sliceIndex = 1
    }
    x[sliceIndex - 1].style.display = "flex";
    setTimeout(carousel,3000);
}
function openNav(){
    document.getElementById("mySidenav").style.width = "77%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}
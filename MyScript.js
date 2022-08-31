function openNav()

    document.getElementById("sidenav").style.left ='0px'
    document.getElementById("openbtn").style.visibility ="hidden";


function closeNav()

    document.getElementById("sidenav").style.left =' -200px';
    document.getElementById("openbtn").style.visibility ="visible";


window.onresize = ( ) =>{
    if (window.innerWidth >700)
        openNav();
    else
        closeNav();
}   



function openDaddy()

    document.getElementById("pu").style.visibility ="visible";


function closeDaddy()

    document.getElementById("pu").style.visibility ="hidden";

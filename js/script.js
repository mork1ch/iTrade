function otkrit_ul(){
    var assortment = document.getElementById('assortment');
    znach = getComputedStyle(assortment).top;
    x = 0;

    if (znach == "-230px"){
        document.getElementById("assortment").style.top = '20px';
        document.getElementById("strelka_vnz").style.transform = 'rotate(180deg)';
        document.getElementById("accessories").style.height = '500px';
        document.getElementById("otkrit_ul").style.top = '-280px';
    }
    if (znach == "20px"){
        document.getElementById("assortment").style.top = '-230px';
        document.getElementById("strelka_vnz").style.transform = 'rotate(0deg)';
        document.getElementById("accessories").style.height = '160px';
        document.getElementById("otkrit_ul").style.top = '60px';
    }
}
function otkrit_ul(){
    var assortment = document.getElementById('assortment');
    znach = getComputedStyle(assortment).top;

    if (znach == "-230px"){
        document.getElementById("assortment").style.top = '60px';
        document.getElementById("strelka_vnz").style.transform = 'rotate(180deg)';
        document.getElementById("accessories").style.height = '500px';
        document.getElementById("otkrit_ul").style.top = '-300px';
    }
    if (znach == "60px"){
        document.getElementById("assortment").style.top = '-230px';
        document.getElementById("strelka_vnz").style.transform = 'rotate(0deg)';
        document.getElementById("accessories").style.height = '200px';
        document.getElementById("otkrit_ul").style.top = '-10px';
    }
}

function otkrit_info(){
    var otkrit_info_p = document.getElementById('otkrit_info_p');
    znach = getComputedStyle(otkrit_info_p).top;
    if(znach == "-150px"){
        document.getElementById("info").style.height = '240px'; //поменять высоту отступа
        document.getElementById("otkrit_info_p").style.top = '-10px';
        document.getElementById("strelka_vnz_otkrit_info").style.transform = 'rotate(180deg)';
    }
    if(znach == "-10px"){
        document.getElementById("info").style.height = '140px'; //поменять высоту отступа
        document.getElementById("otkrit_info_p").style.top = '-150px';
        document.getElementById("strelka_vnz_otkrit_info").style.transform = 'rotate(0deg)';
    }
}

function otkrit_time(){
    var otkrit_time_p = document.getElementById('otkrit_time_p');
    znach = getComputedStyle(otkrit_time_p).top;
    if(znach == "-150px"){
        document.getElementById("time").style.height = '170px'; //поменять высоту отступа
        document.getElementById("otkrit_time_p").style.top = '-40px';
        document.getElementById("strelka_vnz_otkrit_time").style.transform = 'rotate(180deg)';
    }
    if(znach == "-40px"){
        document.getElementById("time").style.height = '100px'; //поменять высоту отступа
        document.getElementById("otkrit_time_p").style.top = '-150px';
        document.getElementById("strelka_vnz_otkrit_time").style.transform = 'rotate(0deg)';
    }
}

function otkrit_persons(){
    var otkrit_persons_p = document.getElementById('otkrit_persons_p');
    znach = getComputedStyle(otkrit_persons_p).top;
    if(znach == "-150px"){
        document.getElementById("persons").style.height = '190px'; //поменять высоту отступа
        document.getElementById("otkrit_persons_p").style.top = '-20px';
        document.getElementById("strelka_vnz_otkrit_persons").style.transform = 'rotate(180deg)';
    }
    if(znach == "-20px"){
        document.getElementById("persons").style.height = '100px'; //поменять высоту отступа
        document.getElementById("otkrit_persons_p").style.top = '-150px';
        document.getElementById("strelka_vnz_otkrit_persons").style.transform = 'rotate(0deg)';
    }
}

function otkrit_cash(){
    var otkrit_cash_p = document.getElementById('otkrit_cash_p');
    znach = getComputedStyle(otkrit_cash_p).top;
    if(znach == "-150px"){
        document.getElementById("cash").style.height = '240px'; //поменять высоту отступа
        document.getElementById("otkrit_cash_p").style.top = '-40px';
        document.getElementById("strelka_vnz_otkrit_cash").style.transform = 'rotate(180deg)';
    }
    if(znach == "-40px"){
        document.getElementById("cash").style.height = '100px'; //поменять высоту отступа
        document.getElementById("otkrit_cash_p").style.top = '-150px';
        document.getElementById("strelka_vnz_otkrit_cash").style.transform = 'rotate(0deg)';
    }
}

function menu_site(){
    var menu_site = document.getElementById('menu_site');
    znach = getComputedStyle(menu_site).top;

    if(znach == "-320px"){
        document.getElementById("menu_site").style.top = '100px';
    }
    if(znach == "100px"){
        document.getElementById("menu_site").style.top = '-320px';
    }

}

function open_avt(){
    document.getElementById('avt').style.display = "block";
}
function close_avt(){
    document.getElementById('avt').style.display = "none";
}
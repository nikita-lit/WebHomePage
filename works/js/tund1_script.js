function nimiLugemine()
{
    //let - muutajate määramine (var)
    let nimi = document.getElementById("nimi");
    let v1 = document.getElementById("vastus1");

    // innerText või innerHTMl genireerib lehel vastav tekst
    v1.innerText = "Tere õpilane, " + nimi.value;
}

function puhasta()
{
    let v1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi");

    let v2 = document.getElementById("vastus2");
    let mees = document.getElementById("mees");
    let naine = document.getElementById("naine");

    let varv = document.getElementById("varv");

    let v3 = document.getElementById("vastus3");
    let slider = document.getElementById("slider");

    let v4 = document.getElementById("vastus4");
    let koht = document.getElementById("koht");

    let v5 = document.getElementById("vastus5");
    let java = document.getElementById("java");
    let javascript = document.getElementById("javascript");
    let python = document.getElementById("python");
    let php = document.getElementById("php");

    v1.innerText = "";
    nimi.value = "";

    v2.innerText = "";
    mees.checked = false;
    naine.checked = false;

    varv.value = 0;

    v3.innerText = "";
    slider.value = 0;

    v4.innerText = "";
    koht.selectedIndex = 0;

    v5.innerText = "";
    java.checked = false;
    javascript.checked = false;
    python.checked = false;
    php.checked = false;
}

function valiSugu()
{
    let v2 = document.getElementById("vastus2");
    let mees = document.getElementById("mees");
    let naine = document.getElementById("naine");

    if (naine.checked)
        v2.innerHTML = naine.value;
    else if (mees.checked)
        v2.innerHTML = mees.value;
    else
        v2.innerHTML = "Palun vali oma sugu!";
}

function valiVarv()
{
    let varv = document.getElementById("varv");
    let v1 = document.getElementById("vastus1");
    let v2 = document.getElementById("vastus2");
    let v3 = document.getElementById("vastus3");
    let v4 = document.getElementById("vastus4");
    let v5 = document.getElementById("vastus5");

    v1.style.backgroundColor = varv.value;
    v2.style.color = varv.value;
    v3.style.color = varv.value;
    v4.style.color = varv.value;
    v5.style.color = varv.value;
}

function sliderLiigub()
{
    let v3 = document.getElementById("vastus3");
    let slider = document.getElementById("slider");

    v3.innerText = slider.value + " punkti";
}

// select -- selectedIndex
function valiKoht()
{
    let v4 = document.getElementById("vastus4");
    let koht = document.getElementById("koht");

    if(koht.selectedIndex !== 0)
        v4.innerHTML = "Sa valisid " + koht.value;
    else
        v4.innerHTML = "Tee ripploendi lahti ja vali";
}

function teeValik()
{
    let v5 = document.getElementById("vastus5");
    let java = document.getElementById("java");
    let javascript = document.getElementById("javascript");
    let python = document.getElementById("python");
    let php = document.getElementById("php");

    let valik = "";
    if(java.checked)
        valik += java.value + ", ";

    if(javascript.checked)
        valik += javascript.value + ", ";

    if(python.checked)
        valik += python.value + ", ";

    if(php.checked)
        valik += php.value + ", ";

    v5.innerHTML = "Sa valisid: " + valik;
}
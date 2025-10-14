function juhuslikPilt()
{
    const pildid = [
        '../../images/1.png', // https://nikitalitvinenko24.thkit.ee/wp/wp-content/uploads/2025/10/1.png
        '../../images/2.png', // https://nikitalitvinenko24.thkit.ee/wp/wp-content/uploads/2025/10/2.png
        '../../images/3.png', // https://nikitalitvinenko24.thkit.ee/wp/wp-content/uploads/2025/10/3.png
        '../../images/4.png', // https://nikitalitvinenko24.thkit.ee/wp/wp-content/uploads/2025/10/4.png
    ];

    // html failis määratud pilt kus id = pilt
    const pilt = document.getElementById('pilt');

    // Math.floor - ümardamine
    // Math.random - juhuslik arv
    // pildid.length - elementide arv piltide massiivis
    const randPilt = Math.floor(Math.random() * pildid.length);

    pilt.src = pildid[randPilt];
    arvutaPildiHind();
}

function teeOmaValik()
{
    const pilt = document.getElementById('pilt');
    const vastus = document.getElementById('vastus');
    const valikud = document.getElementsByName('valikud'); // mitu elemendi ühe nimega valikud

    // Tsükl for
    for (let i = 0; i < valikud.length; i++)
    {
        if (valikud[i].value && pilt.getAttribute('src') === valikud[i].value)
        {
            vastus.innerHTML = 'Sinu vastus on õige';
            vastus.style.color = 'green';
        }
        else
        {
            vastus.innerHTML = 'Mõtle veel, sa vastasid valesti!';
            vastus.style.color = 'red';
        }
    }
}

const NAGU_PILT = 2.3;
const AUTO_PILT = 2.2;
const PUU_PILT = 0;
const TAHT_PILT = 1;

function arvuta(hind, kogus)
{
    // .toFixed(2) - võtab 2 numbre peale koma
    return (kogus * hind).toFixed(2);
}

function arvutaPildiHind()
{
    const summa = document.getElementById('summa');
    const kogus = document.getElementById('kogus').value;
    const pilt = document.getElementById('pilt');
    const src = pilt.getAttribute('src');

    if (src === '../../images/1.png')
        summa.innerHTML = arvuta(NAGU_PILT, kogus) + ' €';
    else if (src === '../../images/2.png')
        summa.innerHTML = arvuta(AUTO_PILT, kogus) + ' €';
    else if (src === '../../images/3.png')
        summa.innerHTML = arvuta(PUU_PILT, kogus) + ' €';
    else if (src === '../../images/4.png')
        summa.innerHTML = arvuta(TAHT_PILT, kogus) + ' €';
}
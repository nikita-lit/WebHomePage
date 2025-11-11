let isDragging = false;
let isNavHidden = false;
let isImageBusy = false;
let isImageMoving = true;

function onLoad()
{
    $('#section_hea_pilt').draggable();
    $('#section_hea_pilt').bind("drag", onDrag);
    moveImageRight();

    $('.rotating-img').mouseenter(onMouseEnterImage);
    $('.rotating-img').mouseleave(onMouseLeaveImage);
    $('h1').mouseenter(onMouseEnterHeader);
    $('h1').mouseleave(onMouseLeaveHeader);

    fadeOutHeaPilt();
}

function fadeOutHeaPilt()
{
    $('#hea_pilt').fadeOut(1000, fadeInHeaPilt);
}

function fadeInHeaPilt()
{
    $('#hea_pilt').fadeIn(1000, fadeOutHeaPilt);
}

function onMouseEnterImage()
{
    $('.rotating-img').css('animation', 'none');
}

function onMouseLeaveImage()
{
    $('.rotating-img').css('animation', 'spin 8s linear infinite');
}

function onMouseEnterHeader()
{
    $('h1').css('color', 'cyan');
}

function onMouseLeaveHeader()
{
    $('h1').css('color', 'white');
}

function toggleNavMenu()
{
    if (isNavHidden)
    {
        isNavHidden = false;
        $('nav').animate({top: '0'}, 400);
    }
    else
    {
        isNavHidden = true;
        $('nav').animate({top: '-60px'}, 400);
    }
}

function onDrag()
{
    isDragging = true;
}

function moveImageRight()
{
    $('.rotating-img').animate({left: '300px'}, 2000, moveImageLeft);
}

function moveImageLeft()
{
    $('.rotating-img').animate({left: '-300px'}, 2000, moveImageRight);
}

function showImage()
{
    if (isImageBusy)
        return;

    onReset();
    isImageBusy = true;
    resetImage();
    $('.rotating-img').show(400, () => { isImageBusy = false; moveImageRight() });
}

function hideImage()
{
    if (isImageBusy)
        return;

    onReset();
    isImageBusy = true;
    resetImage();
    $('.rotating-img').hide(400, () => { isImageBusy = false; moveImageRight() });
}

function toggleImageMoving()
{
    if (isImageBusy)
        return;

    resetImage();
    const button = document.getElementById('stop_start_button');
    button.value = isImageMoving ? 'Start' : 'Stop';

    if (isImageMoving)
    {
        isImageMoving = false
    }
    else
    {
        isImageMoving = true
        moveImageRight();
    }
}

function resetImage()
{
    $('.rotating-img').stop();
    $('.rotating-img').css('top', '0px');
    $('.rotating-img').css('left', '0px');
}

function onReset()
{
    if (isDragging == false)
        return;

    isDragging = false;
    resetImage();
    $('#section_hea_pilt').animate({top: "0px", left: "0px"}, 500, moveImageRight);
}
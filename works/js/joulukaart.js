let canvas = null;
let snowFlakes = [];
let treeDecorations = [];
let text = "";
let santaImage = null;

let drawGround = false;
let drawTree = false;
let drawStars = false;
let drawTreeDecor = false;
let drawStarOnTree = false;
let drawSanta = false;
let drawText = false;
let drawSnow = false;

function Init()
{
    canvas = document.getElementById("canva");

    InitSanta();
    InitTreeDecor();
    InitText();
    InitSnow();
    Draw(); 
}

function InitSanta()
{
    santaImage = new Image();
    santaImage.src = "https://pics.clipartpng.com/Santa_Claus_with_Big_Bag_PNG_Clipart-52.png";
}

function InitTreeDecor() 
{
    const colors = [
        "red", 
        "yellow", 
        "lightgreen"
    ];

    treeDecorations[0] = {x: 200, y: 200, r: 15, color: colors[Math.floor(Math.random() * colors.length)]};
    treeDecorations[1] = {x: 320, y: 270, r: 15, color: colors[Math.floor(Math.random() * colors.length)]};
    treeDecorations[2] = {x: 220, y: 280, r: 10, color: colors[Math.floor(Math.random() * colors.length)]};
    treeDecorations[3] = {x: 280, y: 150, r: 15, color: colors[Math.floor(Math.random() * colors.length)]};
    treeDecorations[4] = {x: 190, y: 370, r: 10, color: colors[Math.floor(Math.random() * colors.length)]};
    treeDecorations[5] = {x: 290, y: 330, r: 15, color: colors[Math.floor(Math.random() * colors.length)]};
}

function InitText() 
{
    const texts = [
        "Häid jõule!",
        "Häid pühi!",
        "Ilusaid pühi!",
        "Mõnusat talveaega!",
    ];

    text = texts[Math.floor(Math.random() * texts.length)];
}

function InitSnow() 
{
    snowFlakes = [];
    for(let i = 0; i < 50; i++)
    {
        let snowFlake = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 2,
            speed: Math.random() * 1 + 0.5
        }

        snowFlakes.push(snowFlake);
    }
}

function Draw()
{
    Clear();
    DrawGround();
    DrawStars();
    DrawTree();
    DrawTreeDecor();
    DrawStarOnTree();
    DrawSanta();
    DrawSnow();
    DrawText();
    requestAnimationFrame(Draw);
}

function DrawStars()
{
    if(!drawStars)
        return;

    DrawStar(65, 65, "yellow");
    DrawStar(150, 275, "yellow");
    DrawStar(380, 155, "yellow");
}

function DrawStarOnTree()
{
    if(!drawStarOnTree)
        return;

    DrawStar(250, 30, "red");
}

function DrawSnow() 
{
    if (!canvas.getContext || !drawSnow) 
        return;

    let m = canvas.getContext("2d");

    m.fillStyle = "white";
    for(let flake of snowFlakes)
    {
        m.beginPath();
        m.arc(flake.x, flake.y, flake.radius, 0, 2 * Math.PI);
        m.fill();

        flake.y += flake.speed;
        if(flake.y > canvas.height)
        {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    }
}

function DrawStar(x, y, color)
{
    if (!canvas.getContext) 
        return;

    let m = canvas.getContext("2d");

    m.beginPath();
    m.fillStyle = color;

    m.moveTo(x, y);
    m.lineTo(x + 15, y + 35);
    m.lineTo(x - 15, y + 35);
    m.fill();

    m.moveTo(x, y+70);
    m.lineTo(x + 15, y + 35);
    m.lineTo(x - 15, y + 35);
    m.fill();

    m.moveTo(x - 35, y + 35);
    m.lineTo(x, y + 50);
    m.lineTo(x, y + 20);
    m.fill();

    m.moveTo(x + 35, y + 35);
    m.lineTo(x, y + 50);
    m.lineTo(x, y + 20);
    m.fill();
}

function DrawGround()
{
    if(!canvas.getContext || !drawGround)
        return;

    let m = canvas.getContext("2d");

    m.beginPath();
    m.fillStyle = "white";
    m.fillRect(0, 500-50, 500, 50);

    m.arc(75, 470, 50, 0, 2 * Math.PI, true);
    m.fill();

    m.arc(125, 470, 50, 0, 2 * Math.PI, true);
    m.fill();

    m.arc(35, 470, 30, 0, 2 * Math.PI, true);
    m.fill();

    m.arc(460, 470, 60, 0, 2 * Math.PI, true);
    m.fill();

    m.arc(410, 470, 40, 0, 2 * Math.PI, true);
    m.fill();

    m.arc(290, 470, 40, 0, 2 * Math.PI, true);
    m.fill();
}

function DrawTree()
{
    if(!canvas.getContext || !drawTree)
        return;

    let m = canvas.getContext("2d");

    m.fillStyle = "rgba(65, 49, 30, 1)";
    m.fillRect((500/2)-(50/2), 500-120, 50, 100);

    m.beginPath();
    m.fillStyle = "green";
    m.lineWidth = 5;

    m.moveTo(170, 200);
    m.lineTo(500/2, 65);
    m.lineTo(500-170, 200);

    m.fill();

    m.moveTo(150, 300);
    m.lineTo(500/2, 120);
    m.lineTo(500-150, 300);

    m.fill();

    m.moveTo(120, 400);
    m.lineTo(500/2, 220);
    m.lineTo(500-120, 400);

    m.fill();
}

function DrawTreeDecor() 
{
    if(!canvas.getContext || !drawTreeDecor) 
        return;

    let m = canvas.getContext("2d");

    for(let decor of treeDecorations) 
    {
        m.fillStyle = decor.color;
        m.beginPath();
        m.arc(decor.x, decor.y, decor.r, 0, 2 * Math.PI);
        m.fill();
    }
}

function DrawText()
{
    if(!canvas.getContext || !drawText)
        return;

    let m = canvas.getContext("2d");
    m.font = "25px Comic Sans MS";
    m.fillStyle = "white";

    m.fillText(text, 25, 45);
}

function DrawSanta()
{
    if(!canvas.getContext || !santaImage || !drawSanta)
        return;

    let m = canvas.getContext("2d");

    m.drawImage(santaImage, 0, 330, 140, 140);
}

function Clear()
{
    if(!canvas.getContext)
        return;

    let m = canvas.getContext("2d");
    m.clearRect(0, 0, 500, 500);
}

function ClearAll()
{
    Clear();

    drawGround = false;
    drawTree = false;
    drawStars = false;
    drawTreeDecor = false;
    drawStarOnTree = false;
    drawSanta = false;
    drawText = false;
    drawSnow = false;
}

function ShowAll()
{
    Clear();

    drawGround = true;
    drawTree = true;
    drawStars = true;
    drawTreeDecor = true;
    drawStarOnTree = true;
    drawSanta = true;
    drawText = true;
    drawSnow = true;
}
function onLoad()
{
    const websitesList = document.getElementById("websites_list");
    const children = websitesList.children;

    for (let i = 0; i < children.length; i++)
    {
        const website = children[i];
        let r = Math.random();
        if (r < 0.5)
            r = 255
        else
            r = Math.floor(Math.random() * 256);

        let g = Math.random();
        if (g < 0.5)
            g = 255
        else
            g = Math.floor(Math.random() * 256);

        let b = Math.random();
        if (b < 0.5)
            b = 255
        else
            b = Math.floor(Math.random() * 256);

        const link = website.getElementsByTagName("a")[0];
        link.style.color = "rgb(" + r + "," + g + "," + b + ")";
    }
}

function resetColors()
{
    const websitesList = document.getElementById("websites_list");
    const children = websitesList.children;

    for (let i = 0; i < children.length; i++)
    {
        const link = children[i].getElementsByTagName("a")[0];
        link.style.color = "white";
    }
}
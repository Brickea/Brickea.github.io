// 用来生成过去现在未来卡片
// 2019年8月27日
// BRICKEA

/*
Parameters:

pictureSrc (String): card img
title (String): card title (Past present future)
subtitle (String): card subtitle (location)
text (String): card text
button (String): card button display
buttonSrc (String): link page
motherDiv (String): container (default:pastPresentFuture)

*/

function generateCard(pictureSrc = "", title = "Title", subtitle = "Subtitle",
    text = "Text", button = "Click me！", buttonSrc = "./", motherDivId = "pastPresentFuture") {

    var motherDiv = document.getElementById(motherDivId);

    var tempDiv1 = document.createElement("div");
    tempDiv1.setAttribute("class", "sm-12 md-4 col");

    var tempDiv2 = document.createElement("div");
    tempDiv2.setAttribute("class", "row");

    var tempDiv3 = document.createElement("div");
    tempDiv3.setAttribute("class", "card");
    tempDiv3.setAttribute("style", "width: 20rem;");

    var tempimg1 = document.createElement("img");
    tempimg1.setAttribute("class", "image-top");
    tempimg1.setAttribute("src", pictureSrc);

    var tempDiv4 = document.createElement("div");
    tempDiv4.setAttribute("class", "card-body");

    var temph4_1 = document.createElement("h4");
    temph4_1.setAttribute("class", "card-title");
    temph4_1.innerText = title;

    var temph5_1 = document.createElement("h5");
    temph5_1.setAttribute("class", "card-subtitle");
    temph5_1.innerText = subtitle;

    var tempp1 = document.createElement("p");
    tempp1.setAttribute("class", "card-text");
    tempp1.innerText = text;

    var tempButton1 = document.createElement("a");
    tempButton1.setAttribute("class","paper-btn")
    tempButton1.innerText = button;
    console.log(buttonSrc);
    tempButton1.setAttribute("href", buttonSrc);

    motherDiv.appendChild(tempDiv1);

    tempDiv1.appendChild(tempDiv2);

    tempDiv2.appendChild(tempDiv3);

    tempDiv3.appendChild(tempimg1);
    tempDiv3.appendChild(tempDiv4);

    tempDiv4.appendChild(temph4_1);
    tempDiv4.appendChild(temph5_1);
    tempDiv4.appendChild(tempp1);
    tempDiv4.appendChild(tempButton1);








}
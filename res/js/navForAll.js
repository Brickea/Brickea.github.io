// 用来生成每个页面的导航栏
// 2019年8月29日
// BRICKEA
// 依据约定，主页为静态路径

/*
Parameters:

links (Array): all links that need to be displayed on the nav
    links[i][0] (String) title: the title of links
    links[i][1] (String) link: the direction of link
    links[i][2] (Boolean) active: if the link active
motherDiv (String): container (default:pageNav)

*/
function generateNav(links, motherDivId = "pageNav") {
    var motherDiv = document.getElementById(motherDivId);

    var tempNav1 = document.createElement("nav");
    tempNav1.setAttribute("class", "border split-nav");

    var tempDiv1 = document.createElement("div");
    tempDiv1.setAttribute("class", "nav-brand");

    var tempH3 = document.createElement("h3");

    var tempA1 = document.createElement("a");
    tempA1.setAttribute("href", "../../index.html");  //主页为静态路径
    tempA1.innerText = "Brickea";

    tempH3.appendChild(tempA1);
    tempDiv1.appendChild(tempH3);

    var tempDiv2 = document.createElement("div");
    tempDiv2.setAttribute("class", "collapsible");

    var tempInput1 = document.createElement("input");
    tempInput1.setAttribute("id", "collapsible1");
    tempInput1.setAttribute("type", "checkbox");
    tempInput1.setAttribute("name", "collapsible1");

    var tempButton1 = document.createElement("button");

    var tempLabel1 = document.createElement("label");
    tempLabel1.setAttribute("for", "collapsible1");

    for (let j = 1; j <= links.length; j++) {
        var tempDiv = document.createElement("div");
        tempDiv.setAttribute("class", ("bar" + j.toString()));
        tempLabel1.appendChild(tempDiv);
    }

    tempButton1.appendChild(tempLabel1);

    var tempDiv3 = document.createElement("div");
    tempDiv3.setAttribute("class", "collapsible-body");

    var tempUl1 = document.createElement("ul");
    tempUl1.setAttribute("class", "inline");

    for (let j = 0; j < links.length; j++) {
        var tempLi = document.createElement("li");
        if(links[j][2]){
            tempLi.setAttribute("class","active");
        }

        var tempA = document.createElement("a");
        tempA.setAttribute("href", links[j][1]);
        tempA.innerText = links[j][0];

        tempLi.appendChild(tempA);

        tempUl1.appendChild(tempLi);
    }

    tempDiv3.appendChild(tempUl1);

    tempDiv2.appendChild(tempInput1);
    tempDiv2.appendChild(tempButton1);
    tempDiv2.appendChild(tempDiv3);

    tempNav1.appendChild(tempDiv1);
    tempNav1.appendChild(tempDiv2);

    motherDiv.appendChild(tempNav1);



}
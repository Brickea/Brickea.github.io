// 侧边菜单链接组件
// BRICKEA
// 2019年8月29日

var sidebarColl = {

    Dom: null, //DomObject of sidebar collapse
    collapse: [],    //2-D array for collapse



    init: function (collapseArray = [], motherDiv = "sidebarCol") {
        // init
        /*
        Note:
        collapseArray[]: This should contain all links that wanted to
                        be display
        collapseArray[i][0]: This should be the title of link(Date, for example)
        collapseArray[i][1]: This should be the detial of link that wanted to be 
                            display.
        collapseArray[i][2]: This should be the src of the link


        */
        this.collapse = collapseArray;
        this.Dom = document.getElementById(motherDiv);
    },

    generateFramework: function () {
        for (let i = 0; i < this.collapse.length; i++) {
            var tempDiv1 = document.createElement("div");
            tempDiv1.setAttribute("class", "collapsible");

            var tempInput1 = document.createElement("input");
            tempInput1.setAttribute("id", "collapsible"+i.toString());
            tempInput1.setAttribute("type","radio");
            tempInput1.setAttribute("name","collapsible");

            var tempLabel1 = document.createElement("label");
            tempLabel1.setAttribute("for","collapsible"+i.toString());
            tempLabel1.innerText = this.collapse[i][0];

            var tempDiv2 = document.createElement("div");
            tempDiv2.setAttribute("class","collapsible-body");

            var tempSpan1 = document.createElement("span");
            tempSpan1.innerText = this.collapse[i][1];

            var tempA1 =document.createElement("a");
            tempA1.setAttribute("href",this.collapse[i][2]);
            tempA1.innerText = "Read more";

            tempSpan1.appendChild(tempA1);

            tempDiv2.appendChild(tempSpan1);

            tempDiv1.appendChild(tempInput1);
            tempDiv1.appendChild(tempLabel1);
            tempDiv1.appendChild(tempDiv2);

            this.Dom.appendChild(tempDiv1);
        }
    }




}
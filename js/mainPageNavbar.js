// @Author:Brickea
// @Date:2018年8月30日
// @Function:主页面目录组件
// @Description:gitpage目前根目录是https://brickea.github.io/Brickea/

$(document).ready(function () {
    var mainPath = "https://brickea.github.io/Brickea/";
    var mainList = document.getElementById("menuList"); //获取页面上目录

    var liHomePage = document.createElement("li");
    var aHomePage = document.createElement("a");

    aHomePage.setAttribute("href",mainPath + "index.html");
    aHomePage.innerText = "首页";

    liHomePage.appendChild(aHomePage);

    mainList.appendChild(liHomePage);
    // ---首页创建完毕

    var liNotePage = document.createElement("li");

    var aNotePage = document.createElement("a");
    aNotePage.setAttribute("href","#");
    aNotePage.setAttribute("class","dropdown-toggle active")
    aNotePage.setAttribute( "data-toggle","dropdown")
    aNotePage.setAttribute("role","button")
    aNotePage.setAttribute("aria-haspopup","true")
    aNotePage.setAttribute("aria-expanded", "false")
    aNotePage.innerText = "笔记"

    var spanNotePage = document.createElement("span");
    spanNotePage.setAttribute("class", "caret");

    aNotePage.appendChild(spanNotePage);

    var ulNotePage = document.createElement("ul");
    ulNotePage.setAttribute("class", "dropdown-menu");

    var liNoteFCC = document.createElement("li");
    var aNoteFCC = document.createElement("a");
    aNoteFCC.setAttribute("href", mainPath + "notes/note_0.html");
    aNoteFCC.innerText = "技术类学习笔记汇总";
    liNoteFCC.appendChild(aNoteFCC);

    var liNoteJS = document.createElement("li");
    var aNoteJS = document.createElement("a");
    aNoteJS.setAttribute("href", mainPath + "notes/FCC_notes/note_0.html");
    aNoteJS.innerText = "JS奇淫技巧";
    liNoteJS.setAttribute("class","disabled");
    liNoteJS.appendChild(aNoteJS);

    var liNoteIn = document.createElement("li");
    var aNoteIn = document.createElement("a");
    aNoteIn.setAttribute("href", mainPath + "notes/Interviews/interview_0.html");
    aNoteIn.innerText = "面试笔记";
    liNoteIn.appendChild(aNoteIn);

    ulNotePage.appendChild(liNoteFCC);
    ulNotePage.appendChild(liNoteJS);
    ulNotePage.appendChild(liNoteIn);
    
    liNotePage.appendChild(aNotePage);
    liNotePage.appendChild(ulNotePage);

    mainList.appendChild(liNotePage);
    // ---笔记创建完毕

    var liGitPage = document.createElement("li");
    var aGitPage = document.createElement("a");

    aGitPage.setAttribute("href","https://github.com/Brickea");
    aGitPage.innerText = "My Github";

    liGitPage.appendChild(aGitPage);

    mainList.appendChild(liGitPage);
    // ---My Git创建完毕

    var liStoryPage = document.createElement("li");

    var aStoryPage = document.createElement("a");
    aStoryPage.setAttribute("href","#");
    aStoryPage.setAttribute("class","dropdown-toggle active")
    aStoryPage.setAttribute( "data-toggle","dropdown")
    aStoryPage.setAttribute("role","button")
    aStoryPage.setAttribute("aria-haspopup","true")
    aStoryPage.setAttribute("aria-expanded", "false")
    aStoryPage.innerText = "故事"

    var spanStoryPage = document.createElement("span");
    spanStoryPage.setAttribute("class", "caret");

    aStoryPage.appendChild(spanStoryPage);

    var ulStoryPage = document.createElement("ul");
    ulStoryPage.setAttribute("class", "dropdown-menu");

    var liStoryTrip = document.createElement("li");
    var aStoryTrip = document.createElement("a");
    aStoryTrip.setAttribute("href", mainPath + "story/旅途/story_trip_0.html");
    aStoryTrip.innerText = "旅途";
    liStoryTrip.appendChild(aStoryTrip);

    var liStorySE = document.createElement("li");
    var aStorySE = document.createElement("a");
    aStorySE.setAttribute("href", mainPath + "notes/FCC_notes/note_0.html");
    aStorySE.innerText = "支教";
    liStorySE.setAttribute("class","disabled");
    liStorySE.appendChild(aStorySE);

    var liStoryElse = document.createElement("li");
    var aStoryElse = document.createElement("a");
    aStoryElse.setAttribute("href", mainPath + "thinking/thinking_0.html");
    aStoryElse.innerText = "杂七杂八";
    liStoryElse.appendChild(aStoryElse);

    ulStoryPage.appendChild(liStoryTrip);
    ulStoryPage.appendChild(liStorySE);
    ulStoryPage.appendChild(liStoryElse);
    
    liStoryPage.appendChild(aStoryPage);
    liStoryPage.appendChild(ulStoryPage);

    mainList.appendChild(liStoryPage);
    // ---故事创建完毕

    var liPushPage = document.createElement("li");
    var aPushPage = document.createElement("a");

    aPushPage.setAttribute("href",mainPath + "push/第四篇周推送2018年9月19日.html");
    aPushPage.innerText = "每周推送";

    liPushPage.appendChild(aPushPage);

    mainList.appendChild(liPushPage);
    // ---每周推送创建完毕
});
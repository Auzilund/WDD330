const links = [
{label: "Week01",url: "week1/week01.html"},
{label: "Week02",url: "week2/week02.html"},
{label: "Week03",url: "week3/week03.html"},
{label: "Week04",url: "week4/week04.html"},
{label: "Week05",url: "week5/week05.html"},
{label: "Week06",url: "week6/week06.html"},
{label: "Week07",url: "week7/week07.html"},
{label: "Week08",url: "week8/week08.html"},
{label: "Week09",url: "week9/week09.html"},
{label: "Week10",url: "week10/week10.html"},
{label: "Week10",url: "week11/week11.html"},
{label: "Week10",url: "week12/week12.html"}
];
let list = document.getElementById("tableOfContents");

links.forEach((item)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = item.url;
    a.innerText = item.label;
    li.appendChild(a);
    
    list.appendChild(li);
});
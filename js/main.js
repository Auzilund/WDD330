const links = [{label: "Week01",url: "week1/week01.html"},{label: "Week02",url: "week2/week02.html"},{label: "Week03",url: "week3/week03.html"}];
let list = document.getElementById("tableOfContents");

links.forEach((item)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = item.url;
    a.innerText = item.label;
    li.appendChild(a);
    
    list.appendChild(li);
});
const links = [{label: "Week01",url: "week1/week01.html"}];
let list = document.getElementById("tableOfContents");

links.forEach((item)=>{
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = item.url;
    a.innerText = item.label;
    li.appendChild(a);
    
    list.appendChild(li);
});
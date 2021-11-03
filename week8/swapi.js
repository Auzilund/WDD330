document.getElementById("next").addEventListener("click", 
function add(){
    if(page <= 3){
        page += 1;
        nextPage();
    }
    
});

document.getElementById("prev").addEventListener("click", 
function sub(){
    if(page >= 2){
        page -= 1;
        nextPage();
    }
    
});

function nextPage(){
        clearList();
        var url = "https://swapi.dev/api/starships/?page="
        
        fetch(url + page)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
            console.log(data);
        })
        .catch(function (err) {
            console.log(err);
        });
        function appendData(data){
            var starshipList = document.getElementById("starships");
            for (var i = 0; i < data.results.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = data.results[i].name;
                starshipList.appendChild(div);
            }
        }
}

function clearList(){
    document.getElementById("starships").innerHTML = "";
}

var page = 1;
nextPage();
let required = [
    "jokes.json",
    "things.json",
    "conversations.json",
    "restaurants.json"
]

let idea = document.getElementById("idea");
let loaded = 0;
idea.innerHTML = loaded + "/" + required.length + " resurser laddade."

let res = {}

function loadFile(url) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        urlSplit = url.split(".")
        res[urlSplit[0]] = JSON.parse(xhr.responseText)
        loaded += 1;
        idea.innerHTML = loaded + "/" + required.length + " resurser laddade."
        console.log(`Laddade ${url}`)
    }
    
    xhr.open("GET", url);
    xhr.send();
    console.log(`Requesting ${url}`)

    return true;
}

required.forEach(function (item, index) {
  loadFile(item)
});

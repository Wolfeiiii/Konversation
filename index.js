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
        
        if (loaded === required.length) {
            generateIdea('joke');
        }
    }
    
    xhr.open("GET", url);
    xhr.send();
    console.log(`Requesting ${url}`)

    return true;
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

required.forEach(function (item, index) {
  loadFile(item)
});

function generateIdea(type) {
    if (type === 'joke') {
        idea.innerHTML = getRandomElement(res.jokes);
    } else if (type === 'thing') {
        idea.innerHTML = getRandomElement(res.things);        
    } else if (type === 'conversation') {
        idea.innerHTML = getRandomElement(res.conversations);
    } else {
        idea.innerHTML = getRandomElement(res.restaurants);
    }
}

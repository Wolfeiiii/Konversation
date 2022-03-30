let categories = {"Döda ett barn", "Adoptera ett barn"};
  
document.getElementById("button").addEventListener(
    "click",
    function() {
      let project = categories[Math.floor(Math.random() * categories.length)];
      let link = document.getElementById('content')

      link.innerHTML = project;
    }
  );


window.onload = function onLoad() {
	// Store list of entries by category name
	generate();
}

function generate() {
  let result = pickRandom();
  document.getElementById("content").innerHTML = result;
}

function pickRandom() {
	
	let random_index = Math.floor(Math.random() * categories.length); 
	
	// Avoid duplicates:
	let max_iterations = 5;
	for (let i = 0; i < max_iterations; i ++) {
		var result = categories[random_index];
		if (recently_used.includes(result)) {
			random_index = (random_index + 1) % category.length;
		}
		else {
			recently_used.push(result);
			break;
		}
	}
	return result;
}

function pickRandomFromList(list) {
	let random_index = Math.floor(Math.random() * list.length); 
	return list[random_index];
}

function randomChance(probability) {
	return Math.random() < probability;
}

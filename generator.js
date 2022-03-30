const categories = ["Doda ett barn", "Adoptera ett barn"];
  
document.getElementById("button").addEventListener(
    "click",
    function() {
      let project = categories[Math.floor(Math.random() * categories.length)];
      let link = document.getElementById('content')

      link.innerHTML = project;
    }
  );

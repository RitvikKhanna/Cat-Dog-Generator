function generateCat(){

  // DOM VARIABLES
  var imageDiv = document.getElementById('images')
  var img = document.createElement("IMG")
  img.src = "./lina-angelov-unsplash-cat.jpg"
  imageDiv.appendChild(img)
}

function generateDog(){

  // DOM VARIABLES
  var imageDiv = document.getElementById('images')
  var img = document.createElement("IMG")
  img.src = "./ruby-schmank-unsplash-dog.jpg"
  imageDiv.appendChild(img)
}

function clearScreen(){
  var imageDiv = document.getElementById('images')
  imageDiv.innerHTML = ""
}

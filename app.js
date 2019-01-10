var buttonCalculate = document.querySelector("button");
var izracun = document.getElementById("izracun");
var suma = document.getElementById("suma");

suma.style.display = "none";


buttonCalculate.addEventListener("click", function(){
  konacniIzracun();
});

function konacniIzracun(){
  var racun = document.getElementById("racun").value;
  var kvaliteta = document.getElementById("kvaliteta").value;
  var brojLjudi = document.getElementById("brojLjudi").value;
  
  if(racun === "" || kvaliteta == 0 ){
    alert("Unesi parametre");
  }
  else if(brojLjudi === "" ){
    brojLjudi.value = 1;
  }
  else{
    var punaSuma = (racun * kvaliteta) / brojLjudi;
    punaSuma.toFixed(2);
    izracun.textContent = punaSuma;
    suma.style.display = "block";
  }
}
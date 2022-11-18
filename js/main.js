let param1 = document.querySelector(".about")
let value = prompt("Sonni kriting")

let number1 = value % 3
let number2 = value % 5

if(number1 == 0 && number2 == 0){
    param1.innerHTML = ("3ga ham 5ga ham bo'linadi")
}
else if(number1 == 0){
    param1.innerHTML = ("3ga bo'linadi")
}
else if(number2 == 0){
    param1.innerHTML = ("5ga bo'linadi")
}
else(
    param1.innerHTML = ("3ga ham 5ga ham bo'linmaydi")
)
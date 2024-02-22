let colorArray = ["teal", "black", "gray", "green", "pink", "orangered"]
let colors = document.querySelector(".color")
let clickBtn = document.querySelector(".click-btn")

clickBtn.addEventListener("click", function(){
    let randomColors = getRandomColors()

    document.body.style.backgroundColor = colorArray[randomColors]
    colors.textContent = colorArray[randomColors]

})

function getRandomColors(){
    return Math.floor(Math.random()* colorArray.length)
}
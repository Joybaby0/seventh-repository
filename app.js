let colorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let colors = document.querySelector(".color")
let clickBtn = document.querySelector(".click-btn")

clickBtn.addEventListener("click", function(){
    let randomColors = "#"
    for(let i = 0; i < 6; i++){
        randomColors += colorArray[getRandomColors()]
    }

    document.body.style.backgroundColor = randomColors
    colors.textContent = randomColors
})

function getRandomColors(){
    return Math.floor(Math.random()* colorArray.length)
}
const colors = ["blue", "green", "red", "rgba(133,122,200)", "#f15025"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
    //pegar um numero aleátorio entre 0 - 3
    const randomNumber = getRambomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

})

function getRambomNumber(){
    return Math.floor(Math.random() * colors.length)
}
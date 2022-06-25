const adviceNumber = document.querySelector("h1")
const advice = document.querySelector("p")
const dice = document.querySelector(".dice")

const randomAdvice = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => (adviceNumber.textContent = `advice #${data.slip.id}`, console.log(data), advice.textContent = `"${data.slip.advice}"`));
}
randomAdvice()
dice.addEventListener("click", randomAdvice)
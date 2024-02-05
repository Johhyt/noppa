const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max + min)
}

document.querySelector('button').addEventListener('click',() => {
    const randomized_number = getRandomIntNumberInRange(1,6);
    if (randomized_number === 1) {
        document.getElementById('foo').src="./kuvat/1.png"
    }
    if (randomized_number === 2) {
        document.getElementById('foo').src="./kuvat/2.png"
    }
    if (randomized_number === 3) {
        document.getElementById('foo').src="./kuvat/3.png"
    }
    if (randomized_number === 4) {
        document.getElementById('foo').src="./kuvat/4.png"
    }
    if (randomized_number === 5) {
        document.getElementById('foo').src="./kuvat/5.png"
    }
    if (randomized_number === 6) {
        document.getElementById('foo').src="./kuvat/6.png"
    }

})
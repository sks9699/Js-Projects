const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please enter a valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please enter a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            message = "under weight";
            result.innerHTML = `<span> ${bmi}</span>
      <br/> Your are ${message}`
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            message = "Normal weight"
            result.innerHTML = `<span> ${bmi}</span>
      <br/> Your are ${message}`
        }
        else if (bmi > 24.9) {
            message = "overwight weight"
            result.innerHTML = `<span> ${bmi}</span>
      <br/> Your are ${message}`
        }
    }
})
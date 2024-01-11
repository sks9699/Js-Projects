const button = document.querySelectorAll('.button')
// console.log(button)
const body = document.querySelector('body')
// console.log(body)

button.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)
        const color = e.target.id
        switch (color) {
            case "grey":
                {
                    body.style.background = `${color}`
                }
            case "white":
                {
                    body.style.background = `${color}`
                }
            case "blue":
                {
                    body.style.background = `${color}`
                }
            case "yellow":
                {
                    body.style.background = `${color}`
                }
            case "pink":
                {
                    body.style.background = `${color}`
                }
            case "default" :{
                body.style.background = `${color}`
            }
        }
    })
})

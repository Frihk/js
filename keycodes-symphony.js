export const compose = () => {
    document.addEventListener('keydown', (event) => {
        if (/^[a-z]$/.test(event.key)) {
            const div = document.createElement('div')
            div.textContent = event.key
            div.classList.add('note')
            div.style.backgroundColor = `hsl(${event.key.charCodeAt(0) * 10 % 360}, 70%, 60%)`
            document.body.appendChild(div)
        }else if (event.key === 'Backspace'){
            document.body.lastElementChild.remove()
        }else if (event.key === 'Escape') {
            document.body.innerHTML = ''
        }
    })
}
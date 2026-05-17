let trapped = false

export const createCircle = () => {
    document.addEventListener('click', (event) => {
        const div = document.createElement('div')
        div.classList.add('circle')
        div.style.background = 'white'
        div.style.position = 'fixed'
        div.style.left = event.clientX + 'px'
        div.style.top = event.clientY + 'px'
        document.body.appendChild(div) 
        trapped = false 
    })
}

export const moveCircle = () => {
    document.addEventListener('mousemove', (event) => {
        if (trapped) return
        const circle = document.body.lastElementChild
        circle.style.left = (event.clientX - 12.5)+ 'px'
        circle.style.top = (event.clientY - 12.5) + 'px'
    })
}

export const setBox = () => {
    const box = document.createElement('div')
    box.classList.add('box')
    document.body.appendChild(box)
    document.addEventListener('mousemove', (event) => {
         if (trapped) return  // if already trapped, do nothing

        const circle = document.body.lastElementChild
        const circleRect = circle.getBoundingClientRect()
        const boxRect = box.getBoundingClientRect()

        if (
            circleRect.top > boxRect.top &&
            circleRect.left > boxRect.left &&
            circleRect.bottom < boxRect.bottom &&
            circleRect.right < boxRect.right
        ) {
            circle.style.background = 'var(--purple)'
            trapped = true
        }
    })
}
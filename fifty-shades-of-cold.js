import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
    let style = document.createElement('style')
    for (let i = 0; i < colors.length; i++) {
        const col = `.${colors[i]} { background: ${colors[i]}; }`
        style.textContent += col
    }
    document.head.appendChild(style)
}

export const generateColdShades = () => {
    colors.forEach(color => {
        if (color.includes("aqua") || color.includes("blue") || color.includes("turquoise") || color.includes("green") || color.includes("cyan") || color.includes("navy") || color.includes("purple")) {
            const div = document.createElement('div')
            div.classList.add(color)
            div.textContent = color
            document.body.appendChild(div)
        }
    });
}

export const choseShade = (arg) => {
    const divs = Array.from(document.querySelectorAll('div'))
    divs.forEach(div => {
        div.classList.replace(div.textContent, arg)
    })
}
import { styles } from './pimp-my-style.data.js'

let index = 0 ;
let unPimp = false;

export const pimp = () => {
    if (!unPimp) {
        const button = document.querySelector('.button')
        button.classList.add(styles[index])
        index++
        if (index === styles.length) {
            unPimp = true
              button.classList.toggle('unpimp')
        }
    }else {
        const button = document.querySelector('.button')
        index--
        button.classList.remove(styles[index])
        if (index === 0) {
            unPimp = false
            button.classList.toggle('unpimp')
        }
    }
}

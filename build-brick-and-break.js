let count = 1; 
export const build = (number) =>{ 
    const timer = setInterval ( () =>{ 
        const brick = document.createElement('div')
        brick.setAttribute('id', `brick-${count}`)
        if (count % 3 === 2) {
            brick.setAttribute('data-foundation', `true`)
        }
        if (count === number){
            clearInterval(timer)
        } 
        document.body.appendChild(brick)
        count++
    }, 100) 
}

export const repair = (...ids) => {
    ids.forEach(id => {
        const check = document.getElementById(id);
        if (check.getAttribute('data-foundation')=== 'true'){
            check.setAttribute('data-repaired', 'in progress')
        }else{
            check.setAttribute('data-repaired', 'true')
        }
    })
}

export const destroy = () => {
    const delEl = document.getElementById(`brick-${count-1}`)
    delEl.remove()
    count--
}
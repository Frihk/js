let count = 1; 
const build = (number) =>{ 
    const timer = setInterval ( () =>{ 
        const brick = document.createElement('div')
        brick.setAttribute('id', `brick-${count}`)
        if (count % 3 === 2) {
            brick.setAttribute('foundation', `true`)
        }
        if (count === number){
            clearInterval(timer)
        } 
        document.body.appendChild(brick)
        count++
    }, 100) 
}

const repair = (...ids) => {
    ids.forEach(id => {
        const check = document.getElementById(id);
        if (check.getAttribute('foundation')=== 'true'){
            check.setAttribute('repaired', 'in progress')
        }else{
            check.setAttribute('repaired', 'true')
        }
    })
}

const destroy = () => {
    const delEl = document.getElementById(`brick-${count-1}`)
    delEl.remove()
    count--
}
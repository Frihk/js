export const generateLetters = () =>{
    for (let i = 1; i <= 120; i++){
        const div = document.createElement('div')
        const letter = String.fromCharCode(Math.floor((Math.random()*26)+65));
        div.textContent = letter
        div.style.fontSize = `${(i - 1) + 11}px`
        if (i <= 40){
            div.style.fontWeight ='300'
        }else if (i <= 80){
            div.style.fontWeight ='400'   
        }else{
            div.style.fontWeight ='600'
        }
        document.body.appendChild(div)
    }
}
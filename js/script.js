addEventListener('click', (e) =>{
    e.preventDefault()
})

const cores = ['#000080','#FF00FF','#B22222','#00FF00','#B0E0E6','#B0E091','#B90EE6']

function pegarNumeroAleatorio(){
    return Math.floor(Math.random() * cores.length)
}

let texto = document.getElementById('texto')
texto.innerHTML += 'Background Color: '

let button = document.getElementById('btn')
let cor = document.getElementById('cor')

button.addEventListener('click', () =>{
    const numeroAleatorio = pegarNumeroAleatorio()
    
    document.body.style.backgroundColor = cores[numeroAleatorio]
    cor.textContent = cores[numeroAleatorio]
})



let hexaCor = ['#000080','#FF00FF','#B22222','#00FF00','#B0E0E6']
let simplesCor = ['red','blue','green','yellow','purple']












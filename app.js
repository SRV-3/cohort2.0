// document.body.addEventListener('mousemove',(dets)=>{
//     document.documentElement.style.setProperty("--x", dets.x+'px')
//     document.documentElement.style.setProperty("--y", dets.y+'px')
// })


const h1 = document.querySelector('h1')
const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = h1.innerText
let iteration = 0

h1.addEventListener('mouseenter',()=>{
    
    setInterval(()=>{
        const str = text.split('').map((chr, idx)=>{
            if (idx < iteration){
                return chr
            }
        return char.split('')[Math.floor(Math.random()*53)]
        }).join('')
        h1.innerText = str

        iteration += 0.2
        
    },30)
        
        

    
})


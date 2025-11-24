const notes = [
  // Octave 1
  { note: "C1", type: "white", sound: 28, key:"a" },
  { note: "C#1", type: "black", position: 1, sound: 29, key:"q" },
  { note: "D1", type: "white", sound: 30, key:"s" },
  { note: "D#1", type: "black", position: 2, sound: 31, key:"w" },
  { note: "E1", type: "white", sound: 32, key:"d" },
  { note: "F1", type: "white", sound: 33, key:"f" },
  { note: "F#1", type: "black", position: 4, sound: 34 , key:"e"},
  { note: "G1", type: "white", sound: 35, key:"g" },
  { note: "G#1", type: "black", position: 5, sound: 36, key:"r" },
  { note: "A1", type: "white", sound: 37, key:"h" },
  { note: "A#1", type: "black", position: 6, sound: 38, key:"t" },
  { note: "B1", type: "white", sound: 39, key:"j" },

  // Octave 2
  { note: "C2", type: "white", sound: 40, key:"k" },
  { note: "C#2", type: "black", position: 8, sound: 41, key:"y" },
  { note: "D2", type: "white", sound: 42, key:"l" },
  { note: "D#2", type: "black", position: 9, sound: 43, key:"u" },
  { note: "E2", type: "white", sound: 44, key:";" },
  { note: "F2", type: "white", sound: 45, key:"'" },
  { note: "F#2", type: "black", position: 11, sound: 46, key:"i" },
  { note: "G2", type: "white", sound: 47, key:"v" },
  { note: "G#2", type: "black", position: 12, sound: 48, key:"o" },
  { note: "A2", type: "white", sound: 49, key:"b" },
  { note: "A#2", type: "black", position: 13, sound: 50, key:"p" },
  { note: "B2", type: "white", sound: 51, key:"n" }
];


let layout = "";

notes.forEach(e => {
  layout += `
    <div class="keys ${e.type}" data-pos="${e.position || ''}" data-sound="${e.sound}" data-key="${e.key}" >
        <div class="key btn" ">
            <p>${e.note}</p>
        </div>
    </div>
  `
  
  
});


document.querySelector(".keyboard").innerHTML = layout;
let white = document.querySelectorAll('.white')
let black = document.querySelectorAll('.black')
let key = document.querySelectorAll('.keys')

let flag = 0

let sound = {}
for(i=28; i<=63; i++){
  sound[i] = new Audio(`./sound/${i}.mp3`)
}

key.forEach((key)=>{
  key.addEventListener('click', () => {
        let sound = key.dataset.sound; 
        let aud = new Audio(`./sound/${sound}.mp3`)
        aud.play()
          
    });
})

black.forEach((key) => {
    let pos = key.dataset.pos;
    key.style.left = (80 * pos - 25) + "px"; 

    key.addEventListener("click",()=>{
    key.style.top = '10px'
    setTimeout(()=>{
      key.style.top = '0'
    },200)
  })

});

white.forEach((key)=>{
  
  key.addEventListener("click",()=>{
    key.style.top = '10px'
    key.style.backgroundColor = 'rgb(219, 218, 218)'
    setTimeout(()=>{
      key.style.top = '0'
      key.style.backgroundColor = 'white'
    },200)
  })
})



document.addEventListener('keydown',(e)=>{
  let key = document.querySelector(`.keys[data-key="${e.key}"`)
  if(key){
    key.style.top = '10px'
    if(key.classList.contains('white')){
      key.style.backgroundColor = 'rgb(219, 218, 218)'
    }
    setTimeout(()=>{
      key.style.top = '0'
        if(key.classList.contains('white')){
        key.style.backgroundColor = 'white'
      }
    },200)
    let sound = key.dataset.sound; 
    let aud = new Audio(`./sound/${sound}.mp3`)
    aud.play()
  }
})
// let btn = document.querySelector('button')
// let box = document.querySelector('.box')
// let code = document.querySelector('h1')

// btn.addEventListener('click', function(){
//     let c1 = Math.floor(Math.random()*256)
//     let c2 = Math.floor(Math.random()*256)
//     let c3 = Math.floor(Math.random()*256)
    
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//     code.innerHTML = `RGB(${c1},${c2},${c3})`
// })


// let arr = [
//     {
//         team: 'CSK',
//         primary: 'yellow',
//         secondary: 'blue',
//         img:'https://m.media-amazon.com/images/I/91W6DIi-xXL.jpg'
//     },
//     {
//         team: 'RCB',
//         primary: 'red',
//         secondary: 'black',
//         img: 'https://i.pinimg.com/736x/e1/2d/08/e12d08ae838347bd91a868107ab8aada.jpg'
//     },
//     {
//         team: 'MI',
//         primary: 'blue',
//         secondary: 'gold',
//         img: 'https://i.pinimg.com/736x/62/b2/b7/62b2b753815ca8cbd5e33ebf9b9c3bd7.jpg'
//     },
//     {
//         team: 'KKR',
//         primary: 'purple',
//         secondary: 'gold',
//         img:'https://i.pinimg.com/1200x/3b/cd/22/3bcd22b7488cd3643e5b7e62e3f53ba2.jpg'
//     },
//     {
//         team: 'SRH',
//         primary: 'orange',
//         secondary: 'black',
//         img:'https://i.pinimg.com/736x/6f/81/54/6f8154b795e5a210e7fde7a5ea3378e5.jpg'
//     },
//     {
//         team: 'PBKS',
//         primary: 'crimson',
//         secondary: 'silver',
//         img:'https://i.pinimg.com/736x/61/82/52/6182527fead22f739962216500e37f34.jpg'
//     },
// ];

// let btn = document.querySelector('button')
// let h1 = document.querySelector('h1')
// let main = document.querySelector('main')
// let img = document.querySelector('.bgImg')

// btn.addEventListener('click',function(){
//     let a = Math.floor(Math.random()*arr.length)
//     h1.innerHTML=arr[a].team;
//     img.src = arr[a].img;
//     // h1.style.backgroundColor = arr[a].primary;
//     // main.style.backgroundColor = arr[a].secondary;
// })


//random quotes

// let main = document.querySelector('main');
// let btn = document.querySelector('button');

// let arr = ['Karne ka to karne ka','kaam kar bhaiii...!', 'Mai best hunn', 'JavaScript ko chaat jyege'];

// btn.addEventListener('click',()=>{
//     let h1 = document.createElement('h1');
    
//     let a = Math.floor(Math.random()*arr.length);
//     let x = Math.random()*80;
//     let y = Math.random()*80;
//     let rot = Math.random()*361;
//     let scale = Math.random()*3;

//     h1.innerHTML = arr[a];

//     h1.style.position = 'absolute';
//     h1.style.top = x+'%';
//     h1.style.left = y+'%';
//     h1.style.rotate = rot+'deg';
//     h1.style.scale = scale;

//     main.appendChild(h1);
// })

//DOWNLOAD card

// let btn = document.querySelector('button');
// let grow = 0;
// let inner = document.querySelector('.inner');
// let h2 = document.querySelector('h2');

// btn.addEventListener('click', ()=>{
//     btn.style.pointerEvents = 'none'
//     let num = Math.floor(Math.random()*50+50);
//     let int = setInterval(()=>{
//         grow++
//         inner.style.width = grow+'%';
//         h2.innerHTML = grow+'%';
        
//     },num)

//     setTimeout(()=>{
//         clearInterval(int)
//         btn.innerHTML='Downloaded'
//         btn.style.opacity=0.5
//         inner.style.backgroundColor = 'limegreen';
//     },num*100)
// })


//like button

// let img = document.querySelector('img');
// let love = document.querySelector('.love');

// img.addEventListener('dblclick', ()=>{
//     love.style.opacity = '1'
//     love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'
    
//     setTimeout(() => {
//         love.style.transform = 'translate(-50%, -300%) scale(0) rotate(60deg)'
//     }, 800);
//     setTimeout(() => {
//         love.style.opacity = '0'
//     }, 1000);
//     setTimeout(() => {
//         love.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)'
//     }, 1200);
// })

const users = [
  {
    fullName: "Aarav Mehta",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    profession: "Frontend Developer",
    description: "Aarav is a React-focused frontend engineer who loves building fast and accessible web interfaces.",
    tags: ["React", "JavaScript", "UI/UX", "TailwindCSS"]
  },
  {
    fullName: "Ritika Sharma",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    description: "Ritika creates meaningful digital experiences and specializes in mobile-first design.",
    tags: ["Figma", "Wireframes", "Prototyping", "User Research"]
  },
  {
    fullName: "Sourav Singh",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    profession: "Backend Engineer",
    description: "Sourav works with Node.js and scalable database systems, focusing on performance and security.",
    tags: ["Node.js", "Express", "MySQL", "API Development"]
  },
  {
    fullName: "Simran Kaur",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    profession: "Content Creator",
    description: "Simran is a storyteller who crafts engaging content for brands across video and social platforms.",
    tags: ["Video Editing", "Content Strategy", "Branding"]
  },
  {
    fullName: "Dev Malhotra",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "AI/ML Engineer",
    description: "Dev builds machine learning solutions and experiments with LLM-powered applications.",
    tags: ["Python", "TensorFlow", "Machine Learning", "LLM"]
  }
];

let card = ''
users.forEach((e)=>{
    card = card + `<div class="card">
            <img src="${e.image}">
            <h3>${e.fullName}</h3>
            <h4>${e.profession}</h4>
            <p>${e.description}</p>
        </div>`
})

let main = document.querySelector('main')

main.innerHTML = card;
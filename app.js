let elem = document.querySelectorAll('.elem')
let img = document.querySelector('.elem img')


elem.forEach((e)=>{
  e.addEventListener('mouseenter',()=>{
    e.children[1].style.opacity = '1'
  })
  e.addEventListener('mouseleave',()=>{
    e.children[1].style.opacity = '0'
  })

  e.addEventListener('mousemove',(dets)=>{
  e.children[1].style.left = dets.x+"px"
  e.children[1].style.top = dets.y+"px"
})
  
})
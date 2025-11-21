let h5 = document.querySelector('h5');
let add = document.querySelector('.add');
let flag = 0;
add.addEventListener('click',()=>{
  if(flag==0){
    h5.innerText = 'Friends'
    h5.style.color = 'green'
    add.innerHTML = 'Remove'
    add.style.backgroundColor = 'red'
    flag = 1
  }else{
    h5.innerText = 'Strangers'
    h5.style.color = 'red'
    add.innerHTML = 'Add Friend'
    add.style.backgroundColor = 'royalblue'
    flag = 0
  }
})

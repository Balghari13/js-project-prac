
function najam(){
    console.log('Hello najam')
}

function changeDom(){
    document.getElementById('tag1')
    .innerHTML= 'Hello Balghari'
}

setTimeout(najam, 1000)


// const start = setTimeout(changeDom, 3000)
// const starts = document.getElementById('st').addEventListener('click',()=>{
//      setTimeout(changeDom, 3000)
     
// })

// document.getElementById('sp').addEventListener('click',()=>{
//     clearInterval(start)
//     console.log(start)
// })

// function changeInterval(){
//     console.log(`najam : ${Date.now()}`)
// }

let interval;
 const start = ()=>{
    interval = setInterval(()=>{
        console.log('najam', Date.now())
        document.querySelector('h2').innerHTML = `${Date.now()}`
    },10)

}
const end =() =>{
    clearInterval(interval)
}

document.getElementById('st').addEventListener('click', start)
document.getElementById('sp').addEventListener('click', end)


 function chnageCl(){
    const hex = "0123456789abcdef";
    let color = '#';
    for(let i=0; i<6; i++){
       color += hex[Math.floor(Math.random()*16)];
       //console.log(color)
    }
    return color
}


console.log(chnageCl())
let interval2;
const chng = () =>{
    if(!interval2){
        interval2 = setInterval(()=>{
            document.body.style.background = chnageCl()
           },1000)
    }
  
}
const stp = ()=>{
    clearInterval(interval2)
    interval2 = null
}
document.querySelector('#change').addEventListener('click',chng)

document.querySelector('#stopChng').addEventListener('click',stp)


const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
        insert.innerHTML = `
        <table style=' border:1px solid white;'>
  <tr>
    <th >Key</th>
    <th>Key code</th>
    <th>Key Name</th>
  </tr>
  <tr>
    <td>${e.key === ' '? 'space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
        `
})
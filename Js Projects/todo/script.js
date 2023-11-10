const title = document.getElementById('title')
const description = document.getElementById('description')
const btnSubmit = document.getElementById('submit')
const container = document.querySelector('.container')

const task = []
function addTasks(){
    task.forEach((value) => {
        
       const div = document.createElement('div')
       div.setAttribute('class', 'task')
       
       const innerDiv = document.createElement('div')
      
       div.append(innerDiv)

       const p = document.createElement('p')
       p.innerText= value.name
       innerDiv.append(p)

       const span = document.createElement('span')
       span.innerHTML = value.decs
       innerDiv.append(span)
       
    const btn = document.createElement('button')
    btn.setAttribute('class', 'delbtn')
    btn.innerText = '-'
    div.append(btn)

       container.append(div)
    });
}
function removeTask(){
    task.forEach(()=>{
        const div = document.querySelector('.task')
        div.remove()
    })
}

btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault()
    removeTask()
    task.push({
        name: title.value,
        decs: description.value
    })
    addTasks()
   
    
})

document.getElementById('submit').addEventListener('click', task.pop())
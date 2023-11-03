
const amount = document.getElementById('amount')
const tip = document.getElementById('tip')
const btn = document.getElementById('calculate')


function calculateTip(){
    const amountValue = amount.value
    const tipValue = tip.value
    const total = amountValue * (1+tipValue/100)
    document.getElementById('totalAmount')
    .innerHTML = `Rs: ${total.toFixed(2)}`
}

btn.addEventListener('click',calculateTip)


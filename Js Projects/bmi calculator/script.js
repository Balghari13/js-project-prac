const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const result = document.querySelector('#result')

    if(height=='' || height<0 || isNaN(height)){
        result.innerHTML = `<p>Please Enter a valid Number ${height}</p>`
    }else if(weight==''|| weight<0 || isNaN(weight)){
        result.innerHTML = `<p>Please enter a valid weight ${weight}</p>`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML = `<p>Your BMI is ${bmi} under weight</p>`
        }else if(bmi<24.9){
            result.innerHTML = `<p>Your BMI is ${bmi}, normal weight</p>`
        }else{
            result.innerHTML = `<p>Your BMI is ${bmi}, over weight </p>`
        }
    }


})
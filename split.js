function split(){
    let amount = document.getElementById('amt')
    let people = document.getElementById('people')
    let btn = document.getElementById('btn')
    
    let bill = (amount.value / people.value).toFixed(2)
    let result = '₹'+bill + ' per person'
    document.getElementById('result').innerText = result
    document.getElementById('result').style.textDecoration = 'underline'
    btn.style.display =  'none'
}
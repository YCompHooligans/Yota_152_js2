function appendNumber(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function perhitungan(){
    let action = document.getElementById('display').value;
    let hasil = eval(action);
    document.getElementById('display').value = hasil;
}
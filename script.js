const sumar = ()=>{
    const num1 = document.getElementById("num1").value;
    const num2 =  document.getElementById("num2").value;
    const resultado = document.getElementById("resultado").innerHTML = parseFloat(num1) + parseFloat(num2);
}

const restar = ()=>{
    const num1 = document.getElementById("num1").value;
    const num2 =  document.getElementById("num2").value;
    const resultado = document.getElementById("resultado").innerHTML = parseFloat(num1) - parseFloat(num2);
}

const dividir = ()=>{
    const num1 = document.getElementById("num1").value;
    const num2 =  document.getElementById("num2").value;
    const resultado = document.getElementById("resultado").innerHTML = parseFloat(num1) / parseFloat(num2);
}

const multiplicar = ()=>{
    const num1 = document.getElementById("num1").value;
    const num2 =  document.getElementById("num2").value;
    const resultado = document.getElementById("resultado").innerHTML = parseFloat(num1) * parseFloat(num2);
}

const resetear = ()=>{
    const input1 = document.getElementById("num1").value = ``;
    const input2 =  document.getElementById("num2").value = ``;
    const resultado = document.getElementById("resultado").innerHTML = ``;
}
// Функция для выполнения арифметической операции
function calculate(operation) {
    // Получаем значения из полей ввода
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let result;

    // Выполняем соответствующую операцию
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Ошибка! Деление на ноль.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Неизвестная операция";
    }

    // Выводим результат
    document.getElementById("result").innerText = `Результат: ${result}`;
}

// Функция для очистки полей ввода и результата
function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "";
}
